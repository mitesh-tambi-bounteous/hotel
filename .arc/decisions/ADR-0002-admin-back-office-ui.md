---
id: ADR-0002
category: component
title: Admin Back Office UI
status: accepted
superseded_by: null
component_id: comp_admin_back_office_ui
responsibility: Internal tool for hotel staff to manage room types, amenities, photos,
  rates, the availability calendar, and to view/act on incoming bookings.
kind: web_ui
serves:
- HOTEL-EPIC-018
split_reason: "Different runtime/client plus a team/security boundary \u2014 staff-only\
  \ access distinct from the anonymous guest-facing site."
talks_to:
- component_id: comp_booking_api_service
  interaction: sync
  evidence: "HOTEL-EPIC-018 \u2014 staff manage catalog, rates, availability and bookings\
    \ through the backend."
evidence: 'HOTEL-EPIC-018: ''Hotel staff manage the property''s rooms, rates and availability,
  and view/manage incoming bookings.'''
---

## Context

HOTEL-EPIC-018: 'Hotel staff manage the property's rooms, rates and availability, and view/manage incoming bookings.'

Serves: HOTEL-EPIC-018.

## Decision

Internal tool for hotel staff to manage room types, amenities, photos, rates, the availability calendar, and to view/act on incoming bookings.

Kept separate because Different runtime/client plus a team/security boundary — staff-only access distinct from the anonymous guest-facing site..

## Talks to

- **Booking API Service** (sync) — HOTEL-EPIC-018 — staff manage catalog, rates, availability and bookings through the backend.
