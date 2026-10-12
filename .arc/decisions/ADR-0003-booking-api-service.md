---
id: ADR-0003
category: component
title: Booking API Service
status: accepted
superseded_by: null
component_id: comp_booking_api_service
responsibility: 'Core backend: room catalog, availability calendar, search, booking
  lifecycle (create/view/modify/cancel), confirmation-code lookup, guest account/auth
  logic, and admin management operations. Single service for a single-property system.'
kind: api_service
serves:
- HOTEL-EPIC-014
- HOTEL-EPIC-015
- HOTEL-EPIC-016
- HOTEL-EPIC-017
- HOTEL-EPIC-018
- HOTEL-STORY-005
- HOTEL-STORY-006
- HOTEL-STORY-009
split_reason: "proposed \u2014 single backend of record for all business logic and\
  \ data; no NFR or scale driver yet distinguishes guest-facing vs. admin backend\
  \ logic enough to split it (single property, not multi-tenant); confirmed small-scale\
  \ (tens-hundreds bookings/day) and a single small team operating everything reinforce\
  \ a single service is sufficient."
talks_to:
- component_id: comp_database
  interaction: shared-storage
  evidence: HOTEL-EPIC-015/016/017/018 all persist and read shared state (rooms, availability,
    bookings, accounts).
- component_id: comp_notification_worker
  interaction: async
  evidence: "HOTEL-STORY-005, HOTEL-STORY-006, HOTEL-EPIC-016 \u2014 account and booking\
    \ events trigger emails without blocking the request."
evidence: proposed, following from HOTEL-EPIC-014/015/016/017/018 all needing a shared
  source of truth for rooms/availability/bookings/accounts; developer confirmed small-scale
  single-hotel traffic and one small team building and operating everything.
alternatives_considered:
- "Separate guest API and admin API \u2014 rejected for v1 given single-property scale\
  \ and no stated NFR difference between the two."
---

## Context

proposed, following from HOTEL-EPIC-014/015/016/017/018 all needing a shared source of truth for rooms/availability/bookings/accounts; developer confirmed small-scale single-hotel traffic and one small team building and operating everything.

Serves: HOTEL-EPIC-014, HOTEL-EPIC-015, HOTEL-EPIC-016, HOTEL-EPIC-017, HOTEL-EPIC-018, HOTEL-STORY-005, HOTEL-STORY-006, HOTEL-STORY-009.

## Decision

Core backend: room catalog, availability calendar, search, booking lifecycle (create/view/modify/cancel), confirmation-code lookup, guest account/auth logic, and admin management operations. Single service for a single-property system.

Kept separate because proposed — single backend of record for all business logic and data; no NFR or scale driver yet distinguishes guest-facing vs. admin backend logic enough to split it (single property, not multi-tenant); confirmed small-scale (tens-hundreds bookings/day) and a single small team operating everything reinforce a single service is sufficient..

## Talks to

- **Database** (shared-storage) — HOTEL-EPIC-015/016/017/018 all persist and read shared state (rooms, availability, bookings, accounts).
- **Notification Worker** (async) — HOTEL-STORY-005, HOTEL-STORY-006, HOTEL-EPIC-016 — account and booking events trigger emails without blocking the request.

## Alternatives considered

- Separate guest API and admin API — rejected for v1 given single-property scale and no stated NFR difference between the two.
