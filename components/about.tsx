import { MapPin, Linkedin, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface AboutProps {
  personal: {
    name: string
    title: string
    profileImage: string
    location: string
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
}

export default function About({ personal, education }: AboutProps) {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info with Profile Image */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <Image
                    src={personal.profileImage || "/placeholder.svg"}
                    alt={`${personal.name} - Profile Picture`}
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-white shadow-2xl transform transition-all duration-500 hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">
                {personal.name}
              </h3>
              <p className="text-xl bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent font-semibold mb-6">
                {personal.title}
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg transition-all duration-300 hover:text-gray-900">
                {personal.summary}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start text-gray-600 group transition-all duration-300 hover:text-blue-600">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {personal.location}
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-gray-600 group transition-all duration-300 hover:text-purple-600">
                  <Linkedin className="h-5 w-5 mr-3 text-purple-600 group-hover:text-teal-600 transition-colors duration-300" />
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 transition-all duration-300 group-hover:translate-x-1 transform"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-teal-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-gradient-to-b from-blue-600 to-purple-600 transform transition-all duration-500 hover:scale-105 hover:shadow-xl group"
                  style={{
                    borderLeftColor: index % 2 === 0 ? "#3B82F6" : "#8B5CF6",
                  }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-purple-600 font-medium group-hover:text-teal-600 transition-colors duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {edu.cgpa && (
                      <p className="text-sm text-gray-700 mb-2">
                        <strong className="text-blue-600">CGPA:</strong> {edu.cgpa}
                      </p>
                    )}
                    {edu.score && (
                      <p className="text-sm text-gray-700 mb-2">
                        <strong className="text-green-600">Score:</strong> {edu.score}
                      </p>
                    )}
                    {edu.coursework && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-2">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge
                              key={courseIndex}
                              variant="secondary"
                              className="text-xs transition-all duration-300 hover:scale-110 hover:bg-blue-100 hover:text-blue-700"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {edu.focus && (
                      <p className="text-sm text-gray-700">
                        <strong className="text-teal-600">Focus:</strong> {edu.focus}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
