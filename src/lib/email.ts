import "server-only";
import { Resend } from "resend";

/**
 * Server-side Resend client for emailing contact-form submissions.
 *
 * Requires RESEND_API_KEY (free tier, no card required — resend.com/signup,
 * then dashboard > API Keys). Sends use the shared `onboarding@resend.dev`
 * address since that works without verifying a custom domain.
 */
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Create a free Resend account, generate an API key, then set RESEND_API_KEY in .env.local.",
    );
  }

  return new Resend(apiKey);
}
