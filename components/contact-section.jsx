"use client"



import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Globe, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
    alert("Thank you for your interest! We will contact you soon.")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
       <span className="text-secondary">Get Involved</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Join us in building the world's first decentralized carbon credit franchise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email</h3>
                      <a href="mailto:Invest@sabza.me" className="text-secondary hover:underline">
                        Invest@sabza.me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Website</h3>
                      <a href="https://www.sabza.me" className="text-secondary hover:underline">
                        www.SABZA.me 
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Headquarters</h3>
                      <p className="text-muted">Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Input
                    name="company"
                    placeholder="Company/Organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your interest in SABZA..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px] text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
