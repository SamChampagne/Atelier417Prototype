import React from "react";
import { projects } from "../data";

export const Realisations: React.FC = () => (
  <section id="realisations" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      {/* En-tête minimaliste */}
      <div className="mb-16">
        <p className="text-[#8B9A7B] text-sm tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl text-[#3D3D3D] font-light">
          Réalisations
        </h2>
      </div>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article key={project.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-[#F8F6F1]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-[#3D3D3D]/0 group-hover:bg-[#3D3D3D]/20 transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-[#8B9A7B] tracking-wider uppercase">
                {project.category}
              </p>
              <h3 className="text-lg text-[#3D3D3D] group-hover:text-[#8B9A7B] transition-colors">
                {project.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      {/* Placeholder pour futur catalogue */}
      {/*
        Phase 2: Ajouter ici un composant <Catalogue /> avec:
        - Filtres par catégorie
        - Grille de produits/modèles préfabriqués
        - Bouton "Demander une soumission" par produit
      */}
    </div>
  </section>
);
