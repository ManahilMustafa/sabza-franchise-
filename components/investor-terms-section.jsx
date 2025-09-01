import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Target, Handshake } from "lucide-react"

export function InvestorTermsSection() {
  const terms = [
    {
      icon: <Target className="h-6 w-6 text-secondary" />,
      title: "Seeking",
      description: "Strategic investors & impact funds",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-secondary" />,
      title: "Use of Funds",
      description: "Tech scaling, MRV automation, market expansion",
    },
    {
      icon: <Handshake className="h-6 w-6 text-secondary" />,
      title: "Franchisee Equity Model",
      description: "Optional joint ownership in regional franchises",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
 <span className="text-secondary">Investor Terms</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Flexible investment opportunities with strategic partnership potential
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {terms.map((term, index) => (
            <Card key={index} className="border-2 border-secondary/20">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {term.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{term.title}</h3>
                <p className="text-muted">{term.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
