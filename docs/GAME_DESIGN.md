# Game design

## Design pillars

1. **The learner's material leads.** The creature theme wraps useful practice; it does not replace or distort it.
2. **Trust is visible.** Learners can inspect why a question was generated and fix it before study.
3. **Short sessions count.** A small useful review is better than an arbitrary deck-size requirement.
4. **Rewards reinforce returning.** Progress should follow studying and remembering, not time spent tapping through animations.

## Recommended first loop

```text
Capture or enter material
        -> Correct extracted text
        -> Review evidence-backed questions
        -> Complete a short quiz
        -> Earn a creature/collection reward
        -> Return when material is due for review
```

## Question and evidence rules

- Every generated question includes the supporting excerpt from the learner's text, the expected answer, and plausible alternatives when the type needs them.
- Validate that the excerpt appears in the normalized submitted text. A matching excerpt is provenance, not proof that the question or answer is logically correct.
- Show the source excerpt during review and after an answer. Let the learner flag, edit, or remove a poor question.
- Prefer fewer supported questions over fabricated coverage. The learner may study a small set immediately; do not force a 20-question deck.
- Start with multiple choice and true/false only if they can be generated reliably. Add ordering or other formats after the question model and learner experience are clear.

## Collection and progression

**Recommendation:** award a creature, creature fragment, or collection progress after a completed study session. Initially, this can be a simple predictable reward with a small set of visual variations.

The original concept's battles, capture chance, elemental chart, trainer levels, skill tree, boss questions, and rare drops should remain later options. Add a system only if a prototype shows what learner behavior it is intended to improve.

## Review design

Use response history to decide when a topic or fact is due. The original Day 1 / Day 3 / Day 7 schedule is a starting hypothesis, not a validated learning algorithm. Exact repeated questions are easy to memorize by shape; where possible, vary the prompt while keeping it answerable from the same source. Show the learner why something is due and provide a way to study now.

## Deferred activity mechanic

Step energy and battle jokers are a later experiment. They add sensor permissions, device variability, and another economy to balance. They must not make studying or answering correctly dependent on walking or granting motion access.

## Original concept details retained for later consideration

These are preserved from the initial pitch, not committed first-release features:

- **Elements:** associate subjects with creature elements (the examples were Chemistry → Poison/Fire, History → Ghost/Rock, and Math → Psychic/Electric). Prefer a small, curated mapping over asking an LLM to invent a subject-to-element assignment.
- **Hybrid encounters:** the original idea required 20 questions and filled a short scan's deck with older questions, creating a hybrid-element encounter. The current recommendation is to allow short sessions and bring older material back through scheduled review instead of padding an encounter.
- **Battle and capture:** timed questions would deal damage or block incoming attacks; defeating a creature would allow a capture. This can be tested later as a presentation layer over the same quiz rules.
- **Step jokers:** the pitch proposed 500 steps for a 50/50 hint and 1,000 steps for time freeze. If tested later, steps should be optional bonus currency rather than a gate on learning.
- **Creature training:** creatures start at level 1 and evolve toward level 5 through later review, initially suggested for days 1, 3, and 7. Keep those intervals as a hypothesis; track answers and vary question wording where possible.
- **Trainer progression:** proposed perks included Scanner Eye (rare/boss questions), Quick Steps (lower step costs), and Breeder (more review XP). Defer a skill tree until there is evidence that it improves return study.
- **Question formats:** the original set included multiple choice, true/false, and sequence sorting. Begin with formats that can be grounded and reviewed reliably; add sorting after validating its interaction and generation quality.
