# Braincollect

Braincollect is a mobile-first study game: students turn their own study material into source-grounded quiz sessions and earn collectible creatures as they learn.

The Expo/React Native app shell is scaffolded. Product and engineering guidance is in [`docs/`](docs/).

## Start here

1. Read [`AGENTS.md`](AGENTS.md) for project-wide guidance for people and AI agents.
2. Read [`docs/PROJECT_STATE.md`](docs/PROJECT_STATE.md) for what exists and what is still open.
3. Use [`docs/PRODUCT_BRIEF.md`](docs/PRODUCT_BRIEF.md), [`docs/GAME_DESIGN.md`](docs/GAME_DESIGN.md), and [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the current product direction.
4. Use [`docs/ROADMAP.md`](docs/ROADMAP.md) and [`docs/BACKLOG.md`](docs/BACKLOG.md) to plan the next slice.

## Repository

GitHub: [kornti-debug/braincollect](https://github.com/kornti-debug/braincollect)

The linked GitHub repository is checked out locally on `main`. The initial commits establish the documentation baseline and Expo agent setup. The app currently contains only the generated navigation shell; the study flow, local data, camera, OCR, and AI integration are not implemented yet.

## Recommended implementation direction

Use React Native with Expo and TypeScript. This is an app-first learning experience with short, turn-based quiz encounters and collection screens; it does not need a full game engine unless the design later grows into real-time action, physics, or complex scenes. See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the proposed boundaries and [`docs/AI_WORKFLOW.md`](docs/AI_WORKFLOW.md) for the Codex/Expo workflow.

## Run the app

```bash
npm install
npm start
```

With an Android emulator running, press `a` in the Expo terminal UI. A phone with Expo Go can also open the QR code. See Expo's [start developing guide](https://docs.expo.dev/get-started/start-developing/) for device and emulator steps.
