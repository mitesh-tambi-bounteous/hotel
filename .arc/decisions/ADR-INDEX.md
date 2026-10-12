# ADR Index

One line per decision — the rule, not the reasoning. Read the full ADR (`.arc/decisions/ADR-NNNN-*.md`) for context and rationale.

| ADR | Category | Status | Title |
|---|---|---|---|
| ADR-0001 | component | accepted | Guest Web UI |
| ADR-0002 | component | accepted | Admin Back Office UI |
| ADR-0003 | component | accepted | Booking API Service |
| ADR-0004 | component | accepted | Notification Worker |
| ADR-0005 | component | accepted | Database |
| ADR-0006 | component | accepted | Email Delivery Provider |
| ADR-0007 | nfr | accepted | NFR: security_posture (Booking API Service) |
| ADR-0008 | nfr | accepted | NFR: data_integrity (Booking API Service) |
| ADR-0009 | nfr | accepted | NFR: scale (Booking API Service) — tens to hundreds |
| ADR-0010 | nfr | accepted | NFR: availability (Booking API Service) — standard business-hours availability is sufficient; no 24/7 HA requirement |
| ADR-0011 | nfr | accepted | NFR: disaster_recovery (Database) — nightly |
| ADR-0012 | nfr | accepted | NFR: compliance_residency (Booking API Service) |
| ADR-0013 | nfr | accepted | NFR: longevity (Booking API Service) |
| ADR-0014 | nfr | accepted | NFR: maintainability |
| ADR-0015 | deployment_target | accepted | Deployment target: Single small-scale deployment on any mainstream cloud provider/region (no… |
| ADR-0016 | deployment_target | accepted | Deployment target: Managed database with nightly backup/restore; no replication or failover… |
| ADR-0017 | integration_surface | accepted | Integration: Email Delivery Provider (outbound) |
| ADR-0018 | cross_cutting | accepted | Cross-cutting: Guest PII handling and data rights |
| ADR-0019 | cross_cutting | accepted | Cross-cutting: Confirmation-code-based booking access without an account |
| ADR-0020 | cross_cutting | accepted | Cross-cutting: Email-change re-verification |
| ADR-0021 | cross_cutting | accepted | Cross-cutting: Single-team build and operate model |
