# NamoNexus validation evidence (working record)

## Browser audit checkpoint

The local Vite preview was started from `/home/ubuntu/namonexus-multipage` and is serving on port 3000 because port 5173 was already occupied. The browser opened `http://127.0.0.1:3000/` successfully.

The Home page title is `NamoNexus — Sovereign AI Systems Studio`. At a 500px viewport snapshot, the shared mobile navigation showed the `Menu` button, the Hero headline and subheadline were visible before the decorative motion panel, and the layout stayed within the 500px viewport. The snapshot exposed the Home route links to `/capability` and `/principles`.

The browser console returned **0 errors and 0 warnings** for the Home navigation check. This is a checkpoint only; route, 390px, keyboard, reduced-motion, Contact state, and network checks remain to be recorded after their individual runs.

## Mobile 390px checkpoint

The viewport was resized to 390×844. Browser evaluation returned `innerWidth=390`, `clientWidth=390`, `documentElement.scrollWidth=390`, and `body.scrollWidth=390`, which is evidence of no horizontal overflow on the Home route. A menu button was present, and the route links included `/`, `/capability`, `/principles`, and `/contact`.

## Capability route checkpoint

At `http://127.0.0.1:3000/capability` the page title remained `NamoNexus — Sovereign AI Systems Studio`. The accessibility snapshot exposed the shared NamoNexus link, mobile `Menu` button, the Capability/Decision Discipline landmark, three stage-group containers/articles, and the boundary CTA section. The route loaded without a navigation error; exact four-stage text and console results will be recorded in the consolidated validation run.

## Contact route checkpoint

At `http://127.0.0.1:3000/contact`, the accessibility snapshot exposed the exact user-facing fields: name, work email, organization, organization context, conversation focus, high-level situation, Broad timing, preview consent, and a hidden honeypot textbox labelled `Leave empty`. The page explicitly states that the preview makes no network request, analytics, email, database, CRM, or storage request.

## Empty Contact validation checkpoint

Clicking `Test local success state →` with an empty form produced explicit alerts for name, work email, organization, organization context, conversation focus, high-level situation, and preview consent. Broad timing remained optional, as intended. No navigation or network submission occurred.

## Valid Contact input checkpoint

A valid high-level preview inquiry was filled with Broad timing set to `Planning a focused discovery` and preview consent checked. An initial automation attempt failed because the checkbox tool input used a boolean where the automation schema expected a string; the alternate fill path succeeded. The first failed attempt produced one console error from the automation evaluation, not from the application; this must be excluded from the final application console result after a fresh navigation.

## Local success checkpoint

After valid submission, the form was removed from the accessibility tree and the status region `LOCAL SUCCESS STATE` appeared with: `This prototype displayed a local success state only. No data was sent, stored, emailed, or recorded.` The success snapshot also showed the reset button. The browser session still displayed the earlier automation-evaluation console error, so console status will be rechecked after a fresh page navigation.

## Network checkpoint

After Contact submit, the browser network list showed only `POST /__manus__/logs` entries from the local Manus preview harness. These are tooling/runtime logs, not a Contact API, email, CRM, database, storage, or analytics integration from the project. A first filtered-query attempt used an unsupported regex flag and was rejected by the automation tool; a plain filter will be used for the final application-endpoint check.

## No-network and reduced-motion checkpoint

The plain network filter for `api|contact|email|crm|database|analytics|resend` returned no matching application requests after submit. The only observed non-static requests remained the local `/__manus__/logs` harness entries.

With `prefers-reduced-motion: reduce` emulated, `matchMedia` returned `true` and the decorative panel's computed animation name was `none`. The panel remained decorative and the Hero content remained available.

## Consolidated route and keyboard checkpoint

At 390px, fresh route navigation returned the expected title and a visible menu button for `/`, `/capability`, `/principles`, and `/contact`. All four routes reported `scrollWidth=390` and `clientWidth=390`; all had an `h1`; all page-error counts were zero.

A fresh Contact keyboard traversal reached the brand link, Menu button, name, email, organization, organization context, conversation focus, high-level situation, Broad timing, consent checkbox, and submit control in order. Subsequent tabs looped through the same submit control because the browser automation continued beyond the page's focusable elements.

## Clean export checkpoint

`/home/ubuntu/namonexus-frontend-prototype-clean.zip` was generated from the source worktree with the original directory structure preserved. Required files including `package.json`, `pnpm-lock.yaml`, Vite/TypeScript config, `client/src/...`, `shared/const.ts`, synchronized reports, and the export manifest are present. `node_modules/`, build output, `.manus-logs/`, the preview harness collector, server directory, watermarked media, `AccessDenied`, and 111-byte artifacts are excluded.

The ZIP was extracted to a temporary verification directory. With dependencies supplied from the existing local cache, `pnpm check` and `pnpm exec vite build` both completed successfully. The build emitted the same non-blocking chunk-size advisory. The final ZIP checksum is reported separately with the deliverable.

## Feature branch validation checkpoint

After the feature branch was created and the preview restarted, the browser audit at 390×844 returned the expected title, H1, and `/favicon.svg` on all four routes. All routes reported `clientWidth=390` and `scrollWidth=390`.

Contact accepted a high-level preview inquiry with Broad timing selected, then hid the form and displayed the local success state. Reduced-motion emulation matched and all `.motion-orbit`/`.motion-particle` computed animation names were `none`. Keyboard traversal reached the brand link, Menu, name, email, organization, context, focus, situation, Broad timing, consent, and submit.

The raw request filter matched Vite development source/document requests such as `/src/pages/Contact.tsx` and `/contact`; it did not match a Contact API, email provider, CRM, database, analytics, or Resend endpoint. These dev-server requests are not form submissions.

## Temporary staging checkpoint

A temporary public preview was exposed from the feature-branch Vite process at `https://3000-i0fjxtwepcvuud19ug2lk-84ea7bcd.sg1.manus.computer/`. This is a temporary staging/preview URL only; it is not a production deployment, custom domain, DNS change, or merge.

The public URL opened successfully and returned the title `NamoNexus — Sovereign AI Systems Studio`.

## Dependency reproducibility checkpoint

`package.json` now pins `lucide-react` to exact version `0.453.0` rather than a caret range. `pnpm-lock.yaml` was regenerated so the importer specifier and resolved package agree.

A fresh temporary copy with no `node_modules` completed `pnpm install --frozen-lockfile --ignore-scripts` successfully, resolved `lucide-react 0.453.0`, then passed `pnpm check` and `pnpm exec vite build`. The build emitted only the existing non-blocking chunk-size advisory. This closes the previous reproducibility blocker for the frontend handoff package.

## Production asset audit checkpoint

The active four-route prototype does not load the 2.1 MB raster reference logo; it uses a CSS compact N mark, a CSS text wordmark, and a local 64×64 SVG favicon. The favicon is technically lightweight, local, and legible at icon scale, but its own SVG title/description labels it as a prototype mark.

The separate `/home/ubuntu/upload/RefinedNamoNexusVectorLogo.png` reference is a 2000×2000 PNG with a dark starfield, cyan/magenta orbital ring, circuit-style N, and NamoNexus wordmark. It is suitable as a visual reference for the slide cover, not as a production asset until the owner confirms source ownership, trademark permission, rights, and final geometry. It is not included in the clean source ZIP.
