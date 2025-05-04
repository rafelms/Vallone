"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X} from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#004AAD] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center"><i data-lucide="briefcase-business"></i>
        
          <Link href="/" className="text-2xl font-bold">
            Vallone
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="hover:text-[#E6F0FF] transition-colors">
            Serviços
          </Link>
          <Link href="#about" className="hover:text-[#E6F0FF] transition-colors">
            Sobre
          </Link>
          <Link href="#contact" className="hover:text-[#E6F0FF] transition-colors">
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#004AAD] pb-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link
              href="#services"
              className="hover:text-[#E6F0FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#about"
              className="hover:text-[#E6F0FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#E6F0FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
