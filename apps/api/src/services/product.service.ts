import type { Product } from '@take-home/types';

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    description:
      'Premium over-ear headphones with adaptive noise cancellation and 30-hour battery life.',
    price: 249.99,
    originalPrice: 299.99,
    discountPercentage: 16.67,
    category: 'electronics',
    inStock: true,
    imageUrl: 'https://dummyjson.com/image/400x300',
    tags: ['audio', 'wireless', 'noise-cancelling'],
  },
  {
    id: 2,
    name: 'Mechanical Gaming Keyboard',
    description: 'Full-size mechanical keyboard with hot-swappable switches and RGB backlighting.',
    price: 89.99,
    originalPrice: 89.99,
    discountPercentage: 0,
    category: 'electronics',
    inStock: true,
    imageUrl: 'https://dummyjson.com/image/400x300',
    tags: ['keyboard', 'gaming', 'mechanical'],
  },
  {
    id: 3,
    name: '4K Ultra HD Monitor',
    description: '32-inch IPS display with HDR support, 144Hz refresh rate, and USB-C connectivity.',
    price: 449.99,
    originalPrice: 549.99,
    discountPercentage: 18.18,
    category: 'electronics',
    inStock: false,
    imageUrl: 'https://dummyjson.com/image/400x300',
    tags: ['monitor', 'display', '4k'],
  },
  {
    id: 4,
    name: 'Leather Laptop Sleeve',
    description:
      'Handcrafted genuine leather sleeve with soft microfiber lining. Fits up to 15-inch laptops.',
    price: 34.99,
    originalPrice: 44.99,
    discountPercentage: 22.23,
    category: 'accessories',
    inStock: true,
    imageUrl: 'https://dummyjson.com/image/400x300',
    tags: ['laptop', 'leather', 'protective'],
  },
  {
    id: 5,
    name: 'USB-C Hub Adapter',
    description: '7-in-1 hub with HDMI, USB-A, SD card reader, and 100W power delivery passthrough.',
    price: 29.99,
    originalPrice: 29.99,
    discountPercentage: 0,
    category: 'accessories',
    inStock: false,
    imageUrl: 'https://dummyjson.com/image/400x300',
    tags: ['usb-c', 'hub', 'adapter'],
  },
];

export function getProducts(): Product[] {
  return products;
}
