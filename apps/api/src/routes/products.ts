import type { FastifyInstance } from 'fastify';
import { getProducts } from '../services/product.service.js';

export async function productRoutes(app: FastifyInstance) {
  app.get('/products', async (_request, reply) => {
    const products = getProducts();
    return reply.status(200).send(products);
  });
}
