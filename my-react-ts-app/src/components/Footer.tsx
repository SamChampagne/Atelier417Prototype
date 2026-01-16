import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => (
  <footer className="py-8 bg-[#3D3D3D] border-t border-[#F8F6F1]/10">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-[#F8F6F1] tracking-wide">Atelier 417</span>
        </div>
        <p className="text-[#F8F6F1]/40 text-sm">
          © 2024 — Artisan charpentier, Estrie
        </p>
      </div>
    </div>
  </footer>
);
