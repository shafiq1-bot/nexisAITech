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
    // Determine Page Title
    const pageTitles: Record<PageId, string> = {
      home: 'Nexis Tech Group | Enterprise AI Transformation & Zero Trust Cybersecurity',
      about: 'About Us | Nexis Tech Group - Global Executive Leadership',
      services: 'Enterprise IT Services & Practice Areas | Nexis Tech Group',
      'service-detail': 'Enterprise Practice Area | Nexis Tech Group',
      industries: 'Industry Practice Groups | Healthcare, Edu, Gov & Enterprise',
      'industry-detail': 'Industry Practice Group | Nexis Tech Group',
      'ai-solutions': 'Generative AI & LLM Solutions Showcase | Nexis Tech Group',
      cybersecurity: 'Zero Trust Cybersecurity & Regulatory Compliance | Nexis Tech Group',
      resources: 'Enterprise Insights, Whitepapers & Compliance Guides | Nexis Tech Group',
      contact: 'Contact Us | Owings Mills HQ & Global Regional Offices | Nexis Tech Group',
      assessment: 'Free AI Readiness & Maturity Scorecard | Nexis Tech Group',
      'deployment-guide': 'Nexis Tech Group | Enterprise AI & Security Solutions',
    };

    const title = pageTitles[currentPage] || 'Nexis Tech Group | Enterprise AI & Cybersecurity';
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const descriptionText =
      'Nexis Tech Group provides premier AI Transformation, Zero Trust Cybersecurity, Healthcare IT (EHR/FHIR), Higher Education HPC, and Managed Infrastructure Solutions across the US (Owings Mills, MD), Saudi Arabia (Riyadh), and UAE (Dubai).';
    metaDescription.setAttribute('content', descriptionText);

    // Update OpenGraph Title & Description
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
    ogDesc.setAttribute('content', descriptionText);

    // Inject / Update Schema.org JSON-LD structured data in head
    let schemaScript = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Nexis Tech Group',
      url: 'https://nexistechgroup.com',
      logo: 'https://nexistechgroup.com/logo.png',
      image: 'https://nexistechgroup.com/og-image.jpg',
      description: descriptionText,
      telephone: '848-482-1455',
      email: 'shafiqs1@gmail.com',
      priceRange: '$$$$',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '11436 Cronhill Drive',
          addressLocality: 'Owings Mills',
          addressRegion: 'MD',
          postalCode: '21117',
          addressCountry: 'US',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Riyadh',
          addressCountry: 'SA',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Enterprise Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Transformation & Agentic Workflows',
              description: 'Generative AI integration, private LLMs, and RAG architectures.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Zero Trust Cybersecurity & Governance',
              description: 'NIST 800-53, HIPAA, SOC 2, and KSA NCA ECC compliance.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Healthcare IT & EHR Interoperability',
              description: 'HL7/FHIR pipelines, medical imaging AI, and clinical workflows.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Higher Education HPC & IT Infrastructure',
              description: 'High-performance computing clusters, campus networks, and FERPA compliance.',
            },
          },
        ],
      },
    };

    schemaScript.textContent = JSON.stringify(structuredData);
  }, [currentPage, currentLanguage, currentRegion]);

  return null;
};
