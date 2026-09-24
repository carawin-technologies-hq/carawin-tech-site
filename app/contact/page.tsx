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
    <section className="relative overflow-hidden bg-[#f7f9fb] py-24 sm:py-32">
      <div className="pointer-events-none absolute right-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full border border-[var(--crimson)]/10" />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <p className="kicker text-[var(--crimson)]">Start a conversation</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[.94] tracking-[-.055em] text-[var(--navy)] sm:text-7xl">
            Let&apos;s build the future of education.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Tell us where you are today and what you want to transform. We&apos;ll connect you with the right Carawin specialist team.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-12">
        {/* Left Column: Context & Contact Details */}
          <div className="lg:sticky lg:top-32">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm sm:p-6">
                <Building className="h-5 w-5 text-[var(--crimson)]" />
                <h2 className="mt-8 text-xl font-black tracking-tight text-[var(--navy)]">Who we work with</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Schools, colleges, universities, government departments, CSR teams and systemic education partners.</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm sm:p-6">
                <MapPin className="h-5 w-5 text-[var(--crimson)]" />
                <h2 className="mt-8 text-xl font-black tracking-tight text-[var(--navy)]">New Delhi, India</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Connect with our team for partnerships, transformation programmes and education technology.</p>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-[var(--navy)] bg-[var(--navy)] p-5 text-white shadow-sm sm:p-6">
              <h2 className="text-xs font-bold uppercase tracking-[.18em] text-white/55">Direct contact</h2>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-[#ff7185]" /><a href="mailto:office@carawintech.com" className="break-all transition hover:text-[#ff9aaa]">office@carawintech.com</a></div>
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-[#ff7185]" /><a href="mailto:career@carawintech.com" className="break-all transition hover:text-[#ff9aaa]">career@carawintech.com</a></div>
              </div>
            </div>
          </div>

        {/* Right Column: Interactive Form */}
        <div className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-[0_20px_60px_rgba(0,33,71,.08)] sm:p-8 lg:p-10">
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
                className="btn-primary mt-2 flex w-full items-center justify-center gap-2 disabled:opacity-50 sm:w-fit"
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
      </div>
    </section>
  )
}
