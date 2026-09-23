
import { Hero } from "@/components/home/hero"
import { WhoWeServe } from "@/components/home/who-we-serve"
import { Ecosystem } from "@/components/home/ecosystem"
import { AICOS } from "@/components/home/aicos"
import { CareerIntelligence } from "@/components/home/career-intelligence"
import { AIProducts } from "@/components/home/ai-products"
import { EducationInfrastructure } from "@/components/home/education-infrastructure"
import { DigitalLearning } from "@/components/home/digital-learning"
import { TeacherCapability } from "@/components/home/teacher-capability"
import { GovernmentSection } from "@/components/home/government-section"
import { SolutionsPreview } from "@/components/home/solutions-preview"
import { WhyCarawin } from "@/components/home/why-carawin"
import { HomeCTA } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeServe />
      <Ecosystem />
      <AICOS />
      <CareerIntelligence />
      <EducationInfrastructure />
      <DigitalLearning />
      <TeacherCapability />
      <GovernmentSection />
      <AIProducts />
      <SolutionsPreview />
      <WhyCarawin />
      <HomeCTA />
    </>
  )
}
