# Setting up the storefront

_Last updated February 2024 by the agency team._

## Prerequisites

- Node 18 or newer and npm
- A running commerce API on port 5000 (ask the Commerce team for the docker compose file)

## Environment

Copy `.env.example` to `.env.local` and set:

| Variable | What it is |
|---|---|
| `NEXT_PUBLIC_API_URL` | the commerce API, usually `http://localhost:5000` |
| `NEXT_PUBLIC_SOCKET_URL` | the order-status socket; same host as the API unless you run the socket relay separately |

## Run

```bash
npm install
npm run dev
```

Before you push, run the compile step so the type errors show up on your machine and not on the host:

```bash
npm run compile
```

## Pages

- `/` the ordering page (requires a signed-in guest)
- `/landing` the marketing page
- `/login`, `/signup`
- `/checkout`, `/account` (new, being extracted from the ordering page)
