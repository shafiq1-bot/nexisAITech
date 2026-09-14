# Google Cloud Run Deployment & GitHub Sync Guide (nexisai.us)

This repository includes production-ready Docker and YAML configuration files to deploy **Nexis AI** seamlessly to **Google Cloud Run**.

---

## 📁 Created Deployment Files

1. **`Dockerfile`**: Multi-stage Node 22 Alpine build that compiles both the Vite frontend static bundle and the `dist/server.cjs` Express backend.
2. **`.dockerignore`**: Optimizes build context and excludes unnecessary local assets.
3. **`cloudbuild.yaml`**: Google Cloud Build pipeline configuration to compile, tag, and deploy automatically.
4. **`service.yaml`**: Google Cloud Run service definition (Knative spec) for autoscaling, CPU/memory resource limits, and ingress settings.
5. **`.github/workflows/deploy-gcp.yaml`**: GitHub Actions continuous deployment pipeline for automatic sync on push to `main` or `master`.

---

## 🚀 Option 1: Direct Deployment using Google Cloud CLI (`gcloud`)

Run these commands in your local shell or Cloud Shell:

```bash
# 1. Set your Google Cloud Project ID
gcloud config set project YOUR_GCP_PROJECT_ID

# 2. Enable Cloud Run & Cloud Build APIs
gcloud services enable run.googleapis.com cloudbuild.googleapis.com

# 3. Submit build and deploy directly using Cloud Build
gcloud builds submit --config cloudbuild.yaml
```

---

## 🔁 Option 2: Automatic GitHub Deployment (GitHub Actions)

To automatically deploy every time you push to GitHub:

### 1. Handling Organization Policy: `constraints/iam.disableServiceAccountKeyCreation`

If you saw the error:
`ERROR: (gcloud.iam.service-accounts.keys.create) FAILED_PRECONDITION: Key creation is not allowed on this service account.`
`type: constraints/iam.disableServiceAccountKeyCreation`

This means Google Cloud Organization Policy has disabled downloading long-lived JSON service account keys (a standard Google Cloud security best practice).

You have two simple ways to proceed:

---

#### Option A (Fastest): Temporarily or Permanently Disable the Key Creation Constraint on Your Project

Run the following in Cloud Shell to disable that policy constraint for your project `nexisaius`:

```bash
# 1. Disable the constraint that blocks service account key creation
gcloud resource-manager org-policies disable-enforce \
  constraints/iam.disableServiceAccountKeyCreation \
  --project=nexisaius

# 2. Now run key creation again:
gcloud iam service-accounts keys create sa-key.json \
  --iam-account=nexis-deployer@nexisaius.iam.gserviceaccount.com

# 3. Print the key:
cat sa-key.json
```
*(Copy the JSON output and paste it into GitHub Secret `GCP_SA_KEY`)*.

---

#### Option B (Google Recommended): Workload Identity Federation (No JSON Key Needed!)

Workload Identity Federation allows GitHub Actions to securely authenticate to Google Cloud **without any downloadable JSON keys**, which completely bypasses the `disableServiceAccountKeyCreation` restriction!

Run these commands in Cloud Shell:

```bash
export PROJECT_ID="nexisaius"
export GITHUB_REPO="your-github-username/your-repo-name" # e.g. shafiqs1/nexisai

# 1. Enable required APIs
gcloud services enable iamcredentials.googleapis.com cloudresourcemanager.googleapis.com run.googleapis.com containerregistry.googleapis.com --project=${PROJECT_ID}

# 2. Create a Workload Identity Pool
gcloud iam workload-identity-pools create "github-pool" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --display-name="GitHub Actions Pool"

# 3. Get the Workload Identity Pool full resource name
export WORKLOAD_IDENTITY_POOL_ID=$(gcloud iam workload-identity-pools describe "github-pool" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --format="value(name)")

# 4. Create a Workload Identity Provider for GitHub
gcloud iam workload-identity-pools providers create-oidc "github-provider" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --workload-identity-pool="github-pool" \
  --display-name="GitHub Provider" \
  --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
  --issuer-uri="https://token.actions.githubusercontent.com"

# 5. Allow GitHub Actions from your repo to impersonate the service account
gcloud iam service-accounts add-iam-policy-binding "nexis-deployer@${PROJECT_ID}.iam.gserviceaccount.com" \
  --project="${PROJECT_ID}" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/${WORKLOAD_IDENTITY_POOL_ID}/attribute.repository/${GITHUB_REPO}"

# 6. Print the values for your GitHub secrets:
echo "=========================================="
echo "Add these 3 secrets to your GitHub repository:"
echo "1. GCP_PROJECT_ID: ${PROJECT_ID}"
echo "2. WORKLOAD_IDENTITY_PROVIDER: $(gcloud iam workload-identity-pools providers describe 'github-provider' --project="${PROJECT_ID}" --location="global" --workload-identity-pool="github-pool" --format="value(name)")"
echo "3. GCP_SERVICE_ACCOUNT: nexis-deployer@${PROJECT_ID}.iam.gserviceaccount.com"
echo "=========================================="
```

---

### 2. Standard Service Account Setup (If using Option A)

```bash
# 1. Set your Project ID variable
export GCP_PROJECT_ID="your-project-id"  # Replace with your actual GCP Project ID

# 2. Create the deployer service account
gcloud iam service-accounts create nexis-deployer \
  --display-name="Nexis AI GitHub Actions Deployer"

# 3. Grant necessary roles to the service account
gcloud projects add-iam-policy-binding ${GCP_PROJECT_ID} \
  --member="serviceAccount:nexis-deployer@${GCP_PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding ${GCP_PROJECT_ID} \
  --member="serviceAccount:nexis-deployer@${GCP_PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/storage.admin"

gcloud projects add-iam-policy-binding ${GCP_PROJECT_ID} \
  --member="serviceAccount:nexis-deployer@${GCP_PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"

# 4. Generate the private JSON key file
gcloud iam service-accounts keys create sa-key.json \
  --iam-account=nexis-deployer@${GCP_PROJECT_ID}.iam.gserviceaccount.com

# 5. Output the key to copy
cat sa-key.json
```

### 2. Configure GitHub Repository Secrets

1. In your GitHub repository, open **Settings** (tab at the top).
2. In the left sidebar, click **Secrets and variables** > **Actions**.
3. Under **Repository secrets**, click **New repository secret**:
   - **Secret 1**:
     - Name: `GCP_PROJECT_ID`
     - Secret: Your Google Cloud Project ID (e.g. `nexis-ai-451203`)
   - **Secret 2**:
     - Name: `GCP_SA_KEY`
     - Secret: Paste the entire content of `sa-key.json` (starting with `{` and ending with `}`)
4. Click **Add secret**.

### 3. Re-run or Push Workflow

In GitHub, go to the **Actions** tab > select **Deploy Nexis AI to Google Cloud Run** > click **Re-run all jobs** (or push a commit to `main`). The workflow will now authenticate cleanly and deploy to Cloud Run!

---

## 🛠️ Troubleshooting Common CI/CD Errors

### Error: `google-github-actions/auth failed with: the GitHub Action workflow must specify exactly one of "workload_identity_provider" or "credentials_json"`
- **Cause**: The GitHub secret `GCP_SA_KEY` is missing, empty, or has a typo in its name.
- **Resolution**: Ensure you have added `GCP_SA_KEY` under **GitHub Repo > Settings > Secrets and variables > Actions > Repository secrets**.

### Warning: `Node 20 is being deprecated. This workflow is running with Node 24 by default.`
- **Resolution**: Handled automatically in `.github/workflows/deploy-gcp.yaml` via `ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION: 'true'`.

---

## 🌐 Custom Domain Mapping for `nexisai.us`

Once your service is live on Cloud Run:

1. In Google Cloud Console, navigate to **Cloud Run** > **Manage Custom Domains**.
2. Click **Add Mapping** and select service `nexisai-service`.
3. Choose domain `nexisai.us` (or `www.nexisai.us`).
4. Copy the generated **DNS CNAME and A Records** provided by Google Cloud.
5. Add these records in your DNS Provider (e.g. Namecheap, Cloudflare, Google Domains/SquareSpace).
6. Google Cloud will automatically provision a free Managed SSL/TLS Certificate for `nexisai.us`.
