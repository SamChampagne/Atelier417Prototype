import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// ============================================
// TYPES - Préparés pour futur e-commerce
// ============================================

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType: string; // Prêt pour sélection de type de projet/produit
}

// Types préparés pour Phase 2 (catalogue/commandes)
interface CatalogItem {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  description: string;
  images: string[];
  specifications: Record<string, string>;
  customizable: boolean;
}

interface QuoteRequest {
  items: {
    itemId: string;
    quantity: number;
    customizations?: Record<string, string>;
  }[];
  customerInfo: FormData;
  estimatedTotal?: number;
}

// ============================================
// CONSTANTES - Couleurs extraites du logo
// ============================================

const COLORS = {
  sage: "#8B9A7B", // Vert sauge principal
  sageDark: "#6B7A5B", // Vert sauge foncé
  sageLight: "#A8B598", // Vert sauge clair
  charcoal: "#3D3D3D", // Gris charbon (logo)
  cream: "#F8F6F1", // Crème fond
  warmWhite: "#FDFCFA", // Blanc chaud
  text: "#2D2D2D", // Texte principal
  textMuted: "#5A5A5A", // Texte secondaire
};

// ============================================
// DONNÉES
// ============================================

const projects: Project[] = [
  {
    id: 1,
    title: "Chalet Lac-Mégantic",
    category: "Charpente",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
  },
  {
    id: 2,
    title: "Atelier de menuiserie",
    category: "Structure",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
  },
  {
    id: 3,
    title: "Cabanon rustique",
    category: "Bâtiment",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
  },
  {
    id: 4,
    title: "Extension résidentielle",
    category: "Structure",
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
  },
];

// ============================================
// COMPOSANT LOGO SVG
// ============================================

const Logo: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 48,
}) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    aria-label="Logo Atelier 417"
  >
    {/* Cercle de fond */}
    <circle cx="50" cy="50" r="48" fill={COLORS.charcoal} />

    {/* Maison stylisée */}
    <path
      d="M30 55 L50 35 L70 55 L70 70 L30 70 Z"
      fill="none"
      stroke={COLORS.cream}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    {/* Toit accent */}
    <path
      d="M25 55 L50 30 L75 55"
      fill="none"
      stroke={COLORS.cream}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Arbre/sapin stylisé */}
    <line
      x1="50"
      y1="22"
      x2="50"
      y2="32"
      stroke={COLORS.cream}
      strokeWidth="2"
    />
    <path
      d="M44 28 L50 18 L56 28"
      fill="none"
      stroke={COLORS.cream}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ============================================
// NAVIGATION
// ============================================

const Navigation: React.FC = () => {
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

// ============================================
// HERO - Minimaliste et impactant
// ============================================

const Hero: React.FC = () => (
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

// ============================================
// RÉALISATIONS - Galerie épurée
// ============================================

const Realisations: React.FC = () => (
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

// ============================================
// LOCALISATION - Carte et enseigne
// ============================================

const Localisation: React.FC = () => (
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

// ============================================
// CONTACT - Formulaire préparé pour soumissions
// ============================================

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "", // Prêt pour sélection de produit du catalogue
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi - À remplacer par vraie API
    // Phase 2: Intégrer avec système de soumissions/commandes
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Demande soumise:", formData);
    alert("Merci ! Alexandre vous recontactera sous peu.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      projectType: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#3D3D3D]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Coordonnées */}
          <div className="space-y-8">
            <div>
              <p className="text-[#8B9A7B] text-sm tracking-widest uppercase mb-3">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl text-[#F8F6F1] font-light mb-4">
                Parlons de votre projet
              </h2>
              <p className="text-[#F8F6F1]/70 leading-relaxed">
                Une idée, un terrain, un projet ? Contactez-moi pour en
                discuter.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:8193525048"
                className="flex items-center gap-4 text-[#F8F6F1]/80 hover:text-[#F8F6F1] transition-colors group"
              >
                <div className="w-12 h-12 border border-[#F8F6F1]/20 flex items-center justify-center group-hover:border-[#8B9A7B] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#F8F6F1]/50 uppercase tracking-wider">
                    Téléphone
                  </p>
                  <p className="text-lg">(819) 352-5048</p>
                </div>
              </a>

              <a
                href="mailto:info@atelier417.com"
                className="flex items-center gap-4 text-[#F8F6F1]/80 hover:text-[#F8F6F1] transition-colors group"
              >
                <div className="w-12 h-12 border border-[#F8F6F1]/20 flex items-center justify-center group-hover:border-[#8B9A7B] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#F8F6F1]/50 uppercase tracking-wider">
                    Courriel
                  </p>
                  <p className="text-lg">info@atelier417.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#F8F6F1]/80">
                <div className="w-12 h-12 border border-[#F8F6F1]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#F8F6F1]/50 uppercase tracking-wider">
                    Région
                  </p>
                  <p className="text-lg">Estrie, Québec</p>
                </div>
              </div>
            </div>

            {/* Site web */}
            <div className="pt-6 border-t border-[#F8F6F1]/10">
              <a
                href="https://atelier417.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B9A7B] hover:text-[#A8B598] transition-colors"
              >
                atelier417.com
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs text-[#F8F6F1]/50 uppercase tracking-wider mb-2"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#F8F6F1]/20 py-3 text-[#F8F6F1] placeholder-[#F8F6F1]/30 focus:outline-none focus:border-[#8B9A7B] transition-colors"
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-[#F8F6F1]/50 uppercase tracking-wider mb-2"
                >
                  Courriel
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#F8F6F1]/20 py-3 text-[#F8F6F1] placeholder-[#F8F6F1]/30 focus:outline-none focus:border-[#8B9A7B] transition-colors"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs text-[#F8F6F1]/50 uppercase tracking-wider mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#F8F6F1]/20 py-3 text-[#F8F6F1] placeholder-[#F8F6F1]/30 focus:outline-none focus:border-[#8B9A7B] transition-colors"
                  placeholder="(819) 000-0000"
                />
              </div>
            </div>

            {/* Select pour type de projet - Extensible pour catalogue Phase 2 */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs text-[#F8F6F1]/50 uppercase tracking-wider mb-2"
              >
                Type de projet
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#F8F6F1]/20 py-3 text-[#F8F6F1] focus:outline-none focus:border-[#8B9A7B] transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#3D3D3D]">
                  Sélectionner...
                </option>
                <option value="charpente" className="bg-[#3D3D3D]">
                  Charpente
                </option>
                <option value="structure" className="bg-[#3D3D3D]">
                  Structure
                </option>
                <option value="batiment" className="bg-[#3D3D3D]">
                  Bâtiment complet
                </option>
                <option value="renovation" className="bg-[#3D3D3D]">
                  Rénovation
                </option>
                <option value="autre" className="bg-[#3D3D3D]">
                  Autre
                </option>
                {/* Phase 2: Options dynamiques depuis catalogue */}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs text-[#F8F6F1]/50 uppercase tracking-wider mb-2"
              >
                Votre projet
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-[#F8F6F1]/20 py-3 text-[#F8F6F1] placeholder-[#F8F6F1]/30 focus:outline-none focus:border-[#8B9A7B] transition-colors resize-none"
                placeholder="Décrivez brièvement votre projet..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8B9A7B] text-white py-4 font-medium hover:bg-[#6B7A5B] transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
              {!isSubmitting && (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER - Épuré
// ============================================

const Footer: React.FC = () => (
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

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

const Atelier417: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        html {
          scroll-behavior: smooth;
        }

        /* Sélecteur personnalisé */
        select option {
          padding: 12px;
        }
      `}</style>

      <div className="min-h-screen bg-[#F8F6F1]">
        <Navigation />
        <Hero />
        <Realisations />
        <Localisation />
        {/* 
          Phase 2 - Sections à ajouter:
          <Catalogue />      - Grille des modèles préfabriqués
          <Configurator />   - Outil de personnalisation (optionnel)
          <QuoteCart />      - Panier de soumission
        */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Atelier417;
