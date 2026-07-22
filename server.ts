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
