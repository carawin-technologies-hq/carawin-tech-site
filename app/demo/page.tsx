"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react"
import { demoItems } from "@/lib/carawin-content"

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState<string>("AI Tutor")
  const [name, setName] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [designation, setDesignation] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please fill in your name and work email.")
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
          location: "Demo Request",
          area_of_interest: `Demo: ${selectedDemo}`,
          message: message || `Requesting a live demonstration for: ${selectedDemo}`,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit demo request.")
      }

      setIsSuccess(true)
      setName("")
      setOrganisation("")
      setDesignation("")
      setEmail("")
      setPhone("")
      setMessage("")
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">LIVE PRODUCT DEMONSTRATION</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            DON&apos;T JUST READ ABOUT CARAWIN. EXPERIENCE IT.
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Explore live walkthroughs of our AI models, adaptive learning platforms, virtual STEM labs, and institutional intelligence dashboards.
          </p>
        </div>
      </section>

      {/* Demo Selector + Request Form */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1.9fr]">
            {/* 10 Demonstration Areas */}
            <div>
              <p className="kicker text-[var(--crimson)]">SELECT PRODUCT AREA</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--navy)] sm:text-3xl">
                Request Demonstrations Of:
              </h2>

              <div className="mt-6 space-y-2">
                {demoItems.map((item, idx) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedDemo(item)}
                    className={`flex w-full items-center justify-between rounded-xl border p-4 text-left font-bold transition ${
                      selectedDemo === item
                        ? "border-[var(--crimson)] bg-[var(--crimson)] text-white shadow-sm"
                        : "border-[var(--border)] bg-[#fafbfc] text-[var(--navy)] hover:border-[var(--navy)]/30 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs ${
                          selectedDemo === item ? "text-white/80" : "text-[var(--crimson)]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="text-sm">{item}</span>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className={selectedDemo === item ? "text-white" : "text-[var(--muted)]"}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[28px] border border-[var(--border)] bg-[#fafbfc] p-8 shadow-sm sm:p-12">
              <div className="border-b border-[var(--border)] pb-6">
                <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                  ACTIVE SELECTION
                </span>
                <h3 className="mt-1 text-2xl font-black text-[var(--navy)]">
                  {selectedDemo}
                </h3>
                <p className="mt-2 text-xs text-[var(--muted)]">
                  Fill in your details to schedule a personalized walkthrough with our solution engineers.
                </p>
              </div>

              {isSuccess ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center text-emerald-800">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                  <h4 className="mt-4 text-xl font-bold">Demonstration Scheduled</h4>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-700">
                    Thank you, {name || "there"}! Our technical solutions team will reach out to confirm your session timing for <strong>{selectedDemo}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="btn-primary mt-6 text-xs"
                  >
                    Book Another Demonstration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 p-4 text-xs font-bold text-rose-700">
                      <AlertCircle size={16} className="shrink-0" />
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
                        placeholder="School, College, or Company"
                        className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      <span>Work Email *</span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organisation.com"
                        className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                      />
                    </label>

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
                  </div>

                  <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    <span>Designation</span>
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="e.g. Principal, Director, Department Lead"
                      className="h-12 rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                    />
                  </label>

                  <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    <span>Specific Focus or Questions</span>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mention any specific features, curriculum or deployment requirements..."
                      className="resize-none rounded-xl border border-[var(--border)] bg-white p-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--crimson)]"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-xs font-bold uppercase tracking-wider"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request Live Demonstration"}
                    <ArrowUpRight size={15} />
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
