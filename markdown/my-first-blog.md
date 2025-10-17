---
title: "Building My Blog: A Developer's Journey into Markdown Magic"
date: "2025-10-18"
description: "Join me as I share the story of how I built a fast, type-safe blog using Next.js and Markdown - and why I fell in love with this approach along the way."
slug: "building-my-markdown-blog-journey"
---

Hey there! 👋 I'm excited to share the story of how I added a blog to my portfolio website. As a developer, I wanted something that was fast, easy to maintain, and just felt... right. After exploring various options, I landed on a Markdown-based approach that's been an absolute joy to work with.

## The "Why" Behind the Madness

Let me be honest - I spent way too much time overthinking this. Should I use a headless CMS? A database? A third-party service? In the end, I realized I was making things more complicated than they needed to be.

Here's what I actually wanted:

- To write content in a format I already love (Markdown)
- Blazing-fast performance (because nobody likes waiting)
- Type safety (TypeScript makes me feel secure)
- No monthly fees or external dependencies
- Something that would play nicely with my existing workflow

Turns out, the perfect solution was right in front of me all along.

## How It All Comes Together

Let me walk you through the pieces that make this blog tick. Don't worry - I'll keep the technical bits friendly!

### The Heart: Markdown Files

All my blog posts live as simple `.md` files in a folder called `markdown`. Here's what a typical post looks like:

```markdown
---
title: "My Thoughts on Web Development"
date: "2024-01-15"
description: "Reflections on how web development has evolved"
slug: "web-dev-thoughts"
---

### Welcome to My Thoughts

This is where I share what I've been learning...
```
