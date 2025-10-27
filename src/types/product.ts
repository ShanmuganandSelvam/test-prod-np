export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  category: string;
  tags: string[];
  rating: number;
  stock: number;
  imageUrl: string;
  featured: boolean;
}

export type SortOption = 'name' | 'price-low' | 'price-high' | 'rating';

export interface FilterOptions {
  category: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  inStock: boolean;
  featured: boolean;
}
