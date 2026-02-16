import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations | VisitFlow",
  description:
    "Integrate VisitFlow with HubSpot, Salesforce, Follow Up Boss, or any CRM via webhook. Structured lead payloads, booking events, and routing metadata.",
};

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/" className="text-sm text-white/60 hover:text-white transition">
          ← Back to VisitFlow
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl">
          Integrations
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-white/70">
          VisitFlow is designed to fit into your existing sales stack. We capture clean requirements,
          verify the user via OTP (optional), confirm the tour slot, and then deliver a <b>structured payload</b>
          into your CRM or backend. This keeps your team focused on closing—rather than cleaning up lead data.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Webhook-first CRM handoff</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Every deployment supports webhooks so your systems receive consistent data. Typical payload fields include:
          visitor contact details, market/city, budget range, beds/baths preference, move timeline, selected community,
          chosen tour type, scheduled slot, and internal routing metadata (agent assignment, source page, campaign tags).
          This makes reporting and attribution easier, and prevents partial or ambiguous lead notes.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">HubSpot</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Push leads as Contacts, create Deals, and log tour booking events as timeline activities. If your team uses HubSpot
          pipelines, we can map VisitFlow fields into your preferred properties so sales reps see qualification context instantly.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Salesforce</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          For Salesforce teams, VisitFlow can create Leads, update custom fields, and log booking events for reporting.
          If you already have rules for territory assignment or lead ownership, we align VisitFlow routing to match those rules
          so your sales ops doesn’t fight a new workflow.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Follow Up Boss</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Many real estate teams rely on Follow Up Boss for lead distribution and follow-up automation. VisitFlow integrates via
          structured lead payloads so your team sees: what the visitor asked for, what was recommended, and what tour was scheduled.
          This reduces no-shows and improves first-call conversion.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Calendars and scheduling</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          VisitFlow supports dynamic availability based on configured working hours and booked slots. If you already use a calendar
          workflow (like Google Calendar / Outlook / Calendly), we can integrate at the event layer, or we can keep scheduling inside
          VisitFlow and sync confirmations back to your team. The goal is simple: prevent double-booking and reduce friction for buyers.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">What we recommend for USA teams</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          If you want the fastest rollout: start with webhook → CRM lead creation, then add deeper activity logging after week one.
          This gives you immediate ROI: higher tour booking rate, cleaner lead context, and fewer missed after-hours inquiries.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/#demo"
            className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black hover:bg-white/90 transition"
          >
            Book a Demo
          </a>
          <Link
            href="/pricing"
            className="rounded-2xl bg-white/5 px-8 py-4 text-base font-semibold text-white/85 hover:bg-white/10 transition"
          >
            View Pricing
          </Link>
        </div>

        <p className="mt-10 text-sm text-white/50">
          Want a custom integration? Share your CRM name and current lead fields in the demo form.
        </p>
      </div>
    </main>
  );
}
