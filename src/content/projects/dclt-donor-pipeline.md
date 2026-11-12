---
title: "No More Re-Typing Online Gifts"
description: "Door County Land Trust re-entered every online gift and event sign-up into its donor database by hand. I replaced the rented giving platform with a pipeline the Land Trust owns, so each gift now lands in Salesforce on its own."
date: 2026-03-23
client: "Door County Land Trust"
role: "Design, engineering & systems integration (sole developer)"
category: "Web & Systems"
tools: ["Astro", "Supabase Edge Functions", "Stripe", "Salesforce / NPSP", "Resend", "TypeScript"]
thumbnail: "/images/projects/dclt-pipeline-thumb.svg"
images: []
liveUrl: "https://doorcountylandtrust.org/donate/"
fit:
  heading: "Is this your situation?"
  points:
    - "Online gifts or event sign-ups come in through a hosted platform, and someone re-types them into your donor database."
    - "When a donor cancels a recurring gift, your database doesn't know until somebody notices."
    - "Every event gets built twice: once on your website and once on the platform."
    - "The platform adds a fee or a pre-checked surcharge to your donors' gifts."
  note: "If some of this sounds familiar, the same approach may fit your organization. Tell me what you use now, and I'll tell you honestly whether it does."
  button: "Tell me what you use now"
ask:
  heading: "Still re-keying gifts by hand?"
  body: "Tell me which giving platform and donor database you use. I'll tell you honestly whether this approach fits, or whether a plugin is all you need. A good first step is a short, fixed-price review of how a gift travels today and what that costs you in hours and fees."
  prompt: "Which giving platform and donor database do you use, and what gets done by hand today?"
statsNote: "Spring and summer 2026"
stats:
  - value: "93%"
    label: "of registrations synced to Salesforce automatically (316 of 340)"
  - value: "340"
    label: "online registrations, for 566 attendees"
featured: true
draft: false
order: 1
---

Door County Land Trust was renting its donation platform. Every online gift and event registration had to be re-entered into their donor database by hand. That cost staff hours they did not have, and it introduced errors into the exact records their fundraising depends on. We replaced the rented platform with a giving pipeline the Land Trust owns outright. Now a gift made on their own website flows straight into their Salesforce donor record and sends its own receipt, with no staff member touching a spreadsheet in between. In its first season it processed 340 online registrations for 566 attendees, and landed 93 percent of them in the donor database automatically. The old platform had been quietly adding a surcharge to donors' gifts by default; the new one does not, and no outside vendor holds the keys to their donor data.

## The Challenge

Door County Land Trust took donations and event registrations through a hosted platform that sat outside the website and only partly connected to the organization's Salesforce database. The gap between the two systems was filled by hand.

Every event had to be built twice, once on the website and once on the donation platform. Registration lists were compiled manually and emailed to hike leaders, a bottleneck that ran through one coordinator. Platform exports came out poorly formatted and had to be cleaned up and keyed into Salesforce by staff. The most damaging failure was silent: when a donor cancelled a recurring gift on the platform, Salesforce never heard about it, so the pledge and the person's member status stayed wrong until someone caught it. The platform also took card payments only, offered little control over how the donation form looked, and was one more system to maintain. By default it also added a 7 percent surcharge to every gift, a pre-checked box donors had to notice and uncheck, quietly steering the Land Trust's supporters into funding the platform on top of their donation.

The real problem was not any single feature. It was that donor data lived in a rented platform the organization did not control, and a person had to bridge it to the CRM by hand, one export at a time.

## Approach

The first decision was to migrate in parallel rather than rip the old platform out. All new gifts and registrations route through the new owned system, while existing recurring donors stay on the old platform until they lapse. A small nonprofit cannot absorb a hard-cutover failure during a giving season, so the system was built to outgrow the old one instead of replacing it in a single move.

![Migration timeline. At launch, new gifts and registrations move from the rented platform to the owned pipeline. Existing recurring donors stay on the rented platform until each gift lapses, and then the old platform retires.](/images/projects/dclt-migration-timeline.svg)

*The migration: new gifts moved to the owned pipeline at launch, while recurring gifts already on the old platform stay there until they lapse.*

The second decision was ownership. Every piece runs in accounts the Land Trust controls: its own Stripe, its own Supabase database, its own Salesforce, its own website repository. No platform sits between the organization and its donors, renting it access to its own list.

The architecture is a clean separation of concerns. An Astro donation form takes the gift. Stripe handles the money. A Supabase edge function receives the payment event and does the real work. Salesforce with the Nonprofit Success Pack (NPSP) stays the system of record. Resend sends the transactional email. Each system does one job, and the data flows one direction through them.

![Diagram in two rows. Before: a gift went to a rented platform, and staff keyed exports into Salesforce by hand. After: the website form hands the gift to Stripe, a Supabase edge function receives the payment event and writes the contact, household, gift, recurring plan, fund allocation and payment to Salesforce, and Resend sends the receipt. A bar shows 316 of 340 first-season registrations reaching Salesforce with no one re-keying them.](/images/projects/dclt-pipeline-diagram.svg)

*The pipeline end to end: the form takes the gift, Stripe takes the money, the Supabase edge function does the work, Salesforce stays the system of record, and Resend sends the email.*

## Solution

The donation form creates a Stripe Checkout session through an edge function, packing all the gift context (fund designation, tribute, recurring frequency, which program referred the gift) into Stripe metadata so nothing is lost in the handoff.

![The Land Trust's donation form on its own website: the donor's details, a choice of membership or special gift, preset amounts, and a button that continues to payment.](/images/projects/dclt-donate-form.webp)

*The donation form, on the Land Trust's own site and in its own design. Step two is payment, handled by Stripe.*

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

## Fair Questions

**Would a plugin or a hosted widget do the job?** For some organizations, yes. If you take a few dozen online gifts a year, a hosted form is the right tool, and I will tell you so. The limits show up as the volume grows. A widget is someone else's form set into your page, with its own fonts, its own fields and its own idea of what to ask a donor. You cannot add a field or change one. It hands your database only the fields it chooses to. And every plugin is more code on your site that someone else writes and you have to keep updated. The owned form is part of the website, in the organization's own design, and card details go straight to Stripe without touching the site.

**What does it cost, next to a free platform?** The old platform was free to the Land Trust. It paid for itself with a 7 percent tip added to each donor's gift, in a box that was checked by default. Card-processing fees apply either way; no platform makes those go away. What the free platform really cost was staff time and data. It wrote only a few fields to Salesforce, so the rest was typed in by hand, and every report was built on hand-keyed records. The owned pipeline is not free either: it takes a build up front, and it runs on a handful of services in the organization's own accounts. The fair comparison is that one-time build against what the current setup costs every year: the hours spent re-typing, the tip your donors pay, and reports nobody fully trusts.

**Who fixes it if it breaks?** Whoever builds a system like this is a dependency, and it is worth saying plainly. The old platform was one too: when something broke there, the Land Trust had a support ticket, and a change built just for them was never going to happen. So I build the answer into the job, in three parts. The handoff comes with it: a written runbook, every account in your organization's name, and alerts that tell staff when a gift fails to reach the database. After launch I offer a care plan, a small monthly fee that covers monitoring, fixes and a set number of changes, so there is a name to call. And there is a way out. The pipeline runs on standard parts (Stripe, Supabase, Salesforce), so any capable developer can take it over, and nothing is locked inside a vendor.

*Honest scope note: this was a phased migration. Every new gift and registration now runs on the owned system. The old platform stays live only to finish out recurring donors who signed up there, and it retires as they lapse.*
