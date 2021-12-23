---
title: "Nature, Individuality, and Developer Empowerment"
date: "2021-12-23T12:34:56.117Z"
description: "Applying learnings about how humans perceive forces of nature to how we understand code and organizations."
---

![The Thinker in The Gates of Hell](./thinker-gates-of-hell.jpg)

<em style="display:block;margin-bottom:2rem;text-align:center;">
The Thinker in The Gates of Hell
<br />
<small>
File copied from Wikipedia under the Creative Commons Attribution 2.0 Generic license. [<a href="https://commons.wikimedia.org/wiki/File:Le_penseur_de_la_Porte_de_lEnfer_(mus%C3%A9e_Rodin)_(4528252054).jpg"  rel="noopener noreferrer"target="_blank">source</a>]
</small>
</em>

Programs are written in code.
Code is described by programming languages.
If you understand a programming language, given enough time, you can read a program's code and understand how it works.
There is no magic in programming.

Yet, when you're new to programming, it _feels_ like there's magic everywhere.
Programs do weird things and it's hard to understand why.
Even after you've mastered one area of an application, the rest of it may still feel like a daunting shadow of uncertainty.

I'd like to use this blog post to make the following three points:

-   We shouldn't let fear of the unknown stop ourselves from digging into code
-   Organizations are understandable, learnable systems too
-   Stifling fear and being assertive -both with code and people- is an important part of gaining seniority

To help provide context on those points, I'm going to bring in an example from an unusual source: a book on religious thought.

## A Letter in the Scroll

I'm midway through reading _A Letter in the Scroll_ by the late great Rabbi Lord Jonathan Sacks.
It's a magnificent read regardless of your personal spirituality -I'm an atheist myself, raised Jewish- and I'd highly recommend it in that context.
Its _The Idea of Man_ chapter was particularly interesting to me as a developer in how it links ancient humans' lack of power over nature with how they developed worldviews:

> There have been cultures--ancient Greece is the supreme example--that saw the world in terms of vast impersonal forces...
> Seen in this perspective, the forces that govern the world are ... not addressed to us.

Contrast that with its description of Abrahamic religions:

> The Hebrew Bible represents a radical alternative...
> We can do more than react to stimuli; we can contemplate alternatives and choose between them.
>
> **We can imagine and act on the basis of our imagination.**

In other words, ancient western religions saw us as pawns at the whim of gods, while Abrahamic religions see us as players at the table but still beholden to an influencing higher power.
_(I'm slightly manipulating the chapter's intent and ignoring many interpretations of the monotheistic God to make a more narrow point; for a real religious discussion, go read the book!)_

### Black Boxes

I see a parallel between those different worldviews and how professionals -software developers in particular- grow in their career.
Early stage developers often don't fully understand the APIs, functions, and other system they interact with.
They use the concept of [black boxes](https://en.wikipedia.org/wiki/Black_box) to skip understanding those systems deeply.
No shade against black boxes -- without them, the cognitive complexity of any task would be boundless.

One downside of thinking in terms of black boxes, though, is that it can get you in the _habit_ of avoiding understanding a new system.
One of the most common mistake I see developers make is avoid trying to understand a new area of code adjacent to what they're working on.
Instead of understanding the system as a whole, they isolate their changes to just the areas they understand.
They then are at risk of missing crucial context contained in those surrounding areas.

As an extreme example, I once came across a section of a project where a moderately complex set of code logic had [convergently evolved](https://en.wikipedia.org/wiki/Convergent_evolution) in almost identical lines of code across several functions.
That violation of [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) wouldn't be so bad on its own -- expect the functions were directly calling each other, making all but one of the sets redundant!

When asked why they hadn't moved or reused existing code, each developer who'd contributed to the duplication indicated they hadn't looked deeper into the call stack.
Each had treated other areas _within the same section of the codebase_ as a black box.

Black boxes are a useful technique for simplifying designs in thought, but make sure you don't use it to the point of not understanding the systems at play.
Remember you're a human and can do more than react to stimuli.
There are no natural forces or magical impossibilities in programming.

### Systems of People

Organizations of people are systems too.
Rules governing their behavior and processes exist that hopefully are generally followed.

When you first join an organization, though, it can be hard to feel that it's an understandable system.
Assignments are given to you from the forces that be -a black box of decision-making- and expected to grow the project in a pre-ordained way.
Who are you, a cog in the machine, to question the powers around you?

The ability for developers to be inquisitive on assignments and general organizational decision-making around themselves is crucial for at least two reasons:

-   Without understanding goals, you're not likely to execute tasks correctly
-   It's exceedingly difficult to positively influence the organization around you if you never question, let alone attempt to manipulate it

#### Understanding Goals

Tasks are not given in isolation: there is always some underlying context.
Developers all too often aim to to satisfy the exact criteria given to them instead of thinking deeply on the best way to satisfy the backing context.

If a ticket is written asking for a cache to improve performance calling a slow endpoint, it's tempting to dive into implementing a cache.
But maybe the endpoint's performance should be improved?
Maybe you should use an existing technique such as edge caching instead of re-implementing your own?
Is that endpoint even called in a hot path, or if it is, can it be lazy-loaded to not be a blocker?

There is an old joke that developers would prefer hours of trial and error than a few minutes reading the docs.
The same holds true for understanding requirements.
A few minutes thinking deeply about the right solution can save hours implementing the wrong one.

#### Speaking Up

Systems of people are just that: _systems_ of _people_.
A system has well-defined inputs and outputs.
A team makes decisions because it's been given a set of goals to hit and resources to work with.
Each person on that team is motivated by their own career incentives, personal goals, and past experiences.

When a team process gives a result you don't agree with -a feature backlogged; an investigation cut short; whatever- that doesn't have to be the end of the story.
Talk to the people involved in the process to learn why they came to that conclusion.
Do they have information you're missing, or vice versa?
Ask around.
Apply [Five Whys](https://en.wikipedia.org/wiki/Five_whys).
If you think you have information that wasn't considered, counterpoint with it.
I've seen far too many silly decisions persist because a team member heard an incorrect decision and didn't question it.

I would much rather work with a developer who's pretty good at coding and pretty good at providing feedback on my pull requests, RFCs, and team planning than a developer who is amazing at coding and quiet on the rest.

## Classifying Developer Levels

I'll finish with one last credit to _A Letter in the Scroll_.
From reading _The Idea of Man_, I think I can finally articulate a succinct, easily explainable perspective on the differences between software developer job titles.
In order:

1. Junior developers: are getting their start understanding the forces of nature
2. Mid-range developers: are competent, perhaps confident, in manipulating those forces of nature
3. Senior developers: have seen through the facade and can work with the scientific rules behind nature
4. Staff developers: are competent, perhaps confident, in manipulating those scientific rules

"Forces of nature" means both the _programming_ forces -APIs, frameworks, IDEs, languages, etc.- and _organizational_ -data, OKRs people, teams, etc.-.
To truly master your domain, you need to be comfortable treating areas as a black box or diving in questioningly as needed.
I became a staff developer not when I first demonstrated high competence at building projects in TypeScript but when I later demonstrated high competence at working with and creating systems of people to empower others to do the same.

I don't know if this is a particularly accurate or scalable judge of seniority.
But I'm going to try using it as a frame of reference for a while.
What do you think?