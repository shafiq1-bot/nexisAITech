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
        ? 'Saudi Arabia (Riyadh Hub)'
        : currentRegion === 'UAE'
        ? 'United Arab Emirates (Dubai Hub)'
        : 'United States (Owings Mills, MD)';

    // Comprehensive Page Titles
    const pageTitles: Partial<Record<PageId, string>> = {
      home: 'Nexis AI | Fractional CIO, CIO Advisory & Enterprise AI Governance',
      'fractional-cio': 'Fractional CIO Services | Executive Technology Leadership - Shafiq Rahman',
      'cio-advisory': 'CIO Advisory & Boardroom Technology Governance | Nexis AI',
      'interim-cio': 'Interim CIO & Technology Executive Transition Leadership | Nexis AI',
      'ai-strategy': 'Enterprise AI Strategy & Portfolio Modernization | Nexis AI',
      'ai-governance': 'Enterprise AI Governance, NIST AI RMF & Model Risk | Nexis AI',
      'healthcare-cio-advisory': 'Healthcare Technology & Clinical Informatics Advisory | Nexis AI',
      'higher-education-cio-advisory': 'Higher Education & Academic Medical Center CIO Advisory | Nexis AI',
      'technology-governance': 'Technology Governance, IT Steering & Board Reporting | Nexis AI',
      'do-you-need-a-fractional-cio': 'Do You Need a Fractional CIO? Executive Diagnostic Guide | Nexis AI',
      assessment: '12-Domain CIO Maturity Assessment & Executive Scorecard | Nexis AI',
      'ai-advisor': 'AI Executive Qualification & Advisory Assistant | Nexis AI',
      'case-studies': 'Verified & Documented Institutional Transformations | Nexis AI',
      resources: 'Executive Thought Leadership, Lead Magnets & CIO Checklists | Nexis AI',
      insights: 'Executive Insights, Architecture Guides & CIO Strategy | Nexis AI',
      schedule: 'Schedule a CIO Advisory Conversation with Shafiq Rahman | Nexis AI',
      about: 'About Shafiq Rahman, MS, MBA, MCS, PMP® | Former State CIO & Executive Advisor',
      leadership: 'Shafiq Rahman, MS, MBA, MCS, PMP® - Leadership Profile & Credentials | Nexis AI',
      markets: `Regional Market Strategy | US Primary Market & International Hubs - Nexis AI`,
      services: 'Enterprise Technology Advisory Practice Areas | Nexis AI',
      'service-detail': 'Enterprise Practice Area Details | Nexis AI',
      'enterprise-architecture': 'Enterprise Architecture & Application Portfolio | Nexis AI',
      'research-computing': 'Research Computing Practice | HPC Clusters & AI Supercomputing | Nexis AI',
      'hardware-infrastructure': 'Hardware Infrastructure Practice | Data Centers & Networking | Nexis AI',
      industries: 'Industry Practice Groups | Healthcare, Higher Ed & Public Sector | Nexis AI',
      'industry-detail': 'Industry Practice Solutions | Nexis AI',
      government: 'Public Sector Practice | State Government IT & NIST 800-53 | Nexis AI',
      'ai-solutions': 'Enterprise AI Systems & Agentic Workflows | Nexis AI',
      'bd-agents': 'AI Business Development & Automated Lead Qualification | Nexis AI',
      cybersecurity: 'Zero Trust Cybersecurity, NIST 800-53 & HIPAA Compliance | Nexis AI',
      contact: 'Connect with Shafiq Rahman & Nexis AI Advisory Practice',
      'deployment-guide': 'Technical Specifications & Cloud Architecture Specs | Nexis AI',
      'trust-center': 'Domain Verification, Security Trust Center & RFC 9116 | nexisai.us',
      admin: 'Admin Command Portal & Client CRM | Nexis AI',
      'executive-advisory': 'Executive Advisory & Boardroom Technology Strategy | Nexis AI',
      'erp-modernization': 'Enterprise ERP Modernization & Clean Core Automation | Nexis AI',
      'roi-framework': 'Enterprise Value Framework & Technology Realization | Nexis AI',
    };

    // Concise, substantiated descriptions
    const pageDescriptions: Partial<Record<PageId, string>> = {
      home: 'Nexis AI provides Fractional CIO leadership and CIO Advisory for organizations navigating technology change, led by former State CIO Shafiq Rahman, MS, MBA, MCS, PMP®.',
      'fractional-cio': 'Executive technology leadership without hiring a full-time CIO. Strategy, IT operating model, cybersecurity governance, AI strategy, cloud, and board reporting.',
      'cio-advisory': 'Strategic technology advisory for CEOs, presidents, boards, and CFOs. Board technology briefings, vendor evaluation, IT investment, and enterprise architecture.',
      'interim-cio': 'Experienced interim technology executive leadership during leadership transitions, restructuring, digital transformations, or unexpected vacancies.',
      'ai-strategy': 'Pragmatic enterprise AI strategy: readiness assessments, use-case portfolios, data readiness, responsible AI, and measurable institutional value.',
      'ai-governance': 'Systematic AI risk management aligned with NIST AI RMF 1.0, data classification, vendor AI audits, policy formulation, and board oversight.',
      'healthcare-cio-advisory': 'Clinical informatics, EHR environments, HL7/FHIR interoperability, HIPAA compliance, and technology leadership for hospitals and health systems.',
      'higher-education-cio-advisory': 'Higher education CIO strategy, research computing, HPC clusters, student technology, FERPA compliance, and academic health center integration.',
      'technology-governance': 'IT steering committee frameworks, investment prioritization, architecture review, vendor SLAs, and board-ready executive reporting.',
      'do-you-need-a-fractional-cio': 'Evaluate whether your organization needs an experienced Fractional CIO to steer technology strategy, security, and digital transformation.',
      assessment: 'Evaluate your institution across 12 core CIO domains including strategy, cybersecurity, cloud, AI readiness, talent, and data governance.',
      'ai-advisor': 'Engage the Nexis AI Executive Assistant to explore advisory services, qualify organizational needs, and schedule an executive discussion with Shafiq Rahman.',
      'case-studies': 'Documented, anonymized case studies highlighting executive technology leadership across state government, academic medicine, and research institutions.',
      resources: 'Download executive decision guides, CEO checklists, CIO assessment tools, and AI governance frameworks for leadership teams.',
      insights: 'In-depth executive articles on fractional CIO leadership, AI governance, health system technology, and enterprise architecture by Shafiq Rahman.',
      schedule: 'Book a confidential 20-minute executive introduction or 45-minute advisory scoping conversation with Shafiq Rahman, MS, MBA, MCS, PMP®.',
      about: 'Executive biography of Shafiq Rahman, MS, MBA, MCS, PMP®: 20+ years of technology leadership across state government, academic health systems, and enterprise IT.',
      leadership: 'Credentials, education, and career leadership of Shafiq Rahman, former CIO of MDOT and IT executive at University of Maryland, Baltimore.',
      markets: 'Serving organizations across the United States with primary offices in Maryland, and international advisory hubs for global engagements.',
      services: 'Executive technology advisory, enterprise architecture, cybersecurity governance, clinical informatics, and AI strategy capabilities.',
      'service-detail': 'Detailed framework and deliverables for Nexis AI executive advisory practices.',
      'enterprise-architecture': 'TOGAF-aligned application rationalization, technology standards, and cloud architecture modernization.',
      'research-computing': 'High-performance computing (HPC) cluster strategy, research enclaves, and scientific computing infrastructure.',
      'hardware-infrastructure': 'Strategic data center consolidation, enterprise networking, and core infrastructure governance.',
      industries: 'Deep executive domain expertise across Healthcare, Higher Education, and Public Sector / State Agencies.',
      'industry-detail': 'Industry-specific technology governance and strategic advisory capabilities.',
      government: 'Public sector technology stewardship: NIST SP 800-53, StateRAMP, transportation systems, and inter-agency IT governance.',
      'ai-solutions': 'Enterprise AI strategy, RAG architectures, and agentic workflows aligned with security and institutional goals.',
      'bd-agents': 'Automated lead qualification and executive intake workflows designed for technology advisory operations.',
      cybersecurity: 'Zero Trust architecture, NIST SP 800-53, HIPAA security rules, and cyber risk management for executive leadership.',
      contact: 'Reach Shafiq Rahman and the Nexis AI advisory practice directly via phone, text, or email for confidential inquiries.',
      'deployment-guide': 'Architecture specifications, governance runbooks, and enterprise technology standards.',
      'trust-center': 'Official verification, RFC 9116 security contact, and domain trust documentation for nexisai.us.',
      admin: 'Secure executive portal for managing client advisory pipelines, assessment diagnostics, and communications.',
      'executive-advisory': 'Board-level technology briefings, M&A IT due diligence, and executive technology stewardship.',
      'erp-modernization': 'ERP governance, clean core strategy, and migration oversight for mission-critical enterprise systems.',
      'roi-framework': 'Value-driven technology portfolio realization, cost containment, and strategic investment measurement.',
    };

    const title = pageTitles[currentPage] || pageTitles.home;
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
    canonicalTag.setAttribute('href', `https://nexisai.us/${pageSlug}`);

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
          '@type': 'Person',
          '@id': 'https://nexisai.us/#shafiq-rahman',
          name: 'Shafiq Rahman, MS, MBA, MCS, PMP®',
          jobTitle: 'Fractional CIO & Enterprise Technology Executive Advisor',
          worksFor: {
            '@id': 'https://nexisai.us/#organization',
          },
          description:
            'Former Maryland Department of Transportation CIO and University of Maryland School of Medicine / UMB enterprise IT executive with 20+ years of technology leadership across government, higher education, academic medicine, and enterprise IT.',
          url: 'https://nexisai.us/#about',
          sameAs: [
            'https://www.linkedin.com/in/shafiq-rahman-ms-mba-mcs-pmp%C2%AE-635b7115/',
          ],
          knowsAbout: [
            'Fractional CIO Leadership',
            'CIO Advisory',
            'Digital Transformation',
            'Enterprise AI Governance',
            'NIST AI Risk Management Framework',
            'Clinical Informatics & EHR Systems',
            'Higher Education & Research Computing',
            'Zero Trust Cybersecurity',
          ],
        },
        {
          '@type': 'ProfessionalService',
          '@id': 'https://nexisai.us/#organization',
          name: 'Nexis AI - Executive Technology Advisory & Enterprise AI',
          url: 'https://nexisai.us',
          founder: {
            '@id': 'https://nexisai.us/#shafiq-rahman',
          },
          telephone: '+1-443-608-5425',
          email: 'shafiqs1@gmail.com',
          priceRange: '$$$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '11436 Cronhill Drive',
            addressLocality: 'Owings Mills',
            addressRegion: 'MD',
            postalCode: '21117',
            addressCountry: 'US',
          },
          areaServed: ['United States', 'International'],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Executive Technology Advisory Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Fractional CIO Leadership',
                  description:
                    'Strategic technology direction, IT operating model, cybersecurity oversight, and board reporting without hiring a full-time CIO.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'CIO Advisory & Boardroom Technology Governance',
                  description:
                    'Executive technology counsel for CEOs, boards of directors, and CFOs facing major technology decisions.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Enterprise AI Strategy & Governance',
                  description:
                    'AI readiness evaluation, risk classification, policy formulation, and NIST AI RMF governance.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Interim CIO Leadership',
                  description:
                    'Executive technology stewardship during leadership transitions, restructuring, or unforeseen departures.',
                },
              },
            ],
          },
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://nexisai.us/#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a Fractional CIO and how does it differ from IT consulting?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A Fractional CIO serves as your executive technology leader—sitting on your leadership team, reporting to the CEO or Board, directing the technology roadmap, managing budgets, and governing vendors. Unlike consultants who advise from the outside or vendors who sell products, a Fractional CIO has institutional accountability for your technology outcomes.',
              },
            },
            {
              '@type': 'Question',
              name: 'When should an organization engage a Fractional CIO instead of hiring a full-time CIO?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Organizations typically engage a Fractional CIO when they need experienced CIO leadership ($350k-$500k+ total full-time compensation) for 10-25 hours per week, during critical growth transitions, during a permanent CIO search, when undertaking digital modernization, or when facing complex AI governance and cybersecurity challenges.',
              },
            },
            {
              '@type': 'Question',
              name: 'Who leads the executive advisory practice at Nexis AI?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nexis AI is led by Shafiq Rahman, MS, MBA, MCS, PMP®, an executive technology leader with 20+ years of experience including former State CIO (Maryland Department of Transportation) and Director of Enterprise IT at the University of Maryland, Baltimore / School of Medicine.',
              },
            },
            {
              '@type': 'Question',
              name: 'What industries does Shafiq Rahman and Nexis AI primarily serve?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The advisory practice specializes in Healthcare Systems & Academic Medicine, Higher Education & Research Universities, State and Regional Public Sector Agencies, and growing mid-market enterprises undergoing digital transformation.',
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
