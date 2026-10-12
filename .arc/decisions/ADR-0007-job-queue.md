---
id: ADR-0007
category: component
title: Job Queue
status: accepted
superseded_by: null
component_id: comp_job_queue
responsibility: Queues background jobs (emails/SMS, webhook processing, PDF generation,
  retention jobs) between the Booking API and the Jobs Worker; managed queue on AWS
  (e.g. SQS).
kind: managed_service
serves:
- HOTEL-EPIC-001
- HOTEL-EPIC-003
split_reason: Backing service the project doesn't build itself, needed to decouple
  the API from async job processing; product choice still open.
talks_to:
- component_id: comp_jobs_worker
  interaction: async
  evidence: Job Queue delivers queued jobs to the Jobs Worker for processing
evidence: 'User''s own words: ''Managed queue (e.g. SQS)'''
---

## Context

User's own words: 'Managed queue (e.g. SQS)'

Serves: HOTEL-EPIC-001, HOTEL-EPIC-003.

## Decision

Queues background jobs (emails/SMS, webhook processing, PDF generation, retention jobs) between the Booking API and the Jobs Worker; managed queue on AWS (e.g. SQS).

Kept separate because Backing service the project doesn't build itself, needed to decouple the API from async job processing; product choice still open..

## Talks to

- **Jobs Worker** (async) — Job Queue delivers queued jobs to the Jobs Worker for processing
