import os, re

# 1. Update src/App.tsx
with open('src/App.tsx', 'r') as f:
    app = f.read()

app = re.sub(r'\$6,500\s*</div>\s*<div[^>]*>\[TO CONFIRM[^\]]*\]</div>', '$6,500\n                </div>', app)
app = app.replace('[TO CONFIRM — Shafiq to confirm price before launch]', '')
app = app.replace('Maximum 2 diagnostics per month [TO CONFIRM].', 'Maximum 2 diagnostics per month.')
app = app.replace('[TO CONFIRM]', '')
app = app.replace(
    "Presented AI governance frameworks on ICMA's online events [TO CONFIRM — add ICMA event link when supplied].",
    "Presented AI governance frameworks on ICMA's online events."
)

with open('src/App.tsx', 'w') as f:
    f.write(app)
print("Updated src/App.tsx")

# 2. Update public/llms.txt
with open('public/llms.txt', 'r') as f:
    llms = f.read()

llms = llms.replace(' [TO CONFIRM — Shafiq to confirm price before launch]', '')
llms = llms.replace(' [TO CONFIRM]', '')
with open('public/llms.txt', 'w') as f:
    f.write(llms)
print("Updated public/llms.txt")

# 3. Scrub Ascension / St. Agnes across ALL files in src/
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.json')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', errors='ignore') as f:
                content = f.read()
            
            orig = content
            # Remove Ascension / Saint Agnes phrases
            content = re.sub(r'Ascension\s*/\s*Saint\s+Agnes\s+Healthcare', 'regional health systems', content, flags=re.IGNORECASE)
            content = re.sub(r'Ascension\s*/\s*St\.?\s*Agnes\s*(Healthcare)?', 'regional health systems', content, flags=re.IGNORECASE)
            content = re.sub(r'Ascension\s*&\s*St\.?\s*Agnes', 'regional health systems', content, flags=re.IGNORECASE)
            content = re.sub(r'Ascension', 'regional healthcare systems', content, flags=re.IGNORECASE)
            content = re.sub(r'Saint\s+Agnes', 'community health systems', content, flags=re.IGNORECASE)
            content = re.sub(r'St\.?\s+Agnes', 'community health systems', content, flags=re.IGNORECASE)
            # Remove refund promise references
            content = re.sub(r'or\s+refunded[^\.\;]*', '', content, flags=re.IGNORECASE)
            content = re.sub(r'or\s+refund[^\.\;]*', '', content, flags=re.IGNORECASE)

            if content != orig:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Scrubbed Ascension/Agnes/Refund from {filepath}")

# 4. Also check index.html
with open('index.html', 'r') as f:
    idx = f.read()

orig_idx = idx
idx = re.sub(r'Ascension\s*/\s*Saint\s+Agnes\s+Healthcare', 'regional health systems', idx, flags=re.IGNORECASE)
idx = re.sub(r'Ascension\s*/\s*St\.?\s*Agnes', 'regional health systems', idx, flags=re.IGNORECASE)
idx = re.sub(r'Ascension', 'regional healthcare', idx, flags=re.IGNORECASE)
idx = re.sub(r'Saint\s+Agnes', 'community health systems', idx, flags=re.IGNORECASE)
idx = re.sub(r'St\.?\s+Agnes', 'community health systems', idx, flags=re.IGNORECASE)
idx = re.sub(r'or\s+refunded', '', idx, flags=re.IGNORECASE)
idx = re.sub(r'\[TO CONFIRM[^\]]*\]', '', idx)

if idx != orig_idx:
    with open('index.html', 'w') as f:
        f.write(idx)
    print("Scrubbed Ascension/Agnes/Refund from index.html")

print("All scrub operations complete.")
