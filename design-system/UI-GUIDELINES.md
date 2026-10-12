# UI Guidelines — Hotel Booking & Back Office

## Navigation and information architecture

- **Guest site**: a top bar only (search, account menu), no sidebar, because the guest journey
  is a short linear funnel (search → room → book → confirm) that a sidebar would clutter.
- **Back office**: a persistent left sidebar with top-level sections Reservations, Rooms & Rates,
  Guests, Billing, and Reports, because staff jump between these sections all day and a sidebar
  keeps them one click away during a live check-in queue.
- The back office always shows a top bar with the current user and property name, because more
  than one property may exist in future and staff must never be unsure which one they're editing.

## Layout and density

- The back office is data-dense (compact rows, tables over cards) because front-desk staff scan
  many reservations at once, often on a shared desktop monitor.
- The guest site is spacious (cards, generous spacing) because it is a consumer, trust-building
  purchase flow, not a work tool.
- Back office layouts assume a minimum 1280px-wide desktop/tablet viewport, because front-desk
  PCs and tablets are the only devices staff use.
- The guest site must work down to a 375px mobile viewport, because guests frequently book from
  their phone.

## Component usage

- Use `.card` for anything a guest browses and chooses between (room types, rate options,
  confirmation summaries), because each is a self-contained, comparable unit.
- Use a table (not `.card`) for any back-office list a staff member scans, sorts, or bulk-acts on
  (reservations, arrivals/departures, invoices), because rows let staff compare many records at
  a glance.
- Use `.chip` for status (confirmed, checked-in, refunded, overdue) wherever a reservation,
  payment, or invoice is listed, because status is the first thing staff and guests look for.
- Use `.button-primary` for the one key action per screen (Book now, Check in, Save rate); use
  `.button-secondary` for alternate actions; reserve `.button-danger` for destructive,
  hard-to-undo actions (cancel booking, void invoice), because a single clear primary action
  avoids hesitation at the moment of commitment or during a busy front-desk shift.
- Use `.field` and `.input` for every form control across both apps, because booking and
  back-office data entry must look and behave identically to feel like one product.

## Theme

- Light theme only, for both apps, because the back office runs on front-desk PCs under normal
  office lighting and the guest site prioritizes trust and legibility over a dark aesthetic.

## Voice and tone

- Guest-facing copy is warm and reassuring, plain language, no jargon (e.g. "Your room is
  booked" not "Reservation created"), because guests are making a purchase and may be anxious
  about cancellation or payment.
- Back-office copy is terse and operational (e.g. "Room 204 — checked in 14:32"), because staff
  read it quickly, often mid-conversation with a guest at the desk.
- Error messages always state what to do next (e.g. "Card declined — try another card or pay at
  the desk"), because both guests and staff need to resolve the issue immediately, not just be
  told it failed.
