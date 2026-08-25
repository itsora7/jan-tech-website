import { Globe2, Link, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { navigationItems } from "../../constants/navigation";
import Container from "./Container";

const serviceLinks = [
  {
    label: "Web & App Development",
    href: "#services",
  },
  {
    label: "Mobile App Development",
    href: "#services",
  },
  {
    label: "Web Hosting",
    href: "#services",
  },
  {
    label: "Training & Education",
    href: "#training",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>

            <nav className="mt-5" aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-300 transition hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:outline-none"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-bold">Services</h2>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-slate-300 transition hover:text-white focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold">Contact</h2>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="shrink-0 text-blue-300"
                  aria-hidden="true"
                />

                <a
                  href="mailto:itsora7@gmail.com"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  itsora7@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="shrink-0 text-emerald-300"
                  aria-hidden="true"
                />

                <a
                  href="tel:+61481454170"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  +61 481 454 170
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <MessageCircle
                  size={20}
                  className="shrink-0 text-emerald-400"
                  aria-hidden="true"
                />

                <a
                  href="https://wa.me/61481454170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          {/* Location */}
          <div>
            <h2 className="text-lg font-bold">Location</h2>

            <div className="mt-5 flex items-start gap-3">
              <MapPin
                size={20}
                className="mt-0.5 shrink-0 text-emerald-300"
                aria-hidden="true"
              />

              <div>
                <p className="font-medium text-white">Pokhara, Nepal</p>

                <p className="mt-1 text-sm leading-6 text-slate-300">
                  6XCF+7RC, Barahi Margh
                  <br />
                  Pokhara 33700, Nepal
                </p>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Jan Tech location in Pokhara, Nepal"
                src="https://www.google.com/maps?q=6XCF%2B7RC%2C%20Barahi%20Margh%2C%20Pokhara%2033700%2C%20Nepal&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
          © {currentYear} Jan Tech. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
