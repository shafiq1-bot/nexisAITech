import fs from 'fs';
import path from 'path';

export interface ConsultationRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  region: 'US' | 'KSA' | 'UAE';
  industry: string;
  serviceInterest: string;
  estimatedBudget: string;
  message: string;
  crmExportTarget?: string;
  status: 'new' | 'in_review' | 'contacted' | 'proposal_sent' | 'closed';
  internalNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AssessmentRecord {
  id: string;
  companyName: string;
  clientEmail: string;
  region: 'US' | 'KSA' | 'UAE';
  overallScore: number;
  maturityLevel: string;
  categoryScores: Record<string, number>;
  answers?: Record<string, any>;
  status: 'new' | 'in_review' | 'contacted' | 'report_sent' | 'closed';
  internalNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommunicationMessage {
  id: string;
  requestId: string; // Consultation or Assessment ID
  requestType: 'consultation' | 'assessment';
  sender: 'admin' | 'client' | 'system';
  senderName: string;
  recipientEmail: string;
  subject: string;
  content: string;
  sentAt: string;
  deliveryStatus: 'sent' | 'delivered' | 'read';
}

export interface AdminUser {
  id: string;
  email: string;
  password: string; // Stored securely for admin access
  fullName: string;
  role: string;
  lastLogin?: string;
}

interface DatabaseSchema {
  consultations: ConsultationRecord[];
  assessments: AssessmentRecord[];
  messages: CommunicationMessage[];
  admins: AdminUser[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Ensure data directory and initial seed file exist
function ensureDatabase(): DatabaseSchema {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    const initialSeed: DatabaseSchema = {
      consultations: [
        {
          id: 'NEXIS-CONSULT-1001',
          fullName: 'Dr. Sarah Al-Mansoori',
          email: 'sarah.mansoori@healthsystem.org',
          phone: '+966 50 123 4567',
          companyName: 'King Faisal Specialist Hospital & Research Centre',
          jobTitle: 'Chief Medical Information Officer',
          region: 'KSA',
          industry: 'Healthcare',
          serviceInterest: 'healthcare-technology',
          estimatedBudget: '$100,000 - $250,000',
          message: 'Interested in clinical RAG implementation for SMART-on-FHIR EHR workflows with local Saudi data residency compliance.',
          crmExportTarget: 'Salesforce',
          status: 'in_review',
          internalNotes: 'Initial briefing assigned to Dr. Marcus Vance. High priority KSA health system.',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          updatedAt: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: 'NEXIS-CONSULT-1002',
          fullName: 'David Miller',
          email: 'dmiller@hopkins.edu',
          phone: '+1 (410) 555-0192',
          companyName: 'Johns Hopkins University Health System',
          jobTitle: 'Director of Research Computing',
          region: 'US',
          industry: 'Higher Education',
          serviceInterest: 'research-computing',
          estimatedBudget: '$250,000 - $500,000',
          message: 'Need NVIDIA H200 GPU cluster orchestration and HIPAA enclave for genomic research.',
          crmExportTarget: 'HubSpot',
          status: 'new',
          internalNotes: 'Owings Mills local client request. Follow up within 4 hours.',
          createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
          updatedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
        }
      ],
      assessments: [
        {
          id: 'NEXIS-EVAL-1001',
          companyName: 'Emirates Health Services',
          clientEmail: 't.alnuaimi@ehs.gov.ae',
          region: 'UAE',
          overallScore: 78,
          maturityLevel: 'Accelerated',
          categoryScores: {
            Strategy: 85,
            Data: 70,
            Security: 80,
            Infrastructure: 75,
            Governance: 80,
          },
          status: 'contacted',
          internalNotes: 'Sent customized 90-day AI security roadmap report.',
          createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
          updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        }
      ],
      messages: [
        {
          id: 'MSG-2001',
          requestId: 'NEXIS-CONSULT-1001',
          requestType: 'consultation',
          sender: 'admin',
          senderName: 'Shafiq Rahman (Managing Principal)',
          recipientEmail: 'sarah.mansoori@healthsystem.org',
          subject: 'Re: Nexis AI Executive Consultation Request - Healthcare RAG & FHIR',
          content: 'Dear Dr. Al-Mansoori,\n\nThank you for reaching out to Nexis Tech Group regarding your SMART-on-FHIR clinical AI initiative in Saudi Arabia.\n\nOur Riyadh architecture team has reviewed your project parameters and prepared an initial sovereign cloud blueprint adhering to NDMO & NCA ECC regulations. We would welcome a 30-minute executive briefing next Tuesday.\n\nBest regards,\nShafiq Rahman\nManaging Principal | Nexis AI',
          sentAt: new Date(Date.now() - 86400000).toISOString(),
          deliveryStatus: 'delivered',
        }
      ],
      admins: [
        {
          id: 'ADM-001',
          email: 'admin@nexisai.us',
          password: 'admin123', // Default credentials for demonstration
          fullName: 'Nexis Admin Lead',
          role: 'Executive Principal',
          lastLogin: new Date().toISOString(),
        },
        {
          id: 'ADM-002',
          email: 'shafiqs1@gmail.com',
          password: 'admin123',
          fullName: 'Shafiq Rahman',
          role: 'Managing Principal & Former CIO',
          lastLogin: new Date().toISOString(),
        }
      ]
    };

    fs.writeFileSync(DB_FILE, JSON.stringify(initialSeed, null, 2), 'utf-8');
    return initialSeed;
  }

  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw) as DatabaseSchema;
  } catch (err) {
    console.error('Error reading db.json, reinitializing:', err);
    return ensureDatabase();
  }
}

// Atomic save function
function saveDatabase(db: DatabaseSchema): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempFile = `${DB_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(db, null, 2), 'utf-8');
    fs.renameSync(tempFile, DB_FILE);
  } catch (err) {
    console.error('Failed to save database:', err);
  }
}

// Helper DB API methods
export const Database = {
  // Consultations
  getConsultations: (): ConsultationRecord[] => {
    const db = ensureDatabase();
    return db.consultations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  addConsultation: (record: Omit<ConsultationRecord, 'id' | 'createdAt' | 'updatedAt' | 'status'>): ConsultationRecord => {
    const db = ensureDatabase();
    const newRecord: ConsultationRecord = {
      ...record,
      id: `NEXIS-CONSULT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    db.consultations.unshift(newRecord);
    saveDatabase(db);
    return newRecord;
  },

  updateConsultationStatus: (id: string, status: ConsultationRecord['status'], internalNotes?: string): ConsultationRecord | null => {
    const db = ensureDatabase();
    const index = db.consultations.findIndex((c) => c.id === id);
    if (index === -1) return null;

    db.consultations[index].status = status;
    db.consultations[index].updatedAt = new Date().toISOString();
    if (internalNotes !== undefined) {
      db.consultations[index].internalNotes = internalNotes;
    }
    saveDatabase(db);
    return db.consultations[index];
  },

  // Assessments
  getAssessments: (): AssessmentRecord[] => {
    const db = ensureDatabase();
    return db.assessments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  addAssessment: (record: Omit<AssessmentRecord, 'id' | 'createdAt' | 'updatedAt' | 'status'>): AssessmentRecord => {
    const db = ensureDatabase();
    const newRecord: AssessmentRecord = {
      ...record,
      id: `NEXIS-EVAL-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    db.assessments.unshift(newRecord);
    saveDatabase(db);
    return newRecord;
  },

  updateAssessmentStatus: (id: string, status: AssessmentRecord['status'], internalNotes?: string): AssessmentRecord | null => {
    const db = ensureDatabase();
    const index = db.assessments.findIndex((a) => a.id === id);
    if (index === -1) return null;

    db.assessments[index].status = status;
    db.assessments[index].updatedAt = new Date().toISOString();
    if (internalNotes !== undefined) {
      db.assessments[index].internalNotes = internalNotes;
    }
    saveDatabase(db);
    return db.assessments[index];
  },

  // Messages / Communications
  getMessagesByRequestId: (requestId: string): CommunicationMessage[] => {
    const db = ensureDatabase();
    return db.messages
      .filter((m) => m.requestId === requestId)
      .sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime());
  },

  addMessage: (msg: Omit<CommunicationMessage, 'id' | 'sentAt'>): CommunicationMessage => {
    const db = ensureDatabase();
    const newMsg: CommunicationMessage = {
      ...msg,
      id: `MSG-${Math.floor(1000 + Math.random() * 9000)}`,
      sentAt: new Date().toISOString(),
    };
    db.messages.push(newMsg);
    saveDatabase(db);
    return newMsg;
  },

  // Admin Auth
  verifyAdminCredentials: (email: string, pass: string): AdminUser | null => {
    const db = ensureDatabase();
    const admin = db.admins.find((a) => a.email.toLowerCase() === email.toLowerCase());
    if (admin && admin.password === pass) {
      admin.lastLogin = new Date().toISOString();
      saveDatabase(db);
      return { ...admin, password: '' }; // Sanitize password before returning
    }
    return null;
  }
};
