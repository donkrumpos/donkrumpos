---
title: "Door County Land Trust — Donor & Registration Pipeline"
description: "Replaced a rented donation platform with an owned Stripe-to-Salesforce pipeline the nonprofit's own staff can run."
date: 2026-03-23
client: "Door County Land Trust"
role: "Design, engineering & systems integration (sole developer)"
category: "Web & Systems"
tools: ["Astro", "Supabase Edge Functions", "Stripe", "Salesforce / NPSP", "Resend", "TypeScript"]
thumbnail: "/images/projects/dclt-pipeline-thumb.svg"
images: []
featured: true
draft: false
order: 1
---

## The Challenge

Door County Land Trust took donations and event registrations through a hosted platform that sat outside the website and only partly connected to the organization's Salesforce database. The gap between the two systems was filled by hand.

Every event had to be built twice, once on the website and once on the donation platform. Registration lists were compiled manually and emailed to hike leaders, a bottleneck that ran through one coordinator. Platform exports came out poorly formatted and had to be cleaned up and keyed into Salesforce by staff. The most damaging failure was silent: when a donor cancelled a recurring gift on the platform, Salesforce never heard about it, so the pledge and the person's member status stayed wrong until someone caught it. The platform also took card payments only, offered little control over how the donation form looked, and was one more system to maintain and pay for.

The real problem was not any single feature. It was that donor data lived in a rented platform the organization did not control, and a person had to bridge it to the CRM by hand, one export at a time.

## Approach

The first decision was to migrate in parallel rather than rip the old platform out. All new gifts and registrations route through the new owned system, while existing recurring donors stay on the old platform until they lapse. A small nonprofit cannot absorb a hard-cutover failure during a giving season, so the system was built to outgrow the old one instead of replacing it in a single move.

The second decision was ownership. Every piece runs in accounts the Land Trust controls: its own Stripe, its own Supabase database, its own Salesforce, its own website repository. No platform sits between the organization and its donors, renting it access to its own list.

The architecture is a clean separation of concerns. An Astro donation form takes the gift. Stripe handles the money. A Supabase edge function receives the payment event and does the real work. Salesforce with the Nonprofit Success Pack (NPSP) stays the system of record. Resend sends the transactional email. Each system does one job, and the data flows one direction through them.

![Architecture diagram: an Astro donation form flows to Stripe for payments and ACH, into a Supabase edge function that acts as the logic layer, which writes a complete record to Salesforce NPSP and triggers Resend for receipts and confirmations.](/images/projects/dclt-pipeline-diagram.svg)

*The pipeline end to end: the form takes the gift, Stripe takes the money, the Supabase edge function does the work, Salesforce stays the system of record, and Resend sends the email.*

## Solution

The donation form creates a Stripe Checkout session through an edge function, packing all the gift context (fund designation, tribute, recurring frequency, which program referred the gift) into Stripe metadata so nothing is lost in the handoff.

When the donor pays, Stripe fires a webhook to a Supabase edge function that does everything the staff used to do by hand and more. It records the donor and the gift, then writes the full picture into Salesforce: the Contact, the household Account, the Opportunity, a linked Recurring Donation for monthly, quarterly, or annual gifts, the fund allocation that tells finance which bucket the money belongs to, and the payment record with the Stripe charge reference. Then it sends the donor a thank-you email. Recurring renewals and cancellations flow through the same function so the CRM stays current on its own.

Free program registration runs on the same spine. It checks capacity, waitlists people automatically when an event is full, and lets anyone cancel through a link in their confirmation email. A cancellation automatically promotes the next person off the waitlist, emails them, and updates the campaign status in Salesforce on both ends.

The part that makes it safe to leave running is the engineering underneath:

- **Idempotency guards**, added after a real double-booking at an event, so Stripe's automatic retries can never double-charge a donor or write a duplicate record.
- **Deliberate retry semantics**: if something fails after a payment is captured, the function reports the error so Stripe retries it, rather than silently swallowing a real gift.
- **Server-authoritative pricing**, so a crafted request cannot buy a $150 ticket for $1.
- **Injection-safe queries** on every donor-supplied field before it touches Salesforce.
- **Non-blocking CRM sync**: if Salesforce has a hiccup, the donation still completes and the donor still gets their receipt. The sync catches up; the donor never sees the seam.
- **Scanner-safe cancellation**, a two-step confirm so corporate email security tools that pre-open links cannot accidentally cancel someone's registration.

## Results

In its first months carrying real load through the 2026 spring and summer season, the system moved a full program calendar with no manual data entry behind it.

Across 21 programs it processed 340 registrations, covering 566 booked attendees from 246 unique people. About 93 percent of those registrations (316 of 340) synced into Salesforce automatically as campaign members. That number is the old compile-the-list-and-key-it-in-by-hand step, gone. The system auto-created 20 Salesforce campaigns from the programs and 313 campaign members with no staffer touching the CRM. At the May peak it absorbed 136 registrations and 241 attendees in a single month, hands off.

Self-service held up in production too. 36 registrations were cancelled by the registrants themselves through the link in their confirmation email, and each one freed a waitlist spot and updated Salesforce on both ends with no staff involvement.

The same backend runs the organization's donation and intake rails. It has processed 186 online donations, put 14 recurring donors on automated billing, and sends the confirmation and follow-up emails on its own. Newsletter signups, contact messages, landowner inquiries, volunteer and job applications, and program notifications all land in one database that acts as the source of truth, instead of scattering across separate tools.

The old platform could not do most of this: ACH payments, automatic confirmation emails, waitlist auto-promotion, self-service cancellation that keeps the CRM in sync both ways, the full recurring-gift lifecycle, and automatic fund allocation.

Most important, the Land Trust owns all of it. The code, the donor data, the contact list, and the accounts are theirs. They can run it without me, and if they ever want to leave, they take everything with them.

*Honest scope note: this was a phased migration. The old platform is not fully retired; existing recurring donors remain on it until they lapse, and a final two-way cancellation sync is still on the roadmap.*
