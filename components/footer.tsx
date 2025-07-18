import { Heart } from "lucide-react"

interface FooterProps {
  personal: {
    name: string
  }
}

export default function Footer({ personal }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center text-gray-300">
            © {currentYear} {personal.name}. Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" />
            and React
          </p>
          <p className="text-sm text-gray-400 mt-2">All rights reserved. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
