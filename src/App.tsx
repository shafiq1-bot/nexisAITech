import React, { useState, useEffect } from 'react';
import { Language, Region, PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ExecutiveAudiencePaths } from './components/ExecutiveAudiencePaths';
import { FractionalCIOSection } from './components/FractionalCIOSection';
import { ExecutiveAdvisorySection } from './components/ExecutiveAdvisorySection';
import { EnterpriseROIFramework } from './components/EnterpriseROIFramework';
import { ServicesOverview } from './components/ServicesOverview';
import { CybersecurityCenter } from './components/CybersecurityCenter';
import { IndustriesSection } from './components/IndustriesSection';
import { AISolutionsShowcase } from './components/AISolutionsShowcase';
import { AIReadinessAssessment } from './components/AIReadinessAssessment';
import { ResourcesHub } from './components/ResourcesHub';
import { PartnerEcosystem } from './components/PartnerEcosystem';
import { ContactSection } from './components/ContactSection';
import { RegionalMarketsSection } from './components/RegionalMarketsSection';
import { FloatingAIChatbot } from './components/FloatingAIChatbot';
import { AIAdvisorModal } from './components/AIAdvisorModal';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { servicesData } from './data/companyData';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SEOHead } from './components/SEOHead';
import { GoogleCalendarModal } from './components/GoogleCalendarModal';
import { TrustSecurityCenter } from './components/TrustSecurityCenter';
import { AdminPortal } from './components/AdminPortal';
import { BookAuditModal } from './components/BookAuditModal';
import { FreeToolsSection } from './components/FreeToolsSection';
import { ERPModernizationSection } from './components/ERPModernizationSection';
import { BDAgentsSection } from './components/BDAgentsSection';
import { EnterpriseArchitectureSection } from './components/EnterpriseArchitectureSection';
import { ResearchComputingSection } from './components/ResearchComputingSection';
import { HardwareInfrastructureSection } from './components/HardwareInfrastructureSection';
import { GovernmentPracticeSection } from './components/GovernmentPracticeSection';

// Dedicated Executive Advisory & Governance Pages
import { FractionalCIOPage } from './components/FractionalCIOPage';
import { CIOAdvisoryPage } from './components/CIOAdvisoryPage';
import { InterimCIOPage } from './components/InterimCIOPage';
import { AIStrategyGovernancePage } from './components/AIStrategyGovernancePage';
import { HealthcareCIOPage } from './components/HealthcareCIOPage';
import { HigherEducationCIOPage } from './components/HigherEducationCIOPage';
import { TechnologyGovernancePage } from './components/TechnologyGovernancePage';
import { DoYouNeedAFractionalCIOPage } from './components/DoYouNeedAFractionalCIOPage';
import { VerifiedCaseStudiesPage } from './components/VerifiedCaseStudiesPage';
import { ResourcesLeadMagnetsPage } from './components/ResourcesLeadMagnetsPage';
import { ExecutiveSchedulePage } from './components/ExecutiveSchedulePage';
import { ShafiqRahmanAboutPage } from './components/ShafiqRahmanAboutPage';
import { ExecutiveInsightsPage } from './components/ExecutiveInsightsPage';
import { CIOMaturityAssessment } from './components/CIOMaturityAssessment';
import { AIExecutiveAdvisor } from './components/AIExecutiveAdvisor';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [currentRegion, setCurrentRegion] = useState<Region>('US');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Modals
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [bookAuditOpen, setBookAuditOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string | undefined>();
  const [consultationNotes, setConsultationNotes] = useState<string | undefined>();

  // Google Calendar Modal State
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarAttendeeEmail, setCalendarAttendeeEmail] = useState<string | undefined>();
  const [calendarSubject, setCalendarSubject] = useState<string | undefined>();

  const handleOpenCalendar = (attendeeEmail?: string, subject?: string) => {
    if (attendeeEmail) setCalendarAttendeeEmail(attendeeEmail);
    if (subject) setCalendarSubject(subject);
    setCalendarOpen(true);
  };

  // Toggle RTL direction when language changes
  useEffect(() => {
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const handleNavigate = (page: PageId, detailId?: string) => {
    if (page === 'service-detail' && detailId) {
      setSelectedServiceId(detailId);
    } else {
      setSelectedServiceId(null);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceTitleOrNotes?: string) => {
    if (serviceTitleOrNotes) {
      setConsultationService(serviceTitleOrNotes);
      setConsultationNotes(serviceTitleOrNotes);
    }
    setConsultationOpen(true);
  };

  const selectedServiceDetail = servicesData.find((s) => s.id === selectedServiceId) || null;

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white ${
      currentLanguage === 'ar' ? 'font-serif' : ''
    }`}>
      <SEOHead
        currentPage={currentPage}
        currentLanguage={currentLanguage}
        currentRegion={currentRegion}
      />
      
      {/* Global Navbar */}
      <Navbar
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentRegion={currentRegion}
        onRegionChange={setCurrentRegion}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAdvisor={() => handleNavigate('ai-advisor')}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenCalendar={() => handleOpenCalendar()}
        onOpenBookAudit={() => setBookAuditOpen(true)}
      />

      {/* Main Page Rendering */}
      <main>
        {currentPage === 'home' && (
          <>
            <Hero
              currentLanguage={currentLanguage}
              currentRegion={currentRegion}
              onNavigate={handleNavigate}
              onOpenAdvisor={() => handleNavigate('ai-advisor')}
              onOpenConsultation={() => handleOpenConsultation()}
              onOpenBookAudit={() => setBookAuditOpen(true)}
            />
            
            {/* Executive Audience Pathways: CEOs, Boards, Healthcare, Higher Ed, CFOs, Interim */}
            <ExecutiveAudiencePaths
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Core Fractional CIO Practice Section */}
            <FractionalCIOSection
              onOpenConsultation={handleOpenConsultation}
              onOpenCalendar={handleOpenCalendar}
            />

            {/* Free Executive Tools & Diagnostics */}
            <FreeToolsSection
              currentRegion={currentRegion}
              onOpenBookAudit={() => setBookAuditOpen(true)}
            />

            {/* Executive Advisory Retainers & Sprints */}
            <ExecutiveAdvisorySection
              currentRegion={currentRegion}
              onOpenConsultation={handleOpenConsultation}
              onOpenCalendar={handleOpenCalendar}
            />

            {/* Enterprise ROI & Governance Framework */}
            <EnterpriseROIFramework
              currentRegion={currentRegion}
              onOpenConsultation={handleOpenConsultation}
              onOpenBookAudit={() => setBookAuditOpen(true)}
            />

            {/* Verified Case Studies Showcase */}
            <VerifiedCaseStudiesPage
              onOpenConsultation={handleOpenConsultation}
              onNavigate={handleNavigate}
            />

            {/* Supporting Platform Services */}
            <ServicesOverview
              currentLanguage={currentLanguage}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Supporting Cybersecurity & Compliance */}
            <CybersecurityCenter
              currentLanguage={currentLanguage}
              currentRegion={currentRegion}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Supporting Industry Verticals */}
            <IndustriesSection
              currentLanguage={currentLanguage}
              currentRegion={currentRegion}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Partner Ecosystem */}
            <PartnerEcosystem />

            {/* Regional Markets */}
            <RegionalMarketsSection
              currentRegion={currentRegion}
              onSelectRegion={setCurrentRegion}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Resources Hub */}
            <ResourcesHub
              currentLanguage={currentLanguage}
              onOpenConsultation={() => handleOpenConsultation()}
            />
          </>
        )}

        {/* Dedicated Executive Service Landing Pages */}
        {currentPage === 'fractional-cio' && (
          <FractionalCIOPage
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'cio-advisory' && (
          <CIOAdvisoryPage
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'interim-cio' && (
          <InterimCIOPage
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'ai-strategy' && (
          <AIStrategyGovernancePage
            defaultTab="strategy"
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'ai-governance' && (
          <AIStrategyGovernancePage
            defaultTab="governance"
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'healthcare-cio-advisory' && (
          <HealthcareCIOPage
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'higher-education-cio-advisory' && (
          <HigherEducationCIOPage
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'technology-governance' && (
          <TechnologyGovernancePage
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'do-you-need-a-fractional-cio' && (
          <DoYouNeedAFractionalCIOPage
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {/* Primary Lead Magnet: 12-Domain CIO Maturity Assessment */}
        {currentPage === 'assessment' && (
          <CIOMaturityAssessment
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
          />
        )}

        {/* AI Executive Advisor (Lead Qualification Agent) */}
        {currentPage === 'ai-advisor' && (
          <div className="pt-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIExecutiveAdvisor
              onOpenConsultation={handleOpenConsultation}
              onOpenCalendar={handleOpenCalendar}
            />
          </div>
        )}

        {/* Verified Case Studies Page */}
        {currentPage === 'case-studies' && (
          <VerifiedCaseStudiesPage
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {/* Executive Thought Leadership & Lead Magnets */}
        {currentPage === 'resources' && (
          <ResourcesLeadMagnetsPage
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* Executive Insights & Articles */}
        {currentPage === 'insights' && (
          <ExecutiveInsightsPage
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* Dedicated Scheduling Page */}
        {currentPage === 'schedule' && (
          <ExecutiveSchedulePage
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
          />
        )}

        {/* Principal Executive About Page */}
        {(currentPage === 'about' || currentPage === 'leadership') && (
          <ShafiqRahmanAboutPage
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
          />
        )}

        {/* Supporting Capabilities Pages */}
        {currentPage === 'enterprise-architecture' && (
          <EnterpriseArchitectureSection
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'research-computing' && (
          <ResearchComputingSection
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'hardware-infrastructure' && (
          <HardwareInfrastructureSection
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'government' && (
          <GovernmentPracticeSection
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'services' && (
          <>
            <ServicesOverview
              currentLanguage={currentLanguage}
              onOpenConsultation={handleOpenConsultation}
            />
            <PartnerEcosystem />
          </>
        )}

        {currentPage === 'industries' && (
          <IndustriesSection
            currentLanguage={currentLanguage}
            currentRegion={currentRegion}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'ai-solutions' && (
          <AISolutionsShowcase
            currentLanguage={currentLanguage}
            onOpenAdvisor={() => handleNavigate('ai-advisor')}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'bd-agents' && (
          <BDAgentsSection
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenCalendar={handleOpenCalendar}
          />
        )}

        {currentPage === 'cybersecurity' && (
          <CybersecurityCenter
            currentLanguage={currentLanguage}
            currentRegion={currentRegion}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'trust-center' && (
          <TrustSecurityCenter
            currentLanguage={currentLanguage}
            currentRegion={currentRegion}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'admin' && (
          <AdminPortal
            currentRegion={currentRegion}
            onOpenCalendar={handleOpenCalendar}
          />
        )}

        {currentPage === 'roi-framework' && (
          <EnterpriseROIFramework
            currentRegion={currentRegion}
            onOpenConsultation={handleOpenConsultation}
            onOpenBookAudit={() => setBookAuditOpen(true)}
          />
        )}

        {currentPage === 'erp-modernization' && (
          <ERPModernizationSection
            currentRegion={currentRegion}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'markets' && (
          <RegionalMarketsSection
            currentRegion={currentRegion}
            onSelectRegion={setCurrentRegion}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'contact' && (
          <ContactSection
            currentLanguage={currentLanguage}
            currentRegion={currentRegion}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenAdvisor={() => handleNavigate('ai-advisor')}
          />
        )}
      </main>

      {/* Persistent Floating AI Chatbot */}
      <FloatingAIChatbot 
        onOpenConsultation={handleOpenConsultation} 
        onOpenBookAudit={() => setBookAuditOpen(true)}
        onOpenCalendar={handleOpenCalendar}
      />

      {/* Global Footer */}
      <Footer
        currentLanguage={currentLanguage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Modals & Drawers */}
      <AIAdvisorModal
        isOpen={advisorOpen}
        onClose={() => setAdvisorOpen(false)}
        currentRegion={currentRegion}
        onOpenConsultation={() => {
          setAdvisorOpen(false);
          handleOpenConsultation();
        }}
      />

      <ConsultationBookingModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        currentRegion={currentRegion}
        initialService={consultationService}
        initialNotes={consultationNotes}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceId(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <GoogleCalendarModal
        isOpen={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        initialAttendeeEmail={calendarAttendeeEmail}
        initialMeetingSubject={calendarSubject}
      />

      <BookAuditModal
        isOpen={bookAuditOpen}
        onClose={() => setBookAuditOpen(false)}
        currentRegion={currentRegion}
      />
    </div>
  );
}
