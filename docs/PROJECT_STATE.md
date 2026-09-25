# Project state

- **Last updated:** 2026-09-25
- **Stage:** Expo app shell scaffolded
- **Implementation:** navigation template only; product flow not implemented

## What exists

- Product, game, technical, and AI workflow concepts consolidated across this folder.
- Product and AI workflow documentation in this folder and [`../AGENTS.md`](../AGENTS.md).
- A public GitHub repository at [kornti-debug/braincollect](https://github.com/kornti-debug/braincollect), which was empty when checked on 2026-09-25.
- Expo SDK 57 tabs template integrated with TypeScript and Expo Router.
- Node.js 22.14.0, npm 11.3.0, Android Studio, Android SDK, and emulator profiles are available on the current machine.
- The scaffold install reported 14 moderate npm advisories; they have not been investigated or changed.

## What does not exist yet

- No backend, database schema, or provider integrations.
- No tested OCR/question-generation pipeline, sample evaluation set, or product research.
- No final decisions on target age group, country/language, input formats, providers, or deployment.
- Expo's official Codex plugin is installed on the current development host; other developers may need to install it in their own Codex environment.

## Current recommendations

- Validate the smallest loop: learner material → editable, evidence-backed questions → short recall session → modest collection reward → scheduled return.
- Keep full battles, minimum deck size, pedometer energy, skill trees, and social/account features out of the first release.
- Prefer structured local persistence for study data and a server boundary for provider credentials and AI calls.
- Treat exact source excerpts as traceability, not as a correctness guarantee; keep learner review and answer validation.

These are recommendations from the initial review, not approved final product decisions.

## Immediate open questions

1. Who is the first intended learner, and what age range are we designing for?
2. Which source type should work first: pasted text, printed page photos, or something else?
3. Which language and school subjects should the first prototype support?

## Next planning step

Resolve the audience and first source type, then define the first prototype's acceptance criteria and evaluate a small set of representative study materials. The app shell is ready for that first vertical slice.
