---
id: ADR-0018
category: cross_cutting
title: 'Cross-cutting: Guest PII handling and data rights'
status: accepted
superseded_by: null
component_id: null
decision: 'Name, email and phone are collected at checkout/signup. The system follows
  GDPR-style rules: guests can request access to or deletion of their PII, and records
  are retained only as long as necessary (e.g. not kept indefinitely beyond the stay
  plus any legitimate operational need). No card data is ever handled since payment
  is at the property.'
evidence: 'Developer: ''Follow GDPR-style rules: guests can request access/deletion
  of their PII, and data is retained only as long as necessary.'''
---

## Context

Developer: 'Follow GDPR-style rules: guests can request access/deletion of their PII, and data is retained only as long as necessary.'

## Decision

Name, email and phone are collected at checkout/signup. The system follows GDPR-style rules: guests can request access to or deletion of their PII, and records are retained only as long as necessary (e.g. not kept indefinitely beyond the stay plus any legitimate operational need). No card data is ever handled since payment is at the property.
