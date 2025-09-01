import { Navbar } from "../components/navbar"
import { HeroSection } from "../components/hero-section"
import { ProblemSection } from "../components/problem-section"
import { SolutionSection } from "../components/solution-section"
import { HowItWorksSection } from "../components/how-it-works-section"
import { GlobalImpactSection } from "../components/global-impact-section"
import { RevenueModelSection } from "../components/revenue-model-section"
import { InvestmentSection } from "../components/investment-section"
import { TractionSection } from "../components/traction-section"
import { InvestorTermsSection } from "../components/investor-terms-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <GlobalImpactSection />
        <RevenueModelSection />
        <InvestmentSection />
        <TractionSection />
        <InvestorTermsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
