import { Link } from "wouter";
import { Instagram, Facebook, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo_final.png"
            alt="Logo Ecurie de la Crépelière"
            className="h-20 md:h-28 w-auto hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors font-semibold">
            Accueil
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary transition-colors font-semibold">
            Pension Chevaux
          </Link>
          <Link href="/gallery" className="text-foreground hover:text-primary transition-colors font-semibold">
            Galerie photos
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-semibold">
            Contact
          </Link>
        </div>

        {/* Desktop Social & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl animate-in slide-in-from-top duration-300">
          <div className="container py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-bold text-foreground hover:text-primary py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="text-lg font-bold text-foreground hover:text-primary py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pension Chevaux
            </Link>
            <Link
              href="/gallery"
              className="text-lg font-bold text-foreground hover:text-primary py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Galerie photos
            </Link>
            <Link
              href="/contact"
              className="text-lg font-bold text-foreground hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex gap-6 mt-4 pt-4 border-t">
              <a href="https://instagram.com" className="text-primary"><Instagram size={24} /></a>
              <a href="https://facebook.com" className="text-primary"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
