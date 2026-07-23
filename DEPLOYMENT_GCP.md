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

1. **In Google Cloud Console**:
   - Go to **IAM & Admin** > **Service Accounts**
   - Create a Service Account with roles: `Cloud Run Admin`, `Storage Admin`, `Service Account User`
   - Create a JSON Key and copy its content.

2. **In GitHub Repository Settings**:
   - Go to **Settings** > **Secrets and variables** > **Actions**
   - Add Secret `GCP_PROJECT_ID`: Your Google Cloud Project ID
   - Add Secret `GCP_SA_KEY`: Paste the full Service Account JSON Key

3. Push your repository to GitHub. The workflow `.github/workflows/deploy-gcp.yaml` will trigger and deploy automatically!

---

## 🌐 Custom Domain Mapping for `nexisai.us`

Once your service is live on Cloud Run:

1. In Google Cloud Console, navigate to **Cloud Run** > **Manage Custom Domains**.
2. Click **Add Mapping** and select service `nexisai-service`.
3. Choose domain `nexisai.us` (or `www.nexisai.us`).
4. Copy the generated **DNS CNAME and A Records** provided by Google Cloud.
5. Add these records in your DNS Provider (e.g. Namecheap, Cloudflare, Google Domains/SquareSpace).
6. Google Cloud will automatically provision a free Managed SSL/TLS Certificate for `nexisai.us`.
