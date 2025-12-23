"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                M
              </span>
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground">
              Math Hack
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </a>
            <a
              href="#programas"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Programas
            </a>
            <a
              href="#noticias"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Noticias
            </a>
            <a
              href="#contacto"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                window.location.href = "https://wa.link/6zgji0";
              }}
            >
              Inscríbete Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Inicio
              </a>
              <a
                href="#programas"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Programas
              </a>
              <a
                href="#noticias"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Noticias
              </a>
              <a
                href="#contacto"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contacto
              </a>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2"
                onClick={() => {
                  window.location.href = "https://wa.link/6zgji0";
                }}
              >
                Inscríbete Ahora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
