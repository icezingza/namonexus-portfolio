# NamoNexus production release readiness

## Release decision for this branch

The feature branch remains **frontend preview-only**. Contact stays local-only and does not call an API, email provider, CRM, analytics service, database, storage layer, or backend. `RESEND_API_KEY` is not required for this preview, was not added to the client, and must only be introduced in a future server-side integration after explicit approval.

This branch is suitable for review and temporary staging preview. It is **not approved for production merge or production deployment**.

## Asset and rights audit

| Asset | Current implementation | Technical status | Production approval |
|---|---|---|---|
| Compact N mark | CSS treatment in `client/src/components/PrototypeNav.tsx` | PASS for preview; no raster dependency | UNVERIFIED — owner must approve geometry and brand use |
| Horizontal NamoNexus wordmark | CSS text treatment in `PrototypeNav.tsx` | PASS for preview; text remains editable | UNVERIFIED — owner must approve typography, spacing, and final wordmark asset |
| Hero motion panel | CSS shapes and text in `client/src/pages/Home.tsx` | PASS for preview; decorative, no remote media | UNVERIFIED — approve motion language, geometry, performance, and final master asset |
| Favicon | New `client/public/favicon.svg`, labelled as prototype vector mark | PASS for preview build; local asset path | UNVERIFIED — owner must approve final favicon geometry and rights |
| Watermarked media | Not used by the four prototype routes or exported source package | PASS — excluded | Not applicable |
| External fonts | Google Fonts stylesheet remains in `client/index.html` | UNVERIFIED for production dependency/rights and availability | Owner/product decision required; self-hosting may be preferable for a sovereign production posture |

This audit is a **technical readiness review**, not a legal rights clearance. Asset ownership, trademark permission, font licensing, and production brand approval must be confirmed by the brand owner or authorized counsel before production use.

## Contact boundary

The approved branch decision is to keep Contact **preview-only**. The form accepts high-level qualification fields only: name, work email, organization, organization context, conversation focus, high-level situation, Broad timing, preview consent, and a hidden honeypot. The situation field is limited to 1,200 characters and uses the canonical sensitive-term guard documented in `CONTACT_FORM_PRODUCTION_READINESS.md`.

A real Contact integration is intentionally deferred. Before a future backend is built, the owner must approve the privacy notice, lawful basis/consent, retention and deletion, data residency, server-side validation, rate limiting, abuse controls, logging redaction, sender/recipient ownership, provider outage behavior, rollback, and operational owner. Only then may a server-side `RESEND_API_KEY` be configured. It must never appear in browser code, static assets, or source control.

## Remaining unverified items

The following items remain **UNVERIFIED** and are accepted as outside the frontend-only scope for this branch:

1. Independent pixel-level overlap/clipping measurement for every presentation slide. The slide renderer completed and the deck has 12 slides with corrected numbering, but no separate screenshot measurement artifact is included in the worktree.
2. Full repository/server build. The frontend `pnpm check` and `pnpm exec vite build` are the relevant checks for this branch; server/backend build and production integration were not exercised.
3. Legal/brand ownership, trademark, and font-license clearance for production assets.
4. Production Contact delivery, privacy operations, rate limiting, monitoring, and incident response.

## Release gate

Do not merge this branch into `main`, do not connect Contact to a provider, and do not deploy a production domain until the owner records explicit approval for the exact action. A staging or temporary preview URL may be used for visual and behavior review only.
