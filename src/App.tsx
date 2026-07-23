import React, { useState, useEffect } from 'react';
import { Language, Region, PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { CybersecurityCenter } from './components/CybersecurityCenter';
import { IndustriesSection } from './components/IndustriesSection';
import { AISolutionsShowcase } from './components/AISolutionsShowcase';
import { AIReadinessAssessment } from './components/AIReadinessAssessment';
import { ResourcesHub } from './components/ResourcesHub';
import { PartnerEcosystem } from './components/PartnerEcosystem';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { RegionalMarketsSection } from './components/RegionalMarketsSection';
import { FloatingAIChatbot } from './components/FloatingAIChatbot';
import { AIAdvisorModal } from './components/AIAdvisorModal';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { servicesData } from './data/companyData';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SEOHead } from './components/SEOHead';
import { LeadershipSection } from './components/LeadershipSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { EnterpriseArchitectureSection } from './components/EnterpriseArchitectureSection';
import { ResearchComputingSection } from './components/ResearchComputingSection';
import { HardwareInfrastructureSection } from './components/HardwareInfrastructureSection';
import { BDAgentsSection } from './components/BDAgentsSection';
import { GovernmentPracticeSection } from './components/GovernmentPracticeSection';
import { GoogleCalendarModal } from './components/GoogleCalendarModal';
import { TrustSecurityCenter } from './components/TrustSecurityCenter';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [currentRegion, setCurrentRegion] = useState<Region>('US');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Modals
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
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
        onOpenAdvisor={() => setAdvisorOpen(true)}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenCalendar={() => handleOpenCalendar()}
      />

      {/* Main Page Rendering */}
      <main>
        {currentPage === 'home' && (
          <>
            <Hero
              currentLanguage={currentLanguage}
              currentRegion={currentRegion}
              onNavigate={handleNavigate}
              onOpenAdvisor={() => setAdvisorOpen(true)}
              onOpenConsultation={() => handleOpenConsultation()}
            />
            <ServicesOverview
              currentLanguage={currentLanguage}
              onOpenConsultation={handleOpenConsultation}
            />
            <AISolutionsShowcase
              currentLanguage={currentLanguage}
              onOpenAdvisor={() => setAdvisorOpen(true)}
              onOpenConsultation={handleOpenConsultation}
            />
            <BDAgentsSection
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
            <CybersecurityCenter
              currentLanguage={currentLanguage}
              currentRegion={currentRegion}
              onOpenConsultation={handleOpenConsultation}
            />
            <IndustriesSection
              currentLanguage={currentLanguage}
              currentRegion={currentRegion}
              onOpenConsultation={handleOpenConsultation}
            />
            <AIReadinessAssessment
              currentRegion={currentRegion}
              onOpenConsultation={handleOpenConsultation}
            />
            <PartnerEcosystem />
            <RegionalMarketsSection
              currentRegion={currentRegion}
              onSelectRegion={setCurrentRegion}
              onOpenConsultation={handleOpenConsultation}
            />
            <ResourcesHub
              currentLanguage={currentLanguage}
              onOpenConsultation={() => handleOpenConsultation()}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutSection
            currentLanguage={currentLanguage}
            currentRegion={currentRegion}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'leadership' && (
          <LeadershipSection
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'case-studies' && (
          <CaseStudiesSection
            onOpenConsultation={handleOpenConsultation}
          />
        )}

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
            onOpenAdvisor={() => setAdvisorOpen(true)}
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

        {currentPage === 'assessment' && (
          <AIReadinessAssessment
            currentRegion={currentRegion}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesHub
            currentLanguage={currentLanguage}
            onOpenConsultation={() => handleOpenConsultation()}
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
            onOpenAdvisor={() => setAdvisorOpen(true)}
          />
        )}
      </main>

      {/* Persistent Floating AI Chatbot */}
      <FloatingAIChatbot onOpenConsultation={handleOpenConsultation} />

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
    </div>
  );
}
