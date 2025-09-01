import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Users, Vote, Globe } from "lucide-react"

export function TractionSection() {
  const milestones = [
    {
      icon: <Rocket className="h-6 w-6 text-secondary" />,
      title: "Pilot Launch",
      description: "Kenya, India, Brazil",
    },
    {
      icon: <Users className="h-6 w-6 text-secondary" />,
      title: "25+ Franchisee Applications",
      description: "In Pipeline",
    },
    {
      icon: <Vote className="h-6 w-6 text-secondary" />,
      title: "DAO-Driven Governance",
      description: "Launch Q4 2025",
    },
    {
      icon: <Globe className="h-6 w-6 text-secondary" />,
      title: "Global Scaling",
      description: "50 Countries by 2026",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
     <span className="text-secondary">Traction & Roadmap</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">Proven progress with ambitious expansion plans</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="border-2 border-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  {milestone.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">🔗 {milestone.title}</h3>
                <p className="text-muted text-sm">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
