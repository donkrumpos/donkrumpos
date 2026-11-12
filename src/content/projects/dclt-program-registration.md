---
title: "Event Sign-Ups That Run Themselves"
description: "Door County Land Trust built every hike and workshop twice and compiled sign-up lists by hand. Now registration, waitlists, cancellations and the donor database all keep themselves in step."
date: 2026-03-24
client: "Door County Land Trust"
role: "Design, engineering & systems integration (sole developer)"
category: "Web & Systems"
what: "Event registration and waitlists"
tools: ["Astro", "Supabase Edge Functions", "Salesforce / NPSP", "Resend", "TypeScript"]
thumbnail: "/images/projects/dclt-programs.png"
images:
  - "/images/projects/dclt-programs.png"
liveUrl: "https://doorcountylandtrust.org/programs/"
next: dclt-donor-pipeline
statsNote: "Spring and summer 2026"
stats:
  - value: "340"
    label: "registrations across 21 programs, for 566 attendees"
  - value: "36"
    label: "cancellations people made themselves, each freeing a spot"
  - value: "93%"
    label: "of registrations reached Salesforce with no one typing them in"
fit:
  heading: "Is this your situation?"
  points:
    - "Every event gets set up twice: once on your website and once on a ticketing or sign-up platform."
    - "Someone compiles the sign-up list by hand and emails it to whoever is leading the event."
    - "When an event fills, the waitlist is a spreadsheet, and filling a freed spot means phone calls."
    - "Your donor database never learns who came."
  note: "If your programs run on a coordinator's inbox, the same approach may fit. Tell me how sign-ups work today, and I'll tell you honestly whether it does."
  button: "Tell me how sign-ups work now"
ask:
  button: "Tell me how sign-ups work now"
  heading: "Still compiling sign-up lists by hand?"
  body: "Tell me how people register for your events today and where the list ends up. I'll tell you honestly whether this approach fits."
  prompt: "How do people sign up for your events today, and what does staff do by hand before and after each one?"
---

Door County Land Trust runs a full calendar of guided hikes, workshops and community events. Registration for them used to run through a coordinator's inbox. It now runs on the Land Trust's own website, on the same system that takes its [online gifts](/work/dclt-donor-pipeline/).

## The Challenge

Every event had to be built twice, once on the website and once on a hosted platform. Registration lists were compiled by hand and emailed to hike leaders, a bottleneck that ran through one coordinator. When an event filled, there was no good way to fill a spot that opened up later. And none of it reached the donor database unless someone typed it in.

## Approach

An event is now entered once, on the website. Everything after that follows from the sign-up itself:

- **Capacity.** The form knows how many places are left and closes when the event is full.
- **Waitlist.** When it is full, people join a waitlist. When someone cancels, the next person is moved up and emailed automatically.
- **Cancellation.** Every confirmation email carries a link to cancel, so a registrant can free their own spot without calling the office.
- **The database.** Each registration is written to Salesforce as a campaign member, and the campaign itself is created from the program.

## Solution

Registration runs on Supabase edge functions in the Land Trust's own account, with Salesforce as the system of record and Resend sending the email. Free and ticketed programs use the same path; ticketed ones add a payment step through Stripe.

Two details keep it safe to leave running. Cancelling takes two steps, because corporate email security tools open links to check them and would otherwise cancel registrations by accident. And if Salesforce is briefly unavailable, the registration still completes and the sync catches up afterwards.

## Results

In its first spring and summer the system handled 340 registrations across 21 programs, covering 566 attendees from 246 people. About 93 percent of those registrations (316 of 340) reached Salesforce automatically. The system created 20 Salesforce campaigns and 313 campaign members with no staff member touching the database. In May, the busiest month, it took 136 registrations for 241 attendees.

People cancelled 36 registrations themselves through the link in their confirmation email. Each one freed a waitlist spot and updated Salesforce without staff involvement.

The Land Trust owns all of it: the code, the registration data and the accounts it runs in.
