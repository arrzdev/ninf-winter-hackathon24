# COMPARA — supermarket price comparison

Built at the **NINF Winter Hackathon 2024** (FCT NOVA, February 2024).

COMPARA is an app that scrapes products from different supermarkets so you can see the price of each product in each one. Reading grocery receipts was a bonus feature.

> **Archived hackathon project.** It is no longer maintained and there is no live demo.

## What it does
- **Price comparison (main feature).** Search products by name, category or supermarket and see the price in each store. The Next.js server actions (`frontend/lib/actions/base.ts`) scrape the public [kabaz.pt](https://www.kabaz.pt) price aggregator: they fetch the search or product page, read the embedded `__NEXT_DATA__` JSON, and return the product hits and the per-store prices. Store colours are mapped for Continente, Auchan, Aldi, Pingo Doce, El Corte Inglés, Minipreço and Lidl.
- **Price history and cart.** Per-product price charts, a shopping cart that shows the cheapest store, and product recommendations by category.
- **Receipt parser (bonus).** Python scripts (`backend/receipt_parser/`) extract date, products and total from Continente and Pingo Doce PDF receipts with PyPDF2, store them in MongoDB and serve them through a small Flask API. The frontend uses them for spending statistics.

## Stack
Next.js 14 · TypeScript · Prisma · Tailwind + Radix UI · Chart.js · Python (Flask, PyPDF2, MongoDB)
