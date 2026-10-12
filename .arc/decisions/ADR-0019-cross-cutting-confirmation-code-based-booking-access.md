---
id: ADR-0019
category: cross_cutting
title: 'Cross-cutting: Confirmation-code-based booking access without an account'
status: accepted
superseded_by: null
component_id: null
decision: The Booking API Service must authorize lookup/modify/cancel of a reservation
  via a possession-based secret (the confirmation code) rather than a login, within
  the staff-configured modification cutoff window.
evidence: 'HOTEL-EPIC-016: ''Any guest can look up, change or cancel an existing reservation
  via their confirmation code under the stated rules.'''
---

## Context

HOTEL-EPIC-016: 'Any guest can look up, change or cancel an existing reservation via their confirmation code under the stated rules.'

## Decision

The Booking API Service must authorize lookup/modify/cancel of a reservation via a possession-based secret (the confirmation code) rather than a login, within the staff-configured modification cutoff window.
