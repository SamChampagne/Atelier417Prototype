import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => (
  <section className="min-h-screen flex items-center bg-[#F8F6F1] pt-20">
    <div className="max-w-5xl mx-auto px-6 py-16 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texte */}
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <p className="text-[#8B9A7B] text-sm tracking-widest uppercase mb-4">
              Alexandre Grandmont
            </p>
            <h1 className="text-4xl md:text-5xl text-[#3D3D3D] leading-tight font-light">
              Charpente.
              <br />
              Structure.
              <br />
              <span className="font-normal">Bâtiment.</span>
            </h1>
          </div>

          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-md">
            Artisan charpentier au Québec. Chaque projet est construit à la
            main, avec des matériaux locaux et le souci du travail bien fait.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#8B9A7B] text-white px-6 py-3.5 hover:bg-[#6B7A5B] transition-colors group"
            >
              Discuter d'un projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center gap-2 border border-[#3D3D3D]/20 text-[#3D3D3D] px-6 py-3.5 hover:border-[#3D3D3D]/40 transition-colors"
            >
              Voir les réalisations
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
              alt="Travail de charpente artisanale"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Accent graphique */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#8B9A7B] -z-10" />
        </div>
      </div>
    </div>
  </section>
);
