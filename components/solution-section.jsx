import { Card, CardContent } from "@/components/ui/card"
import { Coins, Globe, TrendingUp } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        <span className="text-secondary">Our Solution:</span> Carbon Credit Token (CCT) Franchise Network
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A scalable, blockchain-powered franchise model enabling local partners to revolutionize carbon markets
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2 border-secondary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Coins className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tokenize</h3>
                <p className="text-muted">Verified carbon credits on blockchain</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sell & Retire</h3>
                <p className="text-muted">Credits via global marketplace</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Earn Revenue</h3>
                <p className="text-muted">Through transaction and tokenization fees</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
