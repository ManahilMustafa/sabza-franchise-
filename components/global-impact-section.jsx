import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2 } from "lucide-react"

export function GlobalImpactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
   <span className="text-secondary">Global Impact,</span> Local Execution
          </h2>
          <blockquote className="text-2xl md:text-3xl font-bold text-secondary italic mb-8">
            "Decarbonize locally. Monetize globally."
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8 text-center">
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">📍 Target Regions</h3>
              <p className="text-lg text-muted">EMEA, UK, AUS/NZ and North America</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8 text-center">
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">💼 Ideal Partners</h3>
              <p className="text-lg text-muted">Carbon project developers, ESG firms, green tech startups</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
