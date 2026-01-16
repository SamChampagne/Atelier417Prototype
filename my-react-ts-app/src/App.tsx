import React from "react";
import {
  Navigation,
  Hero,
  Realisations,
  Localisation,
  Contact,
  Footer,
} from "./components";

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
