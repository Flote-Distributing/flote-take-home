import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { App } from '../App';

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('App', () => {
  it('renders product list from the API', async () => {
    const mockProducts = [
      {
        id: 1,
        name: 'Test Product',
        description: 'A test product',
        price: 19.99,
        originalPrice: 24.99,
        discountPercentage: 20,
        category: 'test',
        inStock: true,
        imageUrl: 'https://example.com/image.jpg',
        tags: ['test'],
      },
    ];

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockProducts),
    } as Response);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Test Product/)).toBeInTheDocument();
    });
  });
});
