# NamoNexus frontend prototype — clean source export

## Source of truth

This export is generated from the real NamoNexus repository worktree at `/home/ubuntu/namonexus-multipage`, remote `https://github.com/icezingza/namonexus-portfolio.git`, branch `feature/namonexus-frontend-preview`. The exact commit is reported with the final handoff because the manifest is regenerated whenever package metadata changes.

The export is a frontend prototype/documentation package only. It is not a deployment artifact and does not change production, DNS, Cloudflare, backend, API, database, email, analytics, storage, or hosting settings.

## Included

The ZIP preserves the frontend source structure, including `package.json`, lockfile, Vite/Tailwind/TypeScript configuration, `client/index.html`, the prototype `client/public/favicon.svg`, `client/src/`, the minimal `shared/const.ts` compatibility module required by the existing TypeScript path alias, existing client components/pages, the synchronized Contact page, prototype navigation, reports, validation evidence, implementation guides, production-readiness record, and slide summary.

## Excluded

The ZIP excludes `node_modules/`, Vite/build output, `.git/`, temporary files, `.manus-logs/`, the preview harness collector under `client/public/__manus__/`, backend/server files outside this frontend-only scope, watermarked media, and any `AccessDenied` or 111-byte artifact.

The presentation deck remains a separate slide project at `/home/ubuntu/namonexus-prototype-deck` and was rendered after the final numbering edits. The ZIP contains the synchronized slide summary, not a duplicated slide project with absolute local asset paths.

## Reproducibility

From the extracted package, install dependencies with the repository lockfile and run the frontend checks with `pnpm check` and `pnpm exec vite build`. The full repository `pnpm build` command remains outside this frontend-only export because it also bundles the repository's server entrypoint.
