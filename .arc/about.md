# hotel

## What it is

The booking website for a single hotel. It covers one property's rooms and rates, and is not a
multi-property marketplace. Greenfield build. Source: intake HOTEL-INTAKE-006.

Who it's for:
- **Guests** search the hotel's rooms by dates, guest count and filters. They open room detail
  pages and book a room. The booking shows an estimated price. Payment happens **at the property
  on arrival**; there is no online payment processing.
- **Guest checkout is the main path.** Guests enter name, email and phone, and get a
  confirmation code to look the booking up later. Accounts are optional, so repeat guests can see
  past and upcoming bookings in one place.
- Guests can **cancel or modify** (dates/room) a booking themselves up to a cutoff before
  check-in. They do this with their confirmation code or by signing in. Staff configure the cutoff
  window.
- **Hotel staff** use an Admin / Back Office to manage room types, amenities, photos, rates and
  the availability calendar, and to view and act on incoming bookings.

Capability areas (epics): Search & Availability Lookup (HOTEL-EPIC-014), Room Catalog &
Availability (HOTEL-EPIC-015), Booking & Reservations (HOTEL-EPIC-016), Guest Accounts &
Authentication (HOTEL-EPIC-017), Admin / Back Office (HOTEL-EPIC-018).

Out of scope for v1: online payments/billing, group or block bookings (individual reservations
only), guest reviews/ratings, multi-property listings. Also out of scope unless decided otherwise:
channel-manager/OTA sync and corporate booking workflows.

## Expected scale

<!-- Users, traffic, data volume — today and in a year. -->
<!-- Not covered in intake. Deferred to planning: "What scale, uptime and backup/recovery
     expectations apply to the booking site and its data?" -->

## Availability

<!-- Uptime expectations, maintenance windows, what happens when it's down. -->
<!-- Not covered in intake. This is part of the same deferred scale/uptime/backup-recovery question. -->

## Compliance and data residency

<!-- Regulations, certifications, where data must live. -->
<!-- Not decided in intake. Known facts: the site collects guest PII (name, email, phone). It
     handles no card data because payment is at the property. Deferred to planning: "What data
     retention and privacy rules apply to guest PII collected during checkout?" -->

## Hosting constraints

<!-- Cloud / region, mandated services, on-prem, budget limits. -->
<!-- Not covered in intake. -->

## Delivery horizon

<!-- Pilot, MVP or production — and how long it's expected to live. -->
<!-- Not stated explicitly. The intake scoped a "v1" and kept several features out of scope "for
     now", but did not say whether this is a pilot, MVP or production, or how long it should live. -->

## Team and ownership

<!-- Who builds and runs which parts. -->
<!-- Not covered in intake. -->
