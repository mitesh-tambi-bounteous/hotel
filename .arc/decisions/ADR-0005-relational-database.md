---
id: ADR-0005
category: component
title: Relational Database
status: accepted
superseded_by: null
component_id: comp_relational_database
responsibility: System of record for rooms, rates, reservations, guest profiles, invoices
  and the audit log; managed Postgres on AWS.
kind: managed_service
serves:
- HOTEL-EPIC-001
- HOTEL-EPIC-002
- HOTEL-EPIC-003
- HOTEL-EPIC-004
split_reason: Backing data store the project doesn't build itself; the brief specifies
  managed Postgres.
evidence: about.md 'Hosting constraints'
---

## Context

about.md 'Hosting constraints'

Serves: HOTEL-EPIC-001, HOTEL-EPIC-002, HOTEL-EPIC-003, HOTEL-EPIC-004.

## Decision

System of record for rooms, rates, reservations, guest profiles, invoices and the audit log; managed Postgres on AWS.

Kept separate because Backing data store the project doesn't build itself; the brief specifies managed Postgres..
