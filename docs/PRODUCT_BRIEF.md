# Product brief

## Product in one sentence

Braincollect turns a learner's own study material into review sessions that are grounded in that material, with collectible creatures providing a motivating reward.

## Problem and opportunity

Students already have notes, but turning them into useful practice takes time. Generic quizzes can miss the exact facts a class is studying. Braincollect explores whether scanning or importing those notes, checking the generated questions, and practicing them in short sessions can make review easier to start and more rewarding to repeat.

## Audience

**Audience hypothesis:** students who regularly study from their own notes and enjoy light collection or RPG mechanics.

The first age range, school level, market, language, and whether a parent or teacher is involved are open questions. These affect onboarding, privacy, tone, and distribution and must be resolved before a public launch.

## Core promise

“Study what is actually in your notes, and see your collection grow as you remember it.”

## Primary user journey

1. The learner captures a page of study material or provides text.
2. Braincollect extracts text and lets the learner correct it.
3. It proposes a small set of questions with evidence pointing back to the material.
4. The learner reviews, edits, or removes questions.
5. The learner completes a short quiz and sees clear answer feedback.
6. The learner earns a simple creature or collection reward and gets a reminder of what to review next.

## First-release scope recommendation

- One mobile app for iOS and Android.
- Start with typed/pasted text or a clear photo of printed notes; handwriting and PDF import need separate quality checks.
- OCR output can be corrected before question generation.
- Generate a small set of supported question types. Each question carries its answer and an exact supporting excerpt from the submitted text.
- Preview, edit, and delete questions before the first quiz.
- Run a short quiz, record responses, and schedule a basic follow-up review.
- Award a lightweight creature/collection reward for completing study, without requiring a full combat or economy system.

## Explicitly outside the first release

- A 20-question minimum deck or forced mixing of unrelated older material.
- Timed combat, damage balancing, bosses, skill trees, rarity systems, or trading.
- Step energy, background pedometer access, GPS, or location-based AR.
- Accounts, cross-device sync, social features, teacher dashboards, or public leaderboards.
- Claims that the product or its schedule has proven educational outcomes.

## Product hypotheses to validate

- Learners will choose to turn their own notes into practice instead of using a generic quiz or doing nothing.
- The scan-to-first-useful-question flow is quick enough that OCR correction does not erase the convenience.
- Learners trust questions more when they can inspect the supporting excerpt.
- Creature rewards make learners more willing to return without distracting from recall practice.
- A generated question set can be useful even when a source only supports a few questions.

## Measures to define

Instrument and baseline these during a prototype; do not treat target values as established yet:

- Time from starting capture to beginning a first study session.
- Share of generated questions kept, edited, or removed by learners.
- Quiz completion and review-session return rates.
- Recall on a later session, separated from immediate quiz performance.
- OCR correction burden and generation failures by source type.

## Risks

- Incorrect or ambiguous questions can teach the wrong thing; evidence links and learner review reduce but do not eliminate this risk.
- Poor handwriting recognition can make scanning frustrating.
- A complex game loop can cost more to build than it adds to learning or retention.
- Study content may include personal information. Data handling and age group need clear decisions before external processing or launch.
- Per-scan OCR and LLM usage can introduce latency and operating cost; usage limits and provider choices need validation.
