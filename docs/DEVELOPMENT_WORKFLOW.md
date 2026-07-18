# Habba — Development Workflow

## Status and delivery rule

Habba currently has a minimal Next.js App Router foundation. It has no catalogue, Supabase project, database schema, authentication, restaurant routes, analytics, SEO routes, or production UI. This document describes future decisions, not shipped behaviour.

Build the smallest trustworthy vertical slice first. A feature belongs on the roadmap only when it helps a visitor decide, works reasonably on a slow mobile connection, handles missing data honestly, and has a clear security and maintenance cost.

The public product and experience source is [PRODUCT_DESIGN.md](PRODUCT_DESIGN.md).

## Delivery phases

1. Prove a public browse-to-directions path with 25 reviewed physical branches.
2. Add Supabase catalogue storage, import discipline, constraints, and published-only access.
3. Grow the catalogue while adding bilingual search, filters, and local favourites.
4. Add the deterministic Habba decision flow once branch facts support it.
5. Add trustworthy hours, proximity, Explore, and Common Ground only when their data prerequisites are met.
6. Launch a controlled beta, then consider optional account backup.
7. Treat the single-page merchant portal as the final optional showcase stretch.

Do not begin public reviews, social features, delivery, paid ranking, server-side guest identities, broad personalization, dashboards, billing, teams, submissions, or merchant claims during the core roadmap.

## Catalogue and data trust

One restaurant brand is not one physical branch. Model shared identity separately from branch-specific location, directions, contact details, hours, and availability.

Start with 25 manually reviewed branches; grow toward 200 only through small reviewed batches. A public branch needs:

- immutable internal IDs;
- clear brand and branch labels;
- a stable public slug;
- public status;
- area or address and a working directions link;
- lawful source URL, verification date, and reviewer record.

Store only facts that the source supports. Unknown hours, phone, price, coordinates, seating, or status remain unavailable. Do not scrape Google Maps or permanently copy its reviews, ratings, photos, or hours. A Maps directions link is acceptable when verified for the physical branch.

Regular hours and exceptions use `Asia/Riyadh`. Display “Open now” only after complete, fresh, conflict-free branch hours and exception handling are implemented.

## Next.js boundaries

- Use Server Components and direct server-side data access for public catalogue pages, metadata, and protected data. Do not make server pages call the app’s own Route Handlers.
- Use Client Components only for interactive state, local storage, browser APIs, gesture alternatives, and optimistic interface feedback.
- Treat Server Actions and Route Handlers as public mutation boundaries: validate input, authenticate, authorize, constrain returned data, and handle failures there.
- Keep service-role credentials server-only. They never appear in browser bundles, `NEXT_PUBLIC_*` variables, source examples, or logs.
- Revalidate affected public content after an approved data change; document the cache rule alongside the route.

## Supabase and security principles

When Supabase is introduced, use reviewed ordered migrations. Every exposed table and Storage bucket needs explicit grants and Row Level Security (RLS).

- Public visitors read only published, non-deleted public projections.
- An authenticated person reads and changes only their own private rows.
- Input from a browser, URL, form, provider, or storage object is untrusted and requires runtime validation.
- Use constraints for identity, status, uniqueness, coordinate ranges, ownership, and state transitions before relying on application logic.
- Test allowed and malicious requests using the actual roles and JWTs. Hiding a page is not authorization.
- Database functions are reserved for security-sensitive multi-row work such as a future favourite merge. Pin their search path, restrict execution, validate `auth.uid()`, and test retries and rollback.

## Local favourites and optional accounts

Guest favourites are versioned `localStorage`, keyed by canonical restaurant ID. Save immediately, preserve the original saved time, handle corrupt storage and quota failures honestly, and synchronize other tabs when possible.

Do not create a server identity solely for browser-local favourites. If account backup is later justified, merge bounded local IDs into account favourites through an authenticated, transactional, idempotent server operation. Keep local data until the merge reports success.

## Search and decision support

Search begins with maintained Arabic and English names, aliases, transliterations, dishes, cuisines, and districts. Rank exact name and alias matches above prefix, full-text, and fuzzy matches. Search returns only published branches and shows an honest no-result path instead of pretending an unrelated result is exact.

The first recommendation engine is deterministic and inspectable:

1. Apply source-backed hard constraints.
2. Score remaining branches using supported preferences.
3. Return three distinct branches only when three qualify.
4. Generate reasons and a trade-off from the same data used to rank.
5. Explain a shortfall and offer one explicit relaxation when fewer qualify.

Unknown data must not silently satisfy a hard rule. Add geospatial indexes, fuzzy indexes, or advanced scoring only after real query shape and performance evidence justify them.

## Lean merchant stretch

The merchant feature is intentionally small and last.

- `profiles.role` is protected: an ordinary user cannot promote themselves.
- `restaurants.owner_id` is nullable and assigned through a trusted admin path.
- One merchant can own multiple restaurants. Version 1 supports one primary owner per restaurant; add multi-manager modelling only when real demand requires it.
- The protected, `noindex` `/merchant` page contains one form, not a dashboard.
- Merchants cannot broadly update catalogue rows. A server/database allowlist re-checks identity, role, owner ID, target restaurant or branch, and permitted fields.
- Maps-link corrections and images remain pending until verification. Availability notices are timestamped, expire automatically, and remain visibly merchant-supplied rather than changing canonical operating hours.

Required merchant tests: normal user denied, self-role escalation denied, forged or cross-owner IDs denied, forbidden fields denied, invalid URLs/uploads denied, expired notices hidden, and direct database or Storage bypass attempts denied.

## SEO, quality, and release

Public restaurant pages use stable canonical URLs, rendered metadata, locale alternates where equivalent translations exist, and structured data only for visible verified facts. Do not index search queries, drafts, private content, temporary links, account pages, or merchant pages.

For every feature:

1. Define a user outcome, acceptance criteria, failure states, and out-of-scope work.
2. Build one vertical slice across UI, data, authorization, and tests.
3. Run focused checks first, then required broader checks.
4. Manually test RTL, LTR, keyboard, touch, target viewports, slow network, missing data, and retry behaviour.
5. Inspect migrations, RLS, caching, metadata, and the final diff.
6. Verify the deployed path and record the result before expanding scope.

Use the private implementation backlog for the detailed sprint checklist. Public documents must not depend on ignored notes.
