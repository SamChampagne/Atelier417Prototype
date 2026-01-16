import React from "react";
import { ProcessStepCard } from "./ProcessStepCard";
import { processSteps } from "../data/processSteps";

export const Processus: React.FC = () => (
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
