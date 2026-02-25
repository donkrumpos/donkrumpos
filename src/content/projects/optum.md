---
title: "Optum — Care Plan Platform & Design System"
description: "Healthcare UX design for Optum's care management platform — personas, design system, and product UI for nurses and care coordinators."
date: 2021-01-01
client: "Optum (UnitedHealth Group)"
role: "Design Lead (Contract) — Care Plans, Design System, User Research"
category: "Design Systems"
tools: ["Figma", "Mural", "Axure"]
thumbnail: "/images/projects/optum-hero.jpg"
images:
  - "/images/projects/optum-hero.jpg"
featured: true
order: 6
---

## The Challenge

Optum, the technology and services arm of UnitedHealth Group, provides care management tools used by nurses, care coordinators, and clinical staff to manage patient populations across home visits, virtual care, and facility-based settings. The existing tools had grown fragmented — different products for different workflows, inconsistent UI patterns, and no unified design system. Care coordinators were spending time fighting their tools instead of focusing on patients.

The stakes in healthcare UX are fundamentally different from other domains. A confusing interface isn't just frustrating — it can mean a missed medication, a delayed referral, or a field nurse spending twenty minutes searching for patient records on a laptop in someone's living room instead of providing care.

## User Research & Personas

Before designing anything, I conducted user research to understand the people who would actually use these tools. The resulting personas weren't marketing archetypes — they were detailed profiles built from interviews and observation, documenting real workflows, pain points, goals, and the emotional texture of the work.

![Persona cards for Herman (field nurse), Cynthia (member with complex conditions), Maryanne (member), and Penelope (Optum nurse on the phone)](/images/projects/optum-personas.jpg)

Herman is a field nurse who spends most of his day in a car driving between home visits, using a laptop in unpredictable environments. He needs to assess a member's status quickly, update records, and move on. Cynthia is a member with multiple diagnoses who struggles to coordinate her own care across providers. Maryanne is overwhelmed by managing her condition while raising five kids and working full time. Penelope is an Optum nurse on the phone, handling back-to-back calls on a quota, trying to provide compassionate care while navigating complex clinical documentation.

These personas shaped every design decision. When we debated information density on a screen, we'd ask: "Can Herman read this on a laptop in a dim living room?" When we considered workflow steps: "Does Penelope have time for this between calls?"

## Case Management Research

I led research into the broader case management workflow — mapping the process from brainstorming sessions through prototyping, review, and iteration. This work documented how care teams actually coordinate, where handoffs break down, and where the tools could reduce friction.

![Mural board showing case management research — process flows, brainstorming, competitive analysis, device considerations, and support metrics](/images/projects/optum-research.jpg)

The research surface included process flow mapping, competitive analysis, brainstorming outputs, device-specific considerations (mobile, desktop, Surface Hub), and support metrics that revealed where users were struggling most with existing tools.

## Design System

I contributed to Optum's design system, defining components that needed to work across multiple product surfaces — care plans, letters, virtual care, and administrative dashboards. The system used Optum's signature black and gold palette with a component library covering buttons at multiple sizes and states, icon buttons, controls (toggles, checkboxes, radio buttons, sliders), tags, dropdowns, and form elements.

![Optum Design System — Buttons & Controls page showing component states, sizing variants, and interaction patterns](/images/projects/optum-design-system.png)

Healthcare interfaces demand particular rigor in component design. Every state — default, hover, active, disabled — matters when a nurse is working quickly through a patient record. The contrast and sizing decisions had to meet accessibility standards while supporting the dense information layouts that clinical tools require.

## Care Plan Product UI

My primary product ownership was the Care Plan platform. This is the tool care coordinators use to manage patient care — scheduling appointments, tracking visit history, reviewing health summaries, managing documents and medications, and coordinating across providers.

![Care Plan dashboard showing provider view with upcoming appointment, patient health summary, documents, medications, and appointment timeline](/images/projects/optum-careplan-3.png)

The dashboard was designed around the provider's immediate needs: who's next, what's their status, what do I need to know before this visit starts. The health summary card, document and medication counts, and "Start Virtual Visit" action are all within one viewport — no scrolling to find the critical information.

![Appointments view showing the daily schedule with patient details, visit reasons, document counts, and status indicators](/images/projects/optum-careplan-2.png)

The appointments list view balanced information density with scannability. Care coordinators managing a full day of patients need to see appointment times, patient names, locations, visit reasons, document status, and assignment — all in a single row without the table becoming overwhelming.

## OCM Letters

I also designed the OCM (Outreach Communications Management) Letters interface — the tool for managing patient correspondence including PPO notifications, denials, prior authorizations, and other compliance-driven communications.

![OCM Letters interface showing patient record with letter history, delivery methods, generation status, and status indicators](/images/projects/optum-careplan-1.png)

This was a data-dense regulatory interface where clarity wasn't optional. Each letter has a template type, generation method (auto vs. manual), delivery method (fax, email, direct mail), and status that care teams need to track across hundreds of patients. The color-coded status badges (Sent, Created, Error) provide at-a-glance triage so coordinators can quickly identify what needs attention.

## Results

The Care Plan platform and design system shipped as part of Optum's broader care management toolset, serving nurses and care coordinators across UnitedHealth Group's network. The persona-driven approach ensured that design decisions were grounded in the reality of clinical workflows rather than assumptions, and the design system provided consistency across multiple product surfaces that had previously operated as disconnected tools.