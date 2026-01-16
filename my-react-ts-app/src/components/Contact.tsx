import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";
import type { FormData } from "../types";

export const Contact: React.FC = () => {
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
