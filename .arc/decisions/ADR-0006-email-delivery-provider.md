---
id: ADR-0006
category: component
title: Email Delivery Provider
status: accepted
superseded_by: null
component_id: comp_email_delivery_provider
responsibility: External transactional email delivery (verification links, password
  resets, booking confirmations/notices) sent on behalf of the Notification Worker.
kind: managed_service
serves:
- HOTEL-STORY-005
- HOTEL-STORY-006
- HOTEL-EPIC-016
split_reason: "Integration hosted separately \u2014 a real-world email delivery service\
  \ is an external managed dependency, not something built in-house."
evidence: proposed, following from the email-dependent stories HOTEL-STORY-005, HOTEL-STORY-006,
  and booking confirmation in HOTEL-EPIC-016.
---

## Context

proposed, following from the email-dependent stories HOTEL-STORY-005, HOTEL-STORY-006, and booking confirmation in HOTEL-EPIC-016.

Serves: HOTEL-STORY-005, HOTEL-STORY-006, HOTEL-EPIC-016.

## Decision

External transactional email delivery (verification links, password resets, booking confirmations/notices) sent on behalf of the Notification Worker.

Kept separate because Integration hosted separately — a real-world email delivery service is an external managed dependency, not something built in-house..
