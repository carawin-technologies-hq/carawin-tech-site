
"use client"

import { useState } from "react"
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Send,
  Mail,
  MapPin,
  Building2,
  GraduationCap,
  Cpu,
  Phone,
  Handshake,
  Lightbulb,
  BriefcaseBusiness,
} from "lucide-react"
import { contactAreasOfInterest } from "@/lib/carawin-content"

const sectorConversations = [
  {
    role: "Government",
    desc: "Technology-enabled programmes",
    icon: Building2,
  },
  {
    role: "Schools",
    desc: "AI, STEM and future skills",
    icon: GraduationCap,
  },
  {
    role: "Industry",
    desc: "AI, software and IoT solutions",
    icon: Cpu,
  },
  {
    role: "CSR",
    desc: "Technology-impact programmes",
    icon: Handshake,
  },
  {
    role: "Technology Partners",
    desc: "Collaboration opportunities",
    icon: Lightbulb,
  },
  {
    role: "Consultancy & Product Development",
    desc: "Your technology challenge or idea",
    icon: BriefcaseBusiness,
  },
]

const inputClass =
  "mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#071f40] outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#ed174c] focus:ring-4 focus:ring-[#ed174c]/[.07]"

const labelClass =
  "block text-sm font-semibold text-[#071f40]"

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
      setErrorMessage(
        "Please fill in all required fields (Name, Email, and Requirement)."
      )
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
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="overflow-hidden bg-[#f5f7fa] text-[#071f40]">
      {/* Hero */}
      <section className="relative border-b border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#ed174c]/[.045] blur-3xl"
        />



<div className="container-x relative mx-auto pt-32 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ed174c]">
              CONTACT CARAWIN
              <span className="h-px w-10 bg-[#ed174c]" />
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-7xl">
              Let&apos;s talk about
              <br className="hidden sm:block" /> what you&apos;re{" "}
              <span className="text-[#ed174c]">building.</span>
            </h1>

            <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Tell us about your requirement. Whether you represent a
                government, school, university, institution, CSR organisation,
                industry or technology company, we&apos;d like to hear what
                you have in mind.
              </p>

              <a
                href="#enquiry-form"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#ed174c] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d70f40] hover:shadow-lg hover:shadow-[#ed174c]/15"
              >
                Send an enquiry
                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-slate-200 sm:mt-14" />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span className="font-mono uppercase tracking-[.16em]">
              Start a conversation
            </span>
            <span>Government · Education · Industry · Technology</span>
          </div>
        </div>
      </section>

      {/* Main contact area */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-x mx-auto">
          <div className="grid items-start gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
            {/* Engagement pathways */}
            <aside>
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#ed174c]">
                HOW WE CAN ENGAGE
              </p>

              <h2 className="mt-3 max-w-md text-2xl font-black leading-tight tracking-[-.035em] sm:text-3xl">
                What would you like to work on?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Choose the area closest to your requirement, then share the
                details in the enquiry form.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {sectorConversations.map((item, index) => {
                  const Icon = item.icon
                  const selected =
                    areaOfInterest.toLowerCase() === item.role.toLowerCase()

                  return (
                    <button
                      key={item.role}
                      type="button"
                      onClick={() => {
                        setAreaOfInterest(item.role)
                        document
                          .getElementById("enquiry-form")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                      }}
                      className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
                        selected
                          ? "border-[#ed174c]/50 bg-white shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          selected
                            ? "bg-[#ed174c] text-white"
                            : "bg-[#fcecf0] text-[#ed174c] group-hover:bg-[#f9dce4]"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-[#071f40]">
                          {item.role}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {item.desc}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-slate-400 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ed174c]"
                      />
                    </button>
                  )
                })}
              </div>

              {/* Office details */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[.18em] text-slate-500">
                  Registered headquarters
                </p>

                <div className="mt-5 flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fcecf0] text-[#ed174c]">
                    <MapPin size={18} />
                  </span>
                  <p className="pt-1 text-sm leading-6 text-slate-600">
                    INNOV8 OKHLA, 3rd Floor, 211, OKHLA INDL. ESTATE PHASE
                    -III NEW DELHI 110020
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fcecf0] text-[#ed174c]">
                    <Mail size={18} />
                  </span>
                  <a
                    href="mailto:office@carawintech.com"
                    className="break-all text-sm font-semibold text-[#071f40] transition-colors hover:text-[#ed174c]"
                  >
                    office@carawintech.com
                  </a>
                </div>

                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fcecf0] text-[#ed174c]">
    <Phone size={18} />
  </span>

  <a
    href="tel:+918924099910"
    className="text-sm font-semibold text-[#071f40] transition-colors hover:text-[#ed174c]"
  >
    +91 89240 99910
  </a>
</div>
              </div>
            </aside>

            {/* Enquiry form */}
            <div
              id="enquiry-form"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_50px_rgba(7,31,64,.045)] sm:p-8 lg:p-10"
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#ed174c]">
                    ENQUIRY FORM
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-[#071f40] sm:text-3xl">
                    Tell us the details.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fields marked with * are required.
                  </p>
                </div>

                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fcecf0] text-[#ed174c] sm:flex">
                  <Send size={21} />
                </span>
              </div>

              {isSuccess ? (
                <div
                  role="status"
                  className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8"
                >
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />

                  <h3 className="mt-4 text-xl font-black text-emerald-950">
                    Enquiry received
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-800">
                    Thank you for reaching out to Carawin Technologies. Our
                    team has received your message and will connect with you
                    within 1 business day.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#071f40] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0d315e]"
                  >
                    Send another enquiry
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  {errorMessage && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"
                    >
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      Name *
                      <input
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </label>

                    <label className={labelClass}>
                      Organisation
                      <input
                        type="text"
                        autoComplete="organization"
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}
                        placeholder="Company or institution"
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      Designation
                      <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="Your role"
                        className={inputClass}
                      />
                    </label>

                    <label className={labelClass}>
                      Email *
                      <input
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organisation.com"
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      Phone
                      <input
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </label>

                    <label className={labelClass}>
                      Area of interest
                      <select
                        value={areaOfInterest}
                        onChange={(e) => setAreaOfInterest(e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select an area</option>
                        {contactAreasOfInterest.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className={labelClass}>
                    Tell us about your requirement *
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your requirement, project scope or technology challenge..."
                      className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-[#071f40] outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#ed174c] focus:ring-4 focus:ring-[#ed174c]/[.07]"
                    />
                  </label>

                  <div className="border-t border-slate-100 pt-5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ed174c] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d70f40] hover:shadow-lg hover:shadow-[#ed174c]/15 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-48"
                    >
                      {isSubmitting ? "Sending enquiry..." : "Send enquiry"}
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
