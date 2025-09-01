"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-16 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
           
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
             <span className="text-secondary">SABZA:</span> Decentralizing the Future of Carbon Markets
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-8 text-pretty">
            Join the world's first blockchain-powered franchise network for carbon credit tokenization.
            <span className="text-secondary font-semibold"> Decarbonize locally. Monetize globally.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => scrollToSection("investment")} size="lg" className="text-lg px-8 py-3">
              Explore Investment Opportunity
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("solution")}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3"
            >
              Learn How It Works
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted">
            <p>
              🌍 <strong>Global Impact:</strong> Voluntary carbon market expected to hit $50B+ by 2030
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
