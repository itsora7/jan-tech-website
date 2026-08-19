import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import Section from "../layout/Section";
import Button from "../ui/Button";
import FormField from "../ui/FormField";
import SectionHeading from "../ui/SectionHeading";
import TextAreaField from "../ui/TextAreaField";

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setFormMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormMessage("Please complete all required fields.");
      return;
    }

    setFormMessage(
      "Form validation is working. We will connect this form to Supabase soon.",
    );
  };

  return (
    <Section id="contact" background="light">
      <SectionHeading
        eyebrow="Contact Jan Tech"
        title="Let's Build Something Useful"
        description="Tell us about your project, training needs, or technology requirements. We would be happy to discuss how Jan Tech can help."
        accent="green"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-3xl bg-brand-navy p-7 text-white sm:p-8">
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
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <MapPin size={21} aria-hidden="true" />
              </div>

              <div>
                <p className="font-bold">Location</p>
                <p className="mt-1 text-sm text-slate-300">Pokhara, Nepal</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                <Mail size={21} aria-hidden="true" />
              </div>

              <div>
                <p className="font-bold">Email</p>
                <p className="mt-1 text-sm text-slate-300">
                  Email address coming soon
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <Phone size={21} aria-hidden="true" />
              </div>

              <div>
                <p className="font-bold">Phone</p>
                <p className="mt-1 text-sm text-slate-300">
                  Phone number coming soon
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                <MessageCircle size={21} aria-hidden="true" />
              </div>

              <div>
                <p className="font-bold">Response</p>
                <p className="mt-1 text-sm text-slate-300">
                  We aim to respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
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

          <div className="mt-6">
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
              className="w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-brand-navy outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
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

          <div className="mt-6">
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

          <div className="mt-6">
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

          {formMessage && (
            <p
              className="mt-5 rounded-xl bg-brand-background px-4 py-3 text-sm font-medium text-brand-navy"
              role="status"
            >
              {formMessage}
            </p>
          )}

          <div className="mt-6">
            <Button type="submit">Send Inquiry</Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
