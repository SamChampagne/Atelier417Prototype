export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType: string;
}

// Types préparés pour Phase 2 (catalogue/commandes)
export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  description: string;
  images: string[];
  specifications: Record<string, string>;
  customizable: boolean;
}

export interface QuoteRequest {
  items: {
    itemId: string;
    quantity: number;
    customizations?: Record<string, string>;
  }[];
  customerInfo: FormData;
  estimatedTotal?: number;
}
