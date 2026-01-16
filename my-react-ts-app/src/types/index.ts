import type { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  size: string;
  image: string;
  description: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
