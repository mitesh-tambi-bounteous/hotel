---
id: ADR-0001
category: component
title: Guest Web App
status: accepted
superseded_by: null
component_id: comp_guest_web_app
responsibility: 'Guest-facing booking site: search availability, view room types &
  rates, complete a booking with payment (via payment-provider hosted fields/redirect),
  guest sign-up/login, profile view/edit, and booking history/management (view, modify,
  cancel).'
kind: web_ui
serves:
- HOTEL-EPIC-001
- HOTEL-EPIC-003
split_reason: Separate client for the public guest audience with its own identity
  (email/password/magic link) and a WCAG 2.1 AA requirement, distinct from the staff
  back office; the brief treats the 'guest booking site' and 'staff back office' as
  two parts.
talks_to:
- component_id: comp_api_gateway
  interaction: sync
  evidence: 'User''s own words: ''Single Booking API behind a gateway/BFF'''
evidence: about.md 'What it is'; HOTEL-EPIC-001, HOTEL-EPIC-003
---

## Context

about.md 'What it is'; HOTEL-EPIC-001, HOTEL-EPIC-003

Serves: HOTEL-EPIC-001, HOTEL-EPIC-003.

## Decision

Guest-facing booking site: search availability, view room types & rates, complete a booking with payment (via payment-provider hosted fields/redirect), guest sign-up/login, profile view/edit, and booking history/management (view, modify, cancel).

Kept separate because Separate client for the public guest audience with its own identity (email/password/magic link) and a WCAG 2.1 AA requirement, distinct from the staff back office; the brief treats the 'guest booking site' and 'staff back office' as two parts..

## Talks to

- **API Gateway** (sync) — User's own words: 'Single Booking API behind a gateway/BFF'
