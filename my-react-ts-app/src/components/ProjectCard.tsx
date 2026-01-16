import React from "react";
import { ChevronRight } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="group cursor-pointer">
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Overlay au survol */}
      <div className="absolute inset-0 bg-[#6B4C3A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-[#F5EFE0] font-medium flex items-center gap-2">
          Voir le projet <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <span className="text-xs text-[#7A8B6F] bg-[#7A8B6F]/10 px-2 py-1 rounded">
          {project.category}
        </span>
        <span className="text-xs text-[#3D3027]/40">{project.size}</span>
      </div>
      <h3 className="font-serif text-xl text-[#3D3027] group-hover:text-[#6B4C3A] transition-colors">
        {project.title}
      </h3>
      <p className="text-[#3D3027]/60 text-sm">{project.description}</p>
    </div>
  </article>
);
