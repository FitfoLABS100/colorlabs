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
          <div className="flex flex-col items-center mb-6">
            <Image src="/color-labs-logo.png" alt="Color Labs USA Logo" width={120} height={120} className="mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Color Labs USA</h1>
          </div>
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Who We Are</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-986939714.jpg-c6rWVhXWhscBSoDobQqTg3Zs9hCI6e.jpeg"
                  alt="Vibrant screen printing inks being mixed on squeegees showing bright green, yellow, orange and red colors"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-80"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Color Labs is an Atlanta screen‑printing studio focused on clean design, soft‑hand prints, and
                  reliable delivery. From band tees and event merch to uniforms and brand drops, we help you look
                  official—without the headache.
                </p>
                <div className="flex items-center gap-4 text-orange-600">
                  <MapPin className="w-6 h-6" />
                  <span className="font-semibold">Proudly serving Atlanta, GA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">With our Process: We Take the Stress Out of Merch.</h2>
          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/brand-design-process.jpg"
                    alt="Designer reviewing brand identity materials and logo concepts at desk"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold">Share Your Vision</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      Bring us your artwork, idea, or even a rough sketch — we'll refine it until it's print-ready and
                      aligned with your brand.
                    </p>
                    <p className="leading-relaxed">
                      We handle full artwork procurement and welcome clients to our studio to talk through projects.
                    </p>
                    <p className="leading-relaxed font-medium text-orange-600">
                      This isn't "just a shirt" — it's your art, your message, your moment: and we're here to be
                      hands-on, creative partners from day one.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto lg:order-2">
                  <Image
                    src="/colorful-shirts-rack.jpg"
                    alt="Variety of blank t-shirts, hoodies and garments in different colors displayed"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center lg:order-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold">Choose Your Canvas</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      From tees and hoodies to hats, totes, and specialty pieces — we'll guide you to the best garment
                      and color options for your design.
                    </p>
                    <p className="leading-relaxed">
                      Fabric feel, fit, and durability matter as much as the print, so we source only from trusted
                      suppliers.
                    </p>
                    <p className="leading-relaxed font-medium text-orange-600">
                      Want to see and compare? Visit our studio to explore samples and choose a canvas that makes your
                      vision both look and feel amazing.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/screen-printing-process.jpg"
                    alt="Experienced screen printer using squeegee on printing press with vibrant inks"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <h3 className="text-2xl font-bold">We Print With Precision</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      Once your design is locked in, our lead screen printer — with nearly 30 years of experience and a
                      reputation as one of the best in the city — uses premium inks and expert techniques.
                    </p>
                    <p className="leading-relaxed">
                      We create vivid, long-lasting prints with every piece inspected for quality.
                    </p>
                    <p className="leading-relaxed font-medium text-orange-600">
                      What leaves our shop is something you'll be proud to wear and share.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto lg:order-2">
                  <Image
                    src="/happy-delivery-person.jpg"
                    alt="Smiling delivery person carrying a large package, representing reliable order delivery"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center lg:order-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                    <h3 className="text-2xl font-bold">Delivery Day</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      Your order arrives on time, neatly packed, and ready to go. No stress — just merch that looks
                      great, feels great, and makes an impact.
                    </p>
                    <p className="leading-relaxed">
                      From the moment you open the box, you'll see the quality and care we put into every order.
                    </p>
                    <p className="leading-relaxed font-medium text-orange-600">
                      Local customers are welcome to save on shipping costs by picking orders up from the Lab!
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
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

      {/* How We Bring Your Vision to Life Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">How We Bring Your Vision to Life</h2>
            <div className="grid md:grid-cols-2 gap-6">{/* ... existing code here ... */}</div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Work Speaks Louder</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real designs, real prints, real impact. See what we've created for local brands, artists, and events
              across Atlanta.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div className="flex transition-transform duration-500 ease-in-out" id="carousel-track">
                <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src="/loss-shirts-design.jpg"
                        alt="Multi-color LOSS branded shirts with pink floral designs on drying rack"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Multi-color brand work • Soft-hand prints • Professional color matching
                      </p>
                    </div>
                  </div>
                </div>

                <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src="/bird-designs-shirts.jpg"
                        alt="Detailed bird artwork screen printed on multiple colored t-shirts"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Intricate line art • Script lettering • Multi-color coordination
                      </p>
                    </div>
                  </div>
                </div>

                <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src="/styled-floral-shirts.jpg"
                        alt="Styled flat lay of LOSS branded shirts in multiple colors arranged with colorful flowers"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Lifestyle styling • Brand photography • Instagram-ready presentation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src="/celestial-design-shirt.jpg"
                        alt="Black t-shirt with intricate white celestial design featuring moon, grid pattern, and mystical text"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Complex celestial artwork • Detailed line work • Mystical text integration
                      </p>
                    </div>
                  </div>
                </div>

                <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src="/corporate-safety-shirts.jpg"
                        alt="Bright yellow safety shirts for 1Major Construction Inc with black corporate branding and safety messaging"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Corporate uniforms • Safety apparel • Professional business branding
                      </p>
                    </div>
                  </div>
                </div>

                <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src="/styled-loss-shirts.jpg"
                        alt="Styled flat lay of LOSS branded shirts in multiple colors with floral arrangement"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Lifestyle brand photography • Multi-color coordination • Instagram-ready styling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 group">
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 group">
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              <button className="w-3 h-3 rounded-full bg-orange-600"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400"></button>
            </div>
          </div>
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
            <div className="flex flex-col items-center mb-4">
              <Image src="/color-labs-logo.png" alt="Color Labs USA Logo" width={60} height={60} className="mb-2" />
              <h3 className="text-2xl font-bold">Color Labs USA — Atlanta, GA</h3>
            </div>
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
