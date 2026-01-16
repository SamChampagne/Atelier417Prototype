import React from "react";
import { Hammer } from "lucide-react";

export const Footer: React.FC = () => (
  <footer className="py-8 bg-[#3D3027] border-t border-[#F5EFE0]/10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#6B4C3A] rounded-lg flex items-center justify-center">
            <Hammer className="w-4 h-4 text-[#F5EFE0]" />
          </div>
          <span className="font-serif text-[#F5EFE0]">Cabanons Artisan</span>
        </div>
        <p className="text-[#F5EFE0]/50 text-sm">
          © 2024 — Fait avec passion au Québec
        </p>
      </div>
    </div>
  </footer>
);
