import React from "react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export const Realisations: React.FC = () => (
  <section id="realisations" className="py-24 bg-[#FAFAF8]">
    <div className="max-w-6xl mx-auto px-6">
      {/* En-tête */}
      <div className="text-center mb-16">
        <span className="text-[#7A8B6F] text-sm font-medium tracking-wider uppercase">
          Portfolio
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#3D3027] mt-3 mb-4">
          Mes réalisations
        </h2>
        <p className="text-[#3D3027]/60 max-w-2xl mx-auto">
          Chaque cabanon a son histoire. Voici quelques projets dont je suis
          particulièrement fier.
        </p>
      </div>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[#6B4C3A] hover:text-[#8B6B5A] transition-colors font-medium"
        >
          Vous avez un projet en tête ?
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);
