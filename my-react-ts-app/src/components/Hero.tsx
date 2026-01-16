import React from "react";
import { MapPin, Heart, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center bg-[#F5EFE0] pt-20">
    {/* Texture de fond subtile */}
    <div
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />

    <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#7A8B6F]/10 text-[#7A8B6F] px-4 py-2 rounded-full text-sm">
            <MapPin className="w-4 h-4" />
            Artisan local • Québec
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3027] leading-tight">
            Des cabanons faits à la main,
            <span className="text-[#6B4C3A] block mt-2">pour durer.</span>
          </h1>

          <p className="text-lg text-[#3D3027]/70 leading-relaxed max-w-lg">
            Chaque projet est unique. Je conçois et construis des cabanons sur
            mesure, avec des matériaux locaux et le savoir-faire d'un vrai
            artisan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#6B4C3A] text-[#F5EFE0] px-6 py-3.5 rounded-lg hover:bg-[#8B6B5A] transition-all group"
            >
              Discutons de votre projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#6B4C3A]/30 text-[#6B4C3A] px-6 py-3.5 rounded-lg hover:border-[#6B4C3A] hover:bg-[#6B4C3A]/5 transition-all"
            >
              Voir mes réalisations
            </a>
          </div>
        </div>

        {/* Image principale */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[#6B4C3A]/20">
            <img
              src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80"
              alt="Cabanon artisanal en bois"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Badge flottant */}
          <div className="absolute -bottom-6 -left-6 bg-[#FAFAF8] p-4 rounded-xl shadow-lg border border-[#6B4C3A]/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#7A8B6F]/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#7A8B6F]" />
              </div>
              <div>
                <div className="font-serif text-2xl text-[#6B4C3A]">15+</div>
                <div className="text-sm text-[#3D3027]/60">
                  années d'expérience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
