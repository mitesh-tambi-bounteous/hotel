---
id: ADR-0014
category: deployment_target
title: "Deployment target: AWS, single region close to the hotel (the hotel's home\
  \ region, for data\u2026"
status: accepted
superseded_by: null
component_id: null
decision: AWS, single region close to the hotel (the hotel's home region, for data
  residency); containers on ECS/Fargate for the API Gateway, Booking API and Jobs
  Worker; one production environment and one staging environment; managed Postgres,
  object storage and a CDN for the guest site; managed services preferred over self-run
  clusters, within a $300-800/month infrastructure budget.
evidence: 'User''s own words: ''Containers (ECS/Fargate)'''
---

## Context

User's own words: 'Containers (ECS/Fargate)'

## Decision

AWS, single region close to the hotel (the hotel's home region, for data residency); containers on ECS/Fargate for the API Gateway, Booking API and Jobs Worker; one production environment and one staging environment; managed Postgres, object storage and a CDN for the guest site; managed services preferred over self-run clusters, within a $300-800/month infrastructure budget.
