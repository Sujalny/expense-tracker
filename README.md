# Ledger expense tracker

React + Vite dashboard with a separate Express / MongoDB API. The private hosted preview runs in demo mode with sample transactions and browser localStorage. It does not connect to MongoDB by default. Monthly category budgets are stored in the browser in both modes.

## Run locally

1. `npm install`
2. `npm run dev` — open the printed localhost address.
3. To enable MongoDB, copy `.env.example` to `.env`, set `MONGODB_URI` and keep `VITE_API_URL=http://localhost:4000/api`. Set `CORS_ORIGIN` to the actual frontend origin (Vite normally prints http://127.0.0.1:5173 when using the supplied script).
4. Run `npm run start:api` in another terminal, then restart Vite. API mode starts with your MongoDB records rather than demo transactions.

`npm test` validates server input rules; `npm run build` creates `dist/`.

Features: add/delete transactions, monthly navigation, cash flow and category charts, search and type filters, CSV export, monthly budget editing, responsive layout. Amounts use Indian rupees.

The API is intended for a trusted local single-user environment. Before exposing it publicly, add authentication, per-user authorization, rate limiting, HTTPS, and a production database configuration. It binds to loopback by default. The static hosted preview cannot run an Express server; host the API separately and set VITE_API_URL at build time to use MongoDB there.
