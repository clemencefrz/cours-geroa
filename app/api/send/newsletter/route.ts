import { MAIL_COURS_GEROA } from "@/lib/resend/constant";
import { Resend } from "resend";

const RESEND_API_KEY = "re_hR6f89g9_AXg1KAQyAH1HMYmDSkYir2UK";

const resend = new Resend(RESEND_API_KEY);
export const SEND_NEWSLETTER_ROUTE = "api/send/newsletter";

// Define the EmailNewsletterRequestBody interface
export interface EmailNewsletterRequestBody {
  subject: string;
  email: string;
}

// Type guard to validate if an object is of type EmailNewsletterRequestBody
function isEmailNewsletterRequestBody(
  body: any
): body is EmailNewsletterRequestBody {
  return (
    typeof body === "object" &&
    body !== null &&
    typeof body.subject === "string" &&
    typeof body.email === "string" &&
    body.email.length >= 5 // Validate email length as per formSchema
  );
}

export async function POST(request: Request) {
  try {
    // Extraire les données du corps de la requête et les typer
    const body = await request.json();

    // Vérifier si le sujet est fourni
    if (!isEmailNewsletterRequestBody(body)) {
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
      });
    }

    const { subject } = body;
    const { data, error } = await resend.emails.send({
      from: `${body.email} <contact@resend.dev>`,
      to: [MAIL_COURS_GEROA],
      subject,
      text: "Inscription",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
