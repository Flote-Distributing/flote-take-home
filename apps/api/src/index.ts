import Fastify from 'fastify';
import cors from '@fastify/cors';
import { productRoutes } from './routes/products.js';

const app = Fastify();

await app.register(cors, { origin: 'http://localhost:5173' });

app.get('/health', async () => ({ status: 'ok' }));

await app.register(productRoutes, { prefix: '/api' });

await app.listen({ port: 3001 });

console.log('API running at http://localhost:3001');
