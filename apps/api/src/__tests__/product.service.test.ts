import { describe, it, expect } from 'vitest';
import { getProducts } from '../services/product.service.js';

describe('product service', () => {
  it('returns all hardcoded products', () => {
    const products = getProducts();
    expect(products).toHaveLength(5);
    expect(products[0]).toHaveProperty('name');
    expect(products[0]).toHaveProperty('price');
  });
});
