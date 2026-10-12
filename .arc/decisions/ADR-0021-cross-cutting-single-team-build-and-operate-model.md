---
id: ADR-0021
category: cross_cutting
title: 'Cross-cutting: Single-team build and operate model'
status: accepted
superseded_by: null
component_id: null
decision: "Keep the component count and operational surface small enough for one small\
  \ team to build, deploy, monitor and support without specialized ops roles \u2014\
  \ favor managed/hosted services (database, email delivery) over self-managed infrastructure."
evidence: 'Developer: ''One small team builds and operates everything, including hosting/ops''.'
---

## Context

Developer: 'One small team builds and operates everything, including hosting/ops'.

## Decision

Keep the component count and operational surface small enough for one small team to build, deploy, monitor and support without specialized ops roles — favor managed/hosted services (database, email delivery) over self-managed infrastructure.
