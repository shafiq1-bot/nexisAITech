import React, { useState } from 'react';
import { 
  X, 
  Code2, 
  Copy, 
  Check, 
  Search, 
  Server, 
  Globe, 
  Database, 
  FileCode2, 
  Bot, 
  ShieldCheck,
  Terminal
} from 'lucide-react';

interface DeploymentSEOGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentSEOGuide: React.FC<DeploymentSEOGuideProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'seo' | 'analytics' | 'crm' | 'docker' | 'hosting'>('seo');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const schemaJsonLd = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nexis AI",
  "url": "https://nexisai.us",
  "logo": "https://nexisai.us/logo.png",
  "description": "Global enterprise technology consulting firm providing AI Transformation, Cybersecurity Modernization, Healthcare Interoperability, and Managed Infrastructure Solutions.",
  "telephone": "(443) 608-5425",
  "email": "info@nexisai.us",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "11436 Cronhill Drive",
      "addressLocality": "Owings Mills",
      "addressRegion": "MD",
      "postalCode": "21117",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise Technology Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Transformation Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zero Trust Cybersecurity" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare IT & EHR Interoperability" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Higher Education HPC & IT" } }
    ]
  }
}`;

  const ga4Code = `<!-- Google Tag Manager / GA4 Initialization -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NEXISTECH2026"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-NEXISTECH2026', {
    'anonymize_ip': true,
    'custom_map': {
      'dimension1': 'user_region',
      'dimension2': 'service_interest'
    }
  });
</script>`;

  const crmWebhookSnippet = `// Node.js Express CRM Sync Handler (HubSpot / Salesforce / Dynamics)
app.post('/api/crm-sync', async (req, res) => {
  const { fullName, email, companyName, region, serviceInterest } = req.body;
  
  // HubSpot Contacts API v3
  const hubspotResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.HUBSPOT_ACCESS_TOKEN}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: {
        email,
        firstname: fullName.split(' ')[0],
        company: companyName,
        target_region: region,
        practice_focus: serviceInterest,
        lead_status: 'NEW_ENTERPRISE_INQUIRY'
      }
    })
  });
  
  res.json({ success: true, syncedAt: new Date().toISOString() });
});`;

  const dockerfileSnippet = `# Production Multi-Stage Dockerfile for Cloud Run / AWS ECS
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/server.cjs"]`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl text-slate-100 relative overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-950 p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-950 border border-emerald-800 rounded-lg text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Deployment & Marketing Automation Specs
              </h3>
              <p className="text-xs text-slate-400">
                SEO Schema, GA4 analytics, CRM API webhooks, and Cloud Run Dockerfile instructions.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            id="close-docs-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="bg-slate-900 border-b border-slate-800 p-3 flex items-center gap-2 overflow-x-auto shrink-0">
          {[
            { id: 'seo', label: 'Schema.org JSON-LD SEO', icon: Search },
            { id: 'analytics', label: 'GA4 & GSC Setup', icon: Globe },
            { id: 'crm', label: 'CRM Webhook Sync', icon: Database },
            { id: 'docker', label: 'Dockerfile & Build', icon: Terminal },
            { id: 'hosting', label: 'Cloud Run & Vercel', icon: Server },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950">
          
          {activeTab === 'seo' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Schema.org JSON-LD Structured Data</h4>
                <button
                  onClick={() => copyToClipboard(schemaJsonLd, 'schema')}
                  className="text-xs bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 px-3 py-1 rounded flex items-center gap-1.5"
                >
                  {copiedId === 'schema' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'schema' ? 'Copied' : 'Copy JSON-LD'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-emerald-400 bg-slate-900 p-4 rounded-xl border border-slate-800 overflow-x-auto">
                {schemaJsonLd}
              </pre>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Google Analytics 4 Tracking Code</h4>
                <button
                  onClick={() => copyToClipboard(ga4Code, 'ga4')}
                  className="text-xs bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 px-3 py-1 rounded flex items-center gap-1.5"
                >
                  {copiedId === 'ga4' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'ga4' ? 'Copied' : 'Copy GA4 Snippet'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-cyan-300 bg-slate-900 p-4 rounded-xl border border-slate-800 overflow-x-auto">
                {ga4Code}
              </pre>
            </div>
          )}

          {activeTab === 'crm' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">HubSpot / Salesforce API Integration Handler</h4>
                <button
                  onClick={() => copyToClipboard(crmWebhookSnippet, 'crm')}
                  className="text-xs bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 px-3 py-1 rounded flex items-center gap-1.5"
                >
                  {copiedId === 'crm' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'crm' ? 'Copied' : 'Copy Handler Code'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-purple-300 bg-slate-900 p-4 rounded-xl border border-slate-800 overflow-x-auto">
                {crmWebhookSnippet}
              </pre>
            </div>
          )}

          {activeTab === 'docker' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Production Multi-Stage Dockerfile</h4>
                <button
                  onClick={() => copyToClipboard(dockerfileSnippet, 'docker')}
                  className="text-xs bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 px-3 py-1 rounded flex items-center gap-1.5"
                >
                  {copiedId === 'docker' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'docker' ? 'Copied' : 'Copy Dockerfile'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-amber-300 bg-slate-900 p-4 rounded-xl border border-slate-800 overflow-x-auto">
                {dockerfileSnippet}
              </pre>
            </div>
          )}

          {activeTab === 'hosting' && (
            <div className="space-y-4 text-xs text-slate-300">
              <h4 className="text-sm font-bold text-white">Deployment Options Strategy</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="font-bold text-blue-400 text-sm mb-1">Google Cloud Run (Recommended)</div>
                  <p className="text-slate-400">Run container on Google Cloud Run with autoscaling (0 to 100 instances). Fully compatible with process.env.GEMINI_API_KEY.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="font-bold text-purple-400 text-sm mb-1">Vercel / AWS ECS</div>
                  <p className="text-slate-400">Deploy build output to Vercel or AWS ECS with environment secrets configured in project dashboard.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
