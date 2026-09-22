import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { BrandSplash } from "@/components/brand-splash"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
export const metadata: Metadata = { title: { default: "Carawin Technologies | Future-Ready Education & AI Technology", template: "%s | Carawin" }, description: "Carawin is building the intelligence and digital infrastructure for the future of education through AI, software, smart infrastructure, data and human capability.", keywords: ["Carawin", "education technology", "AI in education", "digital education", "smart classroom", "education infrastructure", "AI teacher", "adaptive learning"] }
export const viewport: Viewport = { colorScheme: "light", themeColor: "#ffffff" }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body className={`${inter.variable} font-sans`}><div className="relative z-10"><BrandSplash /><SmoothScroll /><SiteHeader /><main>{children}</main><SiteFooter /></div></body></html> }