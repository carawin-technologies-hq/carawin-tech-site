"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  GraduationCap,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Upload,
  Globe,
  Share2,
  Check,
  Send,
  Building2,
} from "lucide-react"
import type { Job } from "@/lib/jobs-data"

const predefinedSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "PyTorch / TensorFlow",
  "Machine Learning / AI",
  "Docker / Kubernetes",
  "AWS / GCP Cloud",
  "UI/UX / Figma",
  "Curriculum & Pedagogy",
  "Product Management",
  "Data Analysis / SQL",
]

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Singapore",
  "United Arab Emirates",
  "Other",
]

const areasOfInterest = [
  "Engineering & Technology",
  "AI & Machine Learning",
  "Education & Pedagogy",
  "Data & Research",
  "Design & User Experience",
  "Implementation & Advisory",
  "Product Management",
  "Operations & Administration",
]

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const jobId = resolvedParams.id

  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Form State
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [cvDriveLink, setCvDriveLink] = useState("")
  const [country, setCountry] = useState("India")
  const [areaOfInterest, setAreaOfInterest] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [customSkill, setCustomSkill] = useState("")
  const [coverLetter, setCoverLetter] = useState("")

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [copiedLink, setCopiedLink] = useState(false)

  useEffect(() => {
    async function loadJob() {
      try {
        const res = await fetch(`/api/jobs/${jobId}`)
        if (!res.ok) {
          throw new Error("Job opening not found or has been closed.")
        }
        const data = await res.json()
        setJob(data.job)
        if (data.job?.department) {
          setAreaOfInterest(data.job.department)
        }
      } catch (err: any) {
        setError(err.message || "Failed to load job details")
      } finally {
        setLoading(false)
      }
    }
    loadJob()
  }, [jobId])

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const addCustomSkill = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && customSkill.trim()) {
      e.preventDefault()
      if (!selectedSkills.includes(customSkill.trim())) {
        setSelectedSkills([...selectedSkills, customSkill.trim()])
      }
      setCustomSkill("")
    }
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    // Validation
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !linkedinUrl.trim() || !cvDriveLink.trim()) {
      setSubmitError("Please fill in all required fields (marked with *).")
      return
    }

    // Basic URL check
    if (!cvDriveLink.startsWith("http://") && !cvDriveLink.startsWith("https://")) {
      setSubmitError("Please provide a valid URL for your CV / Resume Link (e.g. Google Drive, Dropbox, Notion, or personal site).")
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: job?.id || Number(jobId),
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          linkedin_url: linkedinUrl,
          cv_drive_link: cvDriveLink,
          country,
          area_of_interest: areaOfInterest || job?.department,
          skills: selectedSkills,
          cover_letter: coverLetter,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application.")
      }

      setSubmitSuccess(true)
      // Reset form
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setLinkedinUrl("")
      setCvDriveLink("")
      setCoverLetter("")
      setSelectedSkills([])
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong while submitting. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafbfc] py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="animate-pulse space-y-6">
            <div className="h-6 bg-slate-200 rounded w-1/4"></div>
            <div className="h-10 bg-slate-200 rounded w-2/3"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
            <div className="h-64 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-[#fafbfc] py-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <AlertCircle className="w-12 h-12 text-[#b5122b] mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Job Opening Not Available</h2>
          <p className="text-sm text-slate-600 mb-6">{error || "This position may have been filled or archived."}</p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-[#002147] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Openings
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#172033]">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="border-b border-[#e2e8f0] bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#002147] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 transition"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-600 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Role</span>
                </>
              )}
            </button>
            <a
              href="#apply-section"
              className="inline-flex items-center gap-2 bg-[#b5122b] hover:bg-[#920e22] text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="border-b border-[#e2e8f0] bg-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block text-xs font-bold text-[#b5122b] uppercase tracking-wider mb-2">
              {job.department}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {job.title}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-md font-medium">
                <MapPin className="w-4 h-4 text-slate-500" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-md font-medium">
                <GraduationCap className="w-4 h-4 text-slate-500" />
                {job.experience_level}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-md font-medium">
                <Briefcase className="w-4 h-4 text-slate-500" />
                {job.job_type}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-md font-medium">
                <Calendar className="w-4 h-4 text-slate-500" />
                Posted {new Date(job.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Job Description & Specifications (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* About the role */}
            <section className="bg-white border border-[#e2e8f0] rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                About the Position
              </h2>
              <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line space-y-4">
                {job.description}
              </div>
            </section>

            {/* Requirements & Qualifications */}
            <section className="bg-white border border-[#e2e8f0] rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Key Requirements & Qualifications
              </h2>
              <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line space-y-4">
                {job.requirements}
              </div>
            </section>

            {/* About Carawin */}
            <section className="bg-white border border-[#e2e8f0] rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                About Carawin Technologies
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Carawin is building the future of education — designing adaptive learning intelligence, automated assessment engines, institutional ERP platforms, and cloud infrastructure for schools, colleges, and governments worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#002147] mb-1">Our Vision</h4>
                  <p className="text-xs text-slate-600">
                    High-quality, personalized education accessible to every learner through ethical AI and robust infrastructure.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#b5122b] mb-1">Our Environment</h4>
                  <p className="text-xs text-slate-600">
                    High trust, zero bureaucracy, deep respect for craft, and collaborative problem-solving.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Detailed Application Form (5 Cols) */}
          <div className="lg:col-span-5" id="apply-section">
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 sm:p-8 shadow-sm sticky top-24">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">Apply for this Role</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Complete the application form below. Our talent team reviews every submission carefully.
                </p>
              </div>

              {/* Success Notification */}
              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-emerald-900 mb-1">Application Submitted!</h3>
                  <p className="text-xs text-emerald-700 mb-4 leading-relaxed">
                    Thank you for applying for the <strong>{job.title}</strong> position. Our recruiting team will review your credentials and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs font-semibold text-emerald-800 underline hover:no-underline"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error Notification */}
                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Aarav"
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. Sharma"
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Primary Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Primary Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                      />
                    </div>
                  </div>

                  {/* LinkedIn Profile */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      LinkedIn Profile URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                    />
                  </div>

                  {/* CV / Resume Cloud Drive Link */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      CV / Resume Link (Google Drive / Cloud URL) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={cvDriveLink}
                      onChange={(e) => setCvDriveLink(e.target.value)}
                      placeholder="https://drive.google.com/file/d/..."
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Please ensure viewing permissions are enabled for anyone with the link.
                    </p>
                  </div>

                  {/* Country & Area of Interest */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Country / Region
                      </label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                      >
                        {countries.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Area of Interest
                      </label>
                      <select
                        value={areaOfInterest}
                        onChange={(e) => setAreaOfInterest(e.target.value)}
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                      >
                        {areasOfInterest.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Key Skills Multi-Select Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Key Skills & Core Strengths
                    </label>
                    <div className="flex flex-wrap gap-1.5 mb-2 max-h-36 overflow-y-auto p-1 border border-slate-200 rounded-lg bg-slate-50">
                      {predefinedSkills.map((skill) => {
                        const isSelected = selectedSkills.includes(skill)
                        return (
                          <button
                            key={skill}
                            type="button"
                            onClick={() => toggleSkill(skill)}
                            className={`px-2.5 py-1 rounded-md text-xs transition ${
                              isSelected
                                ? "bg-[#002147] text-white font-medium"
                                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {isSelected ? "✓ " : "+ "}
                            {skill}
                          </button>
                        )
                      })}
                    </div>
                    {/* Add Custom Skill */}
                    <input
                      type="text"
                      value={customSkill}
                      onChange={(e) => setCustomSkill(e.target.value)}
                      onKeyDown={addCustomSkill}
                      placeholder="Type a skill and press Enter to add..."
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800 focus:outline-none focus:border-[#002147]"
                    />
                  </div>

                  {/* Cover Letter (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Cover Letter / Note <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      placeholder="Tell us what excites you about this role and how you will make an impact at Carawin..."
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#002147] hover:bg-[#071a33] text-white py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition disabled:opacity-50 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center">
                    By submitting, you agree to our recruitment privacy guidelines.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
