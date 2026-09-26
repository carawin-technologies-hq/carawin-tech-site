"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle, Send, Mail, MapPin } from "lucide-react"
import { contactAreasOfInterest } from "@/lib/carawin-content"

const sectorConversations = [
  { role: "GOVERNMENT", desc: "Discuss technology-enabled programmes." },
  { role: "SCHOOLS", desc: "Explore AI, STEM and future skills." },
  { role: "INDUSTRY", desc: "Explore AI, software and IoT solutions." },
  { role: "CSR", desc: "Build measurable technology-impact programmes." },
  { role: "TECHNOLOGY PARTNERS", desc: "Explore collaboration." },
  { role: "CONSULTANCY", desc: "Discuss your technology challenge." },
  { role: "PRODUCT DEVELOPMENT", desc: "Explore your idea or technology requirement." },
]

export default function ContactPage() {
  const [name, setName] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [designation, setDesignation] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [areaOfInterest, setAreaOfInterest] = useState("")
  const [message, setMessage] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Email, and Requirement).")
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
          location: "Direct Web Enquiry",
          area_of_interest: areaOfInterest || "General Enquiry",
          message,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.")
      }

      setIsSuccess(true)
      setName("")
      setOrganisation("")
      setDesignation("")
      setEmail("")
      setPhone("")
      setAreaOfInterest("")
      setMessage("")
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">START A CONVERSATION</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            LET&apos;S BUILD THE FUTURE.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Whether you represent a government, school, university, institution, CSR organisation, industry or technology company, tell us what you are trying to build.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="border-b border-[var(--border)] bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1.35fr] lg:items-start">
            {/* Left: How We Can Engage */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[var(--crimson)]">
                ENGAGEMENT PATHWAYS
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-[var(--navy)] sm:text-3xl">
                Tell Us What You Are Trying to Build
              </h2>

              <div className="mt-6 space-y-3">
                {sectorConversations.map((item) => (
                  <div
                    key={item.role}
                    className="flex flex-col rounded-xl border border-[var(--border)] bg-[#fafbfc] p-4 text-left transition hover:border-[var(--navy)]/30 hover:bg-white"
                  >
                    <span className="font-mono text-xs font-black tracking-wider text-[var(--navy)]">
                      {item.role}
                    </span>
                    <span className="mt-1 text-xs text-[var(--muted)]">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Office Info */}
              <div className="mt-8 rounded-2xl border border-[var(--navy)] bg-[var(--navy)] p-6 text-white shadow-sm">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7185]">
                  REGISTERED HEADQUARTERS
                </p>
                <div className="mt-4 space-y-3 text-xs leading-relaxed text-white/80">
                  <p className="flex items-start gap-2.5">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-[#ff7185]" />
                    <span>22-A, 2nd Floor, Asaf Ali Road, Ajmeri Gate Extension, New Delhi – 110002, India</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Mail size={16} className="shrink-0 text-[#ff7185]" />
                    <a href="mailto:contact@carawintech.com" className="transition hover:text-white">
                      contact@carawintech.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="rounded-[28px] border border-[var(--border)] bg-[#fafbfc] p-6 shadow-sm sm:p-10">
              <div className="border-b border-[var(--border)] pb-5">
                <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[var(--crimson)]">
                  ENQUIRY FORM
                </p>
                <h3 className="mt-1 text-2xl font-black text-[var(--navy)]">
                  Start a Conversation
                </h3>
              </div>

              {isSuccess ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center text-emerald-900">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                  <h4 className="mt-4 text-xl font-bold">Enquiry Received</h4>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-800">
                    Thank you for reaching out to Carawin Technologies. Our team has received your message and will connect with you within 1 business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="btn-primary mt-6 text-xs"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3.5 text-xs font-bold text-rose-700">
                      <AlertCircle size={15} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      <span>Name *</span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Full Name"
                        className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      <span>Organisation</span>
                      <input
                        type="text"
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}
                        placeholder="Company, Department or Institution"
                        className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      <span>Designation</span>
                      <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="e.g. Director, Principal, CTO"
                        className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      <span>Email *</span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organisation.com"
                        className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      <span>Phone</span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      <span>Area of Interest</span>
                      <select
                        value={areaOfInterest}
                        onChange={(e) => setAreaOfInterest(e.target.value)}
                        className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                      >
                        <option value="">Select an Area of Interest</option>
                        {contactAreasOfInterest.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    <span>Tell us about your requirement *</span>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your current requirement, institution type, project scale or mandate..."
                      className="resize-none rounded-xl border border-[var(--border)] bg-white p-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-xs font-bold uppercase tracking-wider"
                  >
                    {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
