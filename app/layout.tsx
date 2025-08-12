import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Color Labs USA | Screen Printing in Atlanta, GA",
  description:
    "Atlanta screen printing with fast turnarounds, premium quality, and fair pricing. Tees, hoodies, totes, and more. Get a quick quote today.",
  keywords: ["screen printing", "Atlanta", "custom shirts", "merch", "apparel printing", "Color Labs USA"],
  authors: [{ name: "Color Labs USA" }],
  creator: "Color Labs USA",
  publisher: "Color Labs USA",
  openGraph: {
    title: "Color Labs USA | Screen Printing in Atlanta, GA",
    description:
      "Atlanta screen printing with fast turnarounds, premium quality, and fair pricing. Tees, hoodies, totes, and more.",
    url: "https://colorlabsusa.com",
    siteName: "Color Labs USA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Color Labs USA - Screen Printing in Atlanta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Labs USA | Screen Printing in Atlanta, GA",
    description: "Atlanta screen printing with fast turnarounds, premium quality, and fair pricing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
