import React from "react";
import {
  Navigation,
  Hero,
  Realisations,
  Processus,
  Apropos,
  Contact,
  Footer,
} from "./components";

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
