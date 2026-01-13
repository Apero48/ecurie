import { Instagram, Facebook, ArrowUp } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-accent text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Localisation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Localisation</h3>
            <p className="text-sm leading-relaxed">
              ECURIE DE LA CREPELIERE<br />
              85230 SAINT-GERVAIS, FRANCE
            </p>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4">Réseaux Sociaux</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end justify-start">
            <div className="text-right flex flex-col items-end">
              <img
                src="/images/logo_final.png"
                alt="Logo Ecurie de la Crépelière"
                className="h-24 md:h-32 w-auto mb-2"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 flex items-center justify-between">
          <p className="text-sm">
            © 1993 ECURIE DE LA CREPELIERE. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Retour au haut"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
