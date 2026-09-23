export interface Job {
  id: number
  title: string
  department: string
  location: string
  experience_level: string
  job_type: string
  description: string
  requirements: string
  created_at: string
  is_active: boolean
}

export interface Application {
  id: number
  job_id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  linkedin_url?: string
  cv_drive_link?: string
  country?: string
  area_of_interest?: string
  skills?: string
  cover_letter?: string
  created_at: string
}

// In-memory fallback store when PostgreSQL server is offline or unreachable
export const fallbackJobs: Job[] = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    experience_level: 'Professional',
    job_type: 'Full-Time',
    description: 'We are looking for a Senior Full-Stack Developer to join our Engineering team and build the platforms that power classrooms and institutions at scale. You will work on our Next.js and Node.js stack, designing and implementing features across our education products.',
    requirements: 'Minimum 4+ years of experience with React, Next.js, Node.js, and PostgreSQL. Strong understanding of REST APIs and database design. Experience with cloud deployment (AWS/GCP). Excellent problem-solving and communication skills.',
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    is_active: true,
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'AI & Product',
    location: 'Bangalore, IN',
    experience_level: 'Professional',
    job_type: 'Full-Time',
    description: 'Join our AI & Product team to design and build the machine learning models behind Carawin Adapt, Carawin Teach, and Carawin Assess. You will work on adaptive learning algorithms, NLP-based assessment tools, and recommendation systems for personalized education.',
    requirements: 'Strong background in ML/DL (PyTorch or TensorFlow). Experience with NLP, recommendation systems, or adaptive learning. Proficiency in Python. Published research or deployed ML systems preferred. 3+ years professional experience.',
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    is_active: true,
  },
  {
    id: 3,
    title: 'Education Content Designer',
    department: 'Education',
    location: 'New Delhi, IN',
    experience_level: 'Entry Level',
    job_type: 'Full-Time',
    description: 'Help shape the pedagogy, curriculum, and learning design behind our products. As an Education Content Designer, you will work closely with product and engineering teams to ensure every Carawin product is grounded in how people actually learn and teach.',
    requirements: "Bachelor's degree in Education, Instructional Design, or related field. Strong written and verbal communication. Understanding of Indian education curriculum (CBSE/State boards). Passion for education technology.",
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
    is_active: true,
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    experience_level: 'Professional',
    job_type: 'Full-Time',
    description: 'We need a DevOps Engineer to manage and scale our cloud infrastructure across AWS and GCP. You will own CI/CD pipelines, container orchestration, monitoring, and security for all Carawin services.',
    requirements: 'Experience with AWS/GCP, Docker, Kubernetes. Strong Linux administration skills. Proficiency with Terraform or CloudFormation. Experience with monitoring tools (Prometheus, Grafana). 3+ years in DevOps/SRE role.',
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    is_active: true,
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'New Delhi, IN',
    experience_level: 'Professional',
    job_type: 'Full-Time',
    description: 'Craft experiences for students, teachers, administrators and government stakeholders that are simple, clear and usable at scale. You will lead the design process from research and wireframing to high-fidelity prototypes and design system maintenance.',
    requirements: 'Portfolio demonstrating strong visual and interaction design skills. Proficiency with Figma. Experience designing for B2B or education products is a plus. Understanding of accessibility standards. 3+ years of product design experience.',
    created_at: new Date(Date.now() - 86400000 * 6).toISOString(),
    is_active: true,
  },
  {
    id: 6,
    title: 'Data Analyst',
    department: 'Data & Research',
    location: 'Bangalore, IN',
    experience_level: 'Entry Level',
    job_type: 'Full-Time',
    description: 'Turn learner and institutional signals into evidence — measuring what works and feeding it back into product decisions. You will work with large datasets from our education platforms to surface insights that improve outcomes for students and teachers.',
    requirements: "Strong SQL and Python skills. Experience with data visualization tools (Tableau, Power BI, or similar). Basic understanding of statistics. Bachelor's degree in a quantitative field. Curiosity about education data.",
    created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
    is_active: true,
  },
  {
    id: 7,
    title: 'Product Manager',
    department: 'AI & Product',
    location: 'New Delhi, IN',
    experience_level: 'Professional',
    job_type: 'Full-Time',
    description: 'Own the roadmap for one or more Carawin AI products. You will define product strategy, prioritize features, work closely with engineering and design teams, and ensure that what we build solves real problems for educators and learners.',
    requirements: '4+ years of product management experience. Experience with B2B SaaS or education technology. Strong analytical and communication skills. Ability to translate complex technical concepts into clear product requirements. Data-driven decision making.',
    created_at: new Date(Date.now() - 86400000 * 8).toISOString(),
    is_active: true,
  },
  {
    id: 8,
    title: 'Implementation Consultant',
    department: 'Implementation & Advisory',
    location: 'Multiple Cities',
    experience_level: 'Professional',
    job_type: 'Full-Time',
    description: "Work directly with schools, universities and governments to deploy, adopt and sustain Carawin's technology on the ground. You will lead implementation projects, train institutional staff, and ensure successful technology adoption across India.",
    requirements: 'Experience in EdTech or government project implementation. Strong stakeholder management and presentation skills. Willingness to travel extensively. Understanding of Indian education institutions. 3+ years of consulting or implementation experience.',
    created_at: new Date(Date.now() - 86400000 * 9).toISOString(),
    is_active: true,
  },
  {
    id: 9,
    title: 'Frontend Developer (React)',
    department: 'Engineering',
    location: 'Remote',
    experience_level: 'Entry Level',
    job_type: 'Full-Time',
    description: "Join our frontend engineering team and build beautiful, performant user interfaces for Carawin's suite of education products. You will work with React, Next.js, and TypeScript to deliver pixel-perfect implementations of our design system.",
    requirements: 'Strong proficiency in React, TypeScript, and CSS. Understanding of responsive design and web accessibility. Familiarity with Next.js is a plus. Portfolio or GitHub profile with relevant projects. 0-2 years of experience.',
    created_at: new Date(Date.now() - 86400000 * 10).toISOString(),
    is_active: true,
  },
  {
    id: 10,
    title: 'Technical Writer',
    department: 'Education',
    location: 'Remote',
    experience_level: 'Entry Level',
    job_type: 'Contract',
    description: "Create clear, comprehensive documentation for Carawin's products, APIs, and internal tools. You will work with engineering and product teams to produce user guides, API references, tutorials, and knowledge base articles.",
    requirements: 'Excellent English writing skills. Ability to explain complex technical concepts simply. Familiarity with Markdown, Git, and documentation tools. Experience writing software documentation is a plus. Portfolio of technical writing samples.',
    created_at: new Date(Date.now() - 86400000 * 11).toISOString(),
    is_active: true,
  },
]

export const fallbackApplications: Application[] = [
  {
    id: 1,
    job_id: 1,
    first_name: 'Aarav',
    last_name: 'Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    linkedin_url: 'https://linkedin.com/in/aaravsharma',
    cv_drive_link: 'https://drive.google.com/file/d/sample-resume-1/view',
    country: 'India',
    area_of_interest: 'Engineering',
    skills: 'React, Next.js, TypeScript, Node.js, PostgreSQL',
    cover_letter: 'I have 5 years of full-stack engineering experience building SaaS products for educational institutions. Looking forward to contributing to Carawin!',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: 2,
    job_id: 2,
    first_name: 'Priya',
    last_name: 'Nair',
    email: 'priya.nair@example.com',
    phone: '+91 98123 45678',
    linkedin_url: 'https://linkedin.com/in/priyanair-ai',
    cv_drive_link: 'https://drive.google.com/file/d/sample-resume-2/view',
    country: 'India',
    area_of_interest: 'AI & Product',
    skills: 'PyTorch, Python, NLP, LLMs, Transformers',
    cover_letter: 'Passionate about adaptive learning algorithms and LLM tutoring agents.',
    created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
  }
]

export interface Enquiry {
  id: number
  name: string
  organisation?: string
  designation?: string
  email: string
  phone?: string
  location?: string
  area_of_interest?: string
  message: string
  created_at: string
}

export const fallbackEnquiries: Enquiry[] = [
  {
    id: 1,
    name: 'Dr. Rajesh Verma',
    organisation: 'Delhi Public School Society',
    designation: 'Director of Academic Innovation',
    email: 'r.verma@dpsfs.edu.in',
    phone: '+91 98111 22334',
    location: 'New Delhi, India',
    area_of_interest: 'Smart Classrooms & Adaptive AI',
    message: 'We are evaluating AI-enabled adaptive assessment systems across 12 branch campuses. Would like to schedule an advisory consultation.',
    created_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: 2,
    name: 'Meera Deshmukh',
    organisation: 'State Department of Higher Education',
    designation: 'State Project Officer',
    email: 'm.deshmukh@mahagov.in',
    phone: '+91 94220 55667',
    location: 'Mumbai, Maharashtra',
    area_of_interest: 'Institutional ERP & Digital University',
    message: 'Looking for institutional technology framework for state polytechnics and engineering colleges under digital transformation mandate.',
    created_at: new Date(Date.now() - 3600000 * 26).toISOString(),
  }
]

