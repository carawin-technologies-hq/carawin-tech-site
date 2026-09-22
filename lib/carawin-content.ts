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

export const aiProducts: DetailContent[] = [
  {
    slug: "adapt",
    name: "Carawin Adapt",
    short: "Personalised Learning",
    desc: "Adaptive learning intelligence that responds to each learner’s pace, strengths and needs.",
    intro:
      "A personalised learning layer that helps learners move through content, practice and support at a pace suited to their needs.",
    focus:
      "Personalisation without losing teacher visibility: learner signals can inform what to practise next, where support is needed and how progress is understood.",
    capabilities: [
      "Learner profiling and progress signals",
      "Adaptive practice and remediation",
      "Personalised learning pathways",
      "Teacher visibility into learner needs",
      "Progress and mastery insights",
    ],
    workflow: [
      "Understand learner signals",
      "Recommend the next learning action",
      "Practise and receive feedback",
      "Surface gaps for educator intervention",
    ],
    outcomes: [
      "More targeted learning support",
      "Earlier identification of learning gaps",
      "Better differentiated learning experiences",
      "Clearer progress visibility",
    ],
    image: "ai-adapt.png",
  },

  {
    slug: "teach",
    name: "Carawin Teach",
    short: "AI Teacher Assistant",
    desc: "A practical AI layer that supports lesson planning, differentiation and everyday teaching.",
    intro:
      "An AI teaching assistant designed to reduce repetitive preparation work while keeping educators in control of pedagogy and classroom decisions.",
    focus:
      "Support teachers with planning, differentiation, resource creation and classroom-ready ideas rather than replacing teacher judgement.",
    capabilities: [
      "Lesson and activity planning support",
      "Differentiated learning ideas",
      "Question and resource generation",
      "Classroom workflow assistance",
      "Human review and teacher control",
    ],
    workflow: [
      "Define the lesson objective",
      "Generate or refine teaching resources",
      "Adapt for learner levels",
      "Review, edit and deliver",
    ],
    outcomes: [
      "Less repetitive preparation",
      "More differentiated instruction",
      "Faster creation of classroom resources",
      "Teachers remain the decision-makers",
    ],
    image: "solution-carawin-teach.png",
  },

  {
    slug: "assess",
    name: "Carawin Assess",
    short: "AI Assessment",
    desc: "Assessment intelligence for faster feedback, stronger insights and better learning outcomes.",
    intro:
      "Assessment intelligence that helps educators move from raw responses to useful evidence about learning.",
    focus:
      "Connect assessment design, response analysis, feedback and learning insights so assessment becomes part of the learning loop.",
    capabilities: [
      "Digital assessment workflows",
      "Structured response analysis",
      "Feedback support",
      "Learning-gap identification",
      "Assessment and progress insights",
    ],
    workflow: [
      "Design or ingest an assessment",
      "Capture learner responses",
      "Analyse evidence of learning",
      "Return feedback and identify next actions",
    ],
    outcomes: [
      "Faster feedback cycles",
      "More actionable learning evidence",
      "Better visibility of learning gaps",
      "Stronger assessment-led intervention",
    ],
    image: "solution-carawin-assess.png",
  },

  {
    slug: "career",
    name: "Carawin Career",
    short: "Career Intelligence",
    desc: "Connect learning journeys with skills, pathways, opportunities and future careers.",
    intro:
      "Career intelligence that connects what learners study with the skills, pathways and opportunities they may pursue next.",
    focus:
      "Make career discovery more structured by connecting learner interests and skills with education and opportunity pathways.",
    capabilities: [
      "Skills and interest mapping",
      "Career pathway exploration",
      "Course-to-career connections",
      "Opportunity discovery",
      "Progress and readiness signals",
    ],
    workflow: [
      "Understand learner interests and skills",
      "Explore relevant pathways",
      "Identify capability gaps",
      "Plan next learning and career actions",
    ],
    outcomes: [
      "More informed pathway decisions",
      "Stronger skills awareness",
      "Better connection between education and opportunity",
      "Continuous career readiness",
    ],
    image: "carawin-career.png",
  },

  {
    slug: "content",
    name: "Carawin Content",
    short: "Content Intelligence",
    desc: "Create, organise and personalise high-quality learning content at scale.",
    intro:
      "A content intelligence layer for creating, structuring, organising and adapting learning material across formats and learner contexts.",
    focus:
      "Turn content operations into a connected workflow while preserving quality, curriculum alignment and educator review.",
    capabilities: [
      "Content structuring and transformation",
      "Learning-object creation",
      "Personalisation and adaptation",
      "Content discovery and organisation",
      "Human review workflows",
    ],
    workflow: [
      "Define learning objective and audience",
      "Create or ingest content",
      "Adapt and structure for delivery",
      "Review, publish and reuse",
    ],
    outcomes: [
      "Faster content production",
      "Reusable learning assets",
      "More contextual learning material",
      "Scalable content operations",
    ],
    image: "carawin-content.png",
  },

  {
    slug: "voice",
    name: "Carawin Voice",
    short: "Indian Language AI",
    desc: "Language intelligence designed for inclusive learning across Indian languages.",
    intro:
      "Voice and language intelligence intended to make digital learning more accessible across diverse Indian language contexts.",
    focus:
      "Use speech and language interfaces to reduce language barriers and make digital learning experiences more inclusive.",
    capabilities: [
      "Voice-enabled learning interactions",
      "Indian-language experiences",
      "Speech and language workflows",
      "Accessible learner interfaces",
      "Teacher and learner communication support",
    ],
    workflow: [
      "Capture spoken or written input",
      "Process language in context",
      "Return understandable learning output",
      "Keep the educator or learner in control",
    ],
    outcomes: [
      "More inclusive digital access",
      "Lower language friction",
      "Natural voice-led interactions",
      "Broader reach for digital learning",
    ],
    image: "carawin-voice.png",
  },

  {
    slug: "stem",
    name: "Carawin STEM",
    short: "STEM Intelligence",
    desc: "AI-supported exploration, experimentation and STEM learning experiences.",
    intro:
      "A STEM learning layer that connects hands-on experimentation with science, technology, engineering and mathematics concepts.",
    focus:
      "Move STEM beyond demonstrations into inquiry, making, prototyping, measurement and evidence-based problem solving.",
    capabilities: [
      "Experiment and inquiry workflows",
      "Robotics and coding activities",
      "Electronics, sensors and microcontrollers",
      "3D design, modelling and prototyping",
      "Data capture, analysis and reflection",
    ],
    workflow: [
      "Ask a real-world question",
      "Design and build a model or experiment",
      "Measure, test and iterate",
      "Explain evidence and improve the solution",
    ],
    outcomes: [
      "Stronger practical STEM literacy",
      "Problem-solving and design thinking",
      "Collaboration and experimentation",
      "Connections between concepts and real-world challenges",
    ],
    image: "carawin-stem.png",
  },

  {
    slug: "insight",
    name: "Carawin Insight",
    short: "Institutional Intelligence",
    desc: "Turn institutional data into decisions for leaders, educators and systems.",
    intro:
      "An institutional intelligence layer that connects operational and learning signals into clearer views for decision-making.",
    focus:
      "Help education leaders move from fragmented data to timely, understandable insights without losing the human context behind the numbers.",
    capabilities: [
      "Institutional dashboards",
      "Learning and operational indicators",
      "Trend and exception visibility",
      "Decision-support workflows",
      "Cross-system data views",
    ],
    workflow: [
      "Connect relevant data sources",
      "Structure and interpret indicators",
      "Surface patterns and exceptions",
      "Turn insight into action and review",
    ],
    outcomes: [
      "Clearer institutional visibility",
      "Faster evidence-led decisions",
      "Earlier identification of issues",
      "A stronger continuous-improvement loop",
    ],
    image: "carawin-insight.png",
  },
]

export const solutions: DetailContent[] = [
  {
    slug: "smart-classroom",
    name: "Smart Classroom",
    group: "Education Infrastructure",
    short: "Connected Classroom",
    desc: "Connected classroom environments that bring teaching, content, devices and learning data together.",
    intro:
      "A classroom technology environment designed to make teaching, digital content, devices and learning interactions work together.",
    focus:
      "The classroom remains human-centred while technology supports delivery, engagement and visibility.",
    capabilities: [
      "Interactive teaching environment",
      "Digital content delivery",
      "Connected classroom devices",
      "Teacher workflow support",
      "Learning interaction signals",
    ],
    workflow: [
      "Assess classroom needs",
      "Design the technology environment",
      "Integrate devices and content",
      "Train users and support adoption",
    ],
    outcomes: [
      "More connected classroom delivery",
      "Better access to digital resources",
      "Simpler teacher workflows",
      "A foundation for data-informed learning",
    ],
    image: "smart-classroom-hero.png",
  },

  {
    slug: "lms",
    name: "Learning Management System",
    group: "Digital Education",
    short: "Learning Platform",
    desc: "A connected learning platform for courses, content, learners and educators.",
    intro:
      "A digital learning backbone that organises courses, content, learners, educators and learning activity.",
    focus:
      "Connect the learning journey from course organisation and content delivery to participation and progress.",
    capabilities: [
      "Course and content management",
      "Learner enrolment",
      "Assignments and activities",
      "Progress tracking",
      "Educator workflows",
    ],
    workflow: [
      "Structure the learning programme",
      "Publish content and activities",
      "Engage and support learners",
      "Review progress and improve delivery",
    ],
    outcomes: [
      "Consistent digital delivery",
      "Centralised learning workflows",
      "Better learner visibility",
      "Scalable blended learning",
    ],
    image: "learning-management-system.png",
  },

  {
    slug: "assessment",
    name: "Assessment",
    group: "Digital Education",
    short: "Measurement & Feedback",
    desc: "Digital assessment workflows that support measurement, feedback and improvement.",
    intro:
      "Assessment technology that supports the full cycle from assessment design to evidence, feedback and improvement.",
    focus:
      "Make assessment useful for learning by connecting measurement with timely feedback and intervention.",
    capabilities: [
      "Assessment authoring",
      "Digital response capture",
      "Feedback workflows",
      "Progress analysis",
      "Intervention signals",
    ],
    workflow: [
      "Design assessment",
      "Deliver and capture responses",
      "Analyse evidence",
      "Provide feedback",
      "Plan intervention",
    ],
    outcomes: [
      "Faster assessment cycles",
      "More useful feedback",
      "Clearer learning evidence",
      "Better-informed interventions",
    ],
    image: "solution-assessment.png",
  },

  {
    slug: "erp",
    name: "Institutional ERP",
    group: "Institutional Technology",
    short: "Institutional Operations",
    desc: "Integrated technology for academic, administrative, finance and institutional operations.",
    intro:
      "An institutional operating layer connecting core academic, administrative and operational workflows.",
    focus:
      "Reduce fragmented systems by giving institutions a connected view of the processes that keep education running.",
    capabilities: [
      "Academic administration",
      "Student lifecycle workflows",
      "Finance and operations",
      "Staff and institutional processes",
      "Reporting and visibility",
    ],
    workflow: [
      "Map institutional workflows",
      "Design the system architecture",
      "Integrate and migrate",
      "Train teams and improve continuously",
    ],
    outcomes: [
      "Connected institutional operations",
      "Reduced process fragmentation",
      "Better visibility for leaders",
      "Scalable digital administration",
    ],
    image: "institutional-erp-hero.png",
  },

  {
    slug: "teacher-training",
    name: "Teacher Training",
    group: "Human Capability",
    short: "Capability Building",
    desc: "Capability building that helps educators adopt technology and AI with confidence.",
    intro:
      "Structured capability building that helps educators understand, adopt and use digital tools and AI responsibly.",
    focus:
      "Technology adoption succeeds when people have the confidence, practice and support to use it meaningfully.",
    capabilities: [
      "Digital pedagogy",
      "AI literacy",
      "Tool-based practical training",
      "Classroom integration",
      "Peer learning and support",
    ],
    workflow: [
      "Assess capability needs",
      "Design role-based learning",
      "Practise with real workflows",
      "Coach and support adoption",
      "Measure progress",
    ],
    outcomes: [
      "Higher educator confidence",
      "Better technology adoption",
      "More meaningful classroom use",
      "Sustained capability development",
    ],
    image: "solution-teacher-training.png",
  },
]

export const institutions = [
  {
    slug: "future-ready-schools",
    name: "Future-Ready Schools",
    short: "Whole-School Transformation",
    desc: "Transform the complete school ecosystem: infrastructure, learning, AI, teachers, data and outcomes.",
    intro:
      "A whole-school transformation model connecting infrastructure, digital learning, teacher capability, AI, data and institutional operations.",
    focus:
      "The goal is not to add isolated technology. It is to build a coherent school ecosystem that can adopt technology sustainably.",
    capabilities: [
      "Infrastructure roadmap",
      "Digital learning systems",
      "AI-enabled education workflows",
      "Teacher capability",
      "Institutional data and insight",
    ],
    workflow: [
      "Assess the current ecosystem",
      "Prioritise the transformation roadmap",
      "Implement technology and capability",
      "Measure adoption and outcomes",
    ],
    outcomes: [
      "Connected school technology",
      "Stronger educator capability",
      "Better learner visibility",
      "A sustainable foundation for future innovation",
    ],
    image: "institution-school.png",
  },

  {
    slug: "colleges-universities",
    name: "Colleges & Universities",
    short: "Higher Education Transformation",
    desc: "Digitise the complete higher education experience from admissions to career.",
    intro:
      "A connected digital ecosystem for higher education spanning learner journeys, academic workflows, institutional operations and career pathways.",
    focus:
      "Connect the student experience with the systems, data and capabilities that support institutional performance.",
    capabilities: [
      "Digital learner journey",
      "Academic and administrative systems",
      "Learning platforms",
      "Institutional analytics",
      "Career and employability pathways",
    ],
    workflow: [
      "Map the learner and institutional journeys",
      "Prioritise systems and integrations",
      "Implement and enable teams",
      "Measure experience and performance",
    ],
    outcomes: [
      "More connected student journeys",
      "Better institutional visibility",
      "Scalable digital operations",
      "Stronger career connectivity",
    ],
    image: "institution-university.png",
  },

  {
    slug: "digital-university",
    name: "Digital University",
    short: "Connected University Ecosystem",
    desc: "Build connected university ecosystems across learning, administration, research and intelligence.",
    intro:
      "A university-wide digital architecture connecting learning, administration, research, data and institutional intelligence.",
    focus:
      "Create an integrated foundation that can evolve as university needs, technology and research capabilities change.",
    capabilities: [
      "Digital learning ecosystem",
      "Institutional technology",
      "Research and data workflows",
      "University-wide analytics",
      "AI-ready architecture",
    ],
    workflow: [
      "Define the university digital architecture",
      "Connect priority systems",
      "Build data and intelligence layers",
      "Enable governance and adoption",
    ],
    outcomes: [
      "Connected university operations",
      "Stronger digital learning",
      "Better research and data workflows",
      "An extensible technology foundation",
    ],
    image: "digital-university.png",
  },
]