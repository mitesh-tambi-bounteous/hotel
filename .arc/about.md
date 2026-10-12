# hotel

## What it is
A web application for a single, independent hotel. It has two parts:

- Guest booking site: guests can search availability, see room types and rates, book online, and manage their reservation and account (view, modify, cancel).
- Staff back office: front-desk and management staff can manage rooms and inventory, rates, reservations, check-in and check-out, walk-ins, and phone bookings.

Payments are part of both parts. Guests pay or pre-authorise a card online when they book. Walk-ins and staff-created bookings can be paid later at the front desk. Refunds and invoices are handled in the back office.

The epics are Guest Booking & Account, Front Desk & Reservations Ops, Room & Rate Management, and Payments & Billing.

<!-- What the product does, and who it's for. -->

## Expected scale
Assumed. One property with roughly 50–150 rooms.

- Today: about 5–20 staff users, around 2–5k guest visits a month, and around 300–1,000 bookings a month.
- In a year: the same property, with traffic up 2–3× from marketing. That is still well under 10 requests a second at peak, with a short-lived 5–10× spike during promotions or holidays.
- Data: under 10 GB (reservations, guest profiles, invoices). Payment card data is never stored by us.

<!-- Users, traffic, data volume — today and in a year. -->

## Availability
Assumed.

- Guest site: 99.9% uptime target, about 43 minutes of downtime a month. Downtime means lost direct bookings, which fall back to OTAs and phone.
- Back office: 99.9% during operating hours, which is 24/7 because the front desk never closes.
- Maintenance: windows between 02:00 and 05:00 local time, announced 48 hours ahead.
- Front desk fallback: a read-only arrivals/departures list that can be printed or exported, so check-in can continue during an outage.
- Recovery targets: RPO 15 minutes and RTO 4 hours.

## Compliance and data residency
Assumed.

- PCI DSS SAQ-A: card data goes only through the payment provider's hosted fields or redirect, and we never store or handle a card number (PAN).
- GDPR or the local equivalent: consent for marketing, guest data export and deletion on request, and retention rules for guest records. Guest-ID scans at check-in, if required by local law, are encrypted and auto-purged.
- Invoices must meet local tax and VAT rules.
- Data residency: all data stays in the hotel's home region, for example the EU for an EU hotel.
- Accessibility: the guest site targets WCAG 2.1 AA.


## Hosting constraints
Assumed.

- Public cloud in a single region close to the hotel. AWS is assumed, with managed Postgres, object storage for invoices and documents, and a CDN for the guest site.
- No on-prem servers. The front desk uses browsers on ordinary PCs and tablets.
- Budget is about $300–800 a month for infrastructure at launch, so managed services are preferred over self-run clusters.
- One production environment and one staging environment.

## Delivery horizon

Assumed.

- MVP in about 3–4 months: online booking with payment at booking, a basic back office (rooms, rates, reservations, check-in and check-out), and invoices.
- Production hardening in months 5–6: refunds, walk-ins and deferred payment, reporting, and audit log.
- Expected life: at least 5 years as the hotel's main booking and operations system, so maintainability matters more than speed to a demo.
## Team and ownership
- A small product team of about 4–6 people: a product owner from hotel management, 2–3 full-stack developers, 1 QA, and a part-time designer.
- One team owns the full stack and runs it in production (you build it, you run it), with an on-call rota for the guest site.
- Hotel operations staff own rates, inventory, and content in the back office. Finance owns invoices and refund approvals.

## Integrations

Assumed unless noted.

- Payments: Stripe or Adyen (decided in the interview), using hosted fields or redirect, card pre-authorisation, refunds, and webhooks.
- Email and SMS: a transactional email provider such as SendGrid or SES for confirmations, reminders, and invoices, plus optional SMS.
- Identity: email and password or magic link for guests. SSO for staff through Google Workspace or Microsoft 365, with role-based access (front desk, manager, finance).
- Phase 2: a channel manager or OTA connections (Booking.com, Expedia) to sync availability and rates, and accounting export to Xero or QuickBooks.
- Out of scope for the MVP: door locks and keycards, POS, and housekeeping devices.

## Buy vs build

- Payment processing, to keep PCI scope down.
- Email and SMS delivery.
- Staff SSO.
- Managed Postgres and hosting.
- A UI component library.
- An invoice PDF generator.
- Phase 2: a channel manager instead of building direct OTA integrations, because those are complex and need certification.

Open question: whether to just buy an off-the-shelf property management system (Cloudbeds, Mews) instead of building one. The brief implies a custom build, but that should be confirmed against cost and time to market.
