---
title: "I shipped a site on Wix Velo (CMS + automations)"
date: "2026-03-21"
description: "Honest notes from building a content-heavy Wix site: collections, Velo when the editor wasn’t enough, and automations so I wasn’t the human cron job."
category: "Development"
tags: ["Wix", "Velo", "CMS", "Automation"]
---

I didn’t expect to enjoy Wix this much. I’d used it years ago for something static and remembered it as drag-and-drop and done. This project was different: repeating sections that had to stay in sync, people who needed to edit copy without touching layout, and a few behaviors that plain widgets couldn’t express. So I leaned on **Velo**, **CMS collections**, and **Automations** and treated Wix less like a page builder and more like a hosted front-end with a built-in database.

The messy part was deciding what lives in the CMS vs. what lives in the page. Early on I duplicated text in a few places because it was faster than wiring a dataset. That came back to bite me when someone updated a headline in one spot and the other section went stale. I ripped that out, put the shared bits in a collection (even when it felt like overkill for a single “settings” row), and hooked repeaters and dynamic pages to that instead. Boring refactor, but the site actually stayed maintainable after that.

Velo is where I stopped fighting the UI. Datasets and bindings are fine until you need a weird filter, a merge of two collections, or empty-state copy that isn’t embarrassing. Then I’d drop into `onReady`, pull with `wix-data`, and render manually. The docs jump between “no code” and “full code” in a way that’s mildly disorienting; my rule of thumb became: **bind when it’s one collection → one repeater**, **code when I’m shaping or combining data**. Permissions and published vs. draft items tripped me up once—worth reading the access rules before you assume `query()` will return what you see in the editor.

Automations were the unsung win. Before, a form submit meant I’d remember to forward something or poke someone on Slack. I wired the obvious stuff through Wix Automations (email the team, thank-you to the submitter) and pushed the weird branches—stuff that needed a bit of transformation or an external call—into Velo and called it from there. Not glamorous, but I’m not trying to be a human Zapier.

Would I pick this stack for everything? No. For a marketing site where non-devs need to own content and I still want JavaScript when the platform gets opinionated, it worked. I’d still design collections before I get precious about page layouts—changing field names after you’ve bound half the site is nobody’s idea of fun.
