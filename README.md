# Flote — Take-Home Assignment

## Overview

Build a small **Product Catalog API + Frontend** using TypeScript. The goal is to see how you organize code, handle types, and work through a full-stack problem. Use whatever tools or resources you'd like — there are no restrictions.

**Time expectation:** 4-6 hours. Please don't spend more than 6 — we'd rather see a focused, pragmatic effort than an over-engineered marathon. This follows an initial conversation and precedes a code review discussion (details below).

**Deadline:** [insert date]

---

## Getting Started

This project is a pnpm monorepo with Turborepo. To get it running:

```bash
pnpm install
pnpm dev
```

- API: `http://localhost:3001` (Fastify)
- Frontend: `http://localhost:5173` (Vite + React)

The app currently serves a hardcoded list of products. Your job is to replace the hardcoded data with a real API integration, build out the backend logic, and create the frontend UI.

---

## Data Source

Replace the hardcoded product data with the **DummyJSON API**:

- Products: `https://dummyjson.com/products`
- Single product: `https://dummyjson.com/products/{id}`
- Categories: `https://dummyjson.com/products/categories`

API documentation: `https://dummyjson.com/docs/products`

Your backend should act as a **wrapper** around this API. Your frontend should **never** call DummyJSON directly — it only talks to your backend.

---

## Backend (Node.js + TypeScript)

The scaffold provides a working Fastify server with a single `GET /api/products` route that returns hardcoded data through a basic service. Use this as a starting point.

### Code Structure

Organize the backend in three layers:

- **Routes** — parse request params, call the service, return HTTP responses with proper status codes
- **Service** — business logic (filtering, sorting, computing fields, aggregating stats, data transformation)
- **Provider** — a module responsible for communicating with the DummyJSON API. This is the only layer that knows DummyJSON exists.

The product shape your API returns to the frontend should be **your own** — not DummyJSON's raw format. Transform the data into a clean structure that makes sense for your API consumers.

### Your Product Shape

Shared types are provided in `packages/types`. Each product returned by your API should have:

| Field | Type | Notes |
|---|---|---|
| `id` | number | |
| `name` | string | |
| `description` | string | |
| `price` | number | Current selling price |
| `originalPrice` | number | Price before any discount |
| `discountPercentage` | number | Computed from `originalPrice` and `price` — not stored, calculated at request time |
| `category` | string | |
| `inStock` | boolean | |
| `imageUrl` | string | Single image URL |
| `tags` | string[] | |

How you map DummyJSON's fields to this shape is up to you.

### Endpoints

**`GET /api/products`** (exists, needs work)

Currently returns hardcoded data. Replace with real data and add support for the following optional query parameters:

- `category` — filter by exact category match
- `minPrice` / `maxPrice` — filter by price range
- `inStock` — when `"true"`, only return products that are in stock
- `search` — case-insensitive match against product name or description

Products that are out of stock should always be sorted to the **end** of the list.

**`GET /api/products/:id`** (new)

Returns a single product by ID, or a `404` if not found.

**`GET /api/products/stats`** (new)

Returns aggregate statistics grouped by category:

- Total product count
- Number in stock
- Number on sale (where `price < originalPrice`)
- Average price

---

## Frontend (React + TypeScript)

The scaffold renders a basic unstyled list of products fetched from the API. Replace this with a proper UI.

### Requirements

- Fetch and display products from your API in a grid or list
- Add category filter controls (buttons, pills, dropdown — your call)
- Add a search input that filters products by name/description
- Show a loading state while fetching
- Show an error state if the API is unreachable
- Clicking a product should show its details (modal, side panel, new view — your choice)
- Display the discount percentage somewhere visible on products that are on sale

### Not Required

- Animations, responsive breakpoints, or pixel-perfect polish — but we do pay attention to how you present information. Layout choices, visual hierarchy, and how the UI communicates state (loading, errors, empty results, sale items) tell us a lot about how you think.
- State management libraries — `useState` / `useEffect` is perfectly fine
- Authentication

---

## Bonus: Resilience

DummyJSON is a free public API. It has rate limits. It goes down sometimes. It can be slow.

Make your API resilient to these realities. There are many valid approaches — pick one and implement it. Document your approach and its tradeoffs in your project README.

---

## General Requirements

- **TypeScript everywhere.** No `any` types.
- **At least 3 unit tests.** Pick what you think is most worth testing.
- **Clean git history.** Meaningful commit messages. Don't squash everything into one commit.
- **A project README** (separate from this file) that explains:
  - How to install and run the project (both backend and frontend)
  - Any decisions or tradeoffs you made
  - Your resilience approach (if attempted)

---

## What We're Looking For

- **Code structure and separation of concerns** — how you organize layers and responsibilities
- **TypeScript discipline** — types that help, not `any` that hides
- **Clean data transformation** — how you map between external and internal shapes
- **Thoughtful UI decisions** — layout, hierarchy, and how information is presented
- **Testing what matters** — meaningful tests over checkbox coverage
- **Clear communication** — your README should explain your thinking

---

## What Happens Next

After you submit, we'll schedule a **30-minute code review call**. You'll walk us through your approach, explain the decisions and tradeoffs you made, and we'll discuss how you'd extend or change things with more time. The conversation matters as much as the code.

---

## Submission

Fork this repo, do your work, and push to your fork. Send the link to [your email] when you're done.
