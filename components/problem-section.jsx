import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Lock, Users } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: <Lock className="h-8 w-8 text-destructive" />,
      title: "Opaque",
      description: "Limited access and traceability in traditional carbon markets",
    },
    {
      icon: <Users className="h-8 w-8 text-destructive" />,
      title: "Centralized",
      description: "Dominated by intermediaries who control the market",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
      title: "Exclusive",
      description: "Difficult for local projects to enter and monetize carbon offsets",
    },
  ]

  return (
    <section id="problem" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
             <span className="text-destructive">The Problem</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Traditional carbon markets are broken and need a revolutionary solution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 border-destructive/20 hover:border-destructive/40 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">{problem.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{problem.title}</h3>
                <p className="text-muted text-lg">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
