import { FormEvent, useState } from "react";
import PrototypeNav, { Footer } from "@/components/PrototypeNav";

type FieldName = "name" | "email" | "organization" | "context" | "focus" | "situation" | "timing" | "consent";
type FormErrors = Partial<Record<FieldName, string>>;

const SITUATION_MAX_LENGTH = 1200;
const SENSITIVE_CONTENT_PATTERN = /(?:password|credential|api[_ -]?key|secret|token|credit\s*card|bank\s*account|financial\s*(?:account|detail|information)|medical\s*record|health\s*(?:record|information|data)|security\s*secret|incident\s*evidence|regulated\s*(?:record|data|information)|confidential|proprietary)/i;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") ?? "").trim()) return;

    const next: FormErrors = {};
    const required: Array<[FieldName, string]> = [
      ["name", "Please enter your name."],
      ["email", "Please enter a work email."],
      ["organization", "Please enter your organization."],
      ["context", "Please choose an organization context."],
      ["focus", "Please choose a conversation focus."],
      ["situation", "Please describe the situation at a high level."],
    ];
    required.forEach(([field, message]) => {
      if (!String(data.get(field) ?? "").trim()) next[field] = message;
    });

    const email = String(data.get("email") ?? "").trim();
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid work email.";

    const situation = String(data.get("situation") ?? "").trim();
    if (situation.length > SITUATION_MAX_LENGTH || SENSITIVE_CONTENT_PATTERN.test(situation)) {
      next.situation = "Keep this high level; do not include secrets, regulated, personal, or confidential information.";
    }
    if (data.get("consent") !== "yes") next.consent = "Please confirm the preview-only data boundary.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  const error = (field: FieldName) => errors[field] ? <p className="mt-2 text-xs text-fuchsia-300" role="alert">{errors[field]}</p> : null;
  const fieldClass = "mt-2 w-full border border-cyan-300/25 bg-[#10183B] px-4 py-3 text-white outline-none focus-visible:border-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/30";

  return <div className="min-h-screen bg-[#0A0F2C] text-slate-100"><PrototypeNav /><main className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:py-28">
    <section><div className="mono text-cyan-300">START A CONVERSATION / SENSITIVE WORKFLOW</div><h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[.98] tracking-[-.06em] text-white md:text-7xl">Bring us the decision, workflow, or <span className="text-cyan-300">constraint</span> that cannot be treated casually.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">NamoNexus works with organizations exploring private, human-centered AI systems where context, control, and accountability matter.</p><div className="mt-10 border-t-2 border-fuchsia-300/70 pt-5 text-sm leading-7 text-slate-400"><strong className="block text-slate-100">Data boundary</strong>Please do not include personal health information, financial account details, credentials, security secrets, incident evidence, regulated records, or confidential implementation details. We only need a high-level description to decide how to respond.</div></section>
    <section className="border-t-2 border-cyan-300 pt-5"><div className="flex flex-wrap items-baseline justify-between gap-3"><h2 className="text-3xl font-semibold tracking-[-.04em] text-white">Start with the context.</h2><span className="mono text-slate-500">HIGH-LEVEL QUALIFICATION ONLY</span></div>{submitted ? <div className="mt-8 border border-cyan-300/40 p-8" role="status" aria-live="polite"><div className="mono text-cyan-300">LOCAL SUCCESS STATE</div><h3 className="mt-4 text-3xl font-semibold">Your inquiry is ready for review.</h3><p className="mt-4 leading-7 text-slate-400">This prototype displayed a local success state only. No data was sent, stored, emailed, or recorded. No confidential material should be submitted through this form.</p><button type="button" className="mt-7 border border-cyan-300/50 px-4 py-3 text-sm text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-200" onClick={() => { setErrors({}); setSubmitted(false); }}>Send another preview inquiry</button></div> : <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
      <div><label htmlFor="name" className="block text-sm font-semibold">How should we address you?</label><input id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} className={fieldClass} />{error("name")}</div>
      <div><label htmlFor="email" className="block text-sm font-semibold">Where should we reply?</label><input id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} className={fieldClass} /><p className="mt-2 text-xs text-slate-500">A work email is preferred.</p>{error("email")}</div>
      <div><label htmlFor="organization" className="block text-sm font-semibold">Organization</label><input id="organization" name="organization" autoComplete="organization" aria-invalid={Boolean(errors.organization)} className={fieldClass} />{error("organization")}</div>
      <div><label htmlFor="context" className="block text-sm font-semibold">Organization context</label><select id="context" name="context" defaultValue="" aria-invalid={Boolean(errors.context)} className={fieldClass}><option value="">Choose one</option><option>Healthcare or care</option><option>Education or learning</option><option>Public or civic sector</option><option>Research or knowledge work</option><option>Regulated or sensitive operations</option><option>Other</option></select>{error("context")}</div>
      <div className="md:col-span-2"><label htmlFor="focus" className="block text-sm font-semibold">What would be most useful to discuss?</label><select id="focus" name="focus" defaultValue="" aria-invalid={Boolean(errors.focus)} className={fieldClass}><option value="">Choose one</option><option>AI strategy and discovery</option><option>Private AI architecture</option><option>Human-in-the-loop workflow</option><option>Applied AI prototype</option><option>Principles and risk posture</option><option>I am still framing the problem</option></select>{error("focus")}</div>
      <div className="md:col-span-2"><label htmlFor="situation" className="block text-sm font-semibold">What decision or workflow are you trying to understand?</label><textarea id="situation" name="situation" maxLength={SITUATION_MAX_LENGTH} aria-invalid={Boolean(errors.situation)} className={`${fieldClass} min-h-32`} /><p className="mt-2 text-xs leading-5 text-slate-500">High-level description only. Do not include confidential, regulated, personal, security-sensitive, or proprietary information.</p>{error("situation")}</div>
      <div><label htmlFor="timing" className="block text-sm font-semibold">Broad timing</label><select id="timing" name="timing" className={fieldClass}><option>Exploring the question</option><option>Planning a focused discovery</option><option>Considering a prototype</option><option>Timing is not yet defined</option></select></div>
      <label className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">Leave empty<input tabIndex={-1} autoComplete="off" name="website" /></label>
      <div className="md:col-span-2"><label className="flex items-start gap-3 text-xs leading-5 text-slate-400"><input name="consent" value="yes" type="checkbox" className="mt-1 accent-cyan-300" /> <span>I understand this is a local preview. No data is sent or stored.</span></label>{error("consent")}</div>
      <div className="flex flex-col gap-4 border-t border-cyan-300/15 pt-5 md:col-span-2 md:flex-row md:items-center md:justify-between"><p className="max-w-xl text-xs leading-5 text-slate-500">Preview only — no network request, analytics, email, database, CRM, or storage. Real integration requires approved privacy and retention design.</p><button type="submit" className="bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#0A0F2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">Test local success state →</button></div>
    </form>}</section>
  </main><Footer /></div>;
}
