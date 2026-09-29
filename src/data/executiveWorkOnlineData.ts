export interface ExecutiveMediaItem {
  id: string;
  title: string;
  source: 'Route Fifty' | 'GovExec' | 'AutoTech Detroit / DMI' | 'LinkedIn Pulse' | 'Port of Baltimore' | 'Leadership Maryland';
  category: 'National Press' | 'Executive Summit' | 'Fireside Chat' | 'LinkedIn Article' | 'Keynote Address';
  date: string;
  url: string;
  imageUrl?: string;
  quote?: string;
  summary: string;
  executiveTakeaway: string;
  metricsOrHighlights: string[];
  tags: string[];
}

export const executiveMediaItems: ExecutiveMediaItem[] = [
  {
    id: 'route-fifty-transit-leaders-tech-future-2025',
    title: 'Transit Leaders Look to Efficient, Tech-Driven Future',
    source: 'Route Fifty',
    category: 'National Press',
    date: 'July 21, 2025',
    url: 'https://www.route-fifty.com/digital-government/2025/07/transit-leaders-look-efficient-tech-driven-future/406859/',
    quote:
      'There is no extra money pouring in from the sky for transportation. Agencies must find ways to save money themselves through technology and reexamining business operations.',
    summary:
      'National in-depth feature highlighting Shafiq Rahman as Chief Information and Digital Transformation Officer at the Maryland Department of Transportation. Examines how transit leaders are actively rearchitecting operations to deliver maximum public efficiency amidst funding constraints.',
    executiveTakeaway:
      'Demonstrates proven executive stewardship in turning budget headwinds into strategic modernization catalysts without sacrificing citizen services.',
    metricsOrHighlights: [
      'Consolidating 7 disparate departmental IT shops into a unified enterprise organization.',
      'Slashing application portfolio from 856 to 620 systems (cutting 236 redundant platforms).',
      'Mandating paperless digital transformation across state transportation operations.',
      'Digitizing customer touchpoints with the Maryland Motor Vehicle Administration (MVA).',
    ],
    tags: ['Route Fifty', 'Application Rationalization', 'State CIO', 'Digital Transformation', 'IT Operating Model'],
  },
  {
    id: 'govexec-government-efficiency-summit-2025',
    title: 'GovExec Government Efficiency Summit: Accelerating Services & Reducing Friction',
    source: 'GovExec',
    category: 'Executive Summit',
    date: 'July 2025',
    url: 'https://www.linkedin.com/posts/govexec_govexec-governmentefficiencysummit-digitalgovernment-activity-7356669995038195714-wtgM',
    quote:
      'Technology accelerates services, helping public agencies meet evolving citizen expectations and systematically reducing operational friction at every turn.',
    summary:
      'Featured panel speaker at GovExec’s premier Government Efficiency Summit. Shafiq Rahman addressed national public sector executives on how automation, unified IT operating models, and disciplined portfolio management deliver measurable fiscal savings and higher service delivery velocity.',
    executiveTakeaway:
      'Recognized national voice on enterprise government efficiency and practical digital modernization.',
    metricsOrHighlights: [
      'Panelist alongside cabinet-level state and federal technology executives.',
      'Broadcast nationwide and available on-demand to public sector leaders.',
      'Framework for eliminating departmental IT silos and vendor duplication.',
      'Direct GovExec Summit on-demand streaming link provided.',
    ],
    tags: ['GovExec', 'Government Efficiency Summit', 'Public Sector Tech', 'Digital Government', 'AI in Government'],
  },
  {
    id: 'autotech-detroit-dmi-fireside-chat-2024',
    title: 'AutoTech: Detroit 2024 — Software-Defined Mobility & Critical Infrastructure Cybersecurity',
    source: 'AutoTech Detroit / DMI',
    category: 'Fireside Chat',
    date: 'June 2024',
    url: 'https://www.facebook.com/DMI.DoMore/posts/join-dmi-at-autotechdetroit2024-and-hear-from-two-visionary-leaders-during-our-f/1063931645358952/',
    imageUrl: '/images/autotech_detroit_shafiq.jpg',
    quote:
      'As transportation infrastructure becomes software-defined, cybersecurity cannot be an afterthought—it must be architected into every endpoint, sensor, and vehicle interface.',
    summary:
      'Executive Fireside Chat at the world-renowned AutoTech: Detroit 2024 conference hosted by DMI (Digital Management, LLC). Shafiq Rahman addressed global automotive OEMs, suppliers, and government mobility leaders on software-defined vehicles (SDVs), connected vehicle networks, and cybersecurity enclaves.',
    executiveTakeaway:
      'Bridges high-level automotive technology with state-level physical and cyber infrastructure protection.',
    metricsOrHighlights: [
      'Official conference speaker session alongside DMI automotive leadership.',
      'Addressed Software-Defined Vehicles (SDVs), telematics security, and edge cloud compute.',
      'Operational guidelines for connected infrastructure resilience.',
      'Cross-industry convergence of IoT, AI telemetry, and critical infrastructure.',
    ],
    tags: ['AutoTech Detroit', 'DMI', 'Cybersecurity', 'Software-Defined Vehicles', 'Connected Mobility'],
  },
  {
    id: 'linkedin-article-portfolio-rationalization',
    title: 'The 856-to-620 Playbook: How Enterprise Leaders Eliminate Application Sprawl',
    source: 'LinkedIn Pulse',
    category: 'LinkedIn Article',
    date: '2025',
    url: 'https://www.linkedin.com/in/shafiq-rahman-ms-mba-mcs-pmp%C2%AE-635b7115/',
    quote:
      'Application rationalization is never just a software audit. It is a governance pact that aligns budget, risk, and user behavior.',
    summary:
      'Shafiq Rahman breaks down the strategic methodology used to audit, score, and retire over 200 redundant software applications across six operational agencies, reallocating millions in ongoing licensing and maintenance costs into modern digital citizen services.',
    executiveTakeaway:
      'A repeatable 4-step framework (Tolerate, Invest, Migrate, Eliminate) for CIOs and CFOs battling shadow IT and vendor sprawl.',
    metricsOrHighlights: [
      'Application scoring rubric balancing business criticality against technical obsolescence.',
      'Contract negotiation strategies for retiring legacy annual maintenance agreements.',
      'Change management protocols to avoid business disruption during software decommission.',
    ],
    tags: ['LinkedIn Article', 'Application Portfolio', 'CIO Strategy', 'IT Financial Management'],
  },
  {
    id: 'linkedin-article-it-consolidation',
    title: 'Consolidating 7 IT Departments into 1 Enterprise Shared Service',
    source: 'LinkedIn Pulse',
    category: 'LinkedIn Article',
    date: '2025',
    url: 'https://www.linkedin.com/in/shafiq-rahman-ms-mba-mcs-pmp%C2%AE-635b7115/',
    quote:
      'Silos protect comfort; unified IT protects the institution. Unification succeeds only when leaders build trust before they mandate tools.',
    summary:
      'Insights from uniting seven decentralized departmental IT shops into a single high-velocity enterprise IT organization supporting 1,500 personnel and critical 24/7 public safety and dispatch operations.',
    executiveTakeaway:
      'Provides CEOs, agency heads, and boards with an actionable roadmap for reorganizing fragmented technology functions into a cohesive, accountable operating model.',
    metricsOrHighlights: [
      'Unified enterprise service desk and incident escalation protocols.',
      'Centralized capital budget prioritization and vendor governance.',
      'Talent retention strategies during public sector reorganizations.',
    ],
    tags: ['LinkedIn Article', 'Shared Services', 'IT Reorganization', 'Executive Leadership'],
  },
  {
    id: 'linkedin-activity-govexec-highlights',
    title: 'Accelerating Digital Government & AI Adoption: Live Summit Highlights',
    source: 'LinkedIn Pulse',
    category: 'LinkedIn Article',
    date: 'July 2025',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7481543304971739136/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8XYLaVLeQjG%2FGl0vKjb0Dw%3D%3D',
    quote:
      'Public expectations are shaped by consumer tech. Government systems cannot afford to remain 10 years behind.',
    summary:
      'Shafiq Rahman shares key takeaways from his GovExec panel on public sector AI adoption, automated document intelligence, and modernizing citizen-facing transactions with zero paper dependencies.',
    executiveTakeaway:
      'Actionable blueprint for government agencies and health systems transitioning legacy paper workflows to automated digital experiences.',
    metricsOrHighlights: [
      'Transitioning to 100% paperless workflows across multi-agency administrations.',
      'Implementing automated fraud prevention and identity verification in digital services.',
      'Engaging frontline employees in continuous digital optimization.',
    ],
    tags: ['LinkedIn Activity', 'GovExec', 'Paperless Office', 'Citizen Experience', 'AI in Government'],
  },
  {
    id: 'port-of-baltimore-technology-resilience',
    title: 'Port of Baltimore Executive Town Hall: Supply Chain Telemetry & OT Resiliency',
    source: 'Port of Baltimore',
    category: 'Keynote Address',
    date: '2024',
    url: 'https://www.linkedin.com/in/shafiq-rahman-ms-mba-mcs-pmp%C2%AE-635b7115/',
    quote:
      'Operational technology in ports and transit is life-critical infrastructure. Cyber resilience and physical throughput must operate as one.',
    summary:
      'Addressed port logistics leadership, terminal operators, and maritime engineers on strengthening operational technology (OT) network security, real-time cargo telemetry, and high-availability communication links.',
    executiveTakeaway:
      'Highlights deep domain expertise in critical infrastructure, logistics technology, and maritime operational safety.',
    metricsOrHighlights: [
      'Interconnecting maritime terminal OT systems with state transportation data feeds.',
      'Zero Trust network isolation for automated container cranes and access control.',
      'Disaster recovery planning for continuous port operations during network downtime.',
    ],
    tags: ['Port of Baltimore', 'Maritime Tech', 'Operational Technology (OT)', 'Critical Infrastructure'],
  },
  {
    id: 'leadership-maryland-executive-keynote',
    title: 'Leadership Maryland: The Executive CIO Playbook for Statewide Transformation',
    source: 'Leadership Maryland',
    category: 'Keynote Address',
    date: '2024',
    url: 'https://www.linkedin.com/in/shafiq-rahman-ms-mba-mcs-pmp%C2%AE-635b7115/',
    quote:
      'True digital transformation is 80% people, governance, and culture—and 20% technology. Get the governance right, and the technology delivers.',
    summary:
      'Keynote presentation to the Leadership Maryland Class of 2024, composed of senior corporate, healthcare, higher education, and government leaders from across the state of Maryland, sharing executive lessons on digital modernization and cross-sector technology governance.',
    executiveTakeaway:
      'Mentoring and guiding senior enterprise leaders on bridging executive strategy with complex technological change.',
    metricsOrHighlights: [
      'Statewide executive cohort of senior leaders across private and public sectors.',
      'Governance models for large-scale multi-million dollar technology programs.',
      'Building ethical AI frameworks and cross-sector partnerships in Maryland.',
    ],
    tags: ['Leadership Maryland', 'Keynote', 'Executive Governance', 'Statewide Leadership'],
  },
];
