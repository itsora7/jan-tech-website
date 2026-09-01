// Supabase Edge Runtime types
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

interface ContactPayload {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  serviceRequired?: string;
  subject?: string;
  message?: string;
  turnstileToken?: string;
}

const jsonResponse = (
  body: Record<string, unknown>,
  status = 200,
) => {
  return Response.json(body, { status });
};

const escapeHtml = (value: string) => {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

export default {
  fetch: withSupabase(
    {
      auth: ["publishable", "secret"],
    },
    async (req, ctx) => {
      if (req.method !== "POST") {
        return jsonResponse(
          {
            success: false,
            message: "Method not allowed.",
          },
          405,
        );
      }

      try {
        const turnstileSecret =
          Deno.env.get("TURNSTILE_SECRET_KEY");

        const resendApiKey =
          Deno.env.get("RESEND_API_KEY");

        if (!turnstileSecret) {
          console.error(
            "TURNSTILE_SECRET_KEY is not configured.",
          );

          return jsonResponse(
            {
              success: false,
              message: "Server configuration error.",
            },
            500,
          );
        }

        if (!resendApiKey) {
          console.error(
            "RESEND_API_KEY is not configured.",
          );

          return jsonResponse(
            {
              success: false,
              message: "Server configuration error.",
            },
            500,
          );
        }

        const body: ContactPayload = await req.json();

        const turnstileToken =
          String(body.turnstileToken ?? "").trim();

        const fullName =
          String(body.fullName ?? "").trim();

        const email =
          String(body.email ?? "").trim();

        const phone =
          String(body.phone ?? "").trim();

        const companyName =
          String(body.companyName ?? "").trim();

        const serviceRequired =
          String(body.serviceRequired ?? "").trim();

        const subject =
          String(body.subject ?? "").trim();

        const message =
          String(body.message ?? "").trim();

        // -----------------------------
        // Turnstile token required
        // -----------------------------

        if (!turnstileToken) {
          return jsonResponse(
            {
              success: false,
              message:
                "Security verification is required.",
            },
            400,
          );
        }

        // -----------------------------
        // Required fields
        // -----------------------------

        if (
          !fullName ||
          !email ||
          !subject ||
          !message
        ) {
          return jsonResponse(
            {
              success: false,
              message:
                "Please complete all required fields.",
            },
            400,
          );
        }

        // -----------------------------
        // Server-side validation
        // -----------------------------

        if (
          fullName.length < 2 ||
          fullName.length > 100
        ) {
          return jsonResponse(
            {
              success: false,
              message:
                "Please enter a valid full name.",
            },
            400,
          );
        }

        const emailPattern =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
          email.length > 254 ||
          !emailPattern.test(email)
        ) {
          return jsonResponse(
            {
              success: false,
              message:
                "Please enter a valid email address.",
            },
            400,
          );
        }

        if (phone.length > 30) {
          return jsonResponse(
            {
              success: false,
              message:
                "Phone number is too long.",
            },
            400,
          );
        }

        if (companyName.length > 150) {
          return jsonResponse(
            {
              success: false,
              message:
                "Company name is too long.",
            },
            400,
          );
        }

        if (serviceRequired.length > 100) {
          return jsonResponse(
            {
              success: false,
              message:
                "Invalid service selection.",
            },
            400,
          );
        }

        if (
          subject.length < 2 ||
          subject.length > 200
        ) {
          return jsonResponse(
            {
              success: false,
              message:
                "Please enter a valid subject.",
            },
            400,
          );
        }

        if (
          message.length < 10 ||
          message.length > 5000
        ) {
          return jsonResponse(
            {
              success: false,
              message:
                "Your message must contain between 10 and 5000 characters.",
            },
            400,
          );
        }

        // -----------------------------
        // Verify Cloudflare Turnstile
        // -----------------------------

        const verificationBody =
          new URLSearchParams();

        verificationBody.set(
          "secret",
          turnstileSecret,
        );

        verificationBody.set(
          "response",
          turnstileToken,
        );

        const forwardedFor =
          req.headers.get("x-forwarded-for");

        if (forwardedFor) {
          const clientIp =
            forwardedFor.split(",")[0].trim();

          if (clientIp) {
            verificationBody.set(
              "remoteip",
              clientIp,
            );
          }
        }

        const turnstileResponse = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded",
            },
            body: verificationBody,
          },
        );

        if (!turnstileResponse.ok) {
          console.error(
            "Turnstile Siteverify request failed:",
            turnstileResponse.status,
          );

          return jsonResponse(
            {
              success: false,
              message:
                "Security verification could not be completed.",
            },
            502,
          );
        }

        const turnstileResult =
          await turnstileResponse.json();

        if (!turnstileResult.success) {
          console.error(
            "Turnstile verification rejected:",
            turnstileResult,
          );

          return jsonResponse(
            {
              success: false,
              message:
                "Security verification failed. Please refresh and try again.",
            },
            403,
          );
        }

        // -----------------------------
        // Store inquiry
        // -----------------------------

        const { error } =
          await ctx.supabaseAdmin
            .from("contact_inquiries")
            .insert({
              full_name: fullName,
              email,
              phone: phone || null,
              company_name:
                companyName || null,
              service_required:
                serviceRequired || null,
              subject,
              message,
            });

        if (error) {
          console.error(
            "Contact inquiry insert failed:",
            error,
          );

          return jsonResponse(
            {
              success: false,
              message:
                "Your inquiry could not be saved. Please try again.",
            },
            500,
          );
        }

        // -----------------------------
        // Send email notification
        // -----------------------------

        const emailResponse = await fetch(
          "https://api.resend.com/emails",
          {
            method: "POST",
            headers: {
              Authorization:
                `Bearer ${resendApiKey}`,
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              from:
                "Jan Tech Website <onboarding@resend.dev>",
              to: ["itsora7@gmail.com"],
              reply_to: email,
              subject:
                `New Jan Tech inquiry: ${subject}`,
              html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0b1630;">
                  <h2>New Jan Tech Contact Inquiry</h2>

                  <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
                  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                  <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
                  <p><strong>Company:</strong> ${escapeHtml(companyName || "Not provided")}</p>
                  <p><strong>Service:</strong> ${escapeHtml(serviceRequired || "Not selected")}</p>
                  <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

                  <hr />

                  <p><strong>Message:</strong></p>
                  <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
                </div>
              `,
            }),
          },
        );

        const emailResult =
          await emailResponse.json();

        if (!emailResponse.ok) {
          console.error(
            "Resend email failed:",
            emailResult,
          );

          return jsonResponse(
            {
              success: false,
              message:
                "Your inquiry was saved, but the notification email could not be sent.",
            },
            502,
          );
        }

        console.log(
          "Contact inquiry email sent:",
          emailResult,
        );

        return jsonResponse({
          success: true,
          message:
            "Thank you for contacting Jan Tech. Your inquiry has been sent successfully.",
        });
      } catch (error) {
        console.error(
          "submit-contact function failed:",
          error,
        );

        return jsonResponse(
          {
            success: false,
            message:
              "Something went wrong. Please try again later.",
          },
          500,
        );
      }
    },
  ),
};