"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Users,
  Plus,
  Search,
  ExternalLink,
  Copy,
  Check,
  Trash2,
  Edit2,
  LogOut,
  Eye,
  X,
  FileText,
  MapPin,
  GraduationCap,
  Sparkles,
  Download,
  AlertCircle,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Globe,
  MessageSquare,
  Mail,
  Phone,
} from "lucide-react"
import type { Job, Application, Enquiry } from "@/lib/jobs-data"

export default function AdminDashboardPage() {
  const router = useRouter()

  const [activeTab, setActiveTab] = useState<"jobs" | "applications" | "enquiries">("jobs")
  const [jobs, setJobs] = useState<Job[]>([])
  const [applications, setApplications] = useState<any[]>([])
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [copiedId, setCopiedId] = useState<number | null>(null)

  // Filter & Search states
  const [jobSearch, setJobSearch] = useState("")
  const [appSearch, setAppSearch] = useState("")
  const [appJobFilter, setAppJobFilter] = useState("All")
  const [enquirySearch, setEnquirySearch] = useState("")

  // Modal States
  const [isJobModalOpen, setIsJobModalOpen] = useState(false)
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const [viewingApp, setViewingApp] = useState<any | null>(null)
  const [viewingEnquiry, setViewingEnquiry] = useState<Enquiry | null>(null)

  // Form State for Create/Edit Job
  const [jobTitle, setJobTitle] = useState("")
  const [jobDepartment, setJobDepartment] = useState("Engineering")
  const [jobLocation, setJobLocation] = useState("Remote")
  const [jobExpLevel, setJobExpLevel] = useState("Professional")
  const [jobType, setJobType] = useState("Full-Time")
  const [jobDescription, setJobDescription] = useState("")
  const [jobRequirements, setJobRequirements] = useState("")
  const [modalSubmitting, setModalSubmitting] = useState(false)
  const [modalError, setModalError] = useState<string | null>(null)

  // Load Data
  const fetchData = async () => {
    setLoading(true)
    try {
      // Verify session first
      const authRes = await fetch("/api/auth/me")
      if (!authRes.ok) {
        router.push("/admin")
        return
      }

      // Fetch admin jobs (includes inactive)
      const jobsRes = await fetch("/api/admin/jobs")
      if (jobsRes.ok) {
        const jobsData = await jobsRes.json()
        setJobs(jobsData.jobs || [])
      }

      // Fetch applications
      const appRes = await fetch("/api/applications")
      if (appRes.ok) {
        const appData = await appRes.json()
        setApplications(appData.applications || [])
      }

      // Fetch enquiries
      const enqRes = await fetch("/api/contact")
      if (enqRes.ok) {
        const enqData = await enqRes.json()
        setEnquiries(enqData.enquiries || [])
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/admin")
      router.refresh()
    } catch (err) {
      console.error("Logout failed:", err)
    }
  }

  // Open Create Modal
  const openCreateJobModal = () => {
    setEditingJob(null)
    setJobTitle("")
    setJobDepartment("Engineering")
    setJobLocation("Remote")
    setJobExpLevel("Professional")
    setJobType("Full-Time")
    setJobDescription("")
    setJobRequirements("")
    setModalError(null)
    setIsJobModalOpen(true)
  }

  // Open Edit Modal
  const openEditJobModal = (job: Job) => {
    setEditingJob(job)
    setJobTitle(job.title)
    setJobDepartment(job.department)
    setJobLocation(job.location)
    setJobExpLevel(job.experience_level)
    setJobType(job.job_type)
    setJobDescription(job.description)
    setJobRequirements(job.requirements)
    setModalError(null)
    setIsJobModalOpen(true)
  }

  // Submit Create or Edit Job
  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault()
    setModalError(null)
    setModalSubmitting(true)

    try {
      if (editingJob) {
        // Edit existing
        const res = await fetch(`/api/jobs/${editingJob.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: jobTitle,
            department: jobDepartment,
            location: jobLocation,
            experience_level: jobExpLevel,
            job_type: jobType,
            description: jobDescription,
            requirements: jobRequirements,
          }),
        })
        if (!res.ok) {
          const data = await res.json().catch(() => null)
          throw new Error(data?.error || "Failed to update job.")
        }
      } else {
        // Create new
        const res = await fetch("/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: jobTitle,
            department: jobDepartment,
            location: jobLocation,
            experience_level: jobExpLevel,
            job_type: jobType,
            description: jobDescription,
            requirements: jobRequirements,
          }),
        })
        if (!res.ok) {
          const data = await res.json().catch(() => null)
          throw new Error(data?.error || "Failed to create job opening.")
        }
      }

      setIsJobModalOpen(false)
      fetchData()
    } catch (err: any) {
      setModalError(err.message || "Failed to save job opening.")
    } finally {
      setModalSubmitting(false)
    }
  }

  // Toggle Job Active Status
  const handleToggleActive = async (job: Job) => {
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: !job.is_active }),
      })
      if (res.ok) {
        fetchData()
      }
    } catch (err) {
      console.error("Toggle active failed:", err)
    }
  }

  // Permanently delete job
  const handleDeleteJob = async (id: number) => {
    if (!confirm("Permanently delete this job opening? This will also delete all applications submitted for this position and cannot be undone.")) {
      return
    }

    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" })
      if (res.ok) {
        fetchData()
      } else {
        const data = await res.json().catch(() => null)
        alert(data?.error || "Failed to permanently delete the job opening.")
      }
    } catch (err) {
      console.error("Permanent delete failed:", err)
      alert("Failed to permanently delete the job opening.")
    }
  }

  // Delete Enquiry
  const handleDeleteEnquiry = async (id: number) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return
    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        fetchData()
      }
    } catch (err) {
      console.error("Delete enquiry failed:", err)
    }
  }

  // Copy CV Link
  const handleCopyLink = (id: number, link: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(link)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2500)
    }
  }

  // Export CSV of Applications
  const handleExportCSV = () => {
    if (applications.length === 0) return

    const headers = [
      "ID",
      "Date",
      "Candidate Name",
      "Email",
      "Phone",
      "Country",
      "Job Applied",
      "Department",
      "LinkedIn",
      "CV Drive Link",
      "Skills",
      "Cover Letter",
    ]

    const rows = applications.map((a) => [
      a.id,
      new Date(a.created_at).toLocaleDateString(),
      `"${a.first_name} ${a.last_name}"`,
      `"${a.email}"`,
      `"${a.phone}"`,
      `"${a.country || ""}"`,
      `"${a.job_title || ""}"`,
      `"${a.job_department || ""}"`,
      `"${a.linkedin_url || ""}"`,
      `"${a.cv_drive_link || ""}"`,
      `"${(a.skills || "").replace(/"/g, '""')}"`,
      `"${(a.cover_letter || "").replace(/"/g, '""')}"`,
    ])

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n")
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `carawin_applications_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Export CSV of Enquiries
  const handleExportEnquiriesCSV = () => {
    if (enquiries.length === 0) return
    const headers = ["ID", "Date", "Name", "Organisation", "Designation", "Email", "Phone", "Location", "Area of Interest", "Message"]
    const rows = enquiries.map((e) => [
      e.id,
      new Date(e.created_at).toLocaleDateString(),
      `"${e.name}"`,
      `"${e.organisation || ""}"`,
      `"${e.designation || ""}"`,
      `"${e.email}"`,
      `"${e.phone || ""}"`,
      `"${e.location || ""}"`,
      `"${e.area_of_interest || ""}"`,
      `"${(e.message || "").replace(/"/g, '""')}"`,
    ])
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n")
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `carawin_enquiries_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (j) =>
        jobSearch === "" ||
        j.title.toLowerCase().includes(jobSearch.toLowerCase()) ||
        j.department.toLowerCase().includes(jobSearch.toLowerCase()) ||
        j.location.toLowerCase().includes(jobSearch.toLowerCase())
    )
  }, [jobs, jobSearch])

  // Filtered applications
  const filteredApps = useMemo(() => {
    return applications.filter((a) => {
      const matchesSearch =
        appSearch === "" ||
        `${a.first_name} ${a.last_name}`.toLowerCase().includes(appSearch.toLowerCase()) ||
        a.email.toLowerCase().includes(appSearch.toLowerCase()) ||
        (a.skills && a.skills.toLowerCase().includes(appSearch.toLowerCase()))

      const matchesJob = appJobFilter === "All" || String(a.job_id) === appJobFilter || a.job_title === appJobFilter

      return matchesSearch && matchesJob
    })
  }, [applications, appSearch, appJobFilter])

  // Filtered enquiries
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((e) => {
      return (
        enquirySearch === "" ||
        e.name.toLowerCase().includes(enquirySearch.toLowerCase()) ||
        e.email.toLowerCase().includes(enquirySearch.toLowerCase()) ||
        (e.organisation && e.organisation.toLowerCase().includes(enquirySearch.toLowerCase())) ||
        (e.area_of_interest && e.area_of_interest.toLowerCase().includes(enquirySearch.toLowerCase()))
      )
    })
  }, [enquiries, enquirySearch])

  const activeJobCount = jobs.filter((j) => j.is_active).length

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-[#172033]">
      {/* Top Header */}
      <header className="bg-[#002147] text-white border-b border-[#071a33] sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/carawin_logo_white.png"
                alt="Carawin Technologies"
                width={596}
                height={238}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff4d6d]" />
              Management Admin
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/careers"
              target="_blank"
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1 transition"
            >
              <span>View Careers</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
            <Link
              href="/contact"
              target="_blank"
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1 transition"
            >
              <span>View Contact Page</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Total Positions</div>
            <div className="text-2xl font-black text-slate-900">{jobs.length}</div>
            <div className="text-[11px] text-slate-400 mt-1">All posted roles</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Active Openings</div>
            <div className="text-2xl font-black text-emerald-700">{activeJobCount}</div>
            <div className="text-[11px] text-slate-400 mt-1">Accepting applications</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-[#b5122b] mb-1">Job Applicants</div>
            <div className="text-2xl font-black text-slate-900">{applications.length}</div>
            <div className="text-[11px] text-slate-400 mt-1">Candidates in pipeline</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Client Enquiries</div>
            <div className="text-2xl font-black text-slate-900">{enquiries.length}</div>
            <div className="text-[11px] text-slate-400 mt-1">Contact form messages</div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 mb-6 pb-2 gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition ${
                activeTab === "jobs"
                  ? "bg-[#002147] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Job Openings ({jobs.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition ${
                activeTab === "applications"
                  ? "bg-[#002147] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Candidate Applications ({applications.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("enquiries")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition ${
                activeTab === "enquiries"
                  ? "bg-[#002147] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Enquiries ({enquiries.length})</span>
            </button>
          </div>

          <div>
            {activeTab === "jobs" && (
              <button
                onClick={openCreateJobModal}
                className="inline-flex items-center gap-1.5 bg-[#b5122b] hover:bg-[#920e22] text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Position</span>
              </button>
            )}
            {activeTab === "applications" && (
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition shadow-sm"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Export Applications CSV</span>
              </button>
            )}
            {activeTab === "enquiries" && (
              <button
                onClick={handleExportEnquiriesCSV}
                className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition shadow-sm"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Export Enquiries CSV</span>
              </button>
            )}
          </div>
        </div>

        {/* TAB 1: JOB OPENINGS */}
        {activeTab === "jobs" && (
          <div className="space-y-4">
            {/* Search bar */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
              <input
                type="text"
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                placeholder="Filter jobs by title, department, or location..."
                className="w-full text-xs text-slate-800 bg-transparent focus:outline-none"
              />
              {jobSearch && (
                <button onClick={() => setJobSearch("")} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Table */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Position Title</th>
                      <th className="py-3.5 px-4">Department</th>
                      <th className="py-3.5 px-4">Location</th>
                      <th className="py-3.5 px-4">Level</th>
                      <th className="py-3.5 px-4">Type</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredJobs.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-slate-400 text-xs">
                          No positions match your search criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredJobs.map((job) => (
                        <tr key={job.id} className="hover:bg-slate-50 transition">
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            <Link href={`/careers/${job.id}`} target="_blank" className="hover:text-[#002147] flex items-center gap-1.5">
                              {job.title}
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </Link>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                              {job.department}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">{job.location}</td>
                          <td className="py-3.5 px-4">{job.experience_level}</td>
                          <td className="py-3.5 px-4">{job.job_type}</td>
                          <td className="py-3.5 px-4">
                            <button
                              onClick={() => handleToggleActive(job)}
                              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition ${
                                job.is_active
                                  ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                                  : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                              }`}
                            >
                              {job.is_active ? "● Active" : "○ Inactive"}
                            </button>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => openEditJobModal(job)}
                                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
                                title="Edit Job"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteJob(job.id)}
                                className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition"
                                title="Delete Job Permanently"
                                aria-label={`Delete ${job.title} permanently`}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: APPLICATIONS */}
        {activeTab === "applications" && (
          <div className="space-y-4">
            {/* Filter Bar */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex-1 flex items-center gap-2 w-full">
                <Search className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                <input
                  type="text"
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  placeholder="Filter by applicant name, email, or skills..."
                  className="w-full text-xs text-slate-800 bg-transparent focus:outline-none"
                />
                {appSearch && (
                  <button onClick={() => setAppSearch("")} className="text-slate-400 hover:text-slate-600">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-slate-400 whitespace-nowrap">Filter by Position:</span>
                <select
                  value={appJobFilter}
                  onChange={(e) => setAppJobFilter(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800 focus:outline-none"
                >
                  <option value="All">All Positions</option>
                  {jobs.map((j) => (
                    <option key={j.id} value={String(j.id)}>
                      {j.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Applications Table */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Candidate</th>
                      <th className="py-3.5 px-4">Position</th>
                      <th className="py-3.5 px-4">Country</th>
                      <th className="py-3.5 px-4">CV / Resume Link</th>
                      <th className="py-3.5 px-4">LinkedIn</th>
                      <th className="py-3.5 px-4">Submitted</th>
                      <th className="py-3.5 px-4 text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredApps.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-400 text-xs">
                          No candidate applications submitted yet.
                        </td>
                      </tr>
                    ) : (
                      filteredApps.map((app) => (
                        <tr key={app.id} className="hover:bg-slate-50 transition">
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-slate-900">
                              {app.first_name} {app.last_name}
                            </div>
                            <div className="text-[11px] text-slate-500">{app.email}</div>
                            <div className="text-[11px] text-slate-400">{app.phone}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-slate-800">{app.job_title || `Job #${app.job_id}`}</div>
                            <div className="text-[11px] text-slate-500">{app.job_department || app.area_of_interest}</div>
                          </td>
                          <td className="py-3.5 px-4">{app.country || "—"}</td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-1.5">
                              <a
                                href={app.cv_drive_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#002147] hover:underline font-medium inline-flex items-center gap-1"
                              >
                                <FileText className="w-3.5 h-3.5" />
                                Open CV
                              </a>
                              <button
                                onClick={() => handleCopyLink(app.id, app.cv_drive_link)}
                                className="p-1 rounded hover:bg-slate-200 text-slate-500 transition"
                                title="Copy CV URL"
                              >
                                {copiedId === app.id ? (
                                  <Check className="w-3 h-3 text-green-600" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            {app.linkedin_url ? (
                              <a
                                href={app.linkedin_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#002147] hover:underline inline-flex items-center gap-1 font-medium"
                              >
                                View Profile
                                <ExternalLink className="w-3 h-3 text-slate-400" />
                              </a>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500">
                            {new Date(app.created_at).toLocaleDateString()}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => setViewingApp(app)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              Review
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONTACT ENQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="space-y-4">
            {/* Search bar */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
              <input
                type="text"
                value={enquirySearch}
                onChange={(e) => setEnquirySearch(e.target.value)}
                placeholder="Filter enquiries by name, email, organisation, or area of interest..."
                className="w-full text-xs text-slate-800 bg-transparent focus:outline-none"
              />
              {enquirySearch && (
                <button onClick={() => setEnquirySearch("")} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Table */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Sender</th>
                      <th className="py-3.5 px-4">Organisation & Role</th>
                      <th className="py-3.5 px-4">Contact</th>
                      <th className="py-3.5 px-4">Area of Interest</th>
                      <th className="py-3.5 px-4">Message Preview</th>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-400 text-xs">
                          No contact enquiries found.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-slate-50 transition">
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            <div>{enq.name}</div>
                            {enq.location && (
                              <div className="text-[11px] text-slate-400 font-normal">{enq.location}</div>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-slate-800">{enq.organisation || "—"}</div>
                            <div className="text-[11px] text-slate-500">{enq.designation || ""}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="text-slate-900 font-medium">
                              <a href={`mailto:${enq.email}`} className="hover:text-[#002147] hover:underline flex items-center gap-1">
                                <Mail className="w-3 h-3 text-slate-400" />
                                {enq.email}
                              </a>
                            </div>
                            {enq.phone && (
                              <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                                <Phone className="w-3 h-3 text-slate-400" />
                                {enq.phone}
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            {enq.area_of_interest ? (
                              <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                                {enq.area_of_interest}
                              </span>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 max-w-xs truncate text-slate-600">
                            {enq.message}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                            {new Date(enq.created_at).toLocaleDateString()}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setViewingEnquiry(enq)}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                View
                              </button>
                              <button
                                onClick={() => handleDeleteEnquiry(enq.id)}
                                className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition"
                                title="Delete Enquiry"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CREATE / EDIT JOB MODAL */}
      {isJobModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h2 className="text-lg font-bold text-slate-900">
                {editingJob ? "Edit Position Opening" : "Create New Job Opening"}
              </h2>
              <button
                onClick={() => setIsJobModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalError && (
              <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>{modalError}</span>
              </div>
            )}

            <form onSubmit={handleSaveJob} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Senior Cloud Architect"
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Department
                  </label>
                  <select
                    value={jobDepartment}
                    onChange={(e) => setJobDepartment(e.target.value)}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="AI & Product">AI & Product</option>
                    <option value="Education">Education</option>
                    <option value="Data & Research">Data & Research</option>
                    <option value="Design">Design</option>
                    <option value="Implementation & Advisory">Implementation & Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={jobLocation}
                    onChange={(e) => setJobLocation(e.target.value)}
                    placeholder="e.g. Remote / New Delhi, IN"
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Experience Level
                  </label>
                  <select
                    value={jobExpLevel}
                    onChange={(e) => setJobExpLevel(e.target.value)}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                  >
                    <option value="Entry Level">Entry Level</option>
                    <option value="Professional">Professional</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Job Type
                  </label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Job Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Detail the mission, daily responsibilities, and team impact..."
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Requirements & Qualifications <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={jobRequirements}
                  onChange={(e) => setJobRequirements(e.target.value)}
                  placeholder="List essential skills, qualifications, degrees, or tools..."
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsJobModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={modalSubmitting}
                  className="bg-[#002147] hover:bg-[#071a33] text-white px-5 py-2 rounded-lg text-xs font-bold transition disabled:opacity-50"
                >
                  {modalSubmitting ? "Saving..." : editingJob ? "Update Position" : "Publish Position"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW APPLICATION DETAIL MODAL */}
      {viewingApp && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Applicant Profile
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Applied for {viewingApp.job_title || `Job #${viewingApp.job_id}`} on{" "}
                  {new Date(viewingApp.created_at).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setViewingApp(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-xs text-slate-700">
              {/* Personal info grid */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Full Name</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {viewingApp.first_name} {viewingApp.last_name}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Email</div>
                  <div className="text-sm font-semibold text-slate-800 mt-0.5">{viewingApp.email}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Phone</div>
                  <div className="font-semibold text-slate-800 mt-0.5">{viewingApp.phone}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Country / Region</div>
                  <div className="font-semibold text-slate-800 mt-0.5">{viewingApp.country || "—"}</div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={viewingApp.cv_drive_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#002147] hover:bg-[#071a33] text-white px-4 py-2 rounded-lg font-bold transition"
                >
                  <FileText className="w-4 h-4" />
                  Open CV / Cloud Drive
                </a>
                {viewingApp.linkedin_url && (
                  <a
                    href={viewingApp.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-lg font-bold border border-slate-200 transition"
                  >
                    <Globe className="w-4 h-4 text-blue-600" />
                    LinkedIn Profile
                  </a>
                )}
                <button
                  onClick={() => handleCopyLink(viewingApp.id, viewingApp.cv_drive_link)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                >
                  {copiedId === viewingApp.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy CV Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Skills */}
              {viewingApp.skills && (
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-2">Key Skills</div>
                  <div className="flex flex-wrap gap-1.5">
                    {viewingApp.skills.split(",").map((s: string) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-medium"
                      >
                        {s.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cover Letter */}
              {viewingApp.cover_letter && (
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Cover Letter / Note</div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 whitespace-pre-line text-slate-700 leading-relaxed">
                    {viewingApp.cover_letter}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setViewingApp(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2 rounded-lg font-bold text-xs transition"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW CONTACT ENQUIRY MODAL */}
      {viewingEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Enquiry Message
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Received from {viewingEnquiry.name} on{" "}
                  {new Date(viewingEnquiry.created_at).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setViewingEnquiry(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-xs text-slate-700">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Sender Name</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{viewingEnquiry.name}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Organisation</div>
                  <div className="text-sm font-semibold text-slate-800 mt-0.5">
                    {viewingEnquiry.organisation || "—"}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Designation / Role</div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    {viewingEnquiry.designation || "—"}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Location</div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    {viewingEnquiry.location || "—"}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Email Address</div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    <a href={`mailto:${viewingEnquiry.email}`} className="text-[#002147] hover:underline">
                      {viewingEnquiry.email}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Phone Number</div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    {viewingEnquiry.phone || "—"}
                  </div>
                </div>
              </div>

              {viewingEnquiry.area_of_interest && (
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Area of Interest</div>
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800">
                    {viewingEnquiry.area_of_interest}
                  </span>
                </div>
              )}

              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Message Content</div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 whitespace-pre-line text-slate-800 leading-relaxed text-sm">
                  {viewingEnquiry.message}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`mailto:${viewingEnquiry.email}?subject=Re: Your enquiry with Carawin Technologies`}
                  className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#071a33] text-white px-4 py-2 rounded-lg font-bold transition"
                >
                  <Mail className="w-4 h-4" />
                  Reply via Email
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setViewingEnquiry(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2 rounded-lg font-bold text-xs transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
