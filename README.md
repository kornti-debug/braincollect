# Braincollect

Braincollect is a mobile-first study game: students turn their own study material into source-grounded quiz sessions and earn collectible creatures as they learn.

The project is at the concept and planning stage. The product and engineering source of truth is in [`docs/`](docs/).

## Start here

1. Read [`AGENTS.md`](AGENTS.md) for project-wide guidance for people and AI agents.
2. Read [`docs/PROJECT_STATE.md`](docs/PROJECT_STATE.md) for what exists and what is still open.
3. Use [`docs/PRODUCT_BRIEF.md`](docs/PRODUCT_BRIEF.md), [`docs/GAME_DESIGN.md`](docs/GAME_DESIGN.md), and [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the current product direction.
4. Use [`docs/ROADMAP.md`](docs/ROADMAP.md) and [`docs/BACKLOG.md`](docs/BACKLOG.md) to plan the next slice.

## Repository

GitHub: [kornti-debug/braincollect](https://github.com/kornti-debug/braincollect)

The linked GitHub repository was empty when checked on 2026-09-25. This workspace is now its local Git checkout; the initial commit contains the planning documents and `.gitignore`. No app code or dependencies have been created yet.

## Recommended implementation direction

Use React Native with Expo and TypeScript. This is an app-first learning experience with short, turn-based quiz encounters and collection screens; it does not need a full game engine unless the design later grows into real-time action, physics, or complex scenes. See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the proposed boundaries and [`docs/AI_WORKFLOW.md`](docs/AI_WORKFLOW.md) for the Codex/Expo workflow.
