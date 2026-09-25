# Braincollect agent instructions

## Read before changing the project

- Start with [`README.md`](README.md) and [`docs/PROJECT_STATE.md`](docs/PROJECT_STATE.md).
- Read the product, game design, and architecture docs before changing product behavior or technical boundaries.
- When the Expo app is scaffolded, merge its current SDK-specific agent guidance into this file; preserve these project instructions rather than replacing them.
- Treat items labeled **Recommendation**, **Hypothesis**, or **Open question** as proposals, not as user-approved decisions. Keep them explicit until the project owner resolves them.

## Product principles

- The core value is helping a learner remember material they already need to study. Game systems should support that job.
- Keep generated questions grounded in the learner's supplied material. Every question needs traceable evidence; never present unsupported generated content as fact.
- Let the learner inspect, correct, or remove generated questions before studying them.
- If the source cannot support a clear question, return fewer questions or none. Do not pad a deck to reach a quota.
- Make study progress understandable. A creature reward must not obscure whether or how the learner is learning.
- Treat scans, OCR text, answers, and learning history as personal study data. Minimize collection and retention; do not expose provider credentials in the mobile app.

## Engineering guidance

- Keep changes focused on the requested vertical slice. Avoid adding unrequested game systems, providers, accounts, analytics, or permissions.
- Keep product rules in domain code rather than coupling them to screens or a specific AI provider.
- Preserve offline access to saved study material and progress where practical; clearly handle features that need a network.
- Follow the existing project conventions once code is introduced. Prefer small, typed interfaces at external service boundaries.
- Do not claim that a build, device check, or other validation passed unless it was actually run.

## Expo guidance

- This app uses Expo SDK 57, TypeScript, and Expo Router. Routes live in `app/`; keep components, state, and data outside that route directory.
- Before using Expo or React Native APIs, check the SDK version in `package.json` and use its matching official documentation and the installed Expo skills.
- Add Expo packages with `npx expo install <package>` so versions match the SDK.
- Try Expo Go first. Use a development build only when the app needs native code or configuration that Expo Go cannot provide.
- From the project root, `npm start` starts Metro, `npm run android` targets an Android emulator/device, and `npm run web` opens the web version.

## Keeping project context current

- Update [`docs/PROJECT_STATE.md`](docs/PROJECT_STATE.md) when the implementation status or resolved choices materially change.
- Update [`docs/DECISIONS.md`](docs/DECISIONS.md) when a meaningful product or architecture decision is made; include its status and reason.
- Keep the roadmap at milestone level and the backlog actionable. Remove or mark stale items instead of letting lists silently diverge.
