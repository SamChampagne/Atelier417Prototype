import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Hammer,
  Heart,
  Clock,
  Users,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ============================================
// TYPES
// ============================================

interface Project {
  id: number;
  title: string;
  category: string;
  size: string;
  image: string;
  description: string;
}

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// ============================================
// DONNÉES
// ============================================

const projects: Project[] = [
  {
    id: 1,
    title: "Cabane du Lac",
    category: "Rustique",
    size: "12m²",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    description: "Un refuge paisible au bord de l'eau",
  },
  {
    id: 2,
    title: "Atelier Bois",
    category: "Fonctionnel",
    size: "18m²",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    description: "Espace de travail lumineux et pratique",
  },
  {
    id: 3,
    title: "Cabane Moderne",
    category: "Contemporain",
    size: "15m²",
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
    description: "Design épuré, matériaux nobles",
  },
  {
    id: 4,
    title: "Petit Chalet",
    category: "Traditionnel",
    size: "20m²",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    description: "L'authenticité québécoise",
  },
];

const processSteps: ProcessStep[] = [
  {
    icon: Users,
    title: "On se rencontre",
    description:
      "On discute de votre projet, vos besoins, votre terrain. Un café, une visite — ça commence par une conversation.",
  },
  {
    icon: Hammer,
    title: "Je conçois",
    description:
      "Je dessine les plans, choisis les matériaux locaux, et vous présente une soumission détaillée. Pas de surprise.",
  },
  {
    icon: Clock,
    title: "Je construis",
    description:
      "En atelier puis sur votre terrain. Chaque pièce est assemblée à la main, avec le soin qu'elle mérite.",
  },
  {
    icon: Heart,
    title: "Vous profitez",
    description:
      "Votre cabanon est prêt. Durable, beau, fait pour durer des générations.",
  },
];

// ============================================
// COMPOSANTS
// ============================================

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5EFE0]/95 backdrop-blur-sm border-b border-[#6B4C3A]/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#6B4C3A] rounded-lg flex items-center justify-center">
              <Hammer className="w-5 h-5 text-[#F5EFE0]" />
            </div>
            <span className="font-serif text-xl text-[#6B4C3A] font-semibold">
              Cabanons Artisan
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#realisations"
              className="text-[#3D3027]/70 hover:text-[#6B4C3A] transition-colors"
            >
              Réalisations
            </a>
            <a
              href="#processus"
              className="text-[#3D3027]/70 hover:text-[#6B4C3A] transition-colors"
            >
              Ma méthode
            </a>
            <a
              href="#apropos"
              className="text-[#3D3027]/70 hover:text-[#6B4C3A] transition-colors"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="bg-[#6B4C3A] text-[#F5EFE0] px-5 py-2.5 rounded-lg hover:bg-[#8B6B5A] transition-colors"
            >
              Parlons de votre projet
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#6B4C3A]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#6B4C3A]/10 pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#realisations"
                className="text-[#3D3027]/70 hover:text-[#6B4C3A]"
              >
                Réalisations
              </a>
              <a
                href="#processus"
                className="text-[#3D3027]/70 hover:text-[#6B4C3A]"
              >
                Ma méthode
              </a>
              <a
                href="#apropos"
                className="text-[#3D3027]/70 hover:text-[#6B4C3A]"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="bg-[#6B4C3A] text-[#F5EFE0] px-5 py-2.5 rounded-lg text-center"
              >
                Parlons de votre projet
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero: React.FC = () => (
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
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

const Realisations: React.FC = () => (
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

const ProcessStepCard: React.FC<{
  step: ProcessStep;
  index: number;
  isLast: boolean;
}> = ({ step, index, isLast }) => {
  const IconComponent = step.icon;

  return (
    <div className="relative">
      {/* Ligne de connexion (sauf dernier) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-[#6B4C3A]/20" />
      )}

      <div className="bg-[#FAFAF8] rounded-xl p-6 border border-[#6B4C3A]/10 hover:border-[#6B4C3A]/30 transition-colors h-full">
        <div className="w-16 h-16 bg-[#7A8B6F]/10 rounded-xl flex items-center justify-center mb-5">
          <IconComponent className="w-7 h-7 text-[#7A8B6F]" />
        </div>
        <div className="text-xs text-[#6B4C3A]/50 font-medium mb-2">
          Étape {index + 1}
        </div>
        <h3 className="font-serif text-lg text-[#3D3027] mb-2">{step.title}</h3>
        <p className="text-[#3D3027]/60 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const Processus: React.FC = () => (
  <section id="processus" className="py-24 bg-[#F5EFE0]">
    <div className="max-w-6xl mx-auto px-6">
      {/* En-tête */}
      <div className="text-center mb-16">
        <span className="text-[#7A8B6F] text-sm font-medium tracking-wider uppercase">
          Ma méthode
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#3D3027] mt-3 mb-4">
          Comment ça se passe
        </h2>
        <p className="text-[#3D3027]/60 max-w-2xl mx-auto">
          Pas de processus compliqué. On discute, je construis, vous profitez.
        </p>
      </div>

      {/* Étapes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <ProcessStepCard
            key={index}
            step={step}
            index={index}
            isLast={index === processSteps.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
);

const Apropos: React.FC = () => (
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Ici on enverrait le formulaire
    console.log("Form submitted:", formData);
    alert("Merci ! Je vous recontacte bientôt.");
  };

  return (
    <section id="contact" className="py-24 bg-[#3D3027] text-[#F5EFE0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Texte */}
          <div className="space-y-8">
            <div>
              <span className="text-[#7A8B6F] text-sm font-medium tracking-wider uppercase">
                Contact
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5EFE0] mt-3 mb-4">
                Parlons de votre projet
              </h2>
              <p className="text-[#F5EFE0]/70 leading-relaxed">
                Vous avez une idée en tête ? Un terrain qui attend son cabanon ?
                Écrivez-moi, on en discute sans engagement.
              </p>
            </div>

            {/* Coordonnées */}
            <div className="space-y-4">
              <a
                href="tel:+15141234567"
                className="flex items-center gap-4 text-[#F5EFE0]/80 hover:text-[#F5EFE0] transition-colors"
              >
                <div className="w-12 h-12 bg-[#6B4C3A]/40 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-[#F5EFE0]/50">Téléphone</div>
                  <div>(514) 123-4567</div>
                </div>
              </a>

              <a
                href="mailto:contact@cabanons.ca"
                className="flex items-center gap-4 text-[#F5EFE0]/80 hover:text-[#F5EFE0] transition-colors"
              >
                <div className="w-12 h-12 bg-[#6B4C3A]/40 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-[#F5EFE0]/50">Courriel</div>
                  <div>contact@cabanons.ca</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#F5EFE0]/80">
                <div className="w-12 h-12 bg-[#6B4C3A]/40 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-[#F5EFE0]/50">Atelier</div>
                  <div>[Ville], Québec</div>
                </div>
              </div>
            </div>

            {/* Réseaux */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-[#6B4C3A]/40 rounded-lg flex items-center justify-center hover:bg-[#6B4C3A]/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#6B4C3A]/40 rounded-lg flex items-center justify-center hover:bg-[#6B4C3A]/60 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-[#F5EFE0]/70 mb-2"
              >
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#F5EFE0]/10 border border-[#F5EFE0]/20 rounded-lg px-4 py-3 text-[#F5EFE0] placeholder-[#F5EFE0]/40 focus:outline-none focus:border-[#7A8B6F] transition-colors"
                placeholder="Jean Tremblay"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-[#F5EFE0]/70 mb-2"
                >
                  Courriel
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#F5EFE0]/10 border border-[#F5EFE0]/20 rounded-lg px-4 py-3 text-[#F5EFE0] placeholder-[#F5EFE0]/40 focus:outline-none focus:border-[#7A8B6F] transition-colors"
                  placeholder="jean@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-[#F5EFE0]/70 mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#F5EFE0]/10 border border-[#F5EFE0]/20 rounded-lg px-4 py-3 text-[#F5EFE0] placeholder-[#F5EFE0]/40 focus:outline-none focus:border-[#7A8B6F] transition-colors"
                  placeholder="(514) 123-4567"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-[#F5EFE0]/70 mb-2"
              >
                Parlez-moi de votre projet
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-[#F5EFE0]/10 border border-[#F5EFE0]/20 rounded-lg px-4 py-3 text-[#F5EFE0] placeholder-[#F5EFE0]/40 focus:outline-none focus:border-[#7A8B6F] transition-colors resize-none"
                placeholder="J'aimerais un petit cabanon pour mon jardin..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6B4C3A] text-[#F5EFE0] py-4 rounded-lg font-medium hover:bg-[#8B6B5A] transition-colors flex items-center justify-center gap-2 group"
            >
              Envoyer ma demande
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-[#F5EFE0]/50 text-sm">
              Je réponds généralement en 24-48h
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
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

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

const CabanonsArtisan: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Source+Sans+3:wght@400;500;600&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-serif {
          font-family: 'Merriweather', Georgia, serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Realisations />
        <Processus />
        <Apropos />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default CabanonsArtisan;
