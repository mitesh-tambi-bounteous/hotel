---
id: ADR-0004
category: component
title: Notification Worker
status: accepted
superseded_by: null
component_id: comp_notification_worker
responsibility: 'Sends transactional emails asynchronously: account email verification
  links, password reset emails, booking confirmation codes, and modification/cancellation
  notices.'
kind: worker
serves:
- HOTEL-STORY-005
- HOTEL-STORY-006
- HOTEL-EPIC-016
split_reason: "Background/asynchronous work \u2014 outbound email should not block\
  \ the booking or account request path."
talks_to:
- component_id: comp_database
  interaction: shared-storage
  evidence: "proposed \u2014 worker needs booking/account details (e.g. recipient\
    \ email, confirmation code) to compose notifications."
- component_id: comp_email_delivery_provider
  interaction: async
  evidence: "HOTEL-STORY-005, HOTEL-STORY-006, HOTEL-EPIC-016 \u2014 actual email\
    \ transmission goes through an external provider."
evidence: HOTEL-STORY-005 (verification email), HOTEL-STORY-006 (password reset email),
  HOTEL-EPIC-016 (confirmation code delivery, modify/cancel notices).
---

## Context

HOTEL-STORY-005 (verification email), HOTEL-STORY-006 (password reset email), HOTEL-EPIC-016 (confirmation code delivery, modify/cancel notices).

Serves: HOTEL-STORY-005, HOTEL-STORY-006, HOTEL-EPIC-016.

## Decision

Sends transactional emails asynchronously: account email verification links, password reset emails, booking confirmation codes, and modification/cancellation notices.

Kept separate because Background/asynchronous work — outbound email should not block the booking or account request path..

## Talks to

- **Database** (shared-storage) — proposed — worker needs booking/account details (e.g. recipient email, confirmation code) to compose notifications.
- **Email Delivery Provider** (async) — HOTEL-STORY-005, HOTEL-STORY-006, HOTEL-EPIC-016 — actual email transmission goes through an external provider.
