
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, ArrowRight } from "lucide-react"
import { practiceGroups } from "@/lib/content"

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [practice, setPractice] = useState<string>("government")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const fieldClass =
    "w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-col items-start justify-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent text-accent">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="mt-8 font-serif text-2xl font-medium">Enquiry received.</h3>
            <p className="mt-3 max-w-md text-muted-foreground">
              Thank you. A member of our{" "}
              <span className="text-foreground">
                {practiceGroups[practice as keyof typeof practiceGroups].label}
              </span>{" "}
              team will respond within two business days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Full Name</span>
                <input required type="text" placeholder="Your name" className={fieldClass} />
              </label>
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Organization</span>
                <input required type="text" placeholder="Institution or company" className={fieldClass} />
              </label>
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                <input required type="email" placeholder="name@organization.com" className={fieldClass} />
              </label>
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Practice Group</span>
                <select
                  value={practice}
                  onChange={(e) => setPractice(e.target.value)}
                  className={`${fieldClass} cursor-pointer`}
                >
                  {Object.values(practiceGroups).map((g) => (
                    <option key={g.id} value={g.id} className="bg-card text-foreground">
                      {g.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                How can we help?
              </span>
              <textarea
                required
                rows={4}
                placeholder="Describe your mandate, mission, or challenge."
                className={`${fieldClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5"
            >
              Submit Enquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

