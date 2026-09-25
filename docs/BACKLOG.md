# Backlog

This is a planning backlog, not a promise of delivery. Items are grouped by what must be learned first.

## Define before implementation

- [ ] Select the first learner group, age range, market, and language.
- [ ] Select the first input type and define acceptable source quality.
- [ ] Gather a small, representative, permission-cleared sample of study materials.
- [ ] Agree on initial question types, evidence representation, and learner correction flow.
- [ ] Compare OCR and LLM options for source grounding, quality, latency, data handling, and cost.

## First vertical slice

- [x] Scaffold an Expo Router app shell with TypeScript.
- [ ] Define typed domain models for source material, questions, attempts, review state, and rewards.
- [ ] Build capture/entry → editable text → question preview → short quiz → result/reward.
- [ ] Require traceable evidence on generated questions and validate evidence against normalized source text.
- [ ] Let learners edit or remove questions before studying.
- [ ] Persist saved material, questions, attempts, and next review time locally.
- [ ] Add a minimal collection reward tied to finishing study.

## Validate with learners

- [ ] Measure time from material capture to first useful quiz.
- [ ] Observe question acceptance, edits, and removal reasons.
- [ ] Check whether learners understand evidence excerpts and answer feedback.
- [ ] Observe whether the collection reward motivates a return without distracting from study.
- [ ] Compare immediate answers with a later review session.

## Later / conditional

- [ ] Support handwriting, PDF import, and additional source formats after separate quality checks.
- [ ] Add battle presentation, creature progression, and additional reward systems only against a clear learning or retention hypothesis.
- [ ] Explore pedometer-based rewards only after checking device/platform availability, permissions, and learner value.
- [ ] Consider accounts, sync, analytics, teacher tools, and social features only when user needs and data handling are defined.
