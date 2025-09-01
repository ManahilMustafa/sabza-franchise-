import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Leaf, TrendingUp } from "lucide-react"

export function InvestmentSection() {
  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
      title: "Proven Protocol",
      description: "Built on SABZA's TokenizeX platform",
    },
    {
      icon: <Shield className="h-6 w-6 text-secondary" />,
      title: "Trustless Verification",
      description: "Immutable, audited smart contracts",
    },
    {
      icon: <Leaf className="h-6 w-6 text-secondary" />,
      title: "Sustainable Impact",
      description: "Measurable CO2 offset per franchise",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-secondary" />,
      title: "Massive TAM",
      description: "Voluntary carbon market expected to hit $50B+ by 2030",
    },
  ]

  return (
    <section id="investment" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
  <span className="text-secondary">Why Invest in SABZA</span> Franchise Model?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Join the revolution in carbon credit tokenization with proven technology and massive market opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-2 rounded-lg flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">✅ {benefit.title}</h3>
                    <p className="text-muted">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
