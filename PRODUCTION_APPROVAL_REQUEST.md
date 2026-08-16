# NamoNexus Production Approval Request

## Purpose

This document is the final gate before merging the NamoNexus frontend branch into `main` and deploying a production release. Completing the checklist does not itself merge or deploy anything. The owner or authorized approver must record an explicit decision for each action.

## Candidate release

| Field | Value |
|---|---|
| Repository | `https://github.com/icezingza/namonexus-portfolio.git` |
| Candidate branch | `feature/namonexus-frontend-preview` |
| Candidate commit | Record the exact reviewed commit here before approval |
| Target branch | `main` |
| Production domains | Record the exact approved domains here; verify apex and `www` behavior |
| Preview/staging URL | Record the current temporary or managed staging URL here |
| Contact mode | Current branch is preview-only; real Resend integration requires a separate approval |

## Evidence gates

| Gate | Status to record | Evidence required |
|---|---|---|
| Source branch and commit reviewed | PASS / FAIL / UNVERIFIED | GitHub branch, commit, diff, and reviewer |
| `lucide-react` exact pin | PASS | `package.json` and `pnpm-lock.yaml` both resolve direct dependency `0.453.0` |
| Frozen install | PASS / FAIL / UNVERIFIED | Clean environment log from `pnpm install --frozen-lockfile --ignore-scripts` |
| Type check | PASS / FAIL / UNVERIFIED | `pnpm check` output |
| Frontend Vite build | PASS / FAIL / UNVERIFIED | `pnpm exec vite build` output and accepted chunk-size advisory |
| Routes and deep links | PASS / FAIL / UNVERIFIED | `/`, `/capability`, `/principles`, `/contact` checks |
| Mobile, keyboard, reduced motion | PASS / FAIL / UNVERIFIED | 390px audit, focus traversal, reduced-motion evidence |
| Contact network boundary | PASS / FAIL / UNVERIFIED | No Contact API, email, CRM, analytics, database, or storage request in preview mode |
| Console errors | PASS / FAIL / UNVERIFIED | Fresh browser console check |
| Independent slide pixel review | PASS / FAIL / UNVERIFIED | Screenshot-by-screenshot overlap/clipping review, or explicit acceptance of remaining UNVERIFIED status |
| Full repository/server build | PASS / FAIL / UNVERIFIED | Server build evidence, or explicit acceptance that frontend-only scope remains |

## Asset approval gates

The current logo, wordmark, and favicon are technically usable for preview, but production use remains blocked until the owner or authorized brand approver confirms each item below.

- The master compact N geometry, clear space, minimum size, monochrome version, and small-size legibility are approved.
- The horizontal NamoNexus wordmark typography, letter spacing, proportions, and usage rules are approved.
- The favicon geometry, safe area, contrast, light/dark behavior, and browser rendering are approved.
- Trademark, copyright, source-file ownership, font license, and any third-party asset rights are documented.
- The owner explicitly approves whether the current CSS treatments may remain or must be replaced by approved master SVG/wordmark files.
- External font loading in `client/index.html` is approved or replaced with an approved self-hosted strategy.
- No watermarked media or unapproved raster logo is included in the production artifact.

## Contact production decision

Select exactly one option before production approval:

```text
[ ] A — Keep Contact preview-only after production deployment.
    The form must visibly state that no data is sent or stored and must not call any backend.

[ ] B — Enable real Contact integration only after the Resend runbook is complete.
    This requires a separate server-side implementation, staging test, privacy/retention approval,
    abuse controls, sender/recipient ownership, and a production secret-management review.
```

If option B is selected, record the following before enabling the route:

- Verified sending domain/subdomain and approved `RESEND_FROM_EMAIL`.
- Approved `CONTACT_TO_EMAIL` and reply ownership.
- Sending-only, domain-restricted Resend API key where supported.
- `RESEND_API_KEY` stored only in the server/hosting secret manager.
- Server-side validation matching the prototype: required fields, Broad timing allow-list, 1,200-character situation cap, sensitive-term guard, consent, and honeypot.
- Rate limiting, request-size limits, origin controls, abuse logging with redaction, timeout/outage behavior, and rollback.
- Privacy notice, lawful basis/consent, retention/deletion, data residency, access control, and incident response.
- Staging test evidence using synthetic non-confidential data and no production key.

## Explicit merge approval

The approver must copy and complete this block. An unchecked item is not approval.

```text
I have reviewed the candidate commit and the evidence above.

[ ] I approve merging the candidate branch into `main`.
[ ] I approve deploying the merged commit to the specified production domains.
[ ] I approve the asset decisions recorded above for production use.
[ ] I approve Contact mode A (preview-only).
[ ] I approve Contact mode B only after the separate Resend production gates are complete.
[ ] I accept the explicitly recorded UNVERIFIED items and their scope boundary.

Approved by:
Role:
Date/time:
Approved commit:
Target environment:
Rollback owner:
Rollback method:
Notes:
```

## Stop conditions

Do not merge or deploy when any of the following is true: the candidate commit is not recorded; asset rights or brand approval are missing; frozen install or Vite build fails; Contact mode is ambiguous; the production secret is absent, exposed, or stored in the client; privacy/retention ownership is unknown; staging has console errors or unintended network requests; or the approver has not completed the explicit block above.

## Current recommendation

Keep Contact in **mode A, preview-only**, and treat the branch as reviewable but not production-approved. The clean handoff package is structurally complete and its direct `lucide-react` dependency is pinned, but production asset rights, font policy, Contact governance, and explicit merge/deploy approval still require owner decisions.
