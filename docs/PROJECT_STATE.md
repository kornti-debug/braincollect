# Project state

- **Last updated:** 2026-09-25
- **Stage:** concept and documentation
- **Implementation:** not started

## What exists

- Product, game, technical, and AI workflow concepts consolidated across this folder.
- Product and AI workflow documentation in this folder and [`../AGENTS.md`](../AGENTS.md).
- A public GitHub repository at [kornti-debug/braincollect](https://github.com/kornti-debug/braincollect), which was empty when checked on 2026-09-25.

## What does not exist yet

- This workspace is the local Git checkout for the linked GitHub repository, with a documentation-only baseline.
- No Expo app, package manifest, backend, database schema, or provider integrations.
- No tested OCR/question-generation pipeline, sample evaluation set, or product research.
- No final decisions on target age group, country/language, input formats, providers, or deployment.

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
4. Is the local workspace intended to become the checkout for the linked GitHub repository?

## Next planning step

Resolve the audience and first source type, then define the first prototype's acceptance criteria and evaluate a small set of representative study materials. Keep app scaffolding tied to that first vertical slice.
