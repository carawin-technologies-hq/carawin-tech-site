"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string
            includedLanguages?: string
            autoDisplay?: boolean
          },
          elementId: string
        ) => void
      }
    }
    googleTranslateElementInit?: () => void
  }
}

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "hi", label: "HI" },
  { code: "bn", label: "BN" },
  { code: "te", label: "TE" },
  { code: "mr", label: "MR" },
  { code: "ta", label: "TA" },
  { code: "gu", label: "GU" },
  { code: "kn", label: "KN" },
  { code: "ml", label: "ML" },
  { code: "pa", label: "PA" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
  { code: "pt", label: "PT" },
  { code: "ar", label: "AR" },
  { code: "ja", label: "JA" },
  { code: "ko", label: "KO" },
  { code: "zh-CN", label: "ZH" },
  { code: "ru", label: "RU" },
]

export function GoogleTranslator() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const initGoogleTranslate = () => {
      if (!window.google?.translate?.TranslateElement) return

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "en,fr,hi,bn,te,mr,ta,gu,kn,ml,pa,es,de,pt,ar,ja,ko,zh-CN,ru",
          autoDisplay: false,
        },
        "google_translate_hidden"
      )
    }

    window.googleTranslateElementInit = initGoogleTranslate

    const existingScript = document.querySelector(
      'script[src*="translate.google.com/translate_a/element.js"]'
    )

    if (!existingScript) {
      const script = document.createElement("script")

      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"

      script.async = true

      document.body.appendChild(script)
    } else {
      initGoogleTranslate()
    }

    return () => {
      window.googleTranslateElementInit = undefined
    }
  }, [])

  const changeLanguage = (code: string) => {
  setLanguage(code)

  if (code === "en") {
    document.cookie = "googtrans=; path=/; max-age=0"
    document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; max-age=0"
    // English means restore the original page.
    if (code === "en") {
      const hostname = window.location.hostname
      const domains = new Set([
        hostname,
        `.${hostname}`,
      ])

      // Also clear the parent-domain cookie, if applicable.
      const parts = hostname.split(".")
      if (parts.length >= 2) {
        domains.add(`.${parts.slice(-2).join(".")}`)
      }

      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"

      domains.forEach((domain) => {
        document.cookie =
          `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`
      })

      window.location.reload()
      return
    }

    const googleSelect = document.querySelector(
      "#google_translate_hidden .goog-te-combo"
    ) as HTMLSelectElement | null

    window.location.reload()
    return
  }

  const googleSelect = document.querySelector(
    "#google_translate_hidden .goog-te-combo"
  ) as HTMLSelectElement | null

  if (!googleSelect) {
    console.warn("Google Translate selector not ready")
    return
    googleSelect.value = code

    googleSelect.dispatchEvent(
      new Event("change", { bubbles: true })
    )
  }

  googleSelect.value = code
  googleSelect.dispatchEvent(new Event("change", { bubbles: true }))
}

  return (
    <>
      {/* Custom Carawin language selector */}
      <div className="carawin-language-selector">
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          aria-label="Select language"
        >
          {languages.map((item) => (
            <option key={item.code} value={item.code}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Hidden Google Translate widget */}
      <div
        id="google_translate_hidden"
        className="google-translate-hidden"
      />
    </>
  )
}