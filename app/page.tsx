"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

interface PortfolioData {
  personal: {
    name: string
    title: string
    location: string
    phone: string
    email: string
    linkedin: string
    summary: string
  }
  education: Array<{
    degree: string
    institution: string
    duration: string
    cgpa?: string
    score?: string
    coursework?: string[]
    focus?: string
  }>
  projects: Array<{
    id: number
    title: string
    description: string
    technologies: string[]
    liveDemo: string
    repository: string
    featured: boolean
  }>
  skills: {
    technical: Array<{
      name: string
      level: number
    }>
    soft: string[]
  }
  certifications: Array<{
    title: string
    provider: string
    year: string
    description: string
  }>
  hobbies: string[]
}

export default function Portfolio() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json")
        const portfolioData = await response.json()
        setData(portfolioData)
      } catch (error) {
        console.error("Error loading portfolio data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Portfolio</h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header personal={data.personal} />
      <main>
        <About personal={data.personal} education={data.education} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Contact personal={data.personal} />
      </main>
      <Footer personal={data.personal} />
    </div>
  )
}
