# Architecture

## Proposed stack

| Area | Recommendation | Reason / constraint |
| --- | --- | --- |
| Mobile app | React Native + Expo + TypeScript, using strict checks | Fits a small cross-platform app and rapid iteration. |
| Navigation | Expo Router | File-based routes are included in the current Expo project path and support native and web routing. [Expo Router docs](https://docs.expo.dev/router/introduction/) |
| UI state | Start with component state; add Zustand if cross-screen session state becomes cumbersome | Keep it small; it is not the persistent source of truth. |
| Local data | `expo-sqlite` for structured study sets, questions, attempts, and review dates; its key-value store can hold simple preferences too | SQLite persists across app restarts. Expo SQLite also exposes a key-value store, avoiding a second storage package. [Expo SQLite docs](https://docs.expo.dev/versions/latest/sdk/sqlite/) |
| Camera | `expo-camera` for capture | Use Expo's supported camera API and install compatible package versions through `npx expo install`. [Expo Camera docs](https://docs.expo.dev/versions/latest/sdk/camera/) |
| OCR and question generation | A server-side API boundary, with provider adapters selected after a small quality/cost spike | Keeps credentials off-device and avoids binding domain logic to one vendor. |
| Game presentation | Native React Native views for quizzes, collection, and turn-based encounters; add animation/graphics libraries only when the design needs them | The current game loop is interface- and content-heavy, not a real-time game simulation. |
| Sensor integration | None in the first release | Revisit step count only after the study loop works. Expo Sensors exposes pedometer APIs, but device behavior and permissions still need product-level validation. [Expo Sensors docs](https://docs.expo.dev/versions/latest/sdk/sensors/) |

These are recommendations, not finalized choices. Use the current Expo SDK's compatible versions when bootstrapping instead of copying versions from the original note. A full game engine would become appropriate if the product changes to real-time action, physics, or graphics-heavy gameplay; the current quiz and collection loop does not justify splitting the app across a second engine.

## Application boundaries

- **Screens and navigation:** capture, text correction, question review, quiz, results, collection, and due-review entry points.
- **Domain:** study material, question, answer attempt, review state, and reward rules. Keep this independent from React components and vendor APIs.
- **Persistence:** local SQLite repositories for material, generated questions, attempts, and scheduling state. Store preferences separately if that remains simpler.
- **Services:** capture/OCR and question generation behind typed interfaces. The mobile app calls a backend endpoint for any provider requiring a secret.
- **Backend:** a thin service that validates request size, invokes selected OCR/LLM providers, validates structured results, applies rate limits, and avoids retaining source images/text beyond the defined product need.

For the first UI slice, use sample material and a predictable local question source before wiring live OCR/LLM providers. This lets the capture-to-study experience take shape without provider latency, cost, or hallucinations obscuring basic interaction problems.

## AI question contract

The exact schema remains to be designed, but each question should carry at least:

- stable question ID and question type;
- prompt, answer choices where relevant, and correct answer;
- exact evidence excerpt and a source reference (for example, character offsets in normalized OCR text);
- optional topic/fact grouping for review scheduling;
- generation/model metadata only where needed for debugging and user support.

Use structured output at the backend boundary, then validate it in application code. Check schema shape, answer/choice consistency, excerpt presence in the source, and reasonable size limits. Do not use a model's confidence score as a correctness guarantee. Keep learner review in the flow.

## Data and privacy boundaries

- Start with local-first saved progress. Sync and accounts are open questions, not baseline requirements.
- Keep API keys and provider credentials server-side.
- Define whether original images are discarded after OCR and how long source text is retained before implementing external processing.
- Do not add analytics or background sensor collection by default.
- Before choosing an audience or launching, resolve age group, consent expectations, supported markets, deletion/export needs, and provider data terms.

## Offline behavior

Saved materials, reviewed questions, collection state, and previously downloaded review sessions should remain available offline. OCR and new question generation may require network access at first; the interface should say so clearly and preserve the captured material for retry.

## Open technical questions

- Which OCR provider gives acceptable results on the intended notes, language, and cost budget?
- Does the initial version support typed/pasted text, printed photos, handwriting, PDFs, or only a subset?
- Which backend hosting approach is simplest for the first vertical slice?
- What source representation makes evidence robust when OCR corrections change text offsets?
- How should question generation be limited, retried, and surfaced when evidence is insufficient?
- Is web support needed, or are iOS and Android enough for the first release?
