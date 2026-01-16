import React from "react";
import { COLORS } from "../constants";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 48 }) => (
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
