---
id: ADR-0006
category: component
title: Object Storage
status: accepted
superseded_by: null
component_id: comp_object_storage
responsibility: Stores generated invoice PDFs and other documents; object storage
  on AWS.
kind: managed_service
serves:
- HOTEL-EPIC-001
split_reason: Backing storage service the project doesn't build itself; the brief
  specifies object storage for invoices/documents.
evidence: about.md 'Hosting constraints'
---

## Context

about.md 'Hosting constraints'

Serves: HOTEL-EPIC-001.

## Decision

Stores generated invoice PDFs and other documents; object storage on AWS.

Kept separate because Backing storage service the project doesn't build itself; the brief specifies object storage for invoices/documents..
