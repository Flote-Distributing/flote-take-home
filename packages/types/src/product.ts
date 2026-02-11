export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  category: string;
  inStock: boolean;
  imageUrl: string;
  tags: string[];
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
}

export interface CategoryStats {
  category: string;
  totalCount: number;
  inStockCount: number;
  onSaleCount: number;
  averagePrice: number;
}

export interface ProductStatsResponse {
  categories: CategoryStats[];
  totalCount: number;
  inStockCount: number;
  onSaleCount: number;
  averagePrice: number;
}
