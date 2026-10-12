---
id: ADR-0020
category: cross_cutting
title: 'Cross-cutting: PCI DSS SAQ-A compliance'
status: accepted
superseded_by: null
component_id: null
decision: Card data is only ever handled via the payment provider's hosted fields
  or redirect; our systems never receive or store a card number (PAN).
evidence: about.md 'Compliance and data residency'
---

## Context

about.md 'Compliance and data residency'

## Decision

Card data is only ever handled via the payment provider's hosted fields or redirect; our systems never receive or store a card number (PAN).
