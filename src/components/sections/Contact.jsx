import { useEffect, useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

import Section from "../layout/Section";
import Button from "../ui/Button";
import FormField from "../ui/FormField";
import SectionHeading from "../ui/SectionHeading";
import TextAreaField from "../ui/TextAreaField";

import { supabase } from "../../lib/supabase";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  serviceRequired: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(
    () => window.innerWidth < 360,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 359px)");

    const handleScreenChange = (event) => {
      setIsSmallScreen(event.matches);
      setTurnstileToken("");
      setTurnstileKey((currentKey) => currentKey + 1);
    };

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setFormMessage("");
    setFormStatus("");
  };

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileKey((currentKey) => currentKey + 1);
  };

  const handleNewInquiry = () => {
    setFormData(initialFormData);
    setFormMessage("");
    setFormStatus("");
    setIsSubmitted(false);
    resetTurnstile();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting || isSubmitted) {
      return;
    }

    if (!turnstileToken) {
      setFormStatus("error");
      setFormMessage("Please complete the security verification.");
      return;
    }

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const companyName = formData.companyName.trim();
    const serviceRequired = formData.serviceRequired.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!fullName || !email || !subject || !message) {
      setFormStatus("error");
      setFormMessage("Please complete all required fields.");
      return;
    }

    if (fullName.length < 2) {
      setFormStatus("error");
      setFormMessage("Please enter your full name.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setFormStatus("error");
      setFormMessage("Please enter a valid email address.");
      return;
    }

    if (subject.length < 2) {
      setFormStatus("error");
      setFormMessage("Please enter a valid subject.");
      return;
    }

    if (message.length < 10) {
      setFormStatus("error");
      setFormMessage("Please provide a little more detail in your message.");
      return;
    }

    setIsSubmitting(true);
    setFormMessage("");
    setFormStatus("");

    try {
      const { data, error } = await supabase.functions.invoke(
        "submit-contact",
        {
          body: {
            fullName,
            email,
            phone,
            companyName,
            serviceRequired,
            subject,
            message,
            turnstileToken,
          },
        },
      );

      if (error) {
        console.error("submit-contact Edge Function error:", error);

        // supabase-js only sets `error.message` to a generic
        // "non-2xx status code" string. The real validation message is in
        // the response body, reachable through `error.context`.
        let serverMessage;

        try {
          const body = await error.context?.json();
          serverMessage = body?.message;
        } catch {
          serverMessage = undefined;
        }

        throw new Error(serverMessage || "");
      }

      if (!data?.success) {
        throw new Error(
          data?.message || "Your inquiry could not be submitted.",
        );
      }

      setFormData(initialFormData);
      setTurnstileToken("");
      setIsSubmitted(true);

      setFormStatus("success");
      setFormMessage(
        data.message ||
          "Thank you for contacting Jan Tech. Your inquiry has been sent successfully.",
      );
    } catch (error) {
      console.error("Contact inquiry submission failed:", error);

      // Turnstile tokens are single-use.
      // After a failed server request, create a fresh verification.
      resetTurnstile();

      setFormStatus("error");
      setFormMessage(
        error?.message ||
          "We could not send your inquiry right now. Please verify again and try once more, or contact us by email or WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" background="light">
      <SectionHeading
        eyebrow="Contact Jan Tech"
        title="Let's Build Something Useful"
        description="Tell us about your project, training needs, or technology requirements. We would be happy to discuss how Jan Tech can help."
        accent="green"
      />

      <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        {/* Contact information */}
        <div className="min-w-0 rounded-3xl bg-brand-navy p-7 text-white sm:p-8">
          <p className="text-sm font-bold tracking-[0.16em] text-emerald-300 uppercase">
            Get in Touch
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            Start a conversation with Jan Tech
          </h3>

          <p className="mt-4 leading-7 text-slate-300">
            Whether you need a digital product, website, application, technical
            support, or training, tell us what you are planning.
          </p>

          <div className="mt-8 space-y-5">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <MapPin size={21} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="font-bold">Location</p>

                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Pokhara, Kaski
                  <br />
                  Gandaki Province, Nepal
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                <Mail size={21} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="font-bold">Email</p>

                <a
                  href="mailto:itsora7@gmail.com"
                  className="mt-1 block break-all text-sm text-slate-300 transition hover:text-white"
                >
                  itsora7@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <Phone size={21} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="font-bold">Phone</p>

                <a
                  href="tel:+61481454170"
                  className="mt-1 block text-sm text-slate-300 transition hover:text-white"
                >
                  +61 481 454 170
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <MessageCircle size={21} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="font-bold">WhatsApp</p>

                <a
                  href="https://wa.me/61481454170?text=Hello%20Jan%20Tech%2C%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-slate-300 transition hover:text-emerald-300"
                >
                  Chat with Jan Tech
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="min-w-0 rounded-3xl border border-brand-border bg-white p-4 shadow-sm min-[360px]:p-6 sm:p-8"
        >
          <div className="grid min-w-0 gap-6 sm:grid-cols-2">
            <FormField
              id="fullName"
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              required
            />

            <FormField
              id="email"
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <FormField
              id="phone"
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              autoComplete="tel"
            />

            <FormField
              id="companyName"
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company or organization"
              autoComplete="organization"
            />
          </div>

          <div className="mt-6 min-w-0">
            <label
              htmlFor="serviceRequired"
              className="mb-2 block text-sm font-bold text-brand-navy"
            >
              Service Required
            </label>

            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className="w-full min-w-0 rounded-xl border border-brand-border bg-white px-4 py-3.5 text-brand-navy outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web & App Development</option>
              <option value="mobile-development">Mobile App Development</option>
              <option value="hosting">Hosting & Domains</option>
              <option value="support">Maintenance & Support</option>
              <option value="training">Training & Education</option>
              <option value="products">Jan Tech Products</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-6 min-w-0">
            <FormField
              id="subject"
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="mt-6 min-w-0">
            <TextAreaField
              id="message"
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, training needs, or question..."
              required
            />
          </div>

          {!isSubmitted && (
            <>
              {/* Cloudflare Turnstile */}
              <div className="mt-6 min-w-0">
                <Turnstile
                  key={`${turnstileKey}-${isSmallScreen ? "compact" : "normal"}`}
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  options={{
                    size: isSmallScreen ? "compact" : "normal",
                  }}
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                    setFormMessage("");
                    setFormStatus("");
                  }}
                  onExpire={() => {
                    setTurnstileToken("");
                  }}
                  onError={() => {
                    setTurnstileToken("");
                    setFormStatus("error");
                    setFormMessage(
                      "Security verification could not be completed. Please try again.",
                    );
                  }}
                />
              </div>

              {/* Error message */}
              {formMessage && formStatus === "error" && (
                <p
                  className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  role="alert"
                >
                  {formMessage}
                </p>
              )}

              {/* Submit */}
              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>
            </>
          )}

          {isSubmitted && (
            <div
              className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6"
              role="status"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 size={24} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-emerald-900">
                    Inquiry Sent
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-emerald-800">
                    {formMessage}
                  </p>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="mt-5"
                onClick={handleNewInquiry}
              >
                Send Another Inquiry
              </Button>
            </div>
          )}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
