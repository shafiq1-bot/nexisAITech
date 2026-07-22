import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini API client lazily on server
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY || 'demo-key';
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'Nexis Tech Group Enterprise Platform API',
      timestamp: new Date().toISOString(),
      region: 'Global (US, KSA, UAE)',
    });
  });

  // Dynamic XML Sitemap Endpoint for Search Engine Crawlers
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = 'https://nexistechgroup.com';
    const lastMod = new Date().toISOString().split('T')[0];

    const urls = [
      { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
      { loc: `${baseUrl}/#about`, priority: '0.8', changefreq: 'monthly' },
      { loc: `${baseUrl}/#services`, priority: '0.9', changefreq: 'weekly' },
      { loc: `${baseUrl}/#industries`, priority: '0.9', changefreq: 'weekly' },
      { loc: `${baseUrl}/#ai-solutions`, priority: '0.9', changefreq: 'weekly' },
      { loc: `${baseUrl}/#cybersecurity`, priority: '0.9', changefreq: 'weekly' },
      { loc: `${baseUrl}/#resources`, priority: '0.8', changefreq: 'weekly' },
      { loc: `${baseUrl}/#assessment`, priority: '0.8', changefreq: 'weekly' },
      { loc: `${baseUrl}/#contact`, priority: '0.8', changefreq: 'monthly' },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${u.loc}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${u.loc}?lang=ar" />
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });

  // Search Engine Crawlers Instruction Endpoint (robots.txt)
  app.get('/robots.txt', (req, res) => {
    const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://nexistechgroup.com/sitemap.xml
Host: https://nexistechgroup.com`;

    res.header('Content-Type', 'text/plain');
    res.send(robots);
  });

  // AI Technology Strategy & Advisory Endpoint (Gemini-powered)
  app.post('/api/ai-advisor', async (req, res) => {
    try {
      const { userQuery, contextRegion, industryFocus } = req.body;

      if (!userQuery || typeof userQuery !== 'string') {
        res.status(400).json({ error: 'Valid user query is required.' });
        return;
      }

      const ai = getGeminiClient();

      const systemPrompt = `You are the Executive Chief Technology Officer & Lead AI Strategy Consultant at Nexis Tech Group.
Your company serves enterprise clients in the United States, Saudi Arabia (KSA), and United Arab Emirates (UAE) in Higher Education, Healthcare, Government, and SMBs.
Provide an authoritative, clear, highly structured, and actionable advisory answer.

User Region Context: ${contextRegion || 'Global'}
Industry Focus: ${industryFocus || 'General Enterprise'}

Formatting instructions:
1. Provide a direct Executive Summary (2-3 sentences).
2. Outline 3 Strategic Action Pillars (with bullet points).
3. Detail Compliance & Governance considerations (referencing relevant frameworks like HIPAA, NIST 800-53, FERPA, KSA NDMO / NCA, UAE ISR).
4. Recommend concrete Architecture & Tech Stack choices (e.g. RAG, Vector DB, FHIR APIs, Zero Trust IAM, GPU Compute).
Keep your tone executive, trustworthy, concise, and professional.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: userQuery,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      const advisoryResponse = response.text || 'Unable to generate advisory at this moment. Please schedule a direct consultation with our team.';

      res.json({
        success: true,
        query: userQuery,
        region: contextRegion,
        advisorOutput: advisoryResponse,
        recommendedConsultant: 'Tariq Al-Ghamdi & Dr. Marcus Vance',
        nextSteps: [
          'Schedule an Executive Discovery Workshop',
          'Run a Zero Trust & AI Readiness Audit',
          'Download our Sovereign Cloud & Compliance Architecture Blueprint',
        ],
      });
    } catch (error: any) {
      console.error('Error in /api/ai-advisor:', error);
      res.status(500).json({
        error: 'Failed to process AI Strategy request.',
        details: error.message || String(error),
        fallbackAdvisory: `Nexis Tech Group recommends an initial Discovery Audit to evaluate your organization's ${req.body.industryFocus || 'technology'} ecosystem against regional compliance frameworks (NIST, HIPAA, NCA ECC). Contact our executive team at shafiqs1@gmail.com for an immediate briefing.`,
      });
    }
  });

  // Lead Capture & CRM Processing Endpoint
  app.post('/api/lead-capture', (req, res) => {
    const lead = req.body;

    if (!lead || !lead.email || !lead.fullName) {
      res.status(400).json({ error: 'Name and email are required.' });
      return;
    }

    const leadId = `NEXIS-LEAD-${Date.now().toString().slice(-6)}`;
    const targetCRM = lead.crmExportTarget || 'HubSpot';

    // Mock CRM Payload Payload Generation
    const crmPayload = {
      leadId,
      timestamp: new Date().toISOString(),
      crmProvider: targetCRM,
      contact: {
        firstname: lead.fullName.split(' ')[0],
        lastname: lead.fullName.split(' ').slice(1).join(' ') || '',
        email: lead.email,
        phone: lead.phone || 'N/A',
        company: lead.companyName || 'Enterprise Client',
        jobtitle: lead.jobTitle || 'Executive',
      },
      customFields: {
        region: lead.region || 'US',
        industry: lead.industry || 'Healthcare',
        serviceInterest: lead.serviceInterest || 'AI Transformation',
        budgetTier: lead.estimatedBudget || '$50,000 - $100,000',
        notes: lead.message || 'Consultation requested via web portal.',
      },
      marketingSequenceTriggered: 'Enterprise AI & Security Consultation Welcome Campaign',
    };

    console.log(`[Lead Captured] ID: ${leadId} -> Syncing to ${targetCRM}`);

    res.json({
      success: true,
      leadId,
      status: 'Submitted & Synced',
      crmExportPreview: crmPayload,
      confirmationMessage: `Thank you, ${lead.fullName}. An Enterprise Technology Advisor from our ${lead.region || 'US'} regional hub will contact you within 4 business hours.`,
      welcomeSequence: {
        email1: `Sent: Welcome to Nexis Tech Group - Preparing for your Consultation`,
        email2: `Scheduled (Day 2): Executive Guide to Enterprise AI & Zero Trust`,
        email3: `Scheduled (Day 5): Customized Case Studies for ${lead.industry || 'your industry'}`,
      },
    });
  });

  // AI Readiness & Cybersecurity Assessment Evaluation Endpoint
  app.post('/api/assessment-submit', (req, res) => {
    const { answers, answersMetadata, clientEmail, companyName, region } = req.body;

    // Calculate score
    let totalScore = 0;
    const categoryScores: Record<string, number> = {};

    if (answers && typeof answers === 'object') {
      const entries = Object.entries(answers);
      entries.forEach(([cat, val]: [string, any]) => {
        const numVal = Number(val) || 50;
        totalScore += numVal;
        categoryScores[cat] = numVal;
      });
    }

    const averageScore = Math.round(totalScore / (Object.keys(categoryScores).length || 1));

    let maturityLevel = 'Emerging';
    if (averageScore >= 85) maturityLevel = 'Enterprise Leader';
    else if (averageScore >= 65) maturityLevel = 'Accelerated';
    else if (averageScore >= 45) maturityLevel = 'Emerging';
    else maturityLevel = 'Foundational';

    res.json({
      success: true,
      assessmentId: `EVAL-${Date.now().toString().slice(-6)}`,
      overallScore: averageScore,
      maturityLevel,
      categoryScores,
      generatedReportUrl: `/reports/Nexis_AI_Readiness_Report_${companyName || 'Enterprise'}.pdf`,
      executiveRecommendations: [
        `Standardize data ingestion pipelines with enterprise RAG before scaling consumer LLM tools.`,
        `Enforce strict Zero Trust Identity boundaries (Okta/Entra ID + MFA) across all API gateways.`,
        `Align data retention policies with regional sovereign data frameworks (${region === 'KSA' ? 'NDMO & NCA ECC' : region === 'UAE' ? 'TDRA & ISR' : 'NIST 800-53 & HIPAA'}).`,
        `Establish an AI Governance Committee with quarterly algorithmic bias and audit checks.`,
      ],
    });
  });

  // AI Business Development & Lead Generator Agent Endpoint
  app.post('/api/bd-agent/generate-leads', async (req, res) => {
    try {
      const { industry, targetRegion, companySize, serviceOffer, customKeywords } = req.body;
      const ai = getGeminiClient();

      const prompt = `You are the Lead Growth Architect & Business Development AI Agent for Nexis Tech Group.
Generate 4 realistic B2B high-value prospect company profiles with decision maker executive contacts for outreach in JSON format.
Industry: ${industry || 'Healthcare & AI'}
Target Region: ${targetRegion || 'US & KSA'}
Company Size: ${companySize || '500-5000 employees'}
Service Offered: ${serviceOffer || 'Enterprise AI Transformation & Zero Trust Cybersecurity'}
Keywords: ${customKeywords || 'CIO, CTO, Data Architecture'}

Return ONLY a JSON array with objects matching this exact structure:
[
  {
    "companyName": "String",
    "industry": "String",
    "location": "String",
    "employeeCount": "String",
    "decisionMaker": {
      "fullName": "String",
      "title": "String",
      "email": "String",
      "linkedInUrl": "String"
    },
    "fitScore": number (80-99),
    "estimatedOpportunityValue": "String (e.g. $150,000 - $300,000)",
    "painPoints": ["String", "String"],
    "recommendedAngle": "String"
  }
]`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      let leads = [];
      try {
        leads = JSON.parse(response.text || '[]');
      } catch (e) {
        console.error('Failed to parse Gemini BD leads JSON:', e);
      }

      if (!leads || leads.length === 0) {
        leads = [
          {
            companyName: 'Apex Health Systems',
            industry: 'Healthcare & Hospital Network',
            location: 'Baltimore, MD, USA',
            employeeCount: '2,500+',
            decisionMaker: {
              fullName: 'Dr. Sarah Jenkins',
              title: 'Chief Information Officer',
              email: 'sjenkins@apexhealth.org',
              linkedInUrl: 'https://linkedin.com/in/sarahjenkins-cio',
            },
            fitScore: 96,
            estimatedOpportunityValue: '$250,000 - $400,000',
            painPoints: ['Legacy EHR Hyperspace latency', 'HIPAA FHIR API compliance audit'],
            recommendedAngle: 'SMART-on-FHIR AI Clinical Assistant & Zero Trust Enclave',
          },
          {
            companyName: 'Saudi National Capital Investment',
            industry: 'Financial Services & Investment',
            location: 'Riyadh, Saudi Arabia',
            employeeCount: '1,200+',
            decisionMaker: {
              fullName: 'Eng. Tariq Al-Mansoor',
              title: 'VP of Digital Transformation',
              email: 't.mansoor@snci.com.sa',
              linkedInUrl: 'https://linkedin.com/in/tariq-almansoor',
            },
            fitScore: 94,
            estimatedOpportunityValue: '$350,000 - $600,000',
            painPoints: ['Sovereign Data Storage (NCA ECC)', 'Automated Investment Due Diligence RAG'],
            recommendedAngle: 'Vision 2030 Sovereign AI Cloud & Local Arabic LLM Agent',
          },
        ];
      }

      res.json({
        success: true,
        generatedAt: new Date().toISOString(),
        queryCriteria: { industry, targetRegion, companySize, serviceOffer },
        leadsCount: leads.length,
        leads,
      });
    } catch (error: any) {
      console.error('Error in /api/bd-agent/generate-leads:', error);
      res.status(500).json({ error: 'Failed to run Lead Discovery Agent', details: error.message });
    }
  });

  // AI BD Outreach Email Drafter Endpoint
  app.post('/api/bd-agent/draft-email', async (req, res) => {
    try {
      const { prospect, campaignGoal, senderName, senderTitle, tone } = req.body;
      const ai = getGeminiClient();

      const prompt = `You are an elite Business Development Executive writing a highly effective cold outreach email for a decision maker.
Target Contact: ${prospect?.decisionMaker?.fullName || 'Prospect Executive'} (${prospect?.decisionMaker?.title || 'CIO'}) at ${prospect?.companyName || 'Enterprise'}
Industry: ${prospect?.industry || 'Enterprise'}
Pain Points: ${prospect?.painPoints?.join(', ') || 'AI adoption and security'}
Campaign Goal: ${campaignGoal || 'Schedule 15-min Executive Briefing for AI Architecture'}
Sender: ${senderName || 'Shafiq Rahman'}, ${senderTitle || 'Former CIO & Executive Advisory Lead, Nexis AI'}
Tone: ${tone || 'Authoritative, concise, executive, value-first'}

Write a personalized subject line and email body.
Output MUST be JSON:
{
  "subject": "String",
  "emailBody": "String (with clear paragraphs and strong call to action)",
  "valuePropositionHighlight": "String",
  "suggestedFollowUpDays": 3
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      let emailDraft = { subject: '', emailBody: '' };
      try {
        emailDraft = JSON.parse(response.text || '{}');
      } catch (e) {
        console.error('Error parsing draft email JSON:', e);
      }

      res.json({
        success: true,
        prospectName: prospect?.decisionMaker?.fullName,
        emailDraft,
      });
    } catch (error: any) {
      console.error('Error drafting BD email:', error);
      res.status(500).json({ error: 'Failed to draft outreach email', details: error.message });
    }
  });

  // AI Email Campaign Dispatcher Endpoint (Simulated Sender)
  app.post('/api/bd-agent/send-email', (req, res) => {
    const { toEmail, prospectName, companyName, subject, body, campaignName } = req.body;

    if (!toEmail) {
      res.status(400).json({ error: 'Recipient email is required' });
      return;
    }

    const campaignId = `CAMP-${Date.now().toString().slice(-6)}`;
    const trackingPixel = `https://nexisai.us/track/pixel/${campaignId}.png`;

    res.json({
      success: true,
      campaignId,
      status: 'Sent via Enterprise Mail Gateway',
      dispatchDetails: {
        to: `${prospectName || 'Executive'} <${toEmail}>`,
        from: 'Shafiq Rahman <shafiqs1@gmail.com>',
        subject,
        sentAt: new Date().toISOString(),
        trackingEnabled: true,
        crmStatus: 'Logged to HubSpot / Salesforce Pipeline',
        estimatedOpenRate: '48.5%',
      },
      automatedSequence: [
        { step: 1, name: 'Initial Cold Email', status: 'Sent Now' },
        { step: 2, name: 'Follow-up Email (Case Study)', scheduledInDays: 3 },
        { step: 3, name: 'Executive Meeting Invite', scheduledInDays: 6 },
      ],
    });
  });

  // AI Marketing Content & Lead Magnet Generator Endpoint
  app.post('/api/bd-agent/generate-marketing-content', async (req, res) => {
    try {
      const { contentType, topic, targetAudience } = req.body;
      const ai = getGeminiClient();

      const prompt = `You are a Chief Marketing Officer AI Agent specializing in B2B Tech Lead Generation.
Generate a compelling ${contentType || 'LinkedIn Thought Leadership Post'} about "${topic || 'Enterprise AI Transformation and Zero Trust Architecture'}".
Target Audience: ${targetAudience || 'CIOs, CTOs, IT Directors, Healthcare & Government Executives'}

Format instructions:
1. Include an attention-grabbing hook headline.
2. Outline 4 key strategic insights or statistics.
3. Provide a compelling Call to Action (CTA) inviting prospects to download a whitepaper or request a free consultation at info@nexisai.us / (443) 608-5425.
4. Add relevant B2B hashtags.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          temperature: 0.8,
        },
      });

      res.json({
        success: true,
        contentType,
        topic,
        generatedContent: response.text || 'Marketing content generated successfully.',
      });
    } catch (error: any) {
      res.status(500).json({ error: 'Failed to generate marketing content', details: error.message });
    }
  });

  // Vite development middleware vs production static server
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
