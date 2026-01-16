import React from "react";
import { MapPin } from "lucide-react";

export const Localisation: React.FC = () => (
  <section id="localisation" className="py-24 bg-[#F8F6F1]">
    <div className="max-w-5xl mx-auto px-6">
      {/* En-tête */}
      <div className="mb-12">
        <p className="text-[#8B9A7B] text-sm tracking-widest uppercase mb-3">
          Localisation
        </p>
        <h2 className="text-3xl md:text-4xl text-[#3D3D3D] font-light">
          L'atelier
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Carte stylisée */}
        <div className="relative bg-[#E8E4DC] overflow-hidden min-h-[400px]">
          {/* Fond de carte stylisé */}
          <div className="absolute inset-0">
            {/* Grille de fond subtile */}
            <svg
              className="w-full h-full opacity-30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#8B9A7B"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Routes stylisées */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Route principale (Route 112 / 417) */}
            <path
              d="M 0 200 Q 100 180 200 200 T 400 220"
              fill="none"
              stroke="#3D3D3D"
              strokeWidth="8"
              opacity="0.3"
            />
            <path
              d="M 0 200 Q 100 180 200 200 T 400 220"
              fill="none"
              stroke="#F8F6F1"
              strokeWidth="4"
              strokeDasharray="20 10"
              opacity="0.5"
            />

            {/* Routes secondaires */}
            <path
              d="M 150 0 Q 160 100 180 200 T 200 400"
              fill="none"
              stroke="#3D3D3D"
              strokeWidth="4"
              opacity="0.2"
            />
            <path
              d="M 300 0 Q 280 150 290 250 T 320 400"
              fill="none"
              stroke="#3D3D3D"
              strokeWidth="3"
              opacity="0.15"
            />

            {/* Zones vertes (forêt) */}
            <ellipse
              cx="80"
              cy="100"
              rx="60"
              ry="50"
              fill="#8B9A7B"
              opacity="0.2"
            />
            <ellipse
              cx="350"
              cy="80"
              rx="40"
              ry="35"
              fill="#8B9A7B"
              opacity="0.15"
            />
            <ellipse
              cx="320"
              cy="350"
              rx="70"
              ry="45"
              fill="#8B9A7B"
              opacity="0.2"
            />
            <ellipse
              cx="50"
              cy="320"
              rx="45"
              ry="40"
              fill="#8B9A7B"
              opacity="0.15"
            />
          </svg>

          {/* Marqueur de position */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Cercle pulsant */}
            <div className="absolute inset-0 -m-4">
              <div
                className="w-16 h-16 bg-[#8B9A7B]/20 rounded-full animate-ping"
                style={{ animationDuration: "2s" }}
              />
            </div>
            {/* Pin principal */}
            <div className="relative">
              <div className="w-8 h-8 bg-[#8B9A7B] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              {/* Pointe du pin */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#8B9A7B]" />
            </div>
          </div>

          {/* Labels de la carte */}
          <div className="absolute top-6 left-6">
            <p className="text-[#3D3D3D]/60 text-xs tracking-widest uppercase">
              Estrie
            </p>
          </div>
          <div className="absolute bottom-6 right-6 text-right">
            <p className="text-[#3D3D3D]/40 text-xs">Route 417</p>
            <p className="text-[#3D3D3D]/40 text-xs">Weedon, QC</p>
          </div>

          {/* Lien vers Google Maps */}
          <a
            href="https://maps.google.com/?q=Weedon,QC,Canada"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 flex items-center gap-2 text-[#8B9A7B] hover:text-[#6B7A5B] transition-colors text-sm group"
          >
            <MapPin className="w-4 h-4" />
            <span className="border-b border-[#8B9A7B]/30 group-hover:border-[#6B7A5B]">
              Voir sur Google Maps
            </span>
          </a>
        </div>

        {/* Photo de l'enseigne - Version stylisée */}
        <div className="relative bg-gradient-to-br from-[#8B9A7B] to-[#6B7A5B] overflow-hidden min-h-[400px] flex items-center justify-center">
          {/* Motif de fond (simule le paysage) */}
          <div className="absolute inset-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Arbres stylisés en arrière-plan */}
              <path
                d="M50 400 L50 300 L30 300 L50 250 L35 250 L50 200 L65 250 L50 250 L70 300 L50 300 Z"
                fill="#3D3D3D"
                opacity="0.3"
              />
              <path
                d="M120 400 L120 320 L105 320 L120 280 L108 280 L120 240 L132 280 L120 280 L135 320 L120 320 Z"
                fill="#3D3D3D"
                opacity="0.25"
              />
              <path
                d="M350 400 L350 280 L325 280 L350 220 L330 220 L350 160 L370 220 L350 220 L375 280 L350 280 Z"
                fill="#3D3D3D"
                opacity="0.3"
              />
              <path
                d="M300 400 L300 340 L285 340 L300 300 L288 300 L300 260 L312 300 L300 300 L315 340 L300 340 Z"
                fill="#3D3D3D"
                opacity="0.2"
              />
              {/* Ligne d'horizon */}
              <path
                d="M0 350 Q100 330 200 340 T400 335"
                fill="none"
                stroke="#3D3D3D"
                strokeWidth="2"
                opacity="0.2"
              />
            </svg>
          </div>

          {/* Panneau de l'enseigne */}
          <div className="relative z-10 bg-[#8B9A7B] border-4 border-[#F8F6F1]/20 shadow-2xl p-8 max-w-xs mx-4">
            {/* Logo circulaire */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-[#3D3D3D] rounded-full flex items-center justify-center border-4 border-[#F8F6F1]/30">
                <svg viewBox="0 0 60 60" className="w-14 h-14">
                  {/* Maison */}
                  <path
                    d="M15 32 L30 18 L45 32 L45 45 L15 45 Z"
                    fill="none"
                    stroke="#F8F6F1"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  {/* Toit */}
                  <path
                    d="M12 32 L30 14 L48 32"
                    fill="none"
                    stroke="#F8F6F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Arbre */}
                  <line
                    x1="30"
                    y1="8"
                    x2="30"
                    y2="15"
                    stroke="#F8F6F1"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M25 12 L30 5 L35 12"
                    fill="none"
                    stroke="#F8F6F1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Texte ATELIER 417 */}
            <div className="text-center mb-6">
              <p className="text-[#F8F6F1] text-xs tracking-[0.3em] mb-1">
                ATELIER
              </p>
              <p className="text-[#F8F6F1] text-3xl tracking-wider font-light">
                • 417 •
              </p>
            </div>

            {/* Services */}
            <div className="text-center space-y-1 mb-6 py-4 border-y border-[#F8F6F1]/20">
              <p className="text-[#F8F6F1] tracking-[0.2em] text-sm">
                CHARPENTE
              </p>
              <p className="text-[#F8F6F1] tracking-[0.2em] text-sm">
                STRUCTURE
              </p>
              <p className="text-[#F8F6F1] tracking-[0.2em] text-sm">
                BÂTIMENT
              </p>
            </div>

            {/* Nom et contact */}
            <div className="text-center">
              <p className="text-[#F8F6F1] font-medium tracking-wider text-sm">
                ALEXANDRE
              </p>
              <p className="text-[#F8F6F1] font-medium tracking-wider text-sm mb-3">
                GRANDMONT
              </p>
              <p className="text-[#F8F6F1]/80 text-sm">(819) 352-5048</p>
              <p className="text-[#F8F6F1]/80 text-sm">atelier417.com</p>
            </div>
          </div>

          {/* Poteau du panneau */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-20 bg-[#5A5A5A]" />

          {/* Sol */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#6B5A4A]/30" />
        </div>
      </div>

      {/* Détails de localisation */}
      <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 border border-[#3D3D3D]/10">
          <p className="text-[#8B9A7B] text-2xl font-light mb-1">Estrie</p>
          <p className="text-[#5A5A5A] text-sm">Région desservie</p>
        </div>
        <div className="p-6 border border-[#3D3D3D]/10">
          <p className="text-[#8B9A7B] text-2xl font-light mb-1">Route 417</p>
          <p className="text-[#5A5A5A] text-sm">Weedon, Québec</p>
        </div>
        <div className="p-6 border border-[#3D3D3D]/10">
          <p className="text-[#8B9A7B] text-2xl font-light mb-1">
            Sur rendez-vous
          </p>
          <p className="text-[#5A5A5A] text-sm">Visite de l'atelier</p>
        </div>
      </div>
    </div>
  </section>
);
