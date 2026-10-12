---
id: ADR-0002
category: component
title: Back Office Web App
status: accepted
superseded_by: null
component_id: comp_back_office_web_app
responsibility: 'Staff back-office UI for front desk and management: room & rate setup,
  reservations management, walk-ins and phone bookings, check-in/check-out and occupancy
  view, refunds and invoices, plus a read-only arrivals/departures fallback list usable
  during an outage.'
kind: web_ui
serves:
- HOTEL-EPIC-002
- HOTEL-EPIC-004
split_reason: Separate client for staff authenticated via SSO with role-based access,
  owned by hotel operations/finance per the brief's team-ownership split, distinct
  from the public guest site.
talks_to:
- component_id: comp_api_gateway
  interaction: sync
  evidence: 'User''s own words: ''Single Booking API behind a gateway/BFF'''
evidence: about.md 'What it is', 'Team and ownership', 'Integrations'; HOTEL-EPIC-002,
  HOTEL-EPIC-004
---

## Context

about.md 'What it is', 'Team and ownership', 'Integrations'; HOTEL-EPIC-002, HOTEL-EPIC-004

Serves: HOTEL-EPIC-002, HOTEL-EPIC-004.

## Decision

Staff back-office UI for front desk and management: room & rate setup, reservations management, walk-ins and phone bookings, check-in/check-out and occupancy view, refunds and invoices, plus a read-only arrivals/departures fallback list usable during an outage.

Kept separate because Separate client for staff authenticated via SSO with role-based access, owned by hotel operations/finance per the brief's team-ownership split, distinct from the public guest site..

## Talks to

- **API Gateway** (sync) — User's own words: 'Single Booking API behind a gateway/BFF'
