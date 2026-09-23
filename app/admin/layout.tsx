import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Portal | Carawin Technologies",
  description: "Internal talent & recruiting management dashboard for Carawin Technologies.",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#071a33]">{children}</div>
}
