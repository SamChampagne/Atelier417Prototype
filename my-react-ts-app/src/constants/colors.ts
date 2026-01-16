// Couleurs extraites du logo
export const COLORS = {
  sage: "#8B9A7B", // Vert sauge principal
  sageDark: "#6B7A5B", // Vert sauge foncé
  sageLight: "#A8B598", // Vert sauge clair
  charcoal: "#3D3D3D", // Gris charbon (logo)
  cream: "#F8F6F1", // Crème fond
  warmWhite: "#FDFCFA", // Blanc chaud
  text: "#2D2D2D", // Texte principal
  textMuted: "#5A5A5A", // Texte secondaire
} as const;

export type ColorKey = keyof typeof COLORS;
