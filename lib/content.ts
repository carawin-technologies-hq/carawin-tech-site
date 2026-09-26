
export const company = {
  name: "Bharat Strategix",
  parent: "Carawin Pvt. Ltd.",
  tagline: "Transforming Industries. Empowering Institutions. Building Nations.",
  intro:
    "Bharat Strategix, the premier management consulting and strategic advisory division of Carawin Pvt. Ltd., serves as a trusted partner to governments, public institutions, multilateral development banks, Fortune 500 corporations, global investors, and high-growth enterprises.",
  mission:
    "To architect and execute solutions that drive national progress, accelerate industrial competitiveness, and foster inclusive, sustainable growth — moving beyond theoretical advisory to end-to-end operational execution.",
  emails: {
    government: "office@carawintech.com",
    digital: "office@carawintech.com",
    infra: "office@carawintech.com",
    capital: "office@carawintech.com",
  },
}

export const stats = [
  { value: "24", label: "Deployment Cohorts", suffix: "" },
  { value: "4", label: "Integrated Practice Groups", suffix: "" },
  { value: "100", label: "Advisory Frameworks", suffix: "+" },
  { value: "360", label: "Diagnose-to-Measure Delivery", suffix: "°" },
]

export const advisoryEdge = [
  {
    title: "Modernize Legacy Infrastructure",
    body: "Transition public and private institutions into agile, digital-first ecosystems.",
  },
  {
    title: "Navigate Market Realignments",
    body: "Build resilient supply chains, robust export channels, and self-reliant industrial capabilities.",
  },
  {
    title: "Deploy Scalable Technologies",
    body: "Safely adopt and scale artificial intelligence, zero-trust architectures, and smart automation.",
  },
  {
    title: "Unlock Sustainable Capital",
    body: "Leverage green finance, ESG frameworks, and optimized capital structuring for long-term value.",
  },
]

export type Sector = {
  slug: string
  number: number
  title: string
  short: string
  group: PracticeGroupId
  intro: string
  services: { title: string; body: string }[]
}

export type PracticeGroupId = "government" | "corporate" | "digital" | "infrastructure"

export const practiceGroups: Record<
  PracticeGroupId,
  { id: PracticeGroupId; label: string; blurb: string; email: string }
> = {
  government: {
    id: "government",
    label: "Government & Sovereign Advisory",
    blurb: "Ministries, governments, smart cities, municipalities and multilateral development banks.",
    email: "office@carawintech.com",
  },
  corporate: {
    id: "corporate",
    label: "Corporate Finance & Restructuring",
    blurb: "Fortune 500, manufacturing, FMCG, healthcare and high-growth enterprises.",
    email: "office@carawintech.com",
  },
  digital: {
    id: "digital",
    label: "Enterprise Technology & AI",
    blurb: "AI, cloud, ERP, cybersecurity and digital public infrastructure.",
    email: "office@carawintech.com",
  },
  infrastructure: {
    id: "infrastructure",
    label: "Infrastructure, Energy & Sustainability",
    blurb: "Energy, transport, PPP, capital markets and ESG.",
    email: "office@carawintech.com",
  },
}

export const sectors: Sector[] = [
  {
    slug: "government-public-policy",
    number: 1,
    title: "Government, Public Policy & Governance",
    short: "Agile, digital-first governance and data-driven public policy.",
    group: "government",
    intro:
      "Modern sovereign and administrative bodies must transform from traditional regulators into agile, digital-first catalysts of economic growth. Navigating demographic shifts, rising citizen expectations, and fiscal constraints requires data-driven policy and efficient public service delivery.",
    services: [
      { title: "Sovereign & Administrative Policy Design", body: "Master state and national roadmaps, strategic development plans, and inter-ministerial coordination models." },
      { title: "E-Governance & Digital Public Infrastructure", body: "Secure public registries, unified digital identities, transaction rails, and automated administrative systems for zero-latency service delivery." },
      { title: "Decentralized Governance & Urban Management", body: "Municipal reforms, capacity-building modules, and financial mechanisms like municipal bond frameworks." },
      { title: "Advisory for Multilateral Entities", body: "Supporting MDBs and regulatory bodies with impact-monitoring frameworks and public policy reforms." },
    ],
  },
  {
    slug: "education-skill-development",
    number: 2,
    title: "Education, Skill Development & Human Capital",
    short: "Digital, vocational, and market-aligned training systems.",
    group: "government",
    intro:
      "Rapid technological shifts driven by AI and automation demand continuous skill upgrades and education reform. To capture demographic opportunities, institutions must shift from rote models to digital, vocational, and market-aligned training systems.",
    services: [
      { title: "Higher Education & University Restructuring", body: "Curriculum design, institutional accreditation, research capacity building, and global university partnerships." },
      { title: "National & State Skill Initiatives", body: "Large-scale vocational programs with digital credentialing systems and corporate job-matching platforms." },
      { title: "K-12 & STEM Education Programs", body: "Teacher training, modern digital learning models, and early STEM curriculum design." },
      { title: "Corporate L&D & Workforce Transitioning", body: "Enterprise learning and capability programs focused on cloud, AI, and green energy adaptation." },
    ],
  },
  {
    slug: "agriculture-food-systems",
    number: 3,
    title: "Agriculture, Food Systems & Rural Economy",
    short: "Technology-driven, high-yield, market-linked farming systems.",
    group: "government",
    intro:
      "Achieving food security and optimizing rural growth requires a shift toward technology-driven, high-yield, and market-linked systems — critical to protecting agricultural livelihoods from changing climatic patterns.",
    services: [
      { title: "Agri-Tech & Precision Agriculture", body: "Remote-sensing crop telemetry, smart irrigation networks, and regional weather risk databases." },
      { title: "Farmer Producer Organization Scale-Up", body: "Professional management, corporate governance structures, and direct market access networks." },
      { title: "Cold Chain & Supply Chain Optimization", body: "Temperature-controlled logistics, cold-storage hubs, and post-harvest waste management." },
      { title: "Rural Livelihoods & Infrastructure", body: "Comprehensive rural programs supporting micro-enterprises, dairy cooperatives, and fisheries." },
    ],
  },
  {
    slug: "food-beverage-fmcg",
    number: 4,
    title: "Food, Beverage & FMCG",
    short: "Operational excellence and traceable, compliant supply chains.",
    group: "corporate",
    intro:
      "Consumer goods and food processing industries must navigate changing brand loyalty, shifting global diets, strict international sanitary rules, and highly dynamic ingredient distribution channels.",
    services: [
      { title: "Operational Excellence & Plant Performance", body: "Modernized layouts, optimized energy consumption, and lean workflows to minimize packaging waste." },
      { title: "Supply Chain Traceability & Food Safety", body: "Blockchain trace-and-track, quality assurance, and international food safety certification paths." },
      { title: "Go-to-Market & Retail Logistics", body: "Warehouse routing, safety-stock models, and distribution networks for retail and export businesses." },
      { title: "Nutraceuticals & Packaged Food Strategy", body: "Portfolio expansion, formulation compliance, and clean-label transitions for high-growth segments." },
    ],
  },
  {
    slug: "tribal-social-development",
    number: 5,
    title: "Tribal Affairs, Social Development & Inclusive Growth",
    short: "Data-driven, culturally rooted inclusive interventions.",
    group: "government",
    intro:
      "Socio-economic growth must be inclusive to remain sustainable. Targeted interventions require data-driven methodologies that preserve cultural heritage while integrating marginalized populations into regional trade, healthcare, and education networks.",
    services: [
      { title: "Socio-Economic Policy Architecture", body: "Targeted basic-needs distribution, micro-finance, and livelihood programs for indigenous regions." },
      { title: "Indigenous Knowledge Integration", body: "Documenting and commercializing native wellness formulations, agriculture, and artisanal crafts." },
      { title: "SDG Localization Matrix", body: "District-level measurement models aligning local actions with global sustainable development goals." },
      { title: "Social Impact Programs", body: "Tribal development, child welfare, and social justice audits for public agencies and CSR trusts." },
    ],
  },
  {
    slug: "healthcare-life-sciences",
    number: 6,
    title: "Healthcare, Life Sciences & Bioeconomy",
    short: "Resilient digital health platforms and bio-innovation.",
    group: "corporate",
    intro:
      "Modern healthcare requires balanced integration of clinical systems, digital health frameworks, and bio-technological innovation. Improving outcomes and reducing costs requires resilient platforms, strong drug supply chains, and optimized hospital operations.",
    services: [
      { title: "Digital Health Infrastructure", body: "EHR systems, telemedicine registries, and real-time public health monitoring platforms." },
      { title: "Biotech Commercialization Strategy", body: "Clinical-to-market paths for pharmaceutical compounds, bio-plastics, and genomics." },
      { title: "Clinical Operations Optimization", body: "Bed capacity utilization, clinical workflows, and resource allocation across hospital networks." },
      { title: "Bioeconomy Initiatives", body: "Strategic pathways for biological manufacturing, medical devices, and precision medicine." },
    ],
  },
  {
    slug: "power-energy-utilities",
    number: 7,
    title: "Power, Energy & Utilities",
    short: "Clean energy transitions and modernized smart grids.",
    group: "infrastructure",
    intro:
      "Navigating decarbonization while meeting rising energy demand requires a balanced approach to clean energy transitions. Utilities must modernize grids, manage carbon emissions, and integrate green hydrogen into storage networks.",
    services: [
      { title: "Clean Energy Integration Strategy", body: "Utility-level solar, wind, and pumped-hydro storage installations." },
      { title: "Smart Grid & Distribution Management", body: "Advanced Metering Infrastructure, localized distribution, and demand-response systems." },
      { title: "Nuclear & Hydrogen Horizons", body: "Regulatory approvals, technology acquisitions, and system integrations for green hydrogen." },
      { title: "Utility Modernization", body: "Operations re-engineering, transformer upgrades, and national energy efficiency programs." },
    ],
  },
  {
    slug: "manufacturing-industry-4",
    number: 8,
    title: "Manufacturing, Industrial Transformation & Industry 4.0",
    short: "Intelligent, automated production networks.",
    group: "corporate",
    intro:
      "Manufacturers must transition legacy operations into intelligent, automated production networks to maintain global cost competitiveness and satisfy quality standards.",
    services: [
      { title: "Industry 4.0 Implementations", body: "Industrial IoT, predictive maintenance sensors, and digital twin models on manufacturing lines." },
      { title: "Supply Optimization & Lean Execution", body: "Plant layout redesign, Six Sigma workflows, and demand-matched raw material flows." },
      { title: "Industrial Cluster Strategy", body: "Master-planning industrial corridors, chemical zones, and special economic manufacturing parks." },
      { title: "Automated Production & Robotics", body: "Smart assembly, robotic process integration, and automated quality control." },
    ],
  },
  {
    slug: "mining-minerals",
    number: 9,
    title: "Mining, Minerals & Resource Security",
    short: "High-yield extraction balanced with rehabilitation.",
    group: "infrastructure",
    intro:
      "Natural resource extraction must balance high yields with environmental rehabilitation and safety. Operators require advanced exploration data, automated haulage systems, and resource conservation plans.",
    services: [
      { title: "Digital Mine Implementations", body: "GIS integration, automated fleet dispatching, and sensory systems for deep mining safety." },
      { title: "Critical Mineral Strategies", body: "Exploration and processing operations for rare-earth metals, lithium, zirconium, and titanium." },
      { title: "Environmental Lifecycle Planning", body: "Sustainable land reclamation programs and environmental mitigation frameworks." },
      { title: "Resource Mapping & Processing", body: "Advanced data modelling to survey resources and design efficient beneficiation plants." },
    ],
  },
  {
    slug: "semiconductors-electronics",
    number: 10,
    title: "Semiconductors, Electronics & Advanced Materials",
    short: "Self-reliant fabrication and component ecosystems.",
    group: "digital",
    intro:
      "High-tech manufacturing self-reliance requires robust semiconductor fabrication facilities, integrated component packaging setups, and reliable supplies of specialty chemicals.",
    services: [
      { title: "Fab Ecosystem Strategy", body: "Semiconductor cluster designs, logistics pipelines, and technology transfer arrangements." },
      { title: "Supply Integration & Upstream Sourcing", body: "Ultra-pure chemicals, gases, and wafer-level base elements for high-tech applications." },
      { title: "Design & Verification Integration", body: "Support for design houses, PCB assemblers, and system packaging operators with market entry plans." },
      { title: "Electronics Manufacturing Infrastructure", body: "Special economic zones for display technologies, industrial electronics, and micro-components." },
    ],
  },
  {
    slug: "information-technology-digital",
    number: 11,
    title: "Information Technology, Digital & Emerging Technologies",
    short: "Scalable cloud networks and secure hybrid systems.",
    group: "digital",
    intro:
      "Digital system performance is critical for organizational agility. Organizations must transition legacy computing resources into scalable cloud networks and secure hybrid databases.",
    services: [
      { title: "Modernizing Enterprise IT", body: "Large-scale ERP implementations, database migrations, and microservice setups." },
      { title: "Zero-Trust Cybersecurity Strategy", body: "Security monitoring, IAM directories, and end-to-end data encryption." },
      { title: "Building Public Digital Frameworks", body: "Identity structures, open payment APIs, and shared cloud resources for government clients." },
      { title: "Software Product Development & SaaS", body: "Design, launch, and scale of cloud-native software and ITES operations." },
    ],
  },
  {
    slug: "artificial-intelligence",
    number: 12,
    title: "Artificial Intelligence & Deep Technologies",
    short: "Automated reasoning and predictive optimization.",
    group: "digital",
    intro:
      "Artificial intelligence has progressed from simple pattern classification to automated reasoning and predictive optimization, unlocking new frontiers of enterprise and public value.",
    services: [
      { title: "Enterprise Generative AI", body: "Fine-tuned LLMs in secure private environments for customer support and document processing." },
      { title: "Predictive Operations Engines", body: "Neural network models optimizing industrial processes, crop yields, and warehouse logistics." },
      { title: "Computer Vision Solutions", body: "Automated optical inspection integrated into quality assurance and diagnostic workflows." },
      { title: "Digital Twins & Intelligent Systems", body: "Real-time virtual models of operations, cities, and networks to simulate efficiency strategies." },
    ],
  },
  {
    slug: "infrastructure-smart-cities",
    number: 13,
    title: "Infrastructure, Urban Development & Smart Cities",
    short: "Resilient infrastructure and integrated transit.",
    group: "infrastructure",
    intro:
      "Expanding urban populations require highly resilient infrastructure. Delivering sustainable development requires structured capital investment, integrated transit, and smart municipal utilities.",
    services: [
      { title: "Transit Oriented Development", body: "Metro, highway, and airport systems integrated with retail, commercial, and residential spaces." },
      { title: "Smart Utility Orchestration", body: "Smart water networks, automated waste recycling, and automated street lighting grids." },
      { title: "PPP Deal Advisory", body: "Public-private partnership agreements, tender processes, and project risk models." },
      { title: "Urban Infrastructure & Housing", body: "Sustainable housing developments and integrated sanitation networks for smart cities." },
    ],
  },
  {
    slug: "transportation-logistics",
    number: 14,
    title: "Transportation, Logistics & Supply Chain",
    short: "Seamless intermodal freight and automated warehousing.",
    group: "infrastructure",
    intro:
      "Seamless freight movement across rail, road, maritime, and air cargo is critical for commercial competitiveness. Supply chains must leverage automated warehouses, route optimization, and intermodal centres.",
    services: [
      { title: "Intermodal Logistics Masterplans", body: "Integrated inland container depots, dry ports, and dedicated freight corridors." },
      { title: "Automated Warehouse Designs", body: "Automated storage and retrieval systems and dynamic scheduling software." },
      { title: "Last-Mile Distribution Networks", body: "Optimized urban distribution routes for retail networks and e-commerce platforms." },
      { title: "Maritime & Aviation Logistics", body: "Capacity-planning models and security clearances for port and airport authorities." },
    ],
  },
  {
    slug: "electric-mobility-automotive",
    number: 15,
    title: "Electric Mobility, Automotive & Clean Transportation",
    short: "Scaled charging, localized EV supply lines.",
    group: "infrastructure",
    intro:
      "The transport sector's transition to electric drivetrains requires scaled battery charging infrastructure, secure component supply lines, and cell recycling operations.",
    services: [
      { title: "Fleet Electrification Strategy", body: "Total cost of ownership models and charging routine scheduling for corporate and municipal clients." },
      { title: "Charging Network Placements", body: "Location planning, power grid demand projections, and billing architectures." },
      { title: "EV Supply Line Localization", body: "Retargeting component manufacturing for battery management, traction motors, and drivetrains." },
      { title: "Sustainable Transportation Systems", body: "Policy drafting to accelerate clean public transit transitions." },
    ],
  },
  {
    slug: "financial-services-banking",
    number: 16,
    title: "Financial Services, Banking & Investments",
    short: "Digital banking and sustainable finance structuring.",
    group: "corporate",
    intro:
      "Financial systems are shifting toward mobile banking, digital payment networks, and algorithmic investment profiling within active regulatory environments.",
    services: [
      { title: "Digital Bank Transformations", body: "Modernized core banking platforms, onboarding interfaces, and mobile applications." },
      { title: "Sustainable Finance Structuring", body: "Green bond frameworks, carbon finance models, and social impact investments aligned to ESG." },
      { title: "Strategic Investment Allocations", body: "Commercial and technical due diligence for private equity and venture capital funds." },
      { title: "Transaction Advisory & Fund Structuring", body: "Asset distribution and project financing routes for complex infrastructure programs." },
    ],
  },
  {
    slug: "startups-innovation",
    number: 17,
    title: "Startups, Innovation & Entrepreneurship",
    short: "Incubation, IP transfer, and venture readiness.",
    group: "digital",
    intro:
      "Startup ecosystems require active support, technology-transfer pathways, and incubation programs to turn inventions into commercial companies.",
    services: [
      { title: "Incubation Centre Designs", body: "Operational systems, partner networks, and workspace planning for regional incubators." },
      { title: "University IP Transfers", body: "Structured technology transfer offices and licensing agreements for academic patents." },
      { title: "Venture Investment Prep", body: "Financial modelling, target valuation, and venture presentations for early-stage founders." },
      { title: "Ecosystem Orchestration", body: "State startup policies, funding networks, and industry-academic innovation challenges." },
    ],
  },
  {
    slug: "international-trade-exports",
    number: 18,
    title: "International Trade, Exports & Global Market Access",
    short: "Export optimization and trade facilitation.",
    group: "corporate",
    intro:
      "Dynamic tariff barriers, bilateral trade updates, and redesigned global supply chains require export optimization. Businesses must build compliance programs, simplify logistics, and access international markets.",
    services: [
      { title: "Bilateral & Multilateral Trade Strategy", body: "Trade models, tariff analysis, and supply chain localization under Free Trade Agreements." },
      { title: "Trade Facilitation Infrastructure", body: "Streamlined processes at land ports, sea ports, and special economic zones." },
      { title: "Export Promotion Frameworks", body: "Aligning regional manufacturing strengths with global product compliance and quality standards." },
      { title: "Global Market Entry", body: "Strategic intelligence and partner matching for companies expanding overseas." },
    ],
  },
  {
    slug: "media-communications",
    number: 19,
    title: "Media, Communications & Digital Engagement",
    short: "Data-supported narratives and reputation management.",
    group: "digital",
    intro:
      "Managing corporate reputations and explaining public policy requires consistent, data-supported, and responsive narratives across digital and offline media channels.",
    services: [
      { title: "Crisis Communications Frameworks", body: "Corporate and sovereign response workflows to mitigate brand risk and handle PR crises." },
      { title: "Targeted Public Campaigns", body: "National behavioural-change campaigns for sanitation, vaccination, and financial inclusion." },
      { title: "Information Management Solutions", body: "Automated sentiment-monitoring tools, stakeholder messaging, and executive positioning." },
      { title: "Branding & Reputation Management", body: "High-impact digital platform architectures to build brand authority and stakeholder trust." },
    ],
  },
  {
    slug: "tourism-culture-sports",
    number: 20,
    title: "Tourism, Culture, Sports & Creative Economy",
    short: "Experiential economies and heritage development.",
    group: "government",
    intro:
      "Experiential economies are valuable catalysts for regional employment and identity. Maximizing heritage sites, sports leagues, and artistic ventures requires sustainable infrastructure and integrated platforms.",
    services: [
      { title: "Sustainable Destination Development", body: "Master plans for eco-tourism, cultural paths, and tribal tourism supporting host communities." },
      { title: "Sports Infrastructure Strategy", body: "Financing, operating models, and post-event usage for arenas and training centers." },
      { title: "Digital Preservation & Creative Outlets", body: "Digital twins of heritage sites, immersive museums, and online creative marketplaces." },
      { title: "Creative Economy Initiatives", body: "Investment strategies for traditional crafts, performing arts, and digital content hubs." },
    ],
  },
  {
    slug: "csr-esg-sustainability",
    number: 21,
    title: "CSR, ESG, Climate & Sustainability",
    short: "Decarbonization pathways and ESG disclosure.",
    group: "infrastructure",
    intro:
      "Managing environmental, social, and governance risks is critical for long-term commercial performance and maintaining access to international capital markets.",
    services: [
      { title: "Carbon Decarbonization Pathways", body: "Quantifying Scope 1, 2, and 3 emissions and identifying carbon reduction opportunities." },
      { title: "ESG Disclosure Support", body: "Structuring disclosure programs to satisfy GRI, SASB, and BRSR reporting frameworks." },
      { title: "Socio-Environmental Impact Assessments", body: "Directing and auditing CSR investments in clean water, education, and health." },
      { title: "Circular Economy Strategy", body: "Zero-waste product lifecycles and sustainable supply strategies for manufacturers." },
    ],
  },
  {
    slug: "defence-homeland-security",
    number: 22,
    title: "Defence, Homeland Security & Strategic Affairs",
    short: "Self-reliant defence industrial bases.",
    group: "government",
    intro:
      "Geopolitical fragmentation demands absolute self-reliance in defence manufacturing, intelligence coordination, and border security. Localized industrial bases require structured technology transfer, compliance, and capital.",
    services: [
      { title: "Defence Industrial Localization", body: "Joint ventures, offset-credit optimization, and domestic manufacturing ecosystems for strategic systems." },
      { title: "Border Infrastructure Resiliency", body: "Logistics networks, secure communication links, and sensory arrays in complex terrains." },
      { title: "Advanced Defence Technologies", body: "Strategic integration of robotics, autonomous aerial vehicles, and secure communication protocols." },
      { title: "Defence Innovation Ecosystems", body: "Incubators and accelerators connecting tech startups with national procurement divisions." },
    ],
  },
  {
    slug: "research-analytics",
    number: 23,
    title: "Research, Surveys, Analytics & Knowledge Management",
    short: "Verified baseline data and economic modelling.",
    group: "government",
    intro:
      "Strategic development and public policy decisions require verified baseline data, objective field reviews, and detailed economic models.",
    services: [
      { title: "Field Surveys & Program Audits", body: "Independent baseline, midline, and endline evaluations for community programs." },
      { title: "Geospatial Planning Layer (GIS)", body: "Spatial maps to plan infrastructure corridors, agricultural systems, and municipal zones." },
      { title: "Detailed Project Reports (DPRs)", body: "Institutional-grade financial plans, cost-benefit spreadsheets, and risk plans for infrastructure bids." },
      { title: "Policy Research & Economic Analysis", body: "Rigorous macroeconomic studies and qualitative policy reviews to guide executive decisions." },
    ],
  },
  {
    slug: "business-turnaround",
    number: 24,
    title: "Business Turnaround, Revival & Transformation",
    short: "Rapid restructuring and operational realignment.",
    group: "corporate",
    intro:
      "Sudden shifts in consumer demand, operations, or credit conditions can cause corporate distress. Recovery requires rapid capital restructuring and realigned operational plans.",
    services: [
      { title: "Financial & Operational Restructuring", body: "Renegotiating loan profiles, divesting non-core assets, and reducing variable cost bases." },
      { title: "Industrial Plant Revivals", body: "Helping suspended factories review labor agreements, source components, and retool facilities." },
      { title: "Strategic Acquisitions", body: "Identifying, evaluating, and integrating distressed acquisition opportunities." },
      { title: "Cost Optimization Programs", body: "Overhead reviews and operational reorganizations to accelerate growth." },
    ],
  },
]

export type CapabilityCluster = {
  title: string
  items: string[]
}

export const capabilities: CapabilityCluster[] = [
  {
    title: "Strategy & Corporate Finance",
    items: [
      "Sovereign and Corporate Strategic Management",
      "Operational Restructuring & Cost Management",
      "M&A, Due Diligence, and Transaction Advisory",
      "Fundraising & Institutional Capital Alignment",
    ],
  },
  {
    title: "Public Policy & Governance Delivery",
    items: [
      "Administrative Reforms & Policy Design",
      "Program Management Units (PMUs) & PMC Services",
      "Public-Private Partnerships (PPP) Design & Sourcing",
      "Change Management & Institutional Capacity Building",
    ],
  },
  {
    title: "Digital Systems & Intelligent Operations",
    items: [
      "Enterprise-Scale Digital Transformation",
      "Generative AI, Machine Learning & Robotic Automation",
      "Technology Transfer & IP Commercialization",
      "Advanced Data Systems & Strategic Analytics",
    ],
  },
  {
    title: "Impact, Sustainability & Research",
    items: [
      "Monitoring, Evaluation, and Learning (MEL) Systems",
      "CSR Planning & BRSR-aligned ESG Advisory",
      "Field Surveys, GIS Mapping & Policy Research",
      "Multi-criteria Outcome & Social Impact Assessments",
    ],
  },
]

export const framework = [
  {
    step: "01",
    title: "Diagnose",
    body: "We conduct quantitative audits, baseline surveys, and regulatory reviews to understand operating realities before designing solutions.",
  },
  {
    step: "02",
    title: "Architect",
    body: "We design customized operational models, strategic roadmaps, risk frameworks, and technological architectures tailored to project goals.",
  },
  {
    step: "03",
    title: "Execute",
    body: "We support delivery through structured Program Management Units (PMUs), guiding implementation and navigating organizational change.",
  },
  {
    step: "04",
    title: "Measure",
    body: "We apply rigorous analytics and impact evaluations to verify resource efficiency and ensure sustainable capability transfer.",
  },
]

export const navSectors = sectors.map((s) => ({ slug: s.slug, title: s.title, number: s.number, group: s.group }))

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug)
}

export type CapabilityPillar = {
  id: string
  title: string
  headline: string
  description: string
  items: string[]
  relatedSectorSlugs: string[]
}

export const capabilityPillars: CapabilityPillar[] = [
  {
    id: "ai-education",
    title: "AI in Education",
    headline: "Intelligent Learning, Teaching & Institutional Analytics",
    description: "Adaptive learning systems, teacher copilots, automated assessment, and language labs built for institutional scale.",
    items: [
      "Curriculum-aligned adaptive pathways",
      "Teacher assistance for planning & differentiation",
      "Multilingual Indian language speech interfaces",
      "Continuous student engagement tracking",
    ],
    relatedSectorSlugs: ["education", "government"],
  },
  {
    id: "dpi",
    title: "Digital Public Infrastructure",
    headline: "Connected Campuses, STEM & Innovation Labs",
    description: "Hardware and digital infrastructure combining smart classrooms, virtual STEM, IoT and robotics labs.",
    items: [
      "Center of Excellence lab design",
      "Embedded IoT sensor kits",
      "Virtual physics, chemistry and engineering simulations",
      "Digital campus network architecture",
    ],
    relatedSectorSlugs: ["education", "infrastructure"],
  },
  {
    id: "skills-training",
    title: "Skills & Training",
    headline: "Human Capability Building for the Tech Economy",
    description: "Equipping teachers, students, civil servants and industry workforces with future-ready digital competencies.",
    items: [
      "Teacher digital pedagogy and AI literacy",
      "Hands-on IoT, robotics & coding workshops",
      "Vocational skill missions & certifications",
      "Executive digital transformation seminars",
    ],
    relatedSectorSlugs: ["education", "corporate"],
  },
  {
    id: "industrial-iot",
    title: "AI, Software & IoT Products",
    headline: "Custom Enterprise Products Across Key Sectors",
    description: "Custom software, IoT telemetry, process analytics and intelligent automation across real-world industries.",
    items: [
      "Power & energy telemetry systems",
      "Steel & manufacturing process monitoring",
      "Smart agriculture environmental sensing",
      "Air & water quality monitoring dashboards",
    ],
    relatedSectorSlugs: ["corporate", "infrastructure"],
  },
]

export type CapabilityMatrixRow = {
  pillarId: string
  groups: Record<PracticeGroupId, 0 | 1 | 2 | 3>
}

export const capabilityMatrix: CapabilityMatrixRow[] = [
  {
    pillarId: "ai-education",
    groups: { government: 3, corporate: 1, digital: 3, infrastructure: 2 },
  },
  {
    pillarId: "dpi",
    groups: { government: 3, corporate: 2, digital: 2, infrastructure: 3 },
  },
  {
    pillarId: "skills-training",
    groups: { government: 3, corporate: 3, digital: 2, infrastructure: 1 },
  },
  {
    pillarId: "industrial-iot",
    groups: { government: 2, corporate: 3, digital: 3, infrastructure: 3 },
  },
]

