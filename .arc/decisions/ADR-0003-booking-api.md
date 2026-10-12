---
id: ADR-0003
category: component
title: Booking API
status: accepted
superseded_by: null
component_id: comp_booking_api
responsibility: Core business logic and API for rooms/rates, availability, reservations,
  guest accounts, check-in/check-out, payment orchestration (card pre-auth/charge/refund
  via a payment provider, never storing PAN), and invoice records. Backs both the
  Guest Web App and Back Office Web App.
kind: api_service
serves:
- HOTEL-EPIC-001
- HOTEL-EPIC-002
- HOTEL-EPIC-003
- HOTEL-EPIC-004
split_reason: New work; one API for the whole domain to start, per the small team
  and MVP delivery horizon.
talks_to:
- component_id: comp_relational_database
  interaction: sync
  evidence: Booking API reads/writes rooms, rates, reservations, guest profiles and
    invoices
- component_id: comp_object_storage
  interaction: sync
  evidence: Booking API reads invoice/document files for guest and staff download
- component_id: comp_job_queue
  interaction: async
  evidence: Booking API enqueues background jobs (emails/SMS, webhook follow-up, PDF
    generation)
evidence: about.md 'Delivery horizon', 'Team and ownership'; all epics
---

## Context

about.md 'Delivery horizon', 'Team and ownership'; all epics

Serves: HOTEL-EPIC-001, HOTEL-EPIC-002, HOTEL-EPIC-003, HOTEL-EPIC-004.

## Decision

Core business logic and API for rooms/rates, availability, reservations, guest accounts, check-in/check-out, payment orchestration (card pre-auth/charge/refund via a payment provider, never storing PAN), and invoice records. Backs both the Guest Web App and Back Office Web App.

Kept separate because New work; one API for the whole domain to start, per the small team and MVP delivery horizon..

## Talks to

- **Relational Database** (sync) — Booking API reads/writes rooms, rates, reservations, guest profiles and invoices
- **Object Storage** (sync) — Booking API reads invoice/document files for guest and staff download
- **Job Queue** (async) — Booking API enqueues background jobs (emails/SMS, webhook follow-up, PDF generation)
