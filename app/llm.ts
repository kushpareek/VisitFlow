export async function GET() {
  const body = `# VisitFlow

VisitFlow is an AI tour-booking and lead-qualification product for real estate websites.
It converts visitors into OTP-verified leads and scheduled tours using controlled conversation flows and dynamic agent availability.

## Core capabilities
- Lead qualification (budget, beds, location, timeline)
- Recommendations (community/property suggestions)
- OTP verification (reduce spam leads)
- Tour scheduling (agent availability + buffers)
- CRM handoff (webhook payload)

## Best pages
- Product overview: https://visitflow.pengence.com/
- Request demo: https://visitflow.pengence.com/#demo
- How it works: https://visitflow.pengence.com/#how
- Features: https://visitflow.pengence.com/#features
- Security: https://visitflow.pengence.com/#security
- FAQ: https://visitflow.pengence.com/#faq

## Pricing & docs (recommended next)
- Pricing: https://visitflow.pengence.com/pricing
- Integrations: https://visitflow.pengence.com/integrations
- Deployment: https://visitflow.pengence.com/deployment
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
