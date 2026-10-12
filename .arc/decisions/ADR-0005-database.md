---
id: ADR-0005
category: component
title: Database
status: accepted
superseded_by: null
component_id: comp_database
responsibility: System of record for rooms, rates, availability, reservations, and
  guest accounts.
kind: managed_service
serves:
- HOTEL-EPIC-015
- HOTEL-EPIC-016
- HOTEL-EPIC-017
- HOTEL-EPIC-018
split_reason: "proposed \u2014 persistent data store is naturally a separately-operated\
  \ managed service rather than part of the API process."
evidence: proposed, following from HOTEL-EPIC-015 acceptance criteria ('Availability
  shown to guests always reflects real inventory') requiring a durable, consistent
  store.
---

## Context

proposed, following from HOTEL-EPIC-015 acceptance criteria ('Availability shown to guests always reflects real inventory') requiring a durable, consistent store.

Serves: HOTEL-EPIC-015, HOTEL-EPIC-016, HOTEL-EPIC-017, HOTEL-EPIC-018.

## Decision

System of record for rooms, rates, availability, reservations, and guest accounts.

Kept separate because proposed — persistent data store is naturally a separately-operated managed service rather than part of the API process..
