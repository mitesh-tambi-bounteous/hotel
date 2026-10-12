# booking-api

Core business logic and API for rooms/rates, availability, reservations, guest accounts,
check-in/check-out, payment orchestration, and invoice records. Backs both the Guest Web App
and Back Office Web App (ADR-0003).

## Stack

- TypeScript / NestJS
- PostgreSQL via TypeORM
- pnpm

## Setup

```bash
pnpm install
cp .env.example .env
```

## Commands

```bash
pnpm run start:dev   # run the app in watch mode
pnpm run build       # compile to dist/
pnpm run test        # unit tests (Jest)
pnpm run test:e2e    # e2e tests (Jest + Supertest)
pnpm run lint        # eslint
```
