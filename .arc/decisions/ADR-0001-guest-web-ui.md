---
id: ADR-0001
category: component
title: Guest Web UI
status: accepted
superseded_by: null
component_id: comp_guest_web_ui
responsibility: Public-facing site where guests search rooms, view room details, run
  the booking flow, manage bookings via confirmation code, and sign up/log in/manage
  their optional account.
kind: web_ui
serves:
- HOTEL-EPIC-014
- HOTEL-EPIC-015
- HOTEL-EPIC-016
- HOTEL-EPIC-017
- HOTEL-STORY-005
- HOTEL-STORY-006
- HOTEL-STORY-009
split_reason: "Different runtime/client than the staff back office \u2014 a public,\
  \ anonymous-by-default web client vs. an internal staff tool."
talks_to:
- component_id: comp_booking_api_service
  interaction: sync
  evidence: "HOTEL-EPIC-014, HOTEL-EPIC-015, HOTEL-EPIC-016, HOTEL-EPIC-017 \u2014\
    \ guest search/book/manage flows call the backend."
evidence: 'Project brief: guests search, browse, book, and manage bookings/accounts
  via a public site (HOTEL-EPIC-014/015/016/017).'
---

## Context

Project brief: guests search, browse, book, and manage bookings/accounts via a public site (HOTEL-EPIC-014/015/016/017).

Serves: HOTEL-EPIC-014, HOTEL-EPIC-015, HOTEL-EPIC-016, HOTEL-EPIC-017, HOTEL-STORY-005, HOTEL-STORY-006, HOTEL-STORY-009.

## Decision

Public-facing site where guests search rooms, view room details, run the booking flow, manage bookings via confirmation code, and sign up/log in/manage their optional account.

Kept separate because Different runtime/client than the staff back office — a public, anonymous-by-default web client vs. an internal staff tool..

## Talks to

- **Booking API Service** (sync) — HOTEL-EPIC-014, HOTEL-EPIC-015, HOTEL-EPIC-016, HOTEL-EPIC-017 — guest search/book/manage flows call the backend.
