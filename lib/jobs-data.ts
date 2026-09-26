export interface Job {
  id: number
  title: string
  department: string
  location: string
  experience_level: string
  job_type: string
  description: string
  requirements: string
  skills?: string
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
export const fallbackJobs: Job[] = []

export const fallbackApplications: Application[] = []

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

export const fallbackEnquiries: Enquiry[] = []

export const defaultDepartments: string[] = [
  "Engineering",
  "AI & Product",
  "Education",
  "Data & Research",
  "Design",
  "Implementation & Advisory",
]

export const fallbackDepartments: string[] = [...defaultDepartments]

