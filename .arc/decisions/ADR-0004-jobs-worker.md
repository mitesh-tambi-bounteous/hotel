---
id: ADR-0004
category: component
title: Jobs Worker
status: accepted
superseded_by: null
component_id: comp_jobs_worker
responsibility: 'Background processing: booking confirmation/reminder emails & SMS,
  payment-provider webhook handling, invoice PDF generation, guest data retention/purge
  jobs, and audit log writes.'
kind: worker
serves:
- HOTEL-EPIC-001
- HOTEL-EPIC-003
split_reason: New work; one worker for all asynchronous/background jobs to start,
  per START SMALL.
talks_to:
- component_id: comp_relational_database
  interaction: sync
  evidence: Jobs Worker reads/writes data for retention, audit log and invoice generation
- component_id: comp_object_storage
  interaction: sync
  evidence: Jobs Worker writes generated invoice PDFs
evidence: about.md 'Integrations' (email/SMS), 'Compliance and data residency' (retention),
  'Delivery horizon' (audit log)
---

## Context

about.md 'Integrations' (email/SMS), 'Compliance and data residency' (retention), 'Delivery horizon' (audit log)

Serves: HOTEL-EPIC-001, HOTEL-EPIC-003.

## Decision

Background processing: booking confirmation/reminder emails & SMS, payment-provider webhook handling, invoice PDF generation, guest data retention/purge jobs, and audit log writes.

Kept separate because New work; one worker for all asynchronous/background jobs to start, per START SMALL..

## Talks to

- **Relational Database** (sync) — Jobs Worker reads/writes data for retention, audit log and invoice generation
- **Object Storage** (sync) — Jobs Worker writes generated invoice PDFs
