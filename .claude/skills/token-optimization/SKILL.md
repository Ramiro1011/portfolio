---
name: token-optimization
description: Use throughout any multi-step work session on this portfolio repo — reading/editing several files, iterating on design, long-running sessions. Keeps token usage lean so more of the session budget goes to actual design/frontend work instead of re-reading context.
---

# Working efficiently in this repo

- **Edit, don't rewrite.** Use Edit for existing files; only use Write for new
  files or a genuine full rewrite. Never re-read a file immediately after
  Edit/Write just to confirm — the tool already errors on failure.
- **Locate before reading.** Use Grep/Glob to find the right file/section first;
  when a file is large and only one section is relevant, Read with `offset`/`limit`
  instead of the whole file.
- **Batch independent work.** When several reads or edits don't depend on each
  other, issue them in one message/turn rather than one-by-one.
- **Don't paste large content into chat.** Summarize search results, file dumps,
  or research findings in a few lines instead of quoting them at length — the
  user reads your prose, not raw tool output.
- **Consolidate edits to the same file.** If a turn touches one file multiple
  times, group the changes into as few Edit calls as reasonably possible.
- **Checkpoint visual review, don't spam it.** When iterating on design in the
  browser, check at meaningful milestones (a section is functionally complete),
  not after every one-line CSS tweak.
- **Terse commentary.** One or two sentences on what changed and what's next;
  no restating the plan or narrating tool-by-tool steps.
