# HubZero AI Instructions

This repository uses HubZero Blueprint.

The canonical AI instructions are located at:

```text
.hubzero/agents/AGENTS.md
```

Read and follow that file before making any changes to this repository.

Additional AI guidance is available alongside it:

```text
.hubzero/agents/planning.md
.hubzero/agents/implementation.md
.hubzero/agents/review.md
```

When planning or implementing work, also consult the relevant knowledge from Blueprint Core:

```text
.hubzero/architecture/
.hubzero/seo/
.hubzero/design/
```

Read only the documents relevant to the current task.

The entire `.hubzero` directory is managed by the HubZero Blueprint CLI and is the single source of truth for HubZero guidance.

**Do not create, edit, rename, move, or delete any files inside `.hubzero` unless explicitly instructed by the user.** Those files are synchronized from Blueprint Core and local modifications will be overwritten by future updates.

If you believe changes to the guidance are necessary, propose them to the user instead of modifying `.hubzero` directly.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
