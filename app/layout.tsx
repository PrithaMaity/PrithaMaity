import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pritha Maity - Computer Science Engineer",
  description:
    "Portfolio website of Pritha Maity, a Computer Science Engineer with expertise in web development and software engineering.",
  keywords: "Pritha Maity, Computer Science, Engineer, Web Development, Portfolio, React, Next.js",
  authors: [{ name: "Pritha Maity" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
