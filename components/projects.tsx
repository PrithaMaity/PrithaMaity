import { ExternalLink, Github, Star, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectsProps {
  projects: Array<{
    id: number
    title: string
    description: string
    technologies: string[]
    liveDemo: string
    repository: string
    featured: boolean
  }>
}

const techColors = [
  "bg-orange-100 text-orange-700 border-orange-300 hover:bg-orange-200",
  "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200",
  "bg-green-100 text-green-700 border-green-300 hover:bg-green-200",
  "bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200",
  "bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-200",
  "bg-teal-100 text-teal-700 border-teal-300 hover:bg-teal-200",
]

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-3 py-2 text-sm font-medium flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse"></div>
                  <Star className="h-4 w-4 mr-1 relative z-10 animate-spin" />
                  <span className="relative z-10">Featured Project</span>
                  <Sparkles className="h-4 w-4 ml-1 relative z-10 animate-bounce" />
                </div>
              )}
              <CardHeader className="bg-gradient-to-br from-gray-50 to-blue-50 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
                <CardTitle className="text-xl text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`text-xs border transition-all duration-300 hover:scale-110 cursor-pointer ${techColors[techIndex % techColors.length]}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-2 border-gray-300 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transform transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <div className="animate-bounce">
              <Sparkles className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            </div>
            <p className="text-gray-500 text-lg">More projects coming soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
