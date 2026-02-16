import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | VisitFlow",
  description:
    "VisitFlow pricing for real estate tour booking automation: AI qualification, OTP verification, dynamic scheduling, and CRM/webhook handoff.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/" className="text-sm text-white/60 hover:text-white transition">
          ← Back to VisitFlow
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl">
          Pricing
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-white/70">
          VisitFlow is deployed as a <b>dedicated instance per client</b>. This keeps your routing rules,
          agent availability, and lead data isolated—ideal for real estate firms that want reliability and control.
          Pricing depends on your number of communities, markets (multi-city), integrations, and expected traffic.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">What’s included in every plan</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Every VisitFlow deployment includes controlled conversation flows (so answers stay predictable),
          AI-based field extraction (requirements captured cleanly), OTP verification (to reduce spam),
          dynamic scheduling (based on real availability), and structured lead delivery via webhook.
          Your sales team gets fewer low-intent leads and more tour bookings—without increasing headcount.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Starter</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Best for single-market builders or teams that want to launch quickly. Starter includes the full qualification
          and booking flow, OTP verification, standard lead payloads, and basic reporting. This tier works well when you
          have a limited number of communities and a small agent team, but still want 24/7 coverage on your website.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Growth</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Built for multi-community and multi-city operators. Growth adds advanced routing rules (city/community/budget band),
          flexible availability configuration, and integration support for common CRMs. If you run multiple markets and need
          consistent qualification across every website property, Growth is usually the best fit.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Enterprise</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          For large real estate firms that require stricter controls: custom security requirements, dedicated support,
          deeper audit logging, custom integration payloads, and SLA discussions. Enterprise is recommended when you have
          multiple departments, multiple brands, or complex lead ownership rules across teams.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">One-time setup and timeline</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Most clients go live in <b>3–6 weeks</b>, depending on the number of communities and integration requirements.
          Setup typically includes: content/routing configuration, OTP setup, webhook/CRM configuration, validation testing,
          and a short training session for your sales or appointment team.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Request a quote</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          The fastest way to price your deployment is to review your current funnel:
          monthly website visitors, average lead volume, number of communities, and your current CRM.
          Share those details and we’ll respond with a recommended plan and rollout approach.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/#demo"
            className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black hover:bg-white/90 transition"
          >
            Book a Demo
          </a>
          <Link
            href="/integrations"
            className="rounded-2xl bg-white/5 px-8 py-4 text-base font-semibold text-white/85 hover:bg-white/10 transition"
          >
            View Integrations
          </Link>
        </div>

        <p className="mt-10 text-sm text-white/50">
          Prefer email? Use the demo form on the homepage. We reply quickly.
        </p>
      </div>
    </main>
  );
}
