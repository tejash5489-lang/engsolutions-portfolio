import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/email";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  fullName: string;
  email: string;
  projectDetails: string;
};

function validate(body: unknown): { data: ContactPayload } | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Invalid request body." };
  }

  const { fullName, email, projectDetails } = body as Record<string, unknown>;

  if (typeof fullName !== "string" || fullName.trim().length === 0) {
    return { error: "Full name is required." };
  }
  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim())) {
    return { error: "A valid email address is required." };
  }
  if (typeof projectDetails !== "string" || projectDetails.trim().length === 0) {
    return { error: "Project details are required." };
  }

  return {
    data: {
      fullName: fullName.trim().slice(0, 200),
      email: email.trim().slice(0, 200),
      projectDetails: projectDetails.trim().slice(0, 5000),
    },
  };
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = validate(body);

  if ("error" in result) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    console.error("CONTACT_TO_EMAIL is not set.");
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured yet." },
      { status: 500 },
    );
  }

  const { fullName, email, projectDetails } = result.data;

  try {
    const resend = getResendClient();
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New project inquiry from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\n\nProject details:\n${projectDetails}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Couldn't send your message right now. Please email me directly instead.",
      },
      { status: 500 },
    );
  }
}
