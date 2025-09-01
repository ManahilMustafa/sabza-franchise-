import { Card, CardContent } from "@/components/ui/card"

export function RevenueModelSection() {
  const revenueStreams = [
    {
      stream: "Franchise Fees",
      description: "Upfront and annual licensing fees",
    },
    {
      stream: "Tokenization Fees",
      description: "% on carbon credits tokenized",
    },
    {
      stream: "Marketplace Fees",
      description: "% on trades and retirements",
    },
    {
      stream: "Yield Sharing",
      description: "Share in tokenized carbon yield",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
<span className="text-secondary">Revenue Model</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Multiple revenue streams ensure sustainable growth for all partners
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 text-lg font-bold text-foreground">Stream</th>
                      <th className="text-left py-4 px-4 text-lg font-bold text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {revenueStreams.map((item, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-4 px-4 font-semibold text-secondary">{item.stream}</td>
                        <td className="py-4 px-4 text-muted">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
