# ADR Index

One line per decision — the rule, not the reasoning. Read the full ADR (`.arc/decisions/ADR-NNNN-*.md`) for context and rationale.

| ADR | Category | Status | Title |
|---|---|---|---|
| ADR-0001 | component | accepted | Guest Web App |
| ADR-0002 | component | accepted | Back Office Web App |
| ADR-0003 | component | accepted | Booking API |
| ADR-0004 | component | accepted | Jobs Worker |
| ADR-0005 | component | accepted | Relational Database |
| ADR-0006 | component | accepted | Object Storage |
| ADR-0007 | component | accepted | Job Queue |
| ADR-0008 | component | accepted | API Gateway |
| ADR-0009 | nfr | accepted | NFR: availability (Guest Web App) — 99.9% (~43 min/month downtime) |
| ADR-0010 | nfr | accepted | NFR: availability (Back Office Web App) — 99.9%, 24/7 (front desk never closes) |
| ADR-0011 | nfr | accepted | NFR: recovery — RPO 15 minutes, RTO 4 hours |
| ADR-0012 | nfr | accepted | NFR: scale — under 10 req/s sustained at peak; short-lived 5-10x spikes during… |
| ADR-0013 | nfr | accepted | NFR: accessibility (Guest Web App) — WCAG 2.1 AA |
| ADR-0014 | deployment_target | accepted | Deployment target: AWS, single region close to the hotel (the hotel's home region, for data… |
| ADR-0015 | integration_surface | accepted | Integration: Email/SMS Providers (outbound) |
| ADR-0016 | integration_surface | accepted | Integration: Channel Manager / OTA (bidirectional) |
| ADR-0017 | integration_surface | accepted | Integration: Accounting Export (outbound) |
| ADR-0018 | integration_surface | accepted | Integration: Stripe (bidirectional) |
| ADR-0019 | integration_surface | accepted | Integration: Google Workspace (bidirectional) |
| ADR-0020 | cross_cutting | accepted | Cross-cutting: PCI DSS SAQ-A compliance |
| ADR-0021 | cross_cutting | accepted | Cross-cutting: GDPR / guest data rights |
| ADR-0022 | cross_cutting | accepted | Cross-cutting: Data residency |
| ADR-0023 | cross_cutting | accepted | Cross-cutting: Audit log |
