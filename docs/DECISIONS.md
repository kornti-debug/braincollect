# Decisions and open questions

Use **Proposed** for a recommendation awaiting owner confirmation, **Open** for a question without a recommendation, and **Accepted** only after the project owner confirms a choice.

## Proposed

| ID | Recommendation | Reason | Status |
| --- | --- | --- | --- |
| D-001 | Make the first release a study loop with light collection rewards; defer combat systems and step energy. | Tests the learning and return behavior before investing in game systems. | Proposed |
| D-002 | Do not enforce a 20-question minimum. | The source may support fewer good questions; avoid padding or mixing unrelated material just to start. | Proposed |
| D-003 | Use React Native + Expo + TypeScript, Expo Router, and local SQLite for structured study data. | Fits mobile-first cross-platform iteration and keeps study history structured/offline-capable. | Proposed |
| D-004 | Keep LLM/OCR secrets and provider calls behind a server-side API boundary. | Avoid exposing credentials in the mobile bundle and keep providers swappable. | Proposed |
| D-005 | Require source evidence plus learner review; treat evidence as traceability rather than a correctness guarantee. | Exact quotes help inspect grounding but cannot by themselves prove the model interpreted the source correctly. | Proposed |
| D-006 | Begin the interface with sample material and local predictable questions before live OCR/LLM integration. | Separates interaction design from provider reliability, latency, and cost. | Proposed |

## Open

- Who is the first learner group and age range?
- Which country/market and language come first?
- Which source format should be supported first?
- Which OCR and LLM providers meet quality, privacy, latency, and cost needs?
- Should this workspace become a local checkout of the linked GitHub repository?
- What is the first target platform combination and deployment path?

## Recording a decision

When the project owner confirms a proposal or resolves an open question, move it to **Accepted** and add the date plus a short reason. If evidence later changes the direction, record the replacement decision and mark the prior one superseded instead of silently rewriting project history.
