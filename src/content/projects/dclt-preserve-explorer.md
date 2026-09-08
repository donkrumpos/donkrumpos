---
title: "Door County Land Trust — Preserve Explorer"
description: "An interactive map of a land trust's preserves, built on hand-authored cartography and public-domain terrain data, with no map vendor renting access to the land."
date: 2026-09-07
client: "Door County Land Trust"
role: "Design, engineering & cartography (sole developer)"
category: "Web & Systems"
tools: ["Astro", "React", "MapLibre GL", "TypeScript", "GDAL", "GeoPandas", "Cloudflare Pages"]
thumbnail: "/images/projects/dclt-explorer-thumb.jpg"
images: []
featured: false
draft: false
order: 2
---

## The Challenge

The Land Trust protects fifteen nature preserves, more than 2,600 acres, across the Door Peninsula, and most people meet those places on a screen before they ever set foot on a trail. The old website answered "where can I go" with a list and a static locator borrowed from a mapping service. It told a visitor a preserve existed. It did not help them choose one.

The questions a visitor actually asks went unanswered. Which preserve is close to me. Which has an easy trail for a family. Which allows dogs, which has a boardwalk over the wetland, which is worth the drive in October. To piece that together, a person had to open a separate page for every preserve and hold it all in their head. The map itself was a rented tile layer, styled by the vendor, billed by the vendor, and indistinguishable from a thousand other maps. It carried none of the Land Trust's sense of place.

The real problem was not any single missing feature. It was that the land, the organization's entire reason to exist, showed up online as a pin on someone else's map.

## Approach

The decision was to treat the map as cartography, not as a plugin. That meant owning every layer of it, from the color of the water to the source of the terrain.

The first principle was no vendor renting access to the land. Base tiles come from a free, keyless source built on open OpenStreetMap data. Terrain is compiled once from public-domain government data and served as static files. Preserve boundaries and trails were generated from the shapefiles the organization already owned. There is no map-service account behind any of it, and therefore no monthly bill and no key that can be revoked.

The second principle was to build the interface around the visitor's question, not the organization's database. The Explorer opens on "what kind of day do you want," and the visitor narrows by region, activity, difficulty, ecology, facilities, and accessibility until the map holds only the places that fit. Discovery is the point, not a directory.

The third principle was that mobile and accessible were the design, not an afterthought. Most people open this in a parking lot on a phone, one-handed, sometimes with a screen reader, so that is the case it was built for first.

## Solution

The map is a hand-authored MapLibre GL basemap. Every color is a deliberate choice rather than a vendor default: parchment land, dusk-teal water, a palette that reads as the Land Trust and not as Google. Visitors can flip to satellite imagery when they want to see the real tree line. That authored basemap is the difference between shipping "a map widget" and building a place.

Underneath it is a self-hosted terrain pipeline. A NOAA Lake Michigan topobathy grid is processed once with GDAL into a layered set of depth and elevation contours, checked into the site as static GeoJSON. The lakebed drops away from the shore in real bathymetric steps and the land rises in its own, with no runtime dependency on any elevation service. Preserve geometry runs the same way: source shapefiles are converted with GeoPandas into per-preserve boundary, trail, boardwalk, and parking layers, owned outright and served as flat files.

The discovery layer sits on top. Faceted filters stay in sync with the URL, so any view of the map is a link a visitor can share or a staffer can drop into an email. Selecting a preserve opens a field-guide-style panel with its trails, seasons, facilities, and platform-native directions. The whole dataset is delivered by a small Astro endpoint that transforms the site's own content into the shape the app needs, which replaced a WordPress feed and removed the old content management system from the path entirely.

The details are where the care shows:

- **An opening "inking" animation** that draws each preserve boundary onto the map with a rolling count toward the 2,656 acres protected, so the first thing a visitor feels is the scale of the land.
- **A seasonal "now" layer** that surfaces what is worth seeing this month rather than a flat year-round list.
- **Keyless, self-hosted tiles and terrain**, so the map cannot break because a billing card expired or a vendor changed a plan.
- **Reduced-motion support**, so the animation respects a visitor who has asked their device to hold still.
- **Keyboard and screen-reader operability**, with a three-position bottom sheet on mobile that works one-handed.

## Results

The Explorer replaced a static locator and a rented tile layer with an owned, interactive discovery tool, and it did so with no recurring map vendor behind it. Base tiles are keyless, terrain is public-domain data processed once, and the preserve geometry is the organization's own. The map's ongoing cost is effectively zero, and it cannot be held hostage by a service the Land Trust does not control.

Just as important, it looks like the Land Trust. The cartography is authored to the brand rather than borrowed, so the preserves read as one connected system of protected land instead of a scatter of pins on a generic base. The old requirement to open a page per preserve and assemble the picture by hand is gone; a visitor filters to the day they want and the map answers.

The part worth naming is who built it. The cartography, the terrain pipeline, and the accessible front end were built by one person who is the organization's Communications Manager, not a career engineer. Depth like this is usually the output of a mapping vendor on retainer. Here it is owned, documented, and handed off, and the Land Trust can run it, extend it, or leave with all of it.

*Honest scope note: the Explorer is the current shipped generation, built over earlier iterations that remain in the codebase. Preserve data is only as current as the source shapefiles and content, which staff maintain, and a few preserves are still being enriched with full trail and seasonal detail.*
