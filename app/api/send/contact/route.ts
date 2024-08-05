import { EmailTemplate } from "@/app/contact/components/email-template";
import { FormInputs } from "@/app/contact/components/FormContact";
import { MAIL_COURS_GEROA } from "@/lib/resend/constant";
import { Resend } from "resend";
export const SEND_CONTACT_ROUTE = "api/send/contact";

const RESEND_API_KEY = "re_hR6f89g9_AXg1KAQyAH1HMYmDSkYir2UK";

const resend = new Resend(RESEND_API_KEY);

// Define the EmailContactRequestBody interface
export interface EmailContactRequestBody extends FormInputs {
  subject: string;
}

// Type guard to validate if an object is of type EmailContactRequestBody
function isEmailContactRequestBody(body: any): body is EmailContactRequestBody {
  return (
    typeof body === "object" &&
    body !== null &&
    typeof body.subject === "string" &&
    typeof body.email === "string" &&
    body.email.length >= 5 && // Validate email length as per formSchema
    Array.isArray(body.matieres) &&
    typeof body.firstname === "string" &&
    body.firstname.length >= 2 &&
    typeof body.lastname === "string" &&
    body.lastname.length >= 2 &&
    (body.specialite === undefined || typeof body.specialite === "string") &&
    (body.ville === undefined ||
      (typeof body.ville === "string" && body.ville.length >= 2))
  );
}

export async function POST(request: Request) {
  try {
    // Extraire les données du corps de la requête et les typer
    const body = await request.json();

    // Vérifier si le sujet est fourni
    if (!isEmailContactRequestBody(body)) {
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
      });
    }

    const { subject } = body;
    const { data, error } = await resend.emails.send({
      from: `${body.lastname} <contact@resend.dev>`,
      to: [MAIL_COURS_GEROA],
      subject,
      react: EmailTemplate(body),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
