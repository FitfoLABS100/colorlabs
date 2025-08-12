"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Award, MapPin, Upload, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ColorLabsWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/screen-printing-inks.png"
            alt="Bright, vivid screen‑printing inks in multiple colors on a press in a print shop."
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Color Labs USA</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to Color Labs USA: your new home for screen printing - Because Your Vision is Louder in Color.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
              Contact Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
            >
              Get a Quick Quote
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-90">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Fast turnarounds
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Pro quality
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Fair pricing
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Contact Strip */}
      <div className="sticky top-0 z-50 bg-orange-600 text-white py-3">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-semibold">Ready to print?</span>
          <div className="flex gap-3">
            <Button size="sm" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <Link href="mailto:Print@ColorLabsUSA.com">
                <Phone className="w-4 h-4 mr-2" />
                Email: Print@ColorLabsUSA.com
              </Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Start Your Order
            </Button>
          </div>
        </div>
      </div>

      {/* Value Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold mb-3">Fast Turnarounds</h3>
                <p className="text-gray-600">Rush options available without cutting corners.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-gray-600">Soft prints, accurate color, durable washes.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold mb-3">Local & Reliable</h3>
                <p className="text-gray-600">Atlanta-based, community-minded service.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Color Labs is an Atlanta screen‑printing studio focused on clean design, soft‑hand prints, and reliable
              delivery. From band tees and event merch to uniforms and brand drops, we help you look official—without
              the headache.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Custom Screen‑Printing (water‑based, plastisol, specialty inks)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Color Matching & Art Prep</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Garment Sourcing (tees, hoodies, totes, hats, more)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Finishing (tag printing, folding, bagging, size stickers)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Fulfillment Support (by request)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Send your art & quantities</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Approve your mockup & quote</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">We print with care</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Pickup or ship to your door</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Trusted By</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Local brands, artists, nonprofits, and events across ATL.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/screen-printing-inks.png"
                alt="Close‑up of multi‑color screen‑printing inks on a press."
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-sm">6‑color front print on heavyweight tee • Soft‑hand feel</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder-teljw.png"
                alt="Screen printer pulling a squeegee across a stencil."
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-sm">6‑color front print on heavyweight tee • Soft‑hand feel</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/printed-shirts-stack.png"
                alt="Stack of freshly printed shirts with vibrant graphics."
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-sm">6‑color front print on heavyweight tee • Soft‑hand feel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's make something you're proud of.</h2>
          <p className="text-xl mb-8 opacity-90">Quick quotes, honest timelines, zero surprises.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Get a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg bg-transparent"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Start Your Order</h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="(404) 555-0123" />
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" placeholder="50" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="garment">Garment Type</Label>
                      <Input id="garment" placeholder="T-shirts, hoodies, etc." />
                    </div>
                    <div>
                      <Label htmlFor="due-date">Due Date</Label>
                      <Input id="due-date" type="date" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="artwork">Upload Artwork</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-600 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-600">Click to upload or drag and drop</p>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="project-details">Project Details</Label>
                    <Textarea
                      id="project-details"
                      placeholder="Tell us about your project (colors, placements, deadlines)."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                    Send Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Color Labs USA — Atlanta, GA</h3>
            <p className="text-gray-400">Fast, quality screen‑printing for brands, artists, and events.</p>
            <div className="flex justify-center gap-6 pt-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
