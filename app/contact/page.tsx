"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2, AlertCircle, Send, Building, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [designation, setDesignation] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [areaOfInterest, setAreaOfInterest] = useState("")
  const [message, setMessage] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Email, and Message).")
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          organisation,
          designation,
          email,
          phone,
          location,
          area_of_interest: areaOfInterest,
          message,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.")
      }

      setIsSuccess(true)
      // Reset form fields
      setName("")
      setOrganisation("")
      setDesignation("")
      setEmail("")
      setPhone("")
      setLocation("")
      setAreaOfInterest("")
      setMessage("")
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="container-x py-20 sm:py-28">
      <p className="kicker text-[var(--crimson)]">Contact</p>
      <h1 className="h1 mt-4 max-w-5xl">Let’s build the future of education.</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        {/* Left Column: Context & Contact Details */}
        <div>
          <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed">
            Tell us where you are today and what you want to transform. We’ll connect you with the right Carawin specialist team.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--crimson)]"></span>
              <span>Schools · Colleges · Universities</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--navy)]"></span>
              <span>Government Departments · CSR · Systemic Partners</span>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--navy)]">
              Direct Contact
            </h3>
            <div className="flex items-center gap-3 text-sm text-[var(--foreground)]">
              <Mail className="w-4 h-4 text-[var(--crimson)] shrink-0" />
              <a href="mailto:contact@carawin.tech" className="hover:underline">
                contact@carawin.tech
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--foreground)]">
              <MapPin className="w-4 h-4 text-[var(--crimson)] shrink-0" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div>
          {isSuccess ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 sm:p-10 text-center shadow-sm">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-emerald-950 mb-2">
                Enquiry Received
              </h2>
              <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed mb-6">
                Thank you for reaching out to Carawin Technologies. Your message has been received and our team will get in touch with you within 1-2 business days.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="btn-primary"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[var(--muted)]">
                  <span>Name <span className="text-red-500">*</span></span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                  />
                </label>
                <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[var(--muted)]">
                  <span>Organisation</span>
                  <input
                    type="text"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="Institution or Department"
                    className="h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[var(--muted)]">
                  <span>Designation</span>
                  <input
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="e.g. Principal, Director, CIO"
                    className="h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                  />
                </label>
                <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[var(--muted)]">
                  <span>Email <span className="text-red-500">*</span></span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@organisation.com"
                    className="h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[var(--muted)]">
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                  />
                </label>
                <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[var(--muted)]">
                  <span>Location</span>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, State / Country"
                    className="h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                  />
                </label>
              </div>

              <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[var(--muted)]">
                <span>Area of Interest</span>
                <select
                  value={areaOfInterest}
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                  className="h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                >
                  <option value="">Select an Area of Interest</option>
                  <option value="Smart Classrooms & Infrastructure">Smart Classrooms & Infrastructure</option>
                  <option value="Adaptive AI & Pedagogical Tools">Adaptive AI & Pedagogical Tools</option>
                  <option value="Institutional ERP & Cloud Platforms">Institutional ERP & Cloud Platforms</option>
                  <option value="Automated Assessment & Exams">Automated Assessment & Exams</option>
                  <option value="Government & Large-Scale Advisory">Government & Large-Scale Advisory</option>
                  <option value="Partnership / Investment">Partnership / Investment</option>
                  <option value="Other">Other Enquiry</option>
                </select>
              </label>

              <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[var(--muted)]">
                <span>Message <span className="text-red-500">*</span></span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your current requirements, timeline, or mandate..."
                  className="resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-fit flex items-center gap-2 disabled:opacity-50 mt-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Start a conversation</span>
                    <ArrowUpRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
