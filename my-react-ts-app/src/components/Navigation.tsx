import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F1]/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Logo size={44} />
            <div className="hidden sm:block">
              <span className="block text-lg font-semibold text-[#3D3D3D] tracking-wide">
                ATELIER 417
              </span>
              <span className="block text-xs text-[#5A5A5A] tracking-widest uppercase">
                Charpente • Structure
              </span>
            </div>
          </a>

          {/* Desktop Menu - Minimaliste */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#realisations"
              className="text-[#5A5A5A] hover:text-[#3D3D3D] transition-colors text-sm tracking-wide"
            >
              Réalisations
            </a>
            <a
              href="#contact"
              className="text-[#5A5A5A] hover:text-[#3D3D3D] transition-colors text-sm tracking-wide"
            >
              Contact
            </a>
            <a
              href="tel:8193525048"
              className="flex items-center gap-2 text-[#8B9A7B] hover:text-[#6B7A5B] transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              (819) 352-5048
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#3D3D3D]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#3D3D3D]/10">
            <div className="flex flex-col gap-4">
              <a href="#realisations" className="text-[#5A5A5A] py-2">
                Réalisations
              </a>
              <a href="#contact" className="text-[#5A5A5A] py-2">
                Contact
              </a>
              <a
                href="tel:8193525048"
                className="flex items-center gap-2 text-[#8B9A7B] font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                (819) 352-5048
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
