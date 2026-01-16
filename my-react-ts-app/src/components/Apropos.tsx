import React from "react";

export const Apropos: React.FC = () => (
  <section id="apropos" className="py-24 bg-[#FAFAF8]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
              alt="Artisan au travail"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Accent décoratif */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[#7A8B6F]/10 rounded-2xl" />
        </div>

        {/* Texte */}
        <div className="space-y-6">
          <span className="text-[#7A8B6F] text-sm font-medium tracking-wider uppercase">
            À propos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#3D3027]">
            Le travail bien fait, c'est ma fierté
          </h2>
          <div className="space-y-4 text-[#3D3027]/70 leading-relaxed">
            <p>
              Je m'appelle [Prénom], et je construis des cabanons depuis plus de
              15 ans. Ce qui a commencé comme un projet personnel est devenu ma
              passion.
            </p>
            <p>
              Je travaille seul, à mon rythme, parce que chaque détail compte.
              Pas de production en série, pas de sous-traitance — juste moi, mes
              outils, et des matériaux que je choisis moi-même chez des
              fournisseurs locaux.
            </p>
            <p>
              Mon atelier est à [Ville], et la plupart de mes clients sont dans
              la région. J'aime cette proximité — pouvoir me déplacer
              facilement, connaître le terrain, et surtout, voir mes cabanons
              vieillir avec grâce au fil des saisons.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#6B4C3A]/10">
            <div>
              <div className="font-serif text-3xl text-[#6B4C3A]">50+</div>
              <div className="text-sm text-[#3D3027]/50">
                Cabanons construits
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#6B4C3A]">15</div>
              <div className="text-sm text-[#3D3027]/50">
                Années d'expérience
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#6B4C3A]">100%</div>
              <div className="text-sm text-[#3D3027]/50">Fait main</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
