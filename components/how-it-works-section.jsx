import { Card, CardContent } from "@/components/ui/card"
import { Link, Brain, Award, Search } from "lucide-react"

export function HowItWorksSection() {
  const features = [
    {
      icon: <Link className="h-8 w-8 text-secondary" />,
      title: "Platform Access",
      description: "Access to SABZA's tokenization & marketplace platform",
    },
    {
      icon: <Brain className="h-8 w-8 text-secondary" />,
      title: "Training & Support",
      description: "Training on carbon standards and token economics",
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Brand Rights",
      description: "Rights to use SABZA brand & systems",
    },
    {
      icon: <Search className="h-8 w-8 text-secondary" />,
      title: "Verification Tools",
      description: "Tools for project verification, smart contracts, and on-chain traceability",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
 <span className="text-secondary">How It Works</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
            Franchisees get everything they need to succeed in the carbon credit market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">🔗 {feature.title}</h3>
                <p className="text-muted text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
