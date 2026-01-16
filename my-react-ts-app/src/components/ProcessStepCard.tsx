import React from "react";
import type { ProcessStep } from "../types";

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  step,
  index,
  isLast,
}) => {
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
