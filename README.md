# DevPack

DevPack is a local-first Linux environment builder. It lets users discover a curated package catalog, build an installation script from explicit selections, keep a local setup history, and ask a domain-restricted AI assistant for Linux and DevPack guidance.

The project is intentionally designed as a portfolio piece: the UI is only one layer. The codebase demonstrates feature-oriented organization, pure domain functions, persistent client state, URL-driven filters, accessibility, route-level code splitting, backend validation, security middleware, rate limiting, environment-based configuration, automated tests, and a backend boundary around the OpenAI API.

## Features

- Searchable package catalog with category and sort filters.
- Shareable package filters through URL query parameters.
- Explicit package selection with persistent local storage.
- Generated Bash installation script grouped by package manager.
- Warnings for recipes that are not configured for automatic installation.
- Setup page for reviewing the current environment.
- Local installation history with copyable scripts.
- Functional dark, light, and system theme modes.
- Accessible command palette (`Ctrl+K` / `Cmd+K`).
- Accessible floating AI assistant.
- Server-side Linux/DevPack domain guard before calling the model.
- OpenAI Responses API integration with the API key kept on the backend.
- Helmet security headers, CORS allow-listing, body limits, and rate limiting.
- Health endpoint for operational checks.
- Unit tests for important domain behavior.

## Architecture

```text
Browser
  │
  ├── React + TypeScript
  │     ├── App shell / routing
  │     ├── Feature modules
  │     ├── Local state providers
  │     └── Pure domain functions
  │
  └── HTTP
        │
        ▼
    Express API
        │
        ├── Validation
        ├── Domain guard
        ├── Service layer
        ├── Security middleware
        └── OpenAI Responses API
```

The frontend never receives the OpenAI API key. Requests go through the backend so credentials and policy checks remain server-side.

## Project structure

```text
devpack/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── domain/chat/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.ts
│   │   └── server.ts
│   └── tests/
├── docs/
├── frontend/
│   ├── public/
│   └── src/
│       ├── app/
│       ├── components/
│       ├── features/
│       └── lib/
└── package.json
```

## Local development

Requirements: Node.js 22+.

```bash
npm install
cp backend/.env.example backend/.env
```

Set the OpenAI key in `backend/.env`. Then run the two applications in separate terminals:

```bash
npm run dev:backend
npm run dev:frontend
```

The frontend uses `http://localhost:5173` by default and the backend uses `http://localhost:3001`.

## Configuration

Frontend:

```text
VITE_API_URL=http://localhost:3001
```

Backend:

```text
PORT=3001
FRONTEND_ORIGIN=http://localhost:5173
OPENAI_API_KEY=your_key
OPENAI_MODEL=gpt-5.6-luna
```

Never commit `.env` files.

## Quality checks

```bash
npm run check
npm run lint
npm run test
npm run build
```

## Product decisions

DevPack does not execute generated commands automatically. The user reviews the generated script and explicitly copies it. Package recipes are data, not hard-coded inside UI components, so the catalog can later move behind an API or database without changing the rendering layer.

The AI assistant is intentionally restricted to Linux, Ubuntu, shell/package-management topics, and DevPack itself. The server applies a deterministic domain check before making an AI request and the model receives a second, explicit domain instruction as defense in depth.

## Roadmap

The next architectural step would be to move package recipes to a versioned server-side catalog, add package-manager abstractions for more distributions, and introduce integration tests for the HTTP API.
