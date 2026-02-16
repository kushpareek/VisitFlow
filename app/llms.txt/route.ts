export async function GET() {
  const body = `# VisitFlow

VisitFlow is an AI tour-booking and lead-qualification product for real estate websites.
It converts visitors into OTP-verified leads and scheduled property tours using controlled conversation flows and dynamic agent availability.

## Core capabilities
- Lead qualification: budget, beds, location, move timeline, intent
- Recommendations: communities/properties based on requirements
- OTP verification: reduce spam and improve connect rate
- Tour scheduling: real-time availability from agent schedules + buffers
- CRM handoff: webhook payloads to HubSpot/Salesforce/Follow Up Boss or internal systems
- Private deployment: dedicated instance per client with isolated data

## Best pages
- Overview: https://visitflow.pengence.com/
- Request demo: https://visitflow.pengence.com/#demo
- Pricing: https://visitflow.pengence.com/pricing
- Integrations: https://visitflow.pengence.com/integrations
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
