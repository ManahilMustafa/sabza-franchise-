"use client"



export function Footer() {
  return (
    <footer className="bg-white border-t border-border text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
          <div className="flex items-center space-x-2">
  <div className=" p-2 ">
    <img 
      src="/logo.png" 
      alt="SABZA Logo" 
      className="h-20 w-20 object-contain" 
    />
  </div>

</div>

            <p className="text-muted-foreground mb-4 max-w-md">
              Decentralizing the future of carbon markets through blockchain-powered franchise networks. Join us in
              building a sustainable tomorrow.
            </p>
            <p className="text-sm text-muted-foreground">© 2025 SABZA. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  The Problem
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Solution
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("investment")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Investment
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Dubai, UAE</p>
              <a href="mailto:invest@sabza.earth" className="hover:text-primary transition-colors">
                invest@sabza.earth
              </a>
              <a href="https://www.sabza.earth" className="hover:text-primary transition-colors block">
                www.sabza.earth
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Building the world's first decentralized carbon credit franchise network
          </p>
        </div>
      </div>
    </footer>
  )
}
