---
id: ADR-0020
category: cross_cutting
title: 'Cross-cutting: Email-change re-verification'
status: accepted
superseded_by: null
component_id: null
decision: A profile email change does not take effect (for login or booking-linking)
  until the new address is verified; the account continues to use the original email
  until then.
evidence: 'HOTEL-STORY-009: ''Until the new email is verified, login and booking-linking
  continue using the original email.'''
---

## Context

HOTEL-STORY-009: 'Until the new email is verified, login and booking-linking continue using the original email.'

## Decision

A profile email change does not take effect (for login or booking-linking) until the new address is verified; the account continues to use the original email until then.
