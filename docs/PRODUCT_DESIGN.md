# Habba — Product and Experience Design

## Status

Habba is a planned Arabic-first restaurant decision web app for Jeddah. This document defines the intended public experience; it does not claim that a screen, recommendation, data integration, or merchant feature already exists.

Use [DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md) for the technical, data, and security plan.

## Goal

Habba helps the person organising an outing decide quickly:

> مو أفضل مطعم في جدة — أفضل مطعم لليلتك.

The product is a decision engine, not a broad directory, review network, delivery app, or social feed. A visitor should be able to discover a suitable physical branch, understand what is known, save it on their device, and open directions without registering.

## Product rules

- Search, browsing, the guided flow, directions, local saves, and later group decisions work without sign-in.
- An account is an optional upgrade for backup and cross-device sync; it never blocks a useful action.
- A recommendation explains why it fits and one meaningful trade-off. Never show a fabricated match percentage.
- Return exactly three choices only when three verified branches satisfy the selected hard constraints. Never pad the list. If fewer qualify, state why and offer one explicit condition to relax.
- A branch—not only a restaurant brand—is the decision unit for directions, hours, contact details, and availability.
- Display only sourced facts. Unknown, stale, conflicting, or unsupported data stays unavailable.
- “Open now” requires complete, fresh, computable branch hours. Otherwise show `تحقق قبل الزيارة` or an equivalent unavailable state.
- Swiping is optional. Every swipe action has visible button, mouse, and keyboard alternatives.

## Design direction

Habba should feel like a contemporary Jeddah editorial guide: warm, composed, and confident rather than like a generic dashboard or a dating-card interface.

- **Composition:** generous whitespace, strong Arabic headlines, editorial image crops, and calm comparison layouts. On desktop, show meaningful choices together instead of stretching a mobile card.
- **Colour:** use a warm coastal-neutral foundation, dark high-contrast text, one sunset/coral action accent, and a restrained sea-toned secondary accent. Final token values belong in approved visual exploration, not invented Markdown hex values.
- **Typography:** choose an Arabic display/body pairing only after testing long Arabic names, mixed Arabic/English metadata, numerals, and small labels. English must remain readable without changing the hierarchy.
- **Photography:** use licensed, contextual branch, dining-room, entrance, or food imagery. Missing images use an honest placeholder; generated imagery must never represent a real restaurant or dish.
- **Surfaces and motion:** use clear hierarchy and restrained depth. Avoid glassmorphism, decorative gradients, hover-only controls, and motion that hides state changes. Respect reduced-motion preferences.
- **Accessibility:** visible focus, semantic controls, 44 × 44 CSS-pixel touch targets, text/icon state cues in addition to colour, and logical RTL/LTR layout properties are required.

Before implementation, create and review a small visual prototype at mobile and desktop widths. Lock exact colour, type, spacing, and component tokens only after contrast, RTL, image, and accessibility checks.

## Information architecture

| Surface | Phase | Purpose |
| --- | --- | --- |
| Home | Core | Start direct search, the guided decision flow, or editorial browsing. |
| Search and results | Core | Find published branches by name, cuisine, dish, or district. |
| Mood Compass and constraints | Core | Capture decision preferences and hard requirements. |
| Three Matches | Core | Compare three explainable branch choices and replace an unsuitable option. |
| Restaurant details | Core | Confirm the physical branch, known facts, caveats, and next actions. |
| Saved | Core | Show device-local saves and an optional backup prompt. |
| Explore | Later | Browse source-backed collections and evidence-based discovery labels. |
| Common Ground | Later | Let a group use a guest link to reach one result and two alternatives. |
| Merchant | Final stretch | One protected update form for verified restaurant owners. |

Do not expose a `مزاجي` destination until a real local Taste Passport experience exists.

## Core mobile experience

Target the primary mobile design at 390 × 844 while remaining usable from 320 px upward.

### Home

- Location label: `جدة`.
- Search placeholder: `مطعم، أكلة، حي، أو جو معين...`.
- Headline: `وش يناسب مزاجك الليلة؟`.
- Primary action: `اختَر لي الآن`.
- Secondary action: `نقرّر سوا`.
- Use honest editorial collection labels until first-party evidence supports labels such as trending or hidden gem.

### بوصلة مزاجك

Show one preference at a time with clear back, continue, exit, progress, and an accessible five-position control. The dimensions are:

1. `الأكل أهم` ↔ `الجو أهم`
2. `قريب وسهل` ↔ `يستاهل المشوار`
3. `اختيار مضمون` ↔ `شيء جديد`
4. `مشهور الآن` ↔ `اكتشاف جديد`
5. `وجبة سريعة` ↔ `جلسة طويلة`

The control needs labelled discrete values and a button or select alternative; dragging alone is insufficient.

### Constraints and profile

Collect only inputs that can change the result:

- Budget, using only source-backed spend evidence.
- Distance or travel time, only when a valid origin and route estimate exist.
- Group type.
- Must-haves such as parking, quiet seating, family suitability, outdoor seating, or late opening.

Unknown branch data cannot claim to satisfy a must-have. Show an editable `مزاجك الليلة` summary before ranking.

### Three Matches

When enough eligible data exists, label the cards:

1. `أفضل اختيار`
2. `اختيار آمن`
3. `مغامرة تستاهل`

Every card shows the branch, district, cuisine, supported price state, honest hours status, two concise fit reasons, and one trade-off. Controls are `التفاصيل`، `احفظ`، `افتح في الخرائط`، and `مو مناسب`.

The rejection sheet may offer distance, price, cuisine, familiarity, or `أبغى مكان أهدأ` only when source-backed atmosphere data exists. It must never imply live crowds. Updating a choice preserves hard constraints and announces success, failure, or retry status.

### Restaurant details

Answer these questions in order:

1. Is this the correct physical branch?
2. Does it fit this outing?
3. What is known before visiting?
4. What can the visitor do now?

Show source-backed name, area, cuisine, price state, hours state, maps, save, share, and verified contact actions. Parking, noise, reservations, seating, signature dish, and `قبل لا تروح` notes appear only when supported.

Customer feedback is distinct from verified facts. It must be permitted, sourced, moderated, dated when useful, and clearly labelled. Do not scrape or copy Google Maps reviews, ratings, photos, or hours.

### Saved, Explore, and Common Ground

- Saving immediately confirms `تم الحفظ على هذا الجهاز`. It is local to the browser until the visitor explicitly signs in later.
- Explore uses dated editorial collections until legitimate data supports public popularity or hidden-gem labels.
- Common Ground is a later guest-link flow. Each participant chooses a must-have, deal-breaker, and flexible preference; the result presents one winner and two alternatives with an evidence-based explanation.

## Desktop, RTL, and states

At 1440 px, replace mobile bottom navigation with visible header navigation and actions. Keep the same content order and essential controls; do not hide actions behind hover or gestures.

Arabic pages use RTL and English pages use LTR. Test mixed text, numerals, chevrons, focus movement, icon order, and long names in both directions.

Every public surface needs loading, empty, no-match, unavailable-data, image-failure, offline, error, and retry states. Preserve meaningful selections while a request retries or a visitor navigates back.

## Merchant stretch

Merchant tooling is not part of the consumer roadmap. If consumer launch work is complete, a single protected `/merchant` page may let a verified owner submit:

- a Maps-link correction;
- one validated signature-dish image;
- a timestamped availability notice with an expiry.

It is not a dashboard. Exclude analytics, billing, menus, teams, campaigns, subscriptions, and multi-page settings. Merchant-supplied availability is visibly separate from Habba’s verified operating-hours status.

## Explicit exclusions

Do not build delivery, cart or checkout, public reviews, a social feed, a chatbot, fake live wait times, forced registration, pay-to-rank recommendations, or a multi-page B2B SaaS product.

## Future implementation acceptance

- Arabic RTL and English LTR public paths work at mobile and desktop widths.
- The decision flow is honest about fewer-than-three matches and missing facts.
- Search, saving, details, maps, and visible non-gesture controls work without sign-in.
- No public fact, structured-data value, or recommendation explanation is fabricated.
- Critical actions work with keyboard, touch, screen readers, reduced motion, slow networks, and failure states.
