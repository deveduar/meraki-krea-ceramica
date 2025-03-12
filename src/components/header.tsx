"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)


  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Cursos", href: "/#cursos" },
    { name: "Ubicación", href: "/#ubicacion" },
    { name: "Opiniones", href: "/#opiniones" },
    { name: "Contacto", href: "/#contacto" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when navigating
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "dark:bg-transparent bg-background/50 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-edit-2.svg"
            alt="Merakikrea Logo"
            width={40}
            height={40}
            className="w-auto h-8 md:h-10"
          />
          <span className="font-bold text-xs md:text-sm lg:text-2xl">
            Merakikrea Cerámica
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button
            ref={buttonRef}
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef}  className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button key={item.name} 
              onClick={() => setIsMenuOpen(false)}variant="ghost" className="justify-start" asChild>
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

