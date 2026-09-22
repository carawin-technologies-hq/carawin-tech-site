"use client"

import Image from "next/image"

type DetailVisualVariant =
  | "education"
  | "ai"
  | "ai-education"
  | "future-schools"
  | "about"
  | "government"
  | "government-technology"
  | "advisory"
  | "university"
  | "digital-university"
  | "infrastructure"
  | "stem-innovation"
  | "career-intelligence"

interface DetailVisualProps {
  variant?: DetailVisualVariant
  label?: string
}

const imageMap: Record<DetailVisualVariant, string> = {
  // Generic education
  education: "education.png",

  // Generic AI
  ai: "ai.png",

  // Insights subsections
  "ai-education": "ai-education.png",
  "future-schools": "future-schools.png",
  "stem-innovation": "stem-innovation.png",
  "career-intelligence": "career-intelligence.png",

  // About page
  about: "about-hero.png",

  // Main Government page
  government: "government-hero.png",

  // Government Technology subsection
  "government-technology": "government-technology.png",

  // Advisory & Implementation subsection
  advisory: "government-advisory.png",

  // Generic university / institution
  university: "institution-university.png",

  // Digital Universities subsection
  "digital-university": "digital-universityy.png",

  // Infrastructure / labs / classrooms
  infrastructure: "infrastructure.png",
}

export function DetailVisual({
  variant = "education",
  label = "CARAWIN SYSTEM",
}: DetailVisualProps) {
  const image = imageMap[variant]

  return (
    <div className="visual-frame relative overflow-hidden">
      <Image
        src={`/images/details/${image}`}
        alt={`${label} visual`}
        fill
        priority
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  )
}