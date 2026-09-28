import React from 'react';
import { VerifiedCaseStudiesPage } from './VerifiedCaseStudiesPage';

interface CaseStudiesSectionProps {
  onOpenConsultation: (subject?: string) => void;
  onNavigate?: (pageId: any) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenConsultation,
  onNavigate = () => {},
}) => {
  return (
    <section id="case-studies" className="bg-slate-950 py-12">
      <VerifiedCaseStudiesPage
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />
    </section>
  );
};
