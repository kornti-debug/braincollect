# AI-assisted development workflow

## Before each task

1. Read [`../AGENTS.md`](../AGENTS.md), [`PROJECT_STATE.md`](PROJECT_STATE.md), and the relevant design/architecture sections.
2. Identify the user-facing outcome, the smallest vertical slice, and the acceptance criteria.
3. Call out any unresolved product decision the change depends on. Do not silently convert a recommendation into a permanent decision.

## Expo-specific agent setup

- Ensure Expo's official Codex plugin is installed on the active development host. It provides Expo-specific skills and the Expo MCP server; the project can then use current SDK guidance instead of relying on model memory. The current host has `expo@openai-curated-remote` 1.0.2 installed; on another host, install Expo from its configured curated marketplace or follow [Expo's AI agents guide](https://docs.expo.dev/agents/) and [Codex and Expo setup](https://docs.expo.dev/agents/codex/).
- Scaffold with the current `create-expo-app` workflow. Merge its SDK-specific `AGENTS.md` guidance with the Braincollect instructions in the root `AGENTS.md`; keep project product rules intact.
- Start with a small local vertical slice and sample content. Add device capture and remote AI integrations after the study flow is understandable.
- Use Expo Go for early screens and interaction when the selected packages support it. Move to a development build when a native dependency or app configuration requires one.
- Ask an agent to build one reviewable screen or flow at a time, then inspect it on a simulator or phone; code review alone cannot establish that touch targets, camera permission handling, or layout feel right on device.

## While implementing

- Keep work focused and preserve existing user changes.
- Prefer typed domain contracts and small service boundaries over provider-specific code spread across screens.
- Keep generated content reviewable, and never remove evidence/source context from a generated question.
- Handle permission denial, network failure, empty OCR, and malformed model output as normal user states.
- Do not add features, dependencies, data collection, permissions, or provider integrations without a clear connection to the requested slice.
- Follow the current Expo SDK's setup and compatibility guidance when app code is introduced; do not carry forward old setup commands or package versions without checking them.

## Before handing work back

- Summarize user-visible changes and important tradeoffs.
- State what validation was actually performed and any unverified device/provider behavior.
- Update `PROJECT_STATE.md`, `BACKLOG.md`, or `DECISIONS.md` when work changes the project's real state or resolves an open item.
- Keep documentation aligned with implementation; do not claim a planned feature already exists.
