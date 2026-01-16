import React, { useState } from "react";
import { Menu, X, Hammer } from "lucide-react";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5EFE0]/95 backdrop-blur-sm border-b border-[#6B4C3A]/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#6B4C3A] rounded-lg flex items-center justify-center">
              <Hammer className="w-5 h-5 text-[#F5EFE0]" />
            </div>
            <span className="font-serif text-xl text-[#6B4C3A] font-semibold">
              Cabanons Artisan
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#realisations"
              className="text-[#3D3027]/70 hover:text-[#6B4C3A] transition-colors"
            >
              Réalisations
            </a>
            <a
              href="#processus"
              className="text-[#3D3027]/70 hover:text-[#6B4C3A] transition-colors"
            >
              Ma méthode
            </a>
            <a
              href="#apropos"
              className="text-[#3D3027]/70 hover:text-[#6B4C3A] transition-colors"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="bg-[#6B4C3A] text-[#F5EFE0] px-5 py-2.5 rounded-lg hover:bg-[#8B6B5A] transition-colors"
            >
              Parlons de votre projet
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#6B4C3A]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#6B4C3A]/10 pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#realisations"
                className="text-[#3D3027]/70 hover:text-[#6B4C3A]"
              >
                Réalisations
              </a>
              <a
                href="#processus"
                className="text-[#3D3027]/70 hover:text-[#6B4C3A]"
              >
                Ma méthode
              </a>
              <a
                href="#apropos"
                className="text-[#3D3027]/70 hover:text-[#6B4C3A]"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="bg-[#6B4C3A] text-[#F5EFE0] px-5 py-2.5 rounded-lg text-center"
              >
                Parlons de votre projet
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
