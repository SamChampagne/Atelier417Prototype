import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import type { FormData } from "../types";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
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
