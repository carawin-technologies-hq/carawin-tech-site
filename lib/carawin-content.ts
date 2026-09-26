/* =========================================================
   CARAWIN TECHNOLOGIES — OFFICIAL SITE CONTENT DATA
   ========================================================= */

export type DetailContent = {
  slug: string
  name: string
  short: string
  desc: string
  intro: string
  focus: string
  capabilities: string[]
  workflow: string[]
  outcomes: string[]
  image?: string
  group?: string
}

/* ---------------------------------------------------------
   1. FIVE CORE VERTICALS (Solutions)
   --------------------------------------------------------- */

export type SolutionVertical = {
  index: string
  slug: string
  name: string
  tagline: string
  desc: string
  subItems: string[]
  href: string
  iconName?: string
  details?: {
    overview: string
    subFeatures: { title: string; desc: string; bullets?: string[] }[]
    coreJourney?: { title: string; steps: string[] }
  }
}

export const solutionVerticals: SolutionVertical[] = [
  {
    index: "01",
    slug: "ai-in-education",
    name: "AI in Education",
    tagline: "Intelligence for personalized learning and institutional insight.",
    desc: "Carawin combines AI, learning technology, language technologies, assessment, analytics and virtual experimentation to create responsive learning environments.",
    subItems: [
      "Adaptive Learning Platforms",
      "Speech-to-Text & Text-to-Speech",
      "Automated Grading & Assessment",
      "Student Engagement Tracking",
      "Content Recommendation Engines",
      "Teacher-Assist AI",
      "Virtual STEM Simulations",
      "Career Counselling & Guidance",
      "Language Lab",
    ],
    href: "/solutions/ai-in-education",
    details: {
      overview: "Personalized learning, AI tutors, adaptive learning, assessment, analytics, language technologies, career guidance and virtual STEM that understand curriculum and pedagogy.",
      subFeatures: [
        {
          title: "Adaptive Learning Platforms",
          desc: "Personalized learning pathways based on learner progress, performance, learning gaps and activity.",
        },
        {
          title: "Speech-to-Text & Text-to-Speech",
          desc: "AI-enabled voice and language technologies supporting Indian-language learning and accessibility.",
        },
        {
          title: "Automated Grading & Assessment",
          desc: "Technology-enabled assessment, evaluation support, feedback and learning-gap identification.",
        },
        {
          title: "Student Engagement Tracking",
          desc: "Analytics to understand participation, activity, progress and engagement.",
        },
        {
          title: "Content Recommendation Engines",
          desc: "Personalized recommendations based on learning requirements, performance and progress.",
        },
        {
          title: "Teacher-Assist AI",
          desc: "Support for curriculum planning, lesson planning, worksheets, quizzes, question generation, assessment, learning resources and student analysis.",
          bullets: ["Curriculum & Lesson Planning", "Worksheets & Quizzes", "Question Generation", "Remedial Student Analysis"],
        },
        {
          title: "Virtual STEM Simulations",
          desc: "Interactive experimentation across Physics, Chemistry, Biology, Mathematics and Engineering.",
        },
        {
          title: "Career Counselling & Guidance",
          desc: "Technology-enabled career awareness, pathway exploration, skill awareness and future-career guidance.",
        },
        {
          title: "Language Lab",
          desc: "Technology-enabled development of Listening, Speaking, Reading, Pronunciation and Communication.",
        },
      ],
      coreJourney: {
        title: "CORE JOURNEY",
        steps: ["LEARN", "ASSESS", "ADAPT", "PRACTISE", "IMPROVE"],
      },
    },
  },
  {
    index: "02",
    slug: "digital-public-infrastructure",
    name: "Digital Public Infrastructure",
    tagline: "Building technology-enabled institutions and connected learning environments.",
    desc: "Carawin can design and implement integrated technology environments for schools, colleges, government institutions and communities.",
    subItems: [
      "AI Innovation Lab",
      "Virtual STEM Lab",
      "IoT Lab",
      "Robotics Lab",
      "STEM Lab",
      "Digital Campus & Smart Classrooms",
    ],
    href: "/solutions/digital-public-infrastructure",
    details: {
      overview: "AI Labs, Virtual STEM Labs, IoT Labs, Robotics Labs, STEM Labs and technology-enabled institutional infrastructure.",
      subFeatures: [
        {
          title: "AI Innovation Lab",
          desc: "AI awareness, experimentation, coding, Generative AI concepts, projects and innovation.",
        },
        {
          title: "Virtual STEM Lab",
          desc: "Interactive digital experiments, simulations and immersive STEM learning modules.",
        },
        {
          title: "IoT Lab",
          desc: "Sensors, electronics, microcontrollers, connected systems, environmental monitoring and automation.",
        },
        {
          title: "Robotics Lab",
          desc: "Robotics kits, programming, electronics, embedded hardware, sensors and autonomous project development.",
        },
        {
          title: "STEM Lab",
          desc: "Science, Technology, Engineering and Mathematics through practical experimentation and project-based learning.",
        },
      ],
      coreJourney: {
        title: "THE INTEGRATED MODEL",
        steps: ["AI LAB", "VIRTUAL STEM LAB", "IoT LAB", "ROBOTICS LAB", "STEM LAB", "DIGITAL LEARNING"],
      },
    },
  },
  {
    index: "03",
    slug: "skills-and-training",
    name: "Skills & Training",
    tagline: "Building human capability for the technology economy.",
    desc: "Technology infrastructure alone is not enough. People need the skills to use, understand and create with technology.",
    subItems: [
      "Teacher Training & Digital Pedagogy",
      "AI Exposure & Prompt Engineering",
      "IoT & Robotics Hands-on Training",
      "Vocational & Emerging Tech Training",
      "Adult Training & Workplace Digital Literacy",
      "Seminars, Conferences & Workshops",
    ],
    href: "/solutions/skills-and-training",
    details: {
      overview: "Teacher training, AI and emerging-technology exposure, vocational training, adult learning, workshops, seminars and conferences.",
      subFeatures: [
        {
          title: "Teacher Training",
          desc: "Programmes covering AI, digital education, virtual STEM, IoT, robotics, coding, digital assessment and technology-enabled pedagogy.",
        },
        {
          title: "AI Exposure",
          desc: "For students, teachers, professionals, institutions and government stakeholders: AI fundamentals, Generative AI, applications, tools, responsible AI, prompting and productivity.",
        },
        {
          title: "IoT & Robotics Training",
          desc: "Hands-on learning covering sensors, electronics, microcontrollers, IoT, automation, robotics, programming and prototyping.",
        },
        {
          title: "Vocational Training",
          desc: "Technology-oriented skill development in areas such as AI, IoT, robotics, electronics, software, digital technologies and smart systems.",
        },
        {
          title: "Adult Training",
          desc: "Digital literacy, AI awareness, workplace technology, entrepreneurship and emerging technology.",
        },
        {
          title: "Seminars, Conferences & Workshops",
          desc: "Connecting government, academia, industry, technology companies and innovation ecosystems through hands-on learning.",
        },
      ],
    },
  },
  {
    index: "04",
    slug: "ai-software-iot",
    name: "AI, Software & IoT Product Development",
    tagline: "From problem to product across real-world sectors.",
    desc: "Carawin develops and explores AI, software and IoT-enabled solutions for real-world sectors including Power, Steel, Agriculture, Air, Water, Environment and Energy.",
    subItems: [
      "Power & Energy Monitoring Systems",
      "Steel & Industrial Process Analytics",
      "Smart Agriculture & Sensing Solutions",
      "Air Quality & Environmental Dashboards",
      "Water Management & Smart Systems",
      "Smart Infrastructure & Automation",
    ],
    href: "/solutions/ai-software-iot",
    details: {
      overview: "Technology products and solutions for Power, Steel, Agriculture, Air, Water, Environment, Energy and other sectors.",
      subFeatures: [
        { title: "Power", desc: "Monitoring, analytics, energy intelligence and IoT-enabled systems." },
        { title: "Steel", desc: "Industrial monitoring, AI, IoT, process analytics and digital systems." },
        { title: "Agriculture", desc: "Smart agriculture, sensors, environmental monitoring and data-enabled decision support." },
        { title: "Air", desc: "Environmental sensing, air quality monitoring, dashboards and predictive analytics." },
        { title: "Water", desc: "Water monitoring, sensing, smart systems and resource management." },
        { title: "Environment & Energy", desc: "Technology-enabled monitoring, resource-management and digital energy optimisation." },
        { title: "Smart Infrastructure", desc: "Connected systems, IoT, custom software and intelligent infrastructure monitoring." },
      ],
      coreJourney: {
        title: "PRODUCT DEVELOPMENT JOURNEY",
        steps: ["IDENTIFY", "RESEARCH", "DESIGN", "PROTOTYPE", "PILOT", "VALIDATE", "SCALE"],
      },
    },
  },
  {
    index: "05",
    slug: "consultancy-and-advisory",
    name: "Consultancy & Advisory",
    tagline: "Technology-led consultancy for the real world.",
    desc: "Carawin provides technology and innovation consultancy across sectors. We help organisations move from problem to strategy to technology, implementation and impact.",
    subItems: [
      "Digital Transformation Strategy",
      "AI Strategy & Readiness Roadmap",
      "Education Technology Planning",
      "Government & DPI Advisory",
      "Industrial Technology & IoT Advisory",
      "CSR Programme Structuring & Impact",
    ],
    href: "/consultancy",
    details: {
      overview: "Technology strategy, digital transformation, AI strategy, feasibility, programme design, product advisory and cross-sector technology consulting.",
      subFeatures: [
        { title: "Digital Transformation", desc: "Technology strategy, digital maturity, process digitisation and transformation roadmaps." },
        { title: "AI Strategy", desc: "AI opportunity assessment, use-case identification, AI roadmap, Generative AI and implementation planning." },
        { title: "Education Technology", desc: "AI education, adaptive learning, STEM, digital learning, labs, assessment and future skills." },
        { title: "Government & DPI", desc: "Digital public infrastructure, programme design, technology-enabled education and public-sector transformation." },
        { title: "Industrial Technology & IoT", desc: "Sensor architecture, connectivity, monitoring, dashboards and automation for industrial sectors." },
        { title: "Software & Digital Product", desc: "Product strategy, platform design, technology architecture, MVP and digital product development." },
        { title: "Innovation Consultancy", desc: "Innovation strategy, technology challenges, prototypes, POCs and innovation programmes." },
        { title: "Skills Consultancy", desc: "Skill-gap assessment, future-skills strategy, training architecture and capability development." },
        { title: "CSR Consultancy", desc: "Technology-enabled CSR programme design, implementation, monitoring and impact measurement." },
        { title: "Feasibility & Project Advisory", desc: "Technical feasibility, concept development, technology selection, pilot planning and scale-up." },
        { title: "Data & Analytics", desc: "Data strategy, dashboards, analytics, monitoring and decision-support systems." },
      ],
      coreJourney: {
        title: "CONSULTANCY JOURNEY",
        steps: ["PROBLEM", "STRATEGY", "TECHNOLOGY", "IMPLEMENTATION", "IMPACT"],
      },
    },
  },
]

/* ---------------------------------------------------------
   2. ABOUT CARAWIN
   --------------------------------------------------------- */

export const aboutData = {
  headline: "BUILDING THE TECHNOLOGY ECOSYSTEM FOR THE FUTURE",
  intro:
    "Carawin Technologies is a technology company working across Artificial Intelligence, Education, STEM, Software, IoT, Robotics, Skills and Innovation. We develop and implement technology solutions for schools, colleges, governments, institutions, industries, CSR organisations and technology partners.",
  vision: {
    title: "OUR VISION",
    tagline: "MAKE ADVANCED TECHNOLOGY ACCESSIBLE, PRACTICAL AND MEANINGFUL.",
    desc: "We envision a future where people are not merely consumers of technology. They become:",
    pillars: ["CREATORS.", "PROBLEM-SOLVERS.", "BUILDERS.", "INNOVATORS."],
  },
  mission: {
    title: "OUR MISSION",
    subtitle: "To develop and deploy scalable technology solutions that:",
    points: [
      "Improve learning",
      "Build capability",
      "Enable experimentation",
      "Empower teachers and professionals",
      "Encourage innovation",
      "Connect skills with opportunity",
      "Support digital transformation",
      "Solve real-world problems",
    ],
  },
  philosophy: {
    title: "OUR TECHNOLOGY PHILOSOPHY",
    subtitle: "Technology should:",
    points: [
      "Make complex ideas easier to understand.",
      "Make experimentation more accessible.",
      "Help people do more.",
      "Help organisations make better decisions.",
      "Help innovators build.",
      "Open pathways to opportunity.",
    ],
  },
}

/* ---------------------------------------------------------
   3. THE CARAWIN APPROACH & WHY CARAWIN
   --------------------------------------------------------- */

export const carawinApproach = {
  title: "THE CARAWIN APPROACH",
  headline: "FROM LEARNING TO INNOVATION. FROM PROBLEM TO SOLUTION.",
  traditional: {
    title: "Traditional Learning Often Follows:",
    steps: ["TEACH", "MEMORISE", "TEST"],
  },
  carawinLearning: {
    title: "Carawin's Approach Is:",
    steps: ["LEARN", "EXPLORE", "EXPERIMENT", "BUILD", "SOLVE", "INNOVATE"],
  },
  organisationJourney: {
    title: "For Organisations, The Journey Becomes:",
    steps: ["DISCOVER", "DESIGN", "DEVELOP", "DEPLOY", "MEASURE", "SCALE"],
  },
}

export const whyCarawinData = {
  headline: "ONE TECHNOLOGY ECOSYSTEM. MULTIPLE POSSIBILITIES.",
  pillars: [
    {
      title: "INTEGRATED",
      desc: "AI, software, STEM, IoT, robotics, skills and innovation unified under one ecosystem.",
    },
    {
      title: "EXPERIENTIAL",
      desc: "Learning through hands-on exploration and real-world experimentation.",
    },
    {
      title: "PRACTICAL",
      desc: "Solutions designed around actual ground requirements, not abstract theory.",
    },
    {
      title: "SCALABLE",
      desc: "Architected to scale from an individual institution to district, state or enterprise-level programmes.",
    },
    {
      title: "MEASURABLE",
      desc: "Technology-enabled monitoring, analytics and verifiable outcome measurement.",
    },
    {
      title: "CROSS-SECTOR",
      desc: "Deep application across education, government, industry, CSR and community institutions.",
    },
  ],
}

/* ---------------------------------------------------------
   4. SECTORS (11 Distinct Sectors)
   --------------------------------------------------------- */

export type SectorItem = {
  name: string
  desc: string
  highlights?: string
}

export const sectorsData: SectorItem[] = [
  {
    name: "EDUCATION",
    desc: "AI, STEM, digital learning, smart labs and future skills for schools and universities.",
    highlights: "Adaptive learning, AI teacher assistants, virtual simulations & labs",
  },
  {
    name: "GOVERNMENT",
    desc: "Digital public infrastructure, state technology programmes and institutional transformation.",
    highlights: "Large-scale modernisation, DPI architecture, teacher capacity at scale",
  },
  {
    name: "POWER & ENERGY",
    desc: "AI, IoT, automated monitoring, energy intelligence and predictive analytics.",
    highlights: "Grid monitoring, consumption analytics, IoT telemetry",
  },
  {
    name: "STEEL & MANUFACTURING",
    desc: "Industrial technology, IoT sensors, process analytics, automation and digital systems.",
    highlights: "Asset tracking, plant telemetry, predictive maintenance",
  },
  {
    name: "AGRICULTURE",
    desc: "Smart agriculture, soil/crop sensors, environmental monitoring and data-enabled decision support.",
    highlights: "Microclimate sensing, irrigation intelligence, yield data",
  },
  {
    name: "WATER",
    desc: "Water monitoring, flow sensing, quality analytics, smart distribution systems and resource management.",
    highlights: "Quality telemetry, pipeline analytics, reservoir management",
  },
  {
    name: "AIR & ENVIRONMENT",
    desc: "Environmental sensing, air quality monitoring, real-time pollution dashboards and predictive analytics.",
    highlights: "AQI telemetry, environmental compliance, heat mapping",
  },
  {
    name: "INFRASTRUCTURE",
    desc: "Connected systems, smart IoT sensors, structural monitoring and intelligent asset management.",
    highlights: "Smart buildings, public asset telemetry, connected spaces",
  },
  {
    name: "CSR & SOCIAL IMPACT",
    desc: "Technology-enabled education, community STEM programmes, measurable social impact and reporting.",
    highlights: "Verifiable student metrics, STEM adoption in underserved regions",
  },
  {
    name: "SKILLS & WORKFORCE",
    desc: "Future skills, vocational training, adult learning, workforce upskilling and technology capability.",
    highlights: "Emerging tech certification, AI fluency, career readiness",
  },
  {
    name: "STARTUPS & INNOVATORS",
    desc: "Technology strategy, product architecture, hardware prototyping, MVP builds and innovation support.",
    highlights: "Rapid POC development, AI model adaptation, IoT design",
  },
]

/* ---------------------------------------------------------
   5. GOVERNMENT
   --------------------------------------------------------- */

export const governmentData = {
  headline: "TECHNOLOGY-ENABLED PUBLIC IMPACT",
  sub: "Carawin works with government departments and institutions to design scalable, sustainable technology programmes.",
  focusAreas: [
    "AI in education",
    "AI Innovation Labs",
    "Virtual STEM",
    "IoT Labs",
    "Robotics",
    "Digital learning",
    "Teacher training",
    "Future skills",
    "Career readiness",
    "Innovation programmes",
    "Digital monitoring",
    "Technology-enabled institutional transformation",
  ],
  implementationModel: {
    title: "GOVERNMENT IMPLEMENTATION MODEL",
    steps: ["ASSESS", "DESIGN", "DEPLOY", "ENABLE", "MONITOR", "SCALE"],
  },
}

/* ---------------------------------------------------------
   6. FOR SCHOOLS
   --------------------------------------------------------- */

export const schoolsData = {
  headline: "BUILD A FUTURE-READY SCHOOL",
  sub: "A Carawin-enabled school combines cutting-edge technology with practical classroom workflows.",
  pillars: [
    "AI",
    "Virtual STEM",
    "Coding",
    "IoT",
    "Robotics",
    "Teacher Tools",
    "Innovation",
    "Career Readiness",
  ],
  journey: {
    title: "FROM CLASSROOM TO CREATION",
    steps: ["CONCEPT", "EXPLORATION", "EXPERIMENT", "PROJECT", "PROTOTYPE", "INNOVATION"],
  },
}

/* ---------------------------------------------------------
   7. FOR TEACHERS
   --------------------------------------------------------- */

export const teachersData = {
  headline: "AI DOESN'T REPLACE GREAT TEACHERS. IT EMPOWERS THEM.",
  sub: "Carawin supports educators with practical tools that reduce preparation burdens and supercharge teaching.",
  supportAreas: [
    "AI-assisted planning",
    "Learning resources",
    "Worksheets",
    "Quizzes",
    "Assessment",
    "Student analytics",
    "Remedial support",
    "STEM activities",
    "Digital tools",
  ],
  formula: "TEACHER + TECHNOLOGY + AI",
}

/* ---------------------------------------------------------
   8. FOR CSR & INDUSTRY
   --------------------------------------------------------- */

export const csrData = {
  headline: "TURN TECHNOLOGY INVESTMENT INTO HUMAN CAPITAL",
  sub: "CSR and industry partners can support high-impact, verified programmes across underserved communities.",
  focusAreas: [
    "AI education",
    "STEM",
    "Robotics",
    "Innovation",
    "Digital literacy",
    "Future skills",
    "Career readiness",
    "Technology infrastructure",
    "Community programmes",
  ],
  journey: {
    title: "CSR IMPACT CYCLE",
    steps: ["INVEST", "ENABLE", "LEARN", "BUILD", "INNOVATE", "MEASURE"],
  },
}

/* ---------------------------------------------------------
   9. IMPACT
   --------------------------------------------------------- */

export const impactData = {
  headline: "MEASURE WHAT MATTERS",
  sub: "Carawin programmes are structured around clear, measurable indicators to ensure verifiable outcomes.",
  indicators: [
    { name: "ACCESS", desc: "Institutions and communities reached across districts and states." },
    { name: "PARTICIPATION", desc: "Students, teachers and stakeholders actively engaged." },
    { name: "LEARNING", desc: "Modules, interactive activities and virtual experiments completed." },
    { name: "SKILLS", desc: "Verifiable technology and future capabilities developed." },
    { name: "INNOVATION", desc: "Real-world projects, prototypes and hackathon challenges completed." },
    { name: "OPPORTUNITY", desc: "Career awareness and industry pathway exposures unlocked." },
    { name: "SCALE", desc: "Institutions, districts and state programmes deployed and growing." },
  ],
  note: "Published impact figures will be based on verified programme data.",
}

/* ---------------------------------------------------------
   10. INNOVATION
   --------------------------------------------------------- */

export const innovationData = {
  headline: "FROM LOCAL PROBLEMS TO REAL-WORLD SOLUTIONS",
  sub: "Carawin facilitates innovation programmes where learners and institutions solve pressing real-world challenges.",
  domains: [
    "Water",
    "Agriculture",
    "Energy",
    "Environment",
    "Waste",
    "Education",
    "Safety",
    "Community Services",
  ],
  journey: {
    title: "THE INNOVATION JOURNEY",
    steps: ["IDENTIFY", "UNDERSTAND", "IDEATE", "DESIGN", "BUILD", "TEST", "IMPROVE", "DEMONSTRATE"],
  },
}

/* ---------------------------------------------------------
   11. PARTNERS
   --------------------------------------------------------- */

export const partnersData = {
  headline: "BUILDING THE ECOSYSTEM TOGETHER",
  sub: "The future cannot be built by one organisation alone. Carawin builds long-term partnerships across the ecosystem.",
  categories: [
    { title: "GOVERNMENT", desc: "Partnering on state and national technology missions and public infrastructure." },
    { title: "SCHOOLS", desc: "Transforming K-12 education with AI labs, STEM and teacher tools." },
    { title: "COLLEGES & UNIVERSITIES", desc: "Equipping higher education with digital campus infrastructure and research tools." },
    { title: "INDUSTRY", desc: "Collaborating on workforce upskilling, apprenticeships and sectoral solutions." },
    { title: "CSR ORGANISATIONS", desc: "Designing measurable, community-focused technology impact programmes." },
    { title: "TECHNOLOGY COMPANIES", desc: "Integrating leading cloud, hardware and AI infrastructure." },
    { title: "EDUCATION PARTNERS", desc: "Curriculum bodies, academic foundations and pedagogical experts." },
    { title: "INNOVATION ECOSYSTEMS", desc: "Incubators, maker spaces, and startup accelerators." },
  ],
  tagline: "TOGETHER, WE CAN TURN TECHNOLOGY INTO OPPORTUNITY.",
}

/* ---------------------------------------------------------
   12. DEMO
   --------------------------------------------------------- */

export const demoItems = [
  "AI Tutor",
  "Adaptive Learning",
  "AI Teacher Assistant",
  "AI Assessment",
  "Virtual STEM",
  "AI Innovation Lab",
  "IoT Lab",
  "Robotics",
  "Student Dashboard",
  "Innovation Projects",
]

/* ---------------------------------------------------------
   14. CONTACT AREA OF INTEREST DROPDOWN (Official List)
   --------------------------------------------------------- */

export const contactAreasOfInterest = [
  "AI in Education",
  "Adaptive Learning",
  "Virtual STEM",
  "AI Innovation Lab",
  "IoT Lab",
  "Robotics Lab",
  "Skills & Training",
  "Software Development",
  "AI Product Development",
  "IoT Product Development",
  "Government Programme",
  "CSR Programme",
  "Consultancy",
  "Industry Solution",
  "Product Demonstration",
  "Partnership",
  "Other",
]

/* ---------------------------------------------------------
   BACKWARD COMPATIBILITY EXPORTS
   --------------------------------------------------------- */

export const solutions: DetailContent[] = solutionVerticals.map((v) => ({
  slug: v.slug,
  name: v.name,
  short: v.name,
  desc: v.desc,
  intro: v.tagline,
  focus: v.details?.overview || v.desc,
  capabilities: v.subItems,
  workflow: v.details?.coreJourney?.steps || ["Assess", "Design", "Deploy", "Measure"],
  outcomes: [
    "Scalable, measurable technology capability",
    "Unified institutional and stakeholder workflows",
    "Verified learning and operational outcomes",
  ],
  group: "Solutions",
  image: "solution-carawin-teach.png",
}))

export const aiProducts: DetailContent[] = [
  {
    slug: "adapt",
    name: "Adaptive Learning",
    short: "Personalised Learning",
    desc: "Adaptive learning intelligence that responds to each learner's pace, strengths and needs.",
    intro: "A personalised learning layer that helps learners move through content, practice and support at a pace suited to their needs.",
    focus: "Personalisation without losing teacher visibility.",
    capabilities: ["Adaptive practice", "Personalised pathways", "Progress signals", "Teacher visibility"],
    workflow: ["Understand signals", "Recommend action", "Practise", "Intervene"],
    outcomes: ["Targeted learning", "Earlier gap detection", "Better differentiation"],
    image: "ai-adapt.png",
  },
  {
    slug: "teach",
    name: "Teacher-Assist AI",
    short: "AI Teacher Assistant",
    desc: "A practical AI layer that supports lesson planning, differentiation and everyday teaching.",
    intro: "An AI teaching assistant designed to reduce repetitive preparation work while keeping educators in control.",
    focus: "Support teachers with planning, differentiation, and classroom-ready resources.",
    capabilities: ["Lesson planning", "Differentiated ideas", "Question generation", "Classroom assistance"],
    workflow: ["Define objective", "Generate resources", "Review", "Deliver"],
    outcomes: ["Less repetitive preparation", "More differentiated instruction", "Teachers stay in control"],
    image: "solution-carawin-teach.png",
  },
  {
    slug: "assess",
    name: "AI Assessment & Grading",
    short: "Measurement & Feedback",
    desc: "Assessment intelligence for faster feedback, stronger insights and better learning outcomes.",
    intro: "Assessment intelligence that helps educators move from raw responses to useful evidence about learning.",
    focus: "Connect assessment design, response analysis, feedback and learning insights.",
    capabilities: ["Digital assessment", "Response analysis", "Feedback support", "Learning-gap detection"],
    workflow: ["Design assessment", "Capture responses", "Analyse evidence", "Provide feedback"],
    outcomes: ["Faster feedback", "More actionable evidence", "Clearer intervention signals"],
    image: "solution-carawin-assess.png",
  },
  {
    slug: "career",
    name: "Career Intelligence (CareerOS)",
    short: "Career Intelligence",
    desc: "Connect learning journeys with skills, pathways, opportunities and future careers.",
    intro: "Career intelligence that connects what learners study with the skills and opportunities they pursue next.",
    focus: "Make career discovery structured by connecting interests with education and industry pathways.",
    capabilities: ["Skills mapping", "Career pathways", "Stream guidance", "Progress signals"],
    workflow: ["Understand interests", "Explore pathways", "Identify gaps", "Plan actions"],
    outcomes: ["Informed pathway decisions", "Stronger skills awareness", "Continuous career readiness"],
    image: "carawin-career.png",
  },
  {
    slug: "stem",
    name: "Virtual STEM & Innovation Labs",
    short: "STEM Intelligence",
    desc: "Interactive experimentation across Physics, Chemistry, Biology, Mathematics and Engineering.",
    intro: "A STEM learning layer that connects hands-on experimentation with science and engineering concepts.",
    focus: "Move STEM beyond demonstrations into inquiry, prototyping, measurement and problem solving.",
    capabilities: ["Virtual simulations", "Robotics kits", "IoT sensors", "Project development"],
    workflow: ["Ask questions", "Build experiment", "Measure and test", "Demonstrate solution"],
    outcomes: ["Practical STEM literacy", "Problem-solving skills", "Real-world connection"],
    image: "carawin-stem.png",
  },
]

export const institutions = [
  {
    slug: "future-ready-schools",
    name: "Future-Ready Schools",
    short: "Whole-School Transformation",
    desc: "Transform the complete school ecosystem: infrastructure, learning, AI, teachers, data and outcomes.",
    intro: "A whole-school transformation model connecting infrastructure, digital learning, teacher capability, AI, data and institutional operations.",
    focus: "The goal is to build a coherent school ecosystem that adopts technology sustainably.",
    capabilities: ["Infrastructure roadmap", "Digital learning", "AI workflows", "Teacher capability"],
    workflow: ["Assess ecosystem", "Prioritise roadmap", "Implement", "Measure"],
    outcomes: ["Connected technology", "Stronger capability", "Sustainable innovation"],
    image: "institution-school.png",
  },
  {
    slug: "colleges-universities",
    name: "Colleges & Universities",
    short: "Higher Education Transformation",
    desc: "Digitise the complete higher education experience from admissions to career.",
    intro: "A connected digital ecosystem for higher education spanning learner journeys and institutional operations.",
    focus: "Connect the student experience with systems and data that support institutional performance.",
    capabilities: ["Digital journey", "Academic systems", "Campus ERP", "Career pathways"],
    workflow: ["Map journey", "Integrate systems", "Enable teams", "Measure outcomes"],
    outcomes: ["Connected journeys", "Scalable operations", "Stronger employability"],
    image: "institution-university.png",
  },
]

export const sectors = sectorsData.map((s) => ({
  slug: s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  name: s.name,
  desc: s.desc,
}))

export const impactIndicators = impactData.indicators.map((i) => ({
  metric: i.name,
  desc: i.desc,
}))

export const partnerCategories = partnersData.categories.map((p) => ({
  name: p.title,
  desc: p.desc,
}))

export const approachSteps = carawinApproach.carawinLearning.steps.map((step, idx) => ({
  step,
  desc: `Stage 0${idx + 1} of Carawin's experiential learning and innovation framework.`,
}))

export const whyCarawin = whyCarawinData.pillars.map((p) => `${p.title}: ${p.desc}`)