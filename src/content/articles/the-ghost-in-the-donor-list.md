---
title: "The Ghost in the Donor List"
description: "A conservation nonprofit was losing donors it never meant to lose. The culprit was hiding in the space between two systems that were each working perfectly."
date: 2026-08-25
order: 3
tags: ["case study", "owned web"]
draft: true
---

Every month, a few recurring donors were quietly disappearing.

Not many. Not enough to trip an alarm. Just a slow leak, the kind an organization discovers a year later when someone finally asks why the monthly giving number drifted down instead of up. These were committed people. Nobody had asked to leave. And yet the records showed them gone. Cancelled. Lapsed. As if they had made a decision they had no memory of making.

I got asked to find out why.

The maddening thing about a leak like this is that everything looks fine when you check it. The donation page worked. The payment processor worked. The donor database worked. Each system, examined on its own, was behaving exactly as designed. The problem lived in the space between them, which is the hardest place to look, because no single part is broken. They are each just telling a slightly different story, and nobody's job is to notice the contradiction.

Here is what was happening. When a card expired, or a payment quietly retried, or a donor updated their own information, the processor would send a little notice. The routine kind of message these systems exchange all day long. And the integration, trying to be tidy, was reading some of those notices as cancellations. A donor whose card simply needed a new expiration date was being filed under gone. The system was not malfunctioning. It was doing precisely what it had been told, which is a different and more dangerous thing.

The fix had two halves, and I think of them the way you would think about a leak in an actual roof.

First, stop the water coming in. I rebuilt the logic that decides what a cancellation actually is, so that a real one, an actual human choosing to stop, is treated completely differently from the routine noise that only looks like one. A retry is not a goodbye. An expired card is not a decision. The system now knows the difference, and it errs, every time, on the side of keeping the door open.

Second, find the water already in the walls. I built a scanner that walks the whole donor list on a schedule, comparing what each system believes against what the others believe, and flags every quiet contradiction for a person to look at. Not to fix on its own, because the whole mess started with a machine being too confident. Just to surface it. To say: this one does not add up, come look.

The leak stopped. The donors who had been misfiled came back into view, most of them still giving, never having known they had flickered out of existence in a database somewhere.

None of this is exotic. No template offers it, because it is not a page. It is a piece of plumbing shaped like one specific organization's actual problem. That is the whole territory I work in now. The unglamorous seam between two systems that each run fine alone, where the real, quiet, expensive failures live, and where a person willing to look can save a small organization from losing the very people who love it most.

The full case study, with the technical detail, lives over in the work section.
