---
title: "Building My Blog: A Developer's Journey into Markdown Magic"
date: "2025-10-18"
description: "Join me as I share the story of how I built a fast, type-safe blog using Next.js and Markdown - and why I fell in love with this approach along the way."
slug: "building-my-markdown-blog-journey"
---

Hey there 👋
I recently added a blog section to my portfolio, and honestly, it turned out to be one of the most satisfying parts of the whole site.

I wanted something fast, simple, and easy to update — without spinning up a CMS or managing a bunch of backend stuff. After a bit of trial and error (and way too many “this might be the best approach” moments), I landed on something that just clicked: a Markdown-powered blog built with Next.js and TypeScript.

## The "Why" Behind the Madness

Like every developer, I started off over complicating things.
Should I set up a headless CMS? Store everything in a database? Maybe use Notion as a backend?

After a while, I realized I didn’t actually need any of that. What I really wanted was:

- To write posts in Markdown, because it’s clean and familiar
- Something blazing fast
- A setup that’s type-safe, so I could catch silly mistakes early
- Zero monthly costs or third-party dependencies
- And most importantly, something that fits into my existing workflow

Once I looked at it that way, the answer was obvious — Markdown files + Next.js. Simple, powerful, and fun.

## How It All Works

Let me walk you through the pieces that make this blog tick. Don't worry I'll keep the technical bits friendly!

## 🧠 The Heart: Markdown Files

Every post is just a .md file sitting inside a /markdown folder.
Each file starts with a bit of frontmatter that holds the title, date, description, and slug.

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

That’s it. No database, no admin panel, just pure Markdown.
From there, Next.js parses these files at build time, generates pages, and even handles metadata for SEO. The result? A blog that loads instantly and feels completely under my control.

## Looking Back

Building this blog reminded me why I love coding, it’s not always about using the fanciest stack, but about finding something that feels right for you.

Now I can just open VS Code, write in Markdown, commit, and deploy. Simple, elegant, and weirdly satisfying.
