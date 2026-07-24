import React, { useEffect } from 'react';
import { PageId, Language, Region } from '../types';

interface SEOHeadProps {
  currentPage: PageId;
  currentLanguage: Language;
  currentRegion: Region;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  currentPage,
  currentLanguage,
  currentRegion,
}) => {
  useEffect(() => {
    const regionName =
      currentRegion === 'KSA'
        ? 'Saudi Arabia (Riyadh)'
        : currentRegion === 'UAE'
        ? 'United Arab Emirates (Dubai)'
        : 'United States (Owings Mills, MD)';

    // Page Titles
    const pageTitles: Record<PageId, string> = {
      home: `Nexis AI | Executive AI Advisory & Zero Trust - ${regionName}`,
      leadership: 'Executive Leadership Profile | Former CIO 20+ Yrs Transformation - Nexis AI',
      markets: `Regional Market Strategy | US Primary Market, Saudi Arabia (KSA) & UAE Hubs - Nexis AI`,
      about: 'About Us | Executive Leadership, Vision & Global Offices - Nexis AI',
      services: 'Enterprise IT Consulting Services & Practice Areas | Nexis AI',
      'service-detail': 'Enterprise Practice Area Details | Nexis AI',
      'enterprise-architecture': 'Enterprise Architecture Practice | Application Portfolio & TIME Matrix - Nexis AI',
      'research-computing': 'Research Computing Practice | HPC Clusters, Slurm & NVIDIA GPUs - Nexis AI',
      'hardware-infrastructure': 'Hardware Infrastructure Practice | Data Centers, Cisco & Dell EMC - Nexis AI',
      industries: 'Industry Practice Groups | Healthcare IT, Higher Ed HPC & Government - Nexis AI',
      'industry-detail': 'Industry Practice Solutions | Nexis AI',
      government: 'Public Sector Practice | State Government, Transportation & NIST 800-53 - Nexis AI',
      'case-studies': 'Detailed Client Case Studies & Architecture Blueprints | Nexis AI',
      'ai-solutions': 'Generative AI, Agentic Workflows & Enterprise RAG Showcase | Nexis AI',
      'bd-agents': 'AI Business Development & Lead Generator Marketing Agents | Nexis AI',
      cybersecurity: 'Zero Trust Cybersecurity, NIST 800-53, HIPAA & NCA ECC Compliance - Nexis AI',
      resources: 'Whitepapers, Compliance Guides, Case Studies & Insights | Nexis AI',
      contact: 'Contact Us | Owings Mills HQ, Riyadh & Dubai Regional Hubs - Nexis AI',
      assessment: 'Free Interactive AI Readiness & Security Maturity Scorecard | Nexis AI',
      'deployment-guide': 'Enterprise Architecture & Deployment Specs | Nexis AI',
      'trust-center': 'Domain Verification & Security Trust Center | nexisai.us - Nexis AI',
      admin: 'Admin Command Portal & Client Database Workflow | Nexis AI',
    };

    // Page Descriptions
    const pageDescriptions: Record<PageId, string> = {
      home: `Nexis AI delivers Autonomous AI Agents, Zero Trust Cybersecurity, Healthcare IT (EHR/FHIR), and High Performance Computing solutions across ${regionName}.`,
      leadership: 'Executive biography, career timeline, and transformation achievements of Shafiq Rahman, former CIO and managing director of Nexis AI.',
      markets: 'Dedicated market insights and regional compliance architectures for US (Primary HQ), Saudi Arabia (Vision 2030), and UAE (AI Strategy 2031).',
      about: 'Meet the executive leadership and technical architects at Nexis AI driving enterprise IT modernization across the US, Saudi Arabia, and UAE.',
      services: 'Explore practice areas including Agentic AI Engineering, Zero Trust Security Operations, Healthcare Interoperability, and Higher Ed HPC Systems.',
      'service-detail': 'Detailed architectural overview and implementation roadmap for Nexis AI enterprise technology practice areas.',
      'enterprise-architecture': 'Application portfolio rationalization, TIME matrix framework, IT governance, TOGAF 10 reference architectures, and technology roadmaps.',
      'research-computing': 'HPC cluster deployment, Slurm workload management, NVIDIA DGX H100 SuperPODs, parallel storage (Lustre/GPFS), and CMMC research enclaves.',
      'hardware-infrastructure': 'Data center consolidation, Cisco ACI networking, Dell EMC PowerEdge AI racks, HPE Cray supercomputers, Nutanix HCI, and VMware vSphere.',
      industries: 'Tailored technology solutions for Healthcare (EHR/FHIR), Higher Education (HPC/FERPA), Financial Services (SOC 2), and Public Sector Governance.',
      'industry-detail': 'In-depth industry capabilities and compliance frameworks engineered by Nexis AI.',
      government: 'NIST SP 800-53 Rev 5 compliance, StateRAMP/FedRAMP enclaves, Department of Transportation systems, and CJIS public safety networks.',
      'case-studies': 'Detailed enterprise transformation case studies covering client challenges, architecture flow diagrams, technologies used, and business metrics.',
      'ai-solutions': 'Discover custom LLMs, RAG architectures, multi-agent orchestrations, and automated workflow solutions for enterprise platforms.',
      'bd-agents': 'Automated B2B lead generation agents, personalized sales email drafting, and customer attraction AI marketing tools for business development.',
      cybersecurity: 'Zero Trust Architecture, SIEM/SOAR monitoring, Penetration Testing, and compliance mapping for NIST 800-53, HIPAA, and KSA NCA ECC.',
      resources: 'Download executive research, NIST compliance checklists, AI implementation whitepapers, and regional regulatory guides.',
      contact: 'Connect with Nexis AI executive consultants at our Owings Mills, MD headquarters or regional hubs in Riyadh and Dubai. Call or text (443) 608-5425.',
      assessment: 'Take the 3-minute interactive AI & Security Maturity Scorecard to receive an instant compliance report and architectural recommendations.',
      'deployment-guide': 'Technical specifications, API docs, deployment blueprints, and system performance benchmarks.',
      'trust-center': 'Official domain verification, RFC 9116 security.txt disclosure, DMARC/SPF authentication proofs, and Infoblox security unblock guide for nexisai.us.',
      admin: 'Executive admin portal for managing consultation requests, assessment scorecards, and client communications.',
    };

    const title = pageTitles[currentPage] || 'Nexis Tech Group | Enterprise AI & Cybersecurity';
    const description = pageDescriptions[currentPage] || pageDescriptions.home;

    // Document Title
    document.title = title;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    const pageSlug = currentPage === 'home' ? '' : `#${currentPage}`;
    canonicalTag.setAttribute('href', `https://nexistechgroup.com/${pageSlug}`);

    // OpenGraph Meta
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Inject / Update Schema.org JSON-LD structured data
    let schemaScript = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://nexistechgroup.com/#organization',
          name: 'Nexis Tech Group',
          url: 'https://nexistechgroup.com',
          logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
          email: 'info@nexisai.us',
          telephone: '443-608-5425',
          sameAs: [
            'https://www.linkedin.com/company/nexisai',
            'https://twitter.com/nexisai',
            'https://github.com/nexisai',
          ],
        },
        {
          '@type': 'LocalBusiness',
          '@id': 'https://nexisai.us/#hq-owings-mills',
          name: 'Nexis AI - Executive Headquarters',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
          telephone: '443-608-5425',
          email: 'info@nexisai.us',
          priceRange: '$$$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '11436 Cronhill Drive',
            addressLocality: 'Owings Mills',
            addressRegion: 'MD',
            postalCode: '21117',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 39.4198,
            longitude: -76.7803,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://nexisai.us',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: title,
              item: `https://nexisai.us/${pageSlug}`,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What services does Nexis Tech Group specialize in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nexis Tech Group provides enterprise AI Transformation, Zero Trust Cybersecurity (NIST 800-53 / HIPAA / KSA NCA ECC), Healthcare IT (HL7/FHIR), Higher Education HPC Clusters, and Managed IT Infrastructure.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where is Nexis Tech Group located?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our primary headquarters is located in Owings Mills, Maryland (11436 Cronhill Drive, 21117), with regional hub offices in Riyadh, Saudi Arabia, and Dubai, United Arab Emirates.',
              },
            },
            {
              '@type': 'Question',
              name: 'How can I schedule an AI Readiness Audit or IT Consultation?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can schedule a consultation directly on our website, call or text our executive line at (443) 608-5425, or email info@nexisai.us.',
              },
            },
          ],
        },
      ],
    };

    schemaScript.textContent = JSON.stringify(structuredData);
  }, [currentPage, currentLanguage, currentRegion]);

  return null;
};

