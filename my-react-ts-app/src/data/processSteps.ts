import { Users, Hammer, Clock, Heart } from "lucide-react";
import type { ProcessStep } from "../types";

export const processSteps: ProcessStep[] = [
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
