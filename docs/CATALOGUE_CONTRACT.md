# Habba — Public Catalogue Contract

## Status

This Sprint 0 contract defines what future restaurant catalogue records must mean before implementation. It does not describe an existing database or publish any restaurant facts.

## Identity and publication boundary

A restaurant is a shared brand identity. A branch is one physical place and is the public decision unit for directions, address, coordinates, contact details, hours, and availability.

| Entity | Required fields | Purpose |
| --- | --- | --- |
| Restaurant | `id`, `name_ar`, `name_en`, `slug`, `status` | Stable brand identity and bilingual public label. |
| Branch | `id`, `restaurant_id`, `branch_name_ar`, `branch_name_en`, `slug`, `district`, `directions_url`, `status` | Stable physical-place identity and public route. |
| Fact provenance | `branch_id`, `field`, `source_url`, `reviewer`, `verified_at`, `review_status` | Field-level evidence and review history. |

IDs are immutable opaque identifiers. Slugs are unique public identifiers but are not database ownership keys. A future public route uses the branch slug because two locations under one brand can have different facts.

## Controlled values

- `status`: `draft`, `in_review`, `published`, `archived`.
- `review_status`: `candidate`, `verified`, `rejected`, `stale`, `conflicting`.
- `price_evidence`: `unknown`, `menu_range`, `typical_spend`; a value requires a lawful dated source and currency in SAR.
- `hours_status`: `unknown`, `incomplete`, `verified`, `stale`, `conflicting`.
- `source_kind`: `official_site`, `official_social`, `owner_submission`, `field_review`, `licensed_provider`, `government_record`.

Free-text labels must not replace controlled values. Controlled values make filtering and validation deterministic, while localized display copy stays in the UI.

## Nullable and uncertain facts

Unknown facts are stored as `null` with an explicit review state; they are never guessed. Phone, coordinates, price evidence, hours, accessibility, parking, seating, atmosphere, and signature dishes are optional until supported. A missing value cannot satisfy a recommendation constraint.

Regular hours require local weekday intervals in `Asia/Riyadh`. Exceptions require a local date and explicit closed or interval state. “Open now” is computable only when regular hours are complete, relevant exceptions are known, the record is fresh under the future review policy, and no conflict is open.

## Publication checklist

A branch may become `published` only when:

1. Its restaurant and physical branch identities are unambiguous.
2. Arabic and English public labels, stable slugs, and district are reviewed.
3. The directions URL resolves to the intended physical branch.
4. Every displayed fact has field-level provenance with reviewer and verification date.
5. Unknown or disputed facts remain unavailable and are not emitted in metadata or structured data.
6. The record passes duplicate, status, and public-projection review.

The private Sprint 0 intake sheet contains candidates only. It is not an import file and no candidate is publishable merely because it appears there.

## Future runtime boundary

TypeScript types will describe trusted application values at build time, but imported rows and request data still require runtime validation. The database must later enforce allowed states, required relationships, uniqueness, coordinate ranges, and publication constraints. Row Level Security must expose only the reviewed public projection; it is not implemented in Sprint 0.
