// app/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Script from "next/script";
import type { Variants } from "framer-motion";

const PRODUCT = {
  name: "VisitFlow AI",
  poweredBy: "Powered by Pengence AI",
  primaryCta: { label: "Book a Demo", href: "#demo" },
  secondaryCta: { label: "See How It Works", href: "#how" },
};

const VALUE_POINTS = [
  { k: "24/7", v: "Tours booked after-hours" },
  { k: "OTP", v: "Verified lead capture" },
  { k: "CRM", v: "Structured handoff payload" },
];

const STEPS = [
  { n: "01", title: "Qualify", desc: "Guided steps + AI extraction to capture intent, budget, and preferences." },
  { n: "02", title: "Recommend", desc: "Match visitors to communities and let them pick before booking a tour." },
  { n: "03", title: "Book", desc: "OTP verify → choose tour type → pick a real-time available slot → confirm." },
];

const FEATURES = [
  {
    title: "Controlled flow, AI understanding",
    desc: "AI only extracts structured fields. The flow remains predictable and safe for enterprise usage.",
  },
  {
    title: "Multi-city and community routing",
    desc: "Route by city, community, budget band, and inventory across multiple markets.",
  },
  {
    title: "Dynamic agent availability",
    desc: "Availability generated from agent schedules + existing bookings with buffers and rules.",
  },
  {
    title: "Lead scoring and audit logs",
    desc: "Score leads by intent and readiness. Log conversations, extracted fields, and booking events.",
  },
  {
    title: "CRM handoff via webhook",
    desc: "Push clean payloads to HubSpot/Salesforce/FollowUpBoss or your internal systems.",
  },
  {
    title: "Private deployment per client",
    desc: "Dedicated instance with isolated DB and configuration — enterprise-friendly by design.",
  },
];

const FAQ = [
  {
    q: "Is this a chatbot that can hallucinate pricing?",
    a: "No. VisitFlow uses controlled flows. AI only extracts structured fields — outputs stay safe and predictable.",
  },
  {
    q: "We already use HubSpot / Salesforce. Does this replace it?",
    a: "It complements it. VisitFlow qualifies and books tours first, then pushes clean data into your CRM.",
  },
  {
    q: "Is this SaaS or custom deployment?",
    a: "We deploy a dedicated instance per client with isolated database, routing rules, and brand configuration.",
  },
  {
    q: "How fast can we go live?",
    a: "Typically 3–6 weeks depending on integration requirements and number of communities/agents.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const easeOut: [number, number, number, number] = [0.2, 0.85, 0.2, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOut },
  },
};


export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <DeepMindBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/25 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
    
    {/* Brand Name Only */}
    {/* Wordmark (no icon, premium) */}
<a href="#" className="group relative inline-flex items-baseline">
  {/* soft glow behind */}
  <span className="pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/15 to-emerald-400/20 blur-xl opacity-70 transition group-hover:opacity-100" />

  {/* subtle highlight line */}
  <span className="pointer-events-none absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />

  <span className="text-lg font-semibold tracking-[-0.02em] text-white">
    Visit<span className="text-white/85">Flow</span>
  </span>

  <span className="ml-2 hidden text-xs font-medium tracking-wide text-white/45 md:inline-block">
    AI
  </span>
</a>


    <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
      <a className="hover:text-white transition" href="#how">How it works</a>
      <a className="hover:text-white transition" href="#features">Features</a>
      <a className="hover:text-white transition" href="#security">Security</a>
      
      <Link href="/integrations" className="hover:text-white transition">
  Integrations
</Link>
<Link href="/pricing" className="hover:text-white transition">
  Pricing
</Link>
<a className="hover:text-white transition" href="#faq">FAQ</a>
    </nav>

    <div className="flex items-center gap-3">
      <a
        href="#demo"
        className="relative"
      >
        <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/45 via-fuchsia-400/35 to-emerald-400/45 blur-2xl" />
        <span className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition">
          Book a Demo
        </span>
      </a>
    </div>

  </div>
  <div className="border-b border-white/10" />
</header>


      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24">
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-16 md:grid-cols-2">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_28px_rgba(110,231,183,0.65)]" />
                Private deployment for real estate developers
              </div>

              <h1 className="mt-8 text-6xl font-semibold tracking-tight md:text-7xl">
                Turn website visitors into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-emerald-200">
                  booked property tours
                </span>{" "}
                — 24/7.
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/70">
                VisitFlow qualifies leads, recommends communities, verifies phone numbers via OTP,
                and schedules tours based on real agent availability — while your team sleeps.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <a href="#demo" className="relative">
                  
                  <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/45 via-fuchsia-400/35 to-emerald-400/45 blur-2xl" />
                  <span className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-base font-semibold text-black hover:bg-white/90 transition">
                    Book a Demo
                  </span>
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/5 px-10 py-5 text-base font-semibold text-white/85 hover:bg-white/10 transition"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-5">
                {VALUE_POINTS.map((p) => (
                  <div key={p.k} className="rounded-[28px] bg-white/5 px-6 py-5">
                    <div className="text-2xl font-semibold">{p.k}</div>
                    <div className="mt-2 text-sm text-white/60">{p.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/60">
                <Badge text="Multi-city" />
                <Badge text="Controlled AI" />
                <Badge text="OTP verified" />
                <Badge text="Dynamic availability" />
                <Badge text="Webhook to CRM" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <Surface>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Live flow preview</div>
                  <div className="text-xs text-white/55">Visitor → Tour booked</div>
                </div>

                <div className="mt-7 space-y-4">
                  <ChatBubble side="bot" text="Hi! Buying now or just exploring?" />
                  <ChatBubble side="user" text="3 bed under $600k in Austin near the tech corridor." />
                  <ChatBubble side="bot" text="Here are communities that match. Pick one to schedule a tour." />

                  <div className="grid grid-cols-2 gap-3">
                    <MiniCard title="Skyline Grove" meta="$430k–$590k • 2–3 Beds" />
                    <MiniCard title="Cedar Valley Estates" meta="$520k–$680k • 3–4 Beds" />
                  </div>

                  <ChatBubble side="bot" text="Verify your phone to book a tour (OTP)." />
                  <ChatBubble side="user" text="Verified. Saturday 11:00 AM." />
                  <ChatBubble side="bot" text="Confirmed — booked and assigned to an available agent." />
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  <Pill label="Lead scoring" />
                  <Pill label="OTP verified" />
                  <Pill label="Agent routing" />
                </div>
              </Surface>

              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 rounded-[56px] bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/8 to-emerald-500/10 blur-2xl"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How */}
      <Section id="how" title="How it works" subtitle="Controlled steps with AI extraction — structured data, predictable output, enterprise safe.">
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {STEPS.map((s) => (
            <Card key={s.n}>
              <div className="text-xs font-semibold text-white/50">{s.n}</div>
              <div className="mt-4 text-2xl font-semibold">{s.title}</div>
              <p className="mt-4 text-lg leading-relaxed text-white/70">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section id="features" title="Built for conversion." subtitle="Qualify demand, recommend communities, and book tours — without adding headcount.">
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <div className="text-2xl font-semibold">{f.title}</div>
              <p className="mt-4 text-lg leading-relaxed text-white/70">{f.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Security */}
      <Section
        id="security"
        title="Enterprise-ready by design."
        subtitle="Dedicated deployment, controlled AI behavior, and audit-friendly logs."
        alt
      >
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          <Card>
            <div className="text-2xl font-semibold">Private deployment</div>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Dedicated instance per client with isolated database and configuration.
            </p>
          </Card>
          <Card>
            <div className="text-2xl font-semibold">Controlled AI</div>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              AI is used only for classification and extraction — not open-ended replies.
            </p>
          </Card>
          <Card>
            <div className="text-2xl font-semibold">Audit-friendly</div>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Conversations, extracted fields, and booking events are logged for traceability.
            </p>
          </Card>
        </div>

        <div className="mt-12 rounded-[36px] bg-white/5 p-12">
          <div className="text-2xl font-semibold">Integration-ready</div>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            CRM handoff via webhooks and configurable routing rules by city, community, budget, and agent availability.
          </p>
        </div>
      </Section>

      {/* Demo */}
      <section id="demo" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="relative overflow-hidden rounded-[44px] bg-white/5 p-14">
            <motion.div
              aria-hidden
              className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">See VisitFlow in action.</h2>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/70">
              We’ll walk you through the complete flow: qualification → recommendations → OTP → dynamic scheduling → CRM handoff.
            </p>

            <DemoForm />


            <div className="mt-8 text-sm text-white/50">Prefer Calendly? We’ll add it in minutes.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="Short answers to common enterprise questions.">
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {FAQ.map((f) => (
            <Card key={f.q}>
              <div className="text-xl font-semibold">{f.q}</div>
              <p className="mt-4 text-lg leading-relaxed text-white/70">{f.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">{PRODUCT.name}</div>
          <div className="text-sm text-white/60">{PRODUCT.poweredBy}</div>
        </div>
      </footer>
    </div>
  );
}

/** DeepMind-ish background: aurora sheets + slow motion + subtle noise */
function DeepMindBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />

      {/* aurora sheets */}
      <motion.div
        aria-hidden
        className="absolute -top-80 left-1/2 h-[900px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/18 via-fuchsia-500/14 to-emerald-500/16 blur-3xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-[10%] left-[-10%] h-[800px] w-[900px] rounded-full bg-gradient-to-br from-indigo-500/12 via-cyan-500/10 to-transparent blur-3xl"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-15%] right-[-10%] h-[860px] w-[980px] rounded-full bg-gradient-to-br from-fuchsia-500/12 via-emerald-500/10 to-transparent blur-3xl"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.92)_100%)]" />
    </div>
  );
}

function LogoMark() {
  return (
    <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/45 via-fuchsia-500/35 to-emerald-400/40" />
      <div className="absolute inset-[1px] rounded-2xl bg-black/55" />
      <div className="absolute inset-0 opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] bg-white" />
    </div>
  );
}

function Surface({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[36px] bg-white/5 p-8">
      {children}
    </div>
  );
}

function Section({
  id,
  title,
  subtitle,
  alt,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`border-t border-white/10 ${alt ? "bg-black" : "bg-black"}`}>
      <div className="mx-auto max-w-7xl px-6 py-28">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/70">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[36px] bg-white/5 p-10 hover:bg-white/10 transition">
      {children}
    </div>
  );
}

function ChatBubble({ side, text }: { side: "bot" | "user"; text: string }) {
  const isUser = side === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser ? "bg-white text-black" : "bg-white/10 text-white/90"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function MiniCard({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="rounded-3xl bg-white/5 p-4 hover:bg-white/10 transition">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-white/55">{meta}</div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div className="rounded-full bg-white/5 px-3 py-2 text-center text-xs font-semibold text-white/75">
      {label}
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return <span className="rounded-full bg-white/5 px-4 py-2">{text}</span>;
}
function DemoForm() {
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      website: String(fd.get("website") || ""),
      city: String(fd.get("city") || ""),
      budget: String(fd.get("budget") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setDone(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err?.message || "Failed to submit.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-[36px] bg-white/5 p-10">
        <div className="text-2xl font-semibold">Request received.</div>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Our team will connect with you soon.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-8 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[36px] bg-white/5 p-10">
      <div className="text-2xl font-semibold">Request a demo</div>
      <p className="mt-3 text-lg text-white/70">
        Share a few details — we’ll reach out shortly.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Input name="fullName" label="Full name" required />
        <Input name="email" label="Work email" type="email" required />
        <Input name="phone" label="Phone (optional)" />
        <Input name="company" label="Company" />
        <Input name="website" label="Website" />
        <Input name="city" label="Primary market / city" />
        <Input name="budget" label="Avg. budget range (optional)" />
        <div className="md:col-span-2">
          <Textarea name="message" label="Message (optional)" rows={4} />
        </div>
      </div>

      {error && <div className="mt-5 text-sm text-red-300">{error}</div>}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          disabled={loading}
          className="relative inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-base font-semibold text-black hover:bg-white/90 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        <div className="text-sm text-white/50">
          You’ll also get a confirmation email.
        </div>
      </div>
    </form>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-sm text-white/60">{label}</div>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl bg-black/40 px-4 py-4 text-base text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-white/25"
        placeholder={label}
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  rows = 4,
}: {
  label: string;
  name: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <div className="text-sm text-white/60">{label}</div>
      <textarea
        name={name}
        rows={rows}
        className="mt-2 w-full rounded-2xl bg-black/40 px-4 py-4 text-base text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-white/25"
        placeholder={label}
      />
    </label>
  );
}
