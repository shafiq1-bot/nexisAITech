export type Language = 'en' | 'ar';

export type Region = 'US' | 'KSA' | 'UAE';

export type PageId = 
  | 'home'
  | 'leadership'
  | 'markets'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'enterprise-architecture'
  | 'research-computing'
  | 'hardware-infrastructure'
  | 'industries'
  | 'industry-detail'
  | 'government'
  | 'case-studies'
  | 'ai-solutions'
  | 'bd-agents'
  | 'cybersecurity'
  | 'resources'
  | 'contact'
  | 'assessment'
  | 'deployment-guide';

export interface ServiceDetail {
  id: string;
  titleKey: string;
  shortDescKey: string;
  iconName: string;
  category: 'ai' | 'cyber' | 'healthcare' | 'education' | 'smb' | 'hardware';
  features: string[];
  benefits: string[];
  deliverables: string[];
  caseStudySnippet: {
    client: string;
    region: string;
    outcome: string;
  };
}

export interface IndustryInfo {
  id: string;
  titleKey: string;
  subtitleKey: string;
  iconName: string;
  challenges: string[];
  solutions: string[];
  complianceFrameworks: string[];
  featuredCaseStudy: {
    title: string;
    region: string;
    impact: string;
    metrics: { label: string; value: string }[];
  };
}

export interface AISolution {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  useCases: string[];
  techStack: string[];
  roi: string;
  icon: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'blog' | 'whitepaper' | 'guide' | 'casestudy' | 'webinar';
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  tags: string[];
  downloadUrl?: string;
}

export interface Partner {
  name: string;
  tier: string;
  badge: string;
  category: string;
  description: string;
  logoId?: string;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  category: 'Strategy' | 'Data' | 'Security' | 'Infrastructure' | 'Governance' | 'Culture';
  options: {
    label: string;
    score: number;
    feedback: string;
  }[];
}

export interface AssessmentResult {
  score: number;
  maturityLevel: 'Foundational' | 'Emerging' | 'Accelerated' | 'Enterprise Leader';
  categoryScores: Record<string, number>;
  recommendations: string[];
  priorityActions: string[];
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  region: Region;
  industry: string;
  serviceInterest: string;
  estimatedBudget: string;
  message: string;
  crmExportTarget?: 'HubSpot' | 'Salesforce' | 'Dynamics';
}
