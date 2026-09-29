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
import { ContactSection } from './components/ContactSection';
import { RegionalMarketsSection } from './components/RegionalMarketsSection';
import { AIAdvisorModal } from './components/AIAdvisorModal';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { servicesData } from './data/companyData';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SEOHead } from './components/SEOHead';
import { GoogleCalendarModal } from './components/GoogleCalendarModal';
import { TrustSecurityCenter } from './components/TrustSecurityCenter';
import { BookAuditModal } from './components/BookAuditModal';
import { FreeToolsSection } from './components/FreeToolsSection';
import { ERPModernizationSection } from './components/ERPModernizationSection';
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
import { ResearchPublicationsPage } from './components/ResearchPublicationsPage';
import { ExecutiveWorkMediaSection } from './components/ExecutiveWorkMediaSection';

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

  // Deep-linking & URL SEO Synchronization
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page') as PageId | null;
    const hash = window.location.hash.replace('#', '') as PageId | null;
    const initialPage = pageParam || hash;

    if (initialPage) {
      setCurrentPage(initialPage);
    }

    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      const p = currentParams.get('page') as PageId | null;
      if (p) {
        setCurrentPage(p);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId, detailId?: string) => {
    if (page === 'service-detail' && detailId) {
      setSelectedServiceId(detailId);
    } else {
      setSelectedServiceId(null);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser URL query string for clean bookmarking & sharing
    try {
      const newUrl = page === 'home' ? window.location.pathname : `${window.location.pathname}?page=${page}`;
      window.history.pushState({ page }, '', newUrl);
    } catch {
      // fallback in sandbox if history state restricted
    }
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

            {/* Executive Advisory Retainers & Strategic Sprints */}
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

            {/* Peer-Reviewed Research & Clinical Publications Spotlight */}
            <div className="bg-slate-900/60 border-y border-slate-800 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
                      Academic Medicine & Clinical Scholarship
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Peer-Reviewed Research & Clinical Informatics
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                      8 peer-reviewed research papers and proceedings authored by <strong className="text-white">Shafiq Rahman, MS, MBA, MCS, PMP®</strong> on clinical cybersecurity, EMR data integrity (E-Variance), hospital cyberattack emergency plans, and radiation oncology system integrations.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href="https://scholar.google.com/citations?user=L0j_am8AAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-all flex items-center gap-2 shadow-sm"
                    >
                      <span className="text-amber-400 font-mono text-xs">Google Scholar</span>
                      <span className="text-[10px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded font-mono">11 Citations</span>
                    </a>

                    <button
                      onClick={() => handleNavigate('research-publications')}
                      className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
                    >
                      <span>Explore 8 Publications</span>
                      <span className="text-xs">→</span>
                    </button>
                  </div>
                </div>

                {/* 3 Featured Publications Snapshot */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:border-slate-700 transition-all">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">2018 · Cited by 9</span>
                        <span className="text-slate-400">Appl Rad Oncol</span>
                      </div>
                      <h4 className="text-sm font-bold text-white line-clamp-2">
                        The Impact of Cybersecurity in Radiation Oncology: Logistics and Challenges
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                        Evaluates attack surfaces on medical devices, linear accelerators, and oncology EMRs, recommending segmented network enclaves and clinical continuity plans.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('research-publications')}
                      className="text-xs text-blue-400 hover:text-amber-400 font-mono font-semibold self-start flex items-center gap-1"
                    >
                      <span>Read Glimpse & Impact</span>
                      <span>→</span>
                    </button>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:border-slate-700 transition-all">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">2026 · Latest</span>
                        <span className="text-slate-400">Healthcare Tech Letters</span>
                      </div>
                      <h4 className="text-sm font-bold text-white line-clamp-2">
                        E‐Variance: An Application to Assure Clinical Data Integrity and Patient Safety in EMR
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                        Custom web-based incident learning application engineered to capture frontline EMR data errors and eliminate latent clinical hazards in hospital workflows.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('research-publications')}
                      className="text-xs text-blue-400 hover:text-amber-400 font-mono font-semibold self-start flex items-center gap-1"
                    >
                      <span>Read Glimpse & Impact</span>
                      <span>→</span>
                    </button>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:border-slate-700 transition-all">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-blue-400 font-bold bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60">2017 · Disaster Recovery</span>
                        <span className="text-slate-400">Medical Physics</span>
                      </div>
                      <h4 className="text-sm font-bold text-white line-clamp-2">
                        A Risk Management Plan Against Cyber-Attacks: 24-Hour Emergency Continuity Plan
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                        Pioneering hospital disaster recovery protocol for a 6-site health system with 11 linear accelerators and 5 proton machines during catastrophic cyber compromise.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('research-publications')}
                      className="text-xs text-blue-400 hover:text-amber-400 font-mono font-semibold self-start flex items-center gap-1"
                    >
                      <span>Read Glimpse & Impact</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Work Online, National Press & Keynotes Showcase */}
            <ExecutiveWorkMediaSection
              onOpenConsultation={handleOpenConsultation}
              onNavigate={handleNavigate}
              isFullPage={false}
            />

            {/* Free Executive Tools & Diagnostics */}
            <FreeToolsSection
              currentRegion={currentRegion}
              onOpenBookAudit={() => setBookAuditOpen(true)}
            />

            {/* Executive Direct Contact & Advisory Scheduling */}
            <ContactSection
              currentLanguage={currentLanguage}
              currentRegion={currentRegion}
              onOpenConsultation={() => handleOpenConsultation()}
              onOpenAdvisor={() => handleNavigate('ai-advisor')}
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

        {/* Dedicated Peer-Reviewed Research & Publications Page */}
        {(currentPage === 'research-publications' || currentPage === 'publications') && (
          <ResearchPublicationsPage
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {/* Dedicated Press, Keynotes & Media Coverage Page */}
        {(currentPage === 'press-media' || currentPage === 'executive-work') && (
          <ExecutiveWorkMediaSection
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
            isFullPage={true}
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
            onNavigate={handleNavigate}
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
          <ServicesOverview
            currentLanguage={currentLanguage}
            onOpenConsultation={handleOpenConsultation}
          />
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
