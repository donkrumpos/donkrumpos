---
title: "A Walkable Map of a Town's Murals"
description: "An interactive map of 55 murals in Wisconsin and beyond, with two walking tours of Algoma and a layer that replays the town's walls year by year. Built on open map data, with no map vendor to pay."
date: 2026-09-15
client: "Yonder (my own studio and gallery)"
role: "Design, cartography & engineering"
category: "Web & Systems"
what: "Mural map and walking tours"
tools: ["Astro", "React", "MapLibre GL", "OpenFreeMap", "TypeScript"]
thumbnail: "/images/projects/yonder-mural-map.png"
images:
  - "/images/projects/yonder-mural-map.png"
liveUrl: "https://www.yonderartland.com/murals/"
fit:
  heading: "Does your place have stories like this?"
  points:
    - "Your town, site or collection has stories tied to particular places, and they live in a binder, a PDF or one person's memory."
    - "Visitors ask where things are and what they are looking at, and the answer is a printed list."
    - "You would like a self-guided walk, without paying a map company by the view."
    - "You want to own the map and everything on it, not rent them."
  note: "I help museums, historic sites, libraries and arts organizations find the stories in their places and collections. I work with staff to turn those stories into something visitors can explore: interactive maps, self-guided walks and printed walk cards."
  button: "Tell me about your place"
next: dclt-preserve-explorer
statsNote: "Live on yonderartland.com"
stats:
  - value: "55"
    label: "walls on the map, each with its photo, story and directions"
  - value: "2"
    label: "self-guided walks, with printable cards"
  - value: "$0"
    label: "paid to a map company, per view or per month"
ask:
  button: "Tell me about your place"
  heading: "Want a map like this for your town?"
  body: "Murals, historic buildings, trails, a downtown walk: if your place has stories tied to locations, tell me what you have and I'll tell you what a map of it would take."
  prompt: "What would you like to put on the map, and who is it for?"
---

Yonder is the studio and gallery I run in Algoma, Wisconsin, and its murals are spread across Wisconsin and beyond. This is my own project, not a commission. I built it to answer two questions: where are the walls, and can I walk to them?

## The Challenge

A list of murals with addresses does not help someone standing on a sidewalk. A visitor needs to see what is nearby, pick a route, and know what they are looking at when they get there. The town also has walls painted by other hands, some restored and some lost, and that history had no home.

I did not want to rent the answer. Many map products charge by the view and keep the data on their side.

## Approach

One map, one set of data, and several ways to look at it:

- **The atlas.** Every wall is a pin, colored by one of six themes such as Memory & Commemoration or Land & Water. Filters narrow the map and the list beside it together.
- **Two walks.** The same map becomes a numbered route from the studio door: fifteen walls over 1.4 miles in Algoma, and a shorter loop of the 2007 Walldog murals.
- **The register.** A layer for the town's other public walls, with a slider that runs from 2007 to today.
- **Near me.** One tap finds the closest wall.

![Walk mode: a dashed route through downtown Algoma with fifteen numbered stops, and a list of the stops beside the map with a box to check off each one.](/images/projects/yonder-mural-map-walk.webp)

*Walk mode. The route follows the streets, each stop shows its distance from the last, and walls can be checked off as you go.*

## Solution

The map runs on MapLibre with OpenFreeMap tiles, which are open data and need no account or key. The murals are plain content files in the website's own repository, so adding a wall means adding a file.

Tapping a pin opens the wall's photo, its story and directions. Nearby pins group into counted clusters and separate as you zoom in. On a phone, the list becomes a strip you swipe, and swiping steers the map.

The walks keep your place on your own device, with no account. Each one has a printable card with a QR code, for a shop counter or a visitor center.

![The Algoma register layer: outlined markers for walls painted by others, gold rings for walls Yonder restored, and a year slider from 2007 to today.](/images/projects/yonder-mural-map-register.webp)

*The register. Outlined markers are walls still standing, a gold ring marks one that was restored, and a hollow mark keeps the place of one that is gone.*

Underneath the map, the page is an ordinary list of links to every wall. Search engines and anyone without JavaScript get the same content.

## Results

The map is live with 55 walls, two walks and 15 register walls. It costs nothing per view to run, and all of it lives in the studio's own repository and accounts.

The same approach fits any place with stories tied to locations: a downtown association's historic buildings, a tourism office's trail, an arts council's public art.
