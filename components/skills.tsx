import { Code, Users, Award, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillsProps {
  skills: {
    technical: Array<{
      name: string
    }>
    soft: string[]
  }
}

const colorVariants = [
  "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
  "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
  "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
  "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
  "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
  "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
  "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
  "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
]

const softSkillColors = [
  "border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100",
  "border-purple-300 bg-purple-50 text-purple-700 hover:bg-purple-100",
  "border-teal-300 bg-teal-50 text-teal-700 hover:bg-teal-100",
  "border-green-300 bg-green-50 text-green-700 hover:bg-green-100",
]

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical and soft skills developed through education and hands-on
            experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <Card className="h-fit transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <Code className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.technical.map((skill, index) => (
                  <div
                    key={index}
                    className={`${colorVariants[index % colorVariants.length]} text-white px-4 py-3 rounded-lg text-center font-medium transform transition-all duration-300 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-xl cursor-pointer`}
                  >
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="h-fit transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <Users className="h-6 w-6 mr-3 group-hover:bounce transition-all duration-300" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.soft.map((skill, index) => (
                  <div
                    key={index}
                    className={`${softSkillColors[index % softSkillColors.length]} border-2 px-4 py-3 rounded-lg text-center font-medium transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg cursor-pointer`}
                  >
                    <span className="text-sm font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center animate-slide-in-up">
          <Card className="max-w-4xl mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                <Award className="h-6 w-6 mr-3 text-yellow-500" />
                Skills Overview
                <Sparkles className="h-5 w-5 ml-3 text-pink-500 animate-pulse" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skills.technical.length}+
                  </div>
                  <p className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    Technical Skills
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skills.soft.length}+
                  </div>
                  <p className="text-gray-700 group-hover:text-teal-600 transition-colors duration-300">Soft Skills</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <p className="text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                    Passion & Dedication
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
