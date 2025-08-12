# Pokémon Card Tracker (Next.js + Prisma, 3 DBs)

A full‑stack **Next.js 15** app that integrates a ported backend (originally Flask/SQLAlchemy) directly into **Next.js Route Handlers**.  
The API surface mirrors the original backend and is accessible at `/api/*`. You can hit these with your frontend, or with tools like Postman.

- **Frontend**: Next.js (App Router), React 19, Tailwind (optional), NextAuth (optional)
- **Backend (in Next)**: Route Handlers + Services (TypeScript)
- **ORM**: Prisma, with **three separate schemas/clients**
  - **User DB** → `prisma/schema.prisma` → outputs to `@prisma/client` (recommended) _or_ `../generated/user`
  - **Cards DB** → `prisma/schema.cards.prisma` → outputs to `../generated/cards`
  - **Timescale DB** → `prisma/schema.timescale.prisma` → outputs to `../generated/timescale`

> All card endpoints require **Google ID Token** auth (as in the original backend). PostgreSQL required. TimescaleDB optional (needed for price history).

---

## 📦 Project Structure

```
prisma/
  schema.prisma               # User DB
  schema.cards.prisma         # Cards DB
  schema.timescale.prisma     # Timeseries DB (Timescale/Postgres)

src/
  app/
    api/
      cards/
        route.ts                 # GET /api/cards (filters + pagination)
        bulk/route.ts            # POST /api/cards/bulk
        [id]/route.ts            # GET /api/cards/:id
        [id]/price/
          history/route.ts       # GET /api/cards/:id/price/history
          latest/route.ts        # GET /api/cards/:id/price/latest
      auth/[...nextauth]/route.ts  # (optional) NextAuth
  lib/
    prisma.ts                  # User DB client (if output to @prisma/client)
    prismaUser.ts              # (optional) User DB client if using ../generated/user
    prismaCards.ts             # Cards DB client
    prismaTimescale.ts         # Timeseries DB client
    auth.ts                    # Google ID token verification
  server/services/
    cards.ts                   # serializers/business logic reused by handlers
```

---

## 🧰 Requirements

- Node.js 18+
- PostgreSQL (required)
- (Optional) TimescaleDB if you want `/price/history` + `/price/latest`
- Google OAuth **Client ID** (to verify ID tokens)

---

## 🔐 Environment Variables

Copy `.env.example` → `.env`, then set:

```
# Databases
DATABASE_URL=postgresql://...           # user DB
CARDS_DATABASE_URL=postgresql://...     # cards DB
TIMESCALE_URL=postgresql://...          # timeseries DB

# Auth
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

---

## 🧭 TypeScript Path Alias

In `tsconfig.json`, map `@/*` to `src/*`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

So imports look like:

```ts
import { prismaCards } from "@/lib/prismaCards";
import { serializeCardFull } from "@/server/services/cards";
```

---

## 🗃 Prisma (Three Schemas, Three Clients)

Each schema has its own `generator client { output = ... }` so that **all three** clients are generated independently.

**`prisma/schema.prisma` (User DB)**

```prisma
generator client {
  provider = "prisma-client-js"
  // Prefer to use the default output for user DB to allow: import { PrismaClient } from "@prisma/client"
  // If you want a separate output instead, set: output = "../generated/user"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**`prisma/schema.cards.prisma` (Cards DB)**

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/cards"
}

datasource db {
  provider = "postgresql"
  url      = env("CARDS_DATABASE_URL")
}
```

**`prisma/schema.timescale.prisma` (Timeseries DB)**

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/timescale"
}

datasource db {
  provider = "postgresql"
  url      = env("TIMESCALE_URL")
}
```

**Client helpers** (import paths assume `../generated/*` is at project root and helper files live in `src/lib/*`):

```ts
// src/lib/prismaCards.ts
import { PrismaClient } from "../../generated/cards";
declare global { var prismaCards: PrismaClient | undefined }
export const prismaCards = global.prismaCards ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prismaCards = prismaCards;

// src/lib/prismaTimescale.ts
import { PrismaClient } from "../../generated/timescale";
declare global { var prismaTimescale: PrismaClient | undefined }
export const prismaTimescale = global.prismaTimescale ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prismaTimescale = prismaTimescale;

// src/lib/prismaUser.ts (only if you output user DB to ../generated/user)
import { PrismaClient } from "../../generated/user";
declare global { var prismaUser: PrismaClient | undefined }
export const prismaUser = global.prismaUser ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prismaUser = prismaUser;
```

**Generate all three clients**:

```bash
npm run prisma:generate    # if you added a combined script
# or explicitly:
npx prisma generate --schema=prisma/schema.prisma
npx prisma generate --schema=prisma/schema.cards.prisma
npx prisma generate --schema=prisma/schema.timescale.prisma
```

Add to `package.json` (optional convenience):

```json
{
  "scripts": {
    "prisma:generate:user": "prisma generate --schema=prisma/schema.prisma",
    "prisma:generate:cards": "prisma generate --schema=prisma/schema.cards.prisma",
    "prisma:generate:timescale": "prisma generate --schema=prisma/schema.timescale.prisma",
    "prisma:generate": "npm run prisma:generate:user && npm run prisma:generate:cards && npm run prisma:generate:timescale"
  }
}
```

---

## ▶️ Run

```bash
npm install
npm run prisma:generate
npm run dev
```

Open http://localhost:3000

> **Auth note**: All `/api/cards/*` endpoints require `Authorization: Bearer <GOOGLE_ID_TOKEN>`. If you open links in a browser without a token, you’ll see `401 Unauthorized` (expected). Use Postman or your frontend which adds the header.

---

# 🔗 API (Authoritative, Ported to Next.js)

A REST API for querying Pokémon TCG cards with filterable pricing snapshots and (optionally) time‑series price history. This section mirrors the original backend and documents **every supported filter**, authentication, pagination, and endpoints.  
**Base path (Next.js)**: `/api`

> TL;DR: Authentication is required on all routes (Google ID Token). PostgreSQL is required. TimescaleDB is optional but required for price history endpoints.

## Authentication

Include Google **ID token**:
```
Authorization: Bearer <GOOGLE_ID_TOKEN>
```

Invalid/missing tokens → `401`.

---

## Data Model (high level)

- **Card** – core card fields (`id`, `name`, `supertype`, `rarity`, `hp` [string], `level` [string], `number` [string], `types[]`, `artist`, set linkage, images, etc.).
- **CardMarket** – snapshot pricing (`averageSellPrice`, `trendPrice`, `lowPrice`).
- **TcgPlayer** & **TcgPlayerPrices** – TCGplayer prices; quick filters use **Market** fields (`normalMarket`, `holofoilMarket`, `reverseHolofoilMarket`).
- **PriceHistory** (optional) – time‑series prices (`cardId`, `time`, `averageSellPrice`, `source`).

> `hp`, `level`, `number` are strings → **equality filters only** unless you extend to numeric casts.

### Response shapes
- **Basic card** (used by `GET /api/cards`): identity fields, minimal set info, images, and snapshot pricing blocks.
- **Full card** (used by `GET /api/cards/:id`, `POST /api/cards/bulk`): basic + abilities, attacks, weaknesses, resistances, full set, and detailed pricing blocks.

---

## Pagination

**Query params**: `page` (default 1), `page_size` (default 15, max 100)  
**Response**: `page`, `page_size`, `total`, `total_pages`, and data array.

---

## ✅ Filters (complete list)

All supported on `GET /api/cards`. Filters combine with **AND** semantics.

| Parameter (query key) | Type    | Operators                               | Source table/column                  | Notes |
|---|---|---|---|---|
| `id`                  | string  | `=`                                      | `Card.id`                            | Exact match |
| `name`                | string  | `=`                                      | `Card.name`                          | Exact match |
| `supertype`           | string  | `=`                                      | `Card.supertype`                     | Exact match |
| `rarity`              | string  | `=`                                      | `Card.rarity`                        | Exact match |
| `hp`                  | string  | `=`                                      | `Card.hp`                            | **String equality only** |
| `level`               | string  | `=`                                      | `Card.level`                         | **String equality only** |
| `number`              | string  | `=`                                      | `Card.number`                        | **String equality only** |
| `setId`               | string  | `=`                                      | `Card.setId`                         | Exact match |
| `artist`              | string  | `=`                                      | `Card.artist`                        | Exact match |
| `averageSellPrice_*`  | number  | `_gte`, `_lte`, `_gt`, `_lt`             | `CardMarket.averageSellPrice`        | Numeric compare |
| `trendPrice_*`        | number  | `_gte`, `_lte`, `_gt`, `_lt`             | `CardMarket.trendPrice`              | Numeric compare |
| `lowPrice_*`          | number  | `_gte`, `_lte`, `_gt`, `_lt`             | `CardMarket.lowPrice`                | Numeric compare |
| `normalMarket_*`      | number  | `_gte`, `_lte`, `_gt`, `_lt`             | `TcgPlayerPrices.normalMarket`       | Numeric compare |
| `holofoilMarket_*`    | number  | `_gte`, `_lte`, `_gt`, `_lt`             | `TcgPlayerPrices.holofoilMarket`     | Numeric compare |
| `reverseHolofoilMarket_*` | number | `_gte`, `_lte`, `_gt`, `_lt`          | `TcgPlayerPrices.reverseHolofoilMarket` | Numeric compare |

> `_*` → pick one of `_gte`, `_lte`, `_gt`, `_lt` (e.g., `trendPrice_lte=5`).

---

## Filtering – details and example **links**

Replace `localhost:3000` with your deployed host. Opening these in a browser without a token will return `401` (expected). Use Postman with the `Authorization` header to get data.

### Equality filters (string exact matches)

- **id**  
  <http://localhost:3000/api/cards?id=sv5-29>

- **name**  
  <http://localhost:3000/api/cards?name=Pikachu>

- **supertype**  
  <http://localhost:3000/api/cards?supertype=Pokémon>

- **rarity**  
  <http://localhost:3000/api/cards?rarity=Rare>

- **hp** (string)  
  <http://localhost:3000/api/cards?hp=120>

- **level** (string)  
  <http://localhost:3000/api/cards?level=5>

- **number** (string)  
  <http://localhost:3000/api/cards?number=1>

- **setId**  
  <http://localhost:3000/api/cards?setId=swsh1>

- **artist**  
  <http://localhost:3000/api/cards?artist=Ken%20Sugimori>

### Numeric comparison filters

#### Cardmarket
- **averageSellPrice\_***  
  <http://localhost:3000/api/cards?averageSellPrice_gte=1.5>

- **trendPrice\_***  
  <http://localhost:3000/api/cards?trendPrice_lte=5>

- **lowPrice\_***  
  <http://localhost:3000/api/cards?lowPrice_gt=0.05>

#### TCGplayer (Market prices)
- **normalMarket\_***  
  <http://localhost:3000/api/cards?normalMarket_gte=0.25>

- **holofoilMarket\_***  
  <http://localhost:3000/api/cards?holofoilMarket_lte=10>

- **reverseHolofoilMarket\_***  
  <http://localhost:3000/api/cards?reverseHolofoilMarket_lt=2.5>

**Combination examples (AND)**

- Rare cards in Sword & Shield base set with Cardmarket trend ≤ \$5  
  <http://localhost:3000/api/cards?setId=swsh1&rarity=Rare&trendPrice_lte=5>

- Artist + TCGplayer filter  
  <http://localhost:3000/api/cards?artist=Ken%20Sugimori&normalMarket_gt=0.15>

> **Why no `hp_gte`?** `hp` is stored as a string. If you need numeric HP filters, add casting logic.

---

## Endpoints

### `GET /api/cards`

List cards (basic shape) with pagination and all filters.  
Example link: <http://localhost:3000/api/cards?page=2&page_size=25&rarity=Rare&trendPrice_lte=5>

---

### `GET /api/cards/filters`

Helper metadata for building UIs (ranges and distincts).  
Example link: <http://localhost:3000/api/cards/filters>

> Ranges: Cardmarket (`averageSellPrice`, `trendPrice`, `lowPrice`), TCGplayer (`normalLow`, `holofoilLow`, `reverseHolofoilLow`), Card strings (`hp`, `level`, `number` – lexicographic).  
> Categories: `artists`, `rarities`, `supertypes`, `types[]`, `sets` (`{id,name}`).

> _Note: If you haven’t added the route handler yet, create `src/app/api/cards/filters/route.ts` to implement this._

---

### `GET /api/cards/:id`

Full card detail. Returns `404` if not found.  
Example link: <http://localhost:3000/api/cards/swsh1-1>

---

### `POST /api/cards/bulk`

Fetch multiple full cards by IDs.  
Body JSON (use Postman): `{"ids":["swsh1-1","xy7-54"]}`  
Endpoint: <http://localhost:3000/api/cards/bulk>

---

### `GET /api/cards/:id/price/history`  _(requires Timescale)_

Time‑series price entries.

Query params: `from` (ISO), `to` (ISO, optional), `order` (`asc`|`desc`), `limit` (int).  
Example link: <http://localhost:3000/api/cards/swsh1-1/price/history?from=2024-01-01T00:00:00Z&order=desc&limit=200>

**Sample response**

```json
{
  "cardId": "swsh1-1",
  "count": 2,
  "history": [
    { "time": "2024-01-02T00:00:00.000Z", "averageSellPrice": 0.23, "source": "admin" },
    { "time": "2024-01-01T00:00:00.000Z", "averageSellPrice": 0.22, "source": "admin" }
  ]
}
```

---

### `GET /api/cards/:id/price/latest`  _(requires Timescale)_

Latest point for a card.  
Example link: <http://localhost:3000/api/cards/swsh1-1/price/latest>

**Sample response**

```json
{ "cardId": "swsh1-1", "time": "2024-01-02T00:00:00.000Z", "averageSellPrice": 0.23, "source": "admin" }
```
If none: `{ "cardId": "swsh1-1", "latest": null }`

---

## Sorting

_Not implemented._ Add default sort or query param in `/api/cards` if needed.

---

## Error Codes

- `400 Bad Request` – invalid pagination, invalid numeric filter value, or malformed body
- `401 Unauthorized` – missing/invalid Google ID token
- `404 Not Found` – resource not found (e.g., card ID)

---

## FAQ / Notes

- **Numeric HP?** Not by default. `hp` is a string. Add cast and sanitize non‑numeric.
- **Case sensitivity?** Matches DB storage. For case‑insensitive, use `ilike`/`lower()` in queries.
- **Array membership filters (e.g., `types[]`)?** Not implemented. You can extend with Postgres array operators.
- **Multiple filters?** Combined with **AND** semantics.
- **Why PostgreSQL?** Uses Postgres `ARRAY` types and TimescaleDB compatibility.

---

## 🚀 Deployment Notes

- Set all env vars (`DATABASE_URL`, `CARDS_DATABASE_URL`, `TIMESCALE_URL`, `GOOGLE_CLIENT_ID`)
- Ensure `npm run prisma:generate` (all three) runs at build time
- Use a single deployment (Vercel, Node, Docker); Next.js serves both frontend & API