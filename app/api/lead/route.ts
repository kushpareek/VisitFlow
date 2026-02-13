import { NextResponse } from "next/server";

type LeadPayload = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  city?: string;
  budget?: string;
  message?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    if (!body.fullName?.trim()) {
      return NextResponse.json({ ok: false, error: "Full name is required." }, { status: 400 });
    }
    if (!body.email?.trim() || !isEmail(body.email)) {
      return NextResponse.json({ ok: false, error: "Valid email is required." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || "VisitFlow";
    const notifyTo = process.env.BREVO_NOTIFY_TO_EMAIL;

    if (!apiKey || !senderEmail || !notifyTo) {
      return NextResponse.json(
        { ok: false, error: "Server email config missing. Check .env.local." },
        { status: 500 }
      );
    }

    const now = new Date().toISOString();

    // 1) Notify your team
    const notifyHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 10px">New VisitFlow Lead</h2>
        <p style="margin:0 0 12px;color:#444">Received: ${now}</p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;border:1px solid #ddd">
          <tr><td style="border:1px solid #ddd"><b>Name</b></td><td style="border:1px solid #ddd">${escapeHtml(body.fullName)}</td></tr>
          <tr><td style="border:1px solid #ddd"><b>Email</b></td><td style="border:1px solid #ddd">${escapeHtml(body.email)}</td></tr>
          <tr><td style="border:1px solid #ddd"><b>Phone</b></td><td style="border:1px solid #ddd">${escapeHtml(body.phone || "-")}</td></tr>
          <tr><td style="border:1px solid #ddd"><b>Company</b></td><td style="border:1px solid #ddd">${escapeHtml(body.company || "-")}</td></tr>
          <tr><td style="border:1px solid #ddd"><b>Website</b></td><td style="border:1px solid #ddd">${escapeHtml(body.website || "-")}</td></tr>
          <tr><td style="border:1px solid #ddd"><b>City/Market</b></td><td style="border:1px solid #ddd">${escapeHtml(body.city || "-")}</td></tr>
          <tr><td style="border:1px solid #ddd"><b>Budget</b></td><td style="border:1px solid #ddd">${escapeHtml(body.budget || "-")}</td></tr>
          <tr><td style="border:1px solid #ddd"><b>Message</b></td><td style="border:1px solid #ddd">${escapeHtml(body.message || "-")}</td></tr>
        </table>
      </div>
    `;

    const notifyPayload = {
      sender: { email: senderEmail, name: senderName },
      to: [{ email: notifyTo, name: "Sales Team" }],
      subject: `VisitFlow Lead — ${body.fullName} (${body.city || "N/A"})`,
      htmlContent: notifyHtml,
    };

    const notifyRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(notifyPayload),
    });

    if (!notifyRes.ok) {
      const t = await notifyRes.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: "Failed to send notification email.", details: t },
        { status: 502 }
      );
    }

    // 2) Auto-reply to the user (optional but recommended)
    const replyHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <p>Hi ${escapeHtml(body.fullName)},</p>
        <p>Thanks for reaching out to <b>VisitFlow</b>. We’ve received your details and our team will connect with you soon.</p>
        <p style="color:#555">If you’d like to share anything else, just reply to this email.</p>
        <p>— ${escapeHtml(senderName)} Team</p>
      </div>
    `;

    const replyPayload = {
      sender: { email: senderEmail, name: senderName },
      to: [{ email: body.email, name: body.fullName }],
      subject: "We received your request — VisitFlow",
      htmlContent: replyHtml,
    };

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(replyPayload),
    }).catch(() => {
      // don't fail the whole request if auto-reply fails
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: "Unexpected server error." }, { status: 500 });
  }
}

// Basic HTML escape
function escapeHtml(input: string) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
