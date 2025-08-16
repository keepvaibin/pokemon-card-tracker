
# Pokémon Card Tracker — Complete Setup & API Guide (Next.js 15, Node 20, Prisma)

This README is a from‑scratch, **clean and complete** guide to get the app running locally and in production. It includes:
- Step‑by‑step **Node.js 20** installation
- Clear **environment** setup with a copy‑paste `.env` example
- **Database** prep for 3 separate Postgres/Timescale DBs
- **Prisma** client generation & migrations (all three schemas)
- A definitive **API reference** with every endpoint, a big filter table, and **example links** you can click (use Postman with auth)

If you follow this doc line‑by‑line, you’ll have a working build.

---

## 0) What is this project?

A full‑stack **Next.js 15** app with a backend implemented in **Route Handlers** (TypeScript). It uses **three databases**:
1) **User DB** – auth/session/user (PostgreSQL)
2) **Cards DB** – Pokémon cards & snapshot prices (PostgreSQL)
3) **Timeseries DB** – price history (TimescaleDB or PostgreSQL)

**Auth**: Card endpoints require a **Google ID Token** (bearer).  
**UI**: React 19 + (optional) Tailwind.  
**ORM**: Prisma with **three separate schemas/clients**.

> You’ll generate 3 Prisma clients, one per DB. Migrations/push commands are run per schema.

---

## 1) Install Node.js **v20**

The simplest, repeatable path is **nvm**.

### macOS / Linux
```bash
# Install or update nvm (see https://github.com/nvm-sh/nvm for the latest)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# restart shell, then:
nvm install 20
nvm use 20
node -v   # should be v20.x.y
npm -v
```

### Windows
- Use **nvm-windows**: https://github.com/coreybutler/nvm-windows
- Then:
```powershell
nvm install 20
nvm use 20
node -v
npm -v
```

> If you prefer installers, download Node 20 LTS from nodejs.org. The project is tested with Node 20.

---

## 2) Clone & Install

```bash
git clone <your-repo-url> pokemon-card-tracker
cd pokemon-card-tracker
npm install
```

This project auto‑generates Prisma clients after install (see scripts). If you see Prisma output, that’s expected.

---

## 3) Create `.env`

Create a file at the repo root named `.env`:

```env
# --- USER DB (PostgreSQL) ---
DATABASE_URL="postgresql://pkmnadmin:@pokemon-tracker-db.postgres.database.azure.com:5432/users?sslmode=require"

# --- CARDS DB (PostgreSQL) ---
CARDS_DATABASE_URL="postgresql://pkmnadmin:@pokemon-tracker-db.postgres.database.azure.com:5432/card_db?sslmode=require"

# --- TIMESERIES / PRICE HISTORY (TimescaleDB or Postgres) ---
TIMESCALE_URL="postgresql://pkmnadmin:@pokemon-tracker-db.postgres.database.azure.com:5432/price_tracking?sslmode=require"

# --- AUTH (Google) ---
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# --- NextAuth (optional if you use NextAuth) ---
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

**Notes**
- `sslmode=require` is included for managed Postgres (e.g., Azure). Keep it if your provider needs TLS.
- Leave the secrets empty until you have valid values.

---

## 4) Prisma — Generate Clients (3 schemas)

This project uses **three Prisma schemas**:
- `prisma/schema.prisma` (User DB)
- `prisma/schema.cards.prisma` (Cards DB)
- `prisma/schema.timescale.prisma` (Timeseries DB)

Generate all three (any time you change a schema):

```bash
npm run prisma:generate
# or individually:
npm run prisma:generate:user
npm run prisma:generate:cards
npm run prisma:generate:timescale
```

> These scripts are already defined in `package.json`. Post‑install generation also runs on `npm install`.

---

## 5) Database Setup — **Choose ONE** path per DB

You can use **migrations** (recommended) or a quick **db push** for prototyping. Run these separately for *each* of the 3 schemas.

### Option A — Migrations (recommended for prod)
Initialize and apply migrations for each schema:

```bash
# User DB
npx prisma migrate dev --schema=prisma/schema.prisma --name init
# Cards DB
npx prisma migrate dev --schema=prisma/schema.cards.prisma --name init
# Timeseries DB
npx prisma migrate dev --schema=prisma/schema.timescale.prisma --name init
```

**Deploy migrations in CI/Prod**:
```bash
npx prisma migrate deploy --schema=prisma/schema.prisma
npx prisma migrate deploy --schema=prisma/schema.cards.prisma
npx prisma migrate deploy --schema=prisma/schema.timescale.prisma
```

### Option B — Schema sync without migrations (fast local)
```bash
npx prisma db push --schema=prisma/schema.prisma
npx prisma db push --schema=prisma/schema.cards.prisma
npx prisma db push --schema=prisma/schema.timescale.prisma
```

> If you already have tables, `db push` will try to align the schema. For controlled changes, use **migrate**.

---

## 6) Run the App

```bash
npm run dev        # http://localhost:3000
# or production build:
npm run build
npm start
```

Open `http://localhost:3000`.

---

## 7) Authentication (for API calls)

Most card endpoints require a **Google ID Token**. Provide it as a bearer token:

```
Authorization: Bearer <GOOGLE_ID_TOKEN>
```

If you open links below in a browser without a token, you’ll see `401 Unauthorized` (expected). Use Postman/Insomnia or your frontend which injects the header.

---

## 8) API — Endpoints & Examples

**Base path**: `/api`

Below is a **complete table** of supported routes with method, purpose, and a copy‑paste **example**. Replace `localhost:3000` with your host.

> Tip: Paste the example URLs in Postman, add the `Authorization` header, and send.

| Method | Route | What it does | Example |
|---|---|---|---|
| GET | `/api/cards` | List cards (basic shape) with filters & pagination | `http://localhost:3000/api/cards?page=1&page_size=15` |
| GET | `/api/cards/filters` | Distincts & numeric ranges for building UIs | `http://localhost:3000/api/cards/filters` |
| GET | `/api/cards/:id` | Full card detail by ID | `http://localhost:3000/api/cards/swsh1-1` |
| POST | `/api/cards/bulk` | Full detail for many IDs in one call | `http://localhost:3000/api/cards/bulk` (body: `{"ids":["swsh1-1","xy7-54"]}`) |
| GET | `/api/cards/:id/price/history` | Time‑series price history (requires Timescale) | `http://localhost:3000/api/cards/swsh1-1/price/history?from=2024-01-01T00:00:00Z&order=desc&limit=200` |
| GET | `/api/cards/:id/price/latest` | Latest price point (requires Timescale) | `http://localhost:3000/api/cards/swsh1-1/price/latest` |
| GET | `/api/health` *(optional)* | Simple server health check if you add it | `http://localhost:3000/api/health` |

> If your repo also includes NextAuth at `/api/auth/[...nextauth]`, keep that as part of your auth flow. It’s separate from the Google ID token verification used by the card endpoints.

---

## 9) `/api/cards` — **Filters** (AND semantics)

All filters are query parameters. You can combine multiple; they are **ANDed**.

### Equality on strings
- `id`, `name`, `supertype`, `rarity`, `hp`, `level`, `number`, `setId`, `artist`

Examples:
- By ID: `http://localhost:3000/api/cards?id=sv5-29`
- By name: `http://localhost:3000/api/cards?name=Pikachu`
- By set & rarity: `http://localhost:3000/api/cards?setId=swsh1&rarity=Rare`
- Exact HP (string): `http://localhost:3000/api/cards?hp=120`

> `hp`, `level`, `number` are **stored as strings** → comparisons are **equality** only unless you implement numeric casting in code.

### Numeric comparisons (Cardmarket)
Use suffix `_gte`, `_lte`, `_gt`, `_lt` on these keys:
- `averageSellPrice_*`, `trendPrice_*`, `lowPrice_*`

Examples:
- `http://localhost:3000/api/cards?averageSellPrice_gte=1.5`
- `http://localhost:3000/api/cards?trendPrice_lte=5`
- `http://localhost:3000/api/cards?lowPrice_gt=0.05`

### Numeric comparisons (TCGplayer Market)
Use suffix `_gte`, `_lte`, `_gt`, `_lt` on these keys:
- `normalMarket_*`, `holofoilMarket_*`, `reverseHolofoilMarket_*`

Examples:
- `http://localhost:3000/api/cards?normalMarket_gte=0.25`
- `http://localhost:3000/api/cards?holofoilMarket_lte=10`
- `http://localhost:3000/api/cards?reverseHolofoilMarket_lt=2.5`

### Pagination
- `page` (default `1`), `page_size` (default `15`, max `100`)

Example:
- `http://localhost:3000/api/cards?page=2&page_size=25&rarity=Rare&trendPrice_lte=5`

---

## 10) `/api/cards/filters` — What it returns

Helper metadata for building UIs. Typical fields:

- **Ranges**: Cardmarket (`averageSellPrice`, `trendPrice`, `lowPrice`), and possibly TCGplayer ranges if implemented
- **Distincts**: `artists`, `rarities`, `supertypes`, `types`, `sets` (`{id,name}`), etc.
- **String ranges** (lexicographic): for `hp`, `level`, `number` (they are strings)

Example:
- `http://localhost:3000/api/cards/filters`

---

## 11) Errors

- `400 Bad Request` — invalid pagination or invalid numeric filter value
- `401 Unauthorized` — missing/invalid Google ID token
- `404 Not Found` — resource not found (e.g., card id)

---

## 12) Troubleshooting

- **401** on links? You’re opening in a browser without the bearer token. Use Postman/Insomnia and set `Authorization: Bearer <GOOGLE_ID_TOKEN>`.
- **Prisma client import errors** — Regenerate: `npm run prisma:generate`. Also ensure the three `datasource` URLs are valid in `.env`.
- **Timeseries endpoints empty** — You must write data to the Timescale table (`PriceHistory`) for history/latest to return values.
- **SSL errors** — Managed DBs often require TLS. Keep `sslmode=require` in the URLs.

---

## 13) Useful Scripts

Common scripts (already in `package.json`):

```bash
npm run dev
npm run build
npm start
npm run prisma:generate           # generate all 3 clients
npm run prisma:generate:user
npm run prisma:generate:cards
npm run prisma:generate:timescale
```

---

## 14) Deployment Notes (Prod)

- Ensure **all** env vars are set (`DATABASE_URL`, `CARDS_DATABASE_URL`, `TIMESCALE_URL`, `GOOGLE_CLIENT_ID`, etc.).
- Run `npm run prisma:generate` during the build (already covered by `postinstall` if you keep it).
- Apply migrations on each DB: `prisma migrate deploy --schema=...` per schema.
- Expose the API over HTTPS; your frontend calls `/api/*` directly.

---

## 15) Roadmap / Extensions (optional)

- Add case‑insensitive string matching (`ilike`).
- Numeric HP/Level/Number filters by casting strings and stripping non‑digits.
- Array membership filters for `types[]` & `subtypes[]` via Postgres array operators.
- Caching layer for `/filters` payload (CDN or 30‑day local storage in UI).
