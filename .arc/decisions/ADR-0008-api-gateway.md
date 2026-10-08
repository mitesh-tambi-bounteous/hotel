---
id: ADR-0008
category: component
title: API Gateway
status: accepted
superseded_by: null
component_id: comp_api_gateway
responsibility: 'Single entry point for both web apps: routes requests to the Booking
  API, validates auth tokens (guest and staff SSO), and can aggregate/shape responses
  per client.'
kind: api_service
serves:
- HOTEL-EPIC-001
- HOTEL-EPIC-002
- HOTEL-EPIC-003
- HOTEL-EPIC-004
split_reason: Human chose a single Booking API behind a gateway/BFF rather than no
  gateway or per-domain services, to keep one client-facing seam and centralize auth/routing
  concerns.
talks_to:
- component_id: comp_booking_api
  interaction: sync
  evidence: 'User''s own words: ''Single Booking API behind a gateway/BFF'''
evidence: 'User''s own words: ''Single Booking API behind a gateway/BFF'''
contested: true
alternatives_considered:
- "No gateway \u2014 clients call Booking API directly (rejected: no central place\
  \ for auth/routing/aggregation)"
- 'Split into per-domain services (rejected: too much for current team size/MVP scope)'
consequences:
- Guest Web App and Back Office Web App now call the API Gateway, not the Booking
  API directly
- Booking API stays a single service for now; a future per-domain split would sit
  behind this same gateway
---

## Context

User's own words: 'Single Booking API behind a gateway/BFF'

Serves: HOTEL-EPIC-001, HOTEL-EPIC-002, HOTEL-EPIC-003, HOTEL-EPIC-004.

## Decision

Single entry point for both web apps: routes requests to the Booking API, validates auth tokens (guest and staff SSO), and can aggregate/shape responses per client.

Kept separate because Human chose a single Booking API behind a gateway/BFF rather than no gateway or per-domain services, to keep one client-facing seam and centralize auth/routing concerns..

## Talks to

- **Booking API** (sync) — User's own words: 'Single Booking API behind a gateway/BFF'

## Alternatives considered

- No gateway — clients call Booking API directly (rejected: no central place for auth/routing/aggregation)
- Split into per-domain services (rejected: too much for current team size/MVP scope)

## Consequences

- Guest Web App and Back Office Web App now call the API Gateway, not the Booking API directly
- Booking API stays a single service for now; a future per-domain split would sit behind this same gateway
