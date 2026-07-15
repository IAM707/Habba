# Jeddah Restaurant Search — Agent Guide

## Project state and source of truth

This repository currently contains only a minimal Next.js foundation and product-planning documentation. It deliberately does **not** contain product features, a Supabase project, database migrations, authentication, analytics, or a Git repository yet. Do not claim that planned behavior is implemented.

Before editing, inspect the relevant repository files, package scripts, nearby code, and this guide. For Next.js behavior, read the relevant guide in `node_modules/next/dist/docs/`; this installed Next.js version may differ from older examples. Treat the repository and official documentation as the source of truth.

`docs/DEVELOPMENT_WORKFLOW.md` is the current product, backend, security, SEO, responsive-design, and delivery plan. Keep it current whenever an implementation decision changes its assumptions.

## Engineering expectations

- Act as a pragmatic senior software engineer and collaborative coding partner.
- Communicate clearly and concisely. Lead with the outcome and explain important decisions in plain language.
- Prefer the smallest complete root-cause fix. Match existing architecture and conventions; avoid unrelated refactors, speculative abstractions, broad formatting, and dependency additions.
- Reuse installed dependencies and existing components. Ask before adding a production dependency if a built-in or existing option is reasonable.
- Preserve unrelated user changes. Never discard work or use destructive Git commands without explicit approval.
- Do not invent APIs, packages, commands, files, requirements, framework behavior, or test results. Verify uncertainty from the codebase or official documentation, and label material assumptions.
- Validate untrusted input at boundaries. Never expose secrets, service-role keys, personally identifying information, or privileged data to browser code.
- Write accessible, type-safe, maintainable code. Support Arabic RTL and English LTR deliberately; do not rely on CSS that only happens to work in one direction.
- Run the narrowest relevant checks first, then broader checks when warranted. Never say a check passed unless it actually did.

## Product principles

Optimize for a visitor who lands from search, social media, or a shared link, decides quickly, perhaps saves or shares one restaurant, and leaves without joining a social platform.

- Browsing, search, swipe discovery, restaurant pages, directions, and local saves must work without sign-in.
- A save must succeed immediately and say “Saved on this device.” No sign-in modal may block it.
- Sign-in is an optional upgrade for cross-device sync, backup, recovery, collaborative lists, notifications, and cross-device personalization.
- Every feature must deliver immediate value, work reasonably on a slow mobile connection, tolerate leaving midway, and progressively enhance the initial experience.
- Do not add backend complexity merely to look advanced. Use the prioritization criteria and staged roadmap in the workflow document.
- Never display “Open now” when operating-hours data is absent, stale, or uncertain.
- Restaurant facts used in UI or structured data must be verified and actually available on the rendered page. Never fabricate ratings, reviews, prices, hours, or business facts.

## Planned security boundary

Until the database design is implemented, follow these non-negotiable rules:

- The Supabase `anon` PostgreSQL role is a shared database role; it is **not** a unique guest identity.
- `auth.uid()` is meaningful only when a request bears a Supabase Auth JWT. Anonymous Auth creates a unique authenticated user ID; ordinary unauthenticated requests do not.
- Enable RLS on every exposed application table and Storage bucket. Hiding an admin page is not authorization.
- Verify admin and moderator privileges server-side from a protected authorization source, never from a client-editable profile field or browser claim.
- Service-role credentials are server-only and never appear in client bundles, `NEXT_PUBLIC_*` variables, committed files, logs, or examples.
- New tables, views, functions, Storage buckets, and related joins require an explicit RLS/security review. Related tables must not leak drafts, soft-deleted records, or private reports.

The planned authorization matrix and test cases in `docs/DEVELOPMENT_WORKFLOW.md` are design requirements, not a substitute for actual migration tests.

## Database and migration discipline

- Make schema changes through reviewed, ordered migrations. Include constraints, indexes, RLS policies, grants, and rollback/backfill notes with the same change.
- Use database functions for multi-row, security-sensitive, idempotent operations such as guest-to-account favorite merging. Validate inputs server-side and make ownership explicit.
- Prefer constraints and indexes to application-only assumptions. Add full-text, trigram, and geospatial indexes only after query shape and `EXPLAIN (ANALYZE, BUFFERS)` support the need.
- Use triggers only when a database-level invariant cannot be safely maintained by the writing path. Document their side effects and test them.
- Test policies with allowed and malicious requests under the roles/JWTs that will actually be used.

## Documentation and delivery discipline

- Turn substantial work into a small vertical slice with acceptance criteria, risks, test strategy, rollout/rollback considerations, and a clear out-of-scope list.
- Keep commits coherent: one intent per commit; do not mix a feature with unrelated refactors or formatting.
- Update `docs/DEVELOPMENT_WORKFLOW.md` when product scope, security design, analytics, SEO, or test requirements change.
- Do not initialize Git unless the human developer explicitly asks. When Git exists later, inspect status before making edits and preserve unrelated changes.

## Required completion report

Whenever an AI agent finishes an implementation task, provide the following structured report. Use “not applicable” only with a short reason; do not omit a section.

```md
## Outcome

What now works from the user’s perspective, with evidence where useful.

## Scope completed

- Acceptance criteria satisfied:
- Intentionally out of scope:

## Files changed

| File | Why it changed |
| --- | --- |
| `path/to/file` | Purpose of the change. |

Do not list generated files without explaining why they matter.

## How the implementation works

Describe the request/data flow and the important frontend, backend, database, authentication/RLS, and caching/revalidation decisions that apply.

## Why this approach was selected

State the main trade-offs, simpler alternatives considered, and why unnecessary complexity was avoided.

## Database impact

- Migrations, tables/columns, constraints, and indexes:
- RLS policies and authorization effects:
- Backfill, rollout, and rollback considerations:

## Security and privacy

- Authorization boundaries and server-side validation:
- Secret handling and data exposure:
- Abuse prevention and remaining risks:

## Tests

- Tests added or changed:
- Exact commands run and their actual results:
- Important manual checks:
- Checks not run, why, and what remains unverified:

## How to verify it

1. Step a human developer can perform.
2. Expected observable result.

## What to learn

Teach the most important concepts demonstrated by this task in language suitable for a developing full-stack engineer. Do not merely restate code line by line.

## Risks and follow-up work

- Known limitations and technical debt:
- Suggested next issue (do not silently include it in this task):

## Git recommendation

- Suggested commit(s) and commit message(s):
- Pull-request readiness and any quality gates still required:
```

Never say “Everything works,” “All tests passed,” “Production ready,” or “Secure” without the evidence and boundaries that justify the statement.
