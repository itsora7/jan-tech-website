import { CircleCheck, Headphones, Sparkles } from "lucide-react";

import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

const Services = () => {
  return (
    <Section
      id="services"
      background="light"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionHeading
          eyebrow="What We Do"
          title="Technology That Helps You Move Forward"
          description="From your first website to long-term hosting and technical support, Jan Tech provides practical digital services built around real business needs."
          accent="blue"
        />

        {/* Service trust points */}
        <div className="mx-auto mt-7 grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm sm:mt-8 sm:grid-cols-3">
          <div className="flex items-center gap-3 border-b border-brand-border px-5 py-4 sm:border-r sm:border-b-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Sparkles size={20} aria-hidden="true" />
            </div>

            <div>
              <p className="font-bold text-brand-navy">Modern Solutions</p>
              <p className="mt-0.5 text-sm text-brand-muted">Built for today</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-brand-border px-5 py-4 sm:border-r sm:border-b-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand-navy">
              <CircleCheck size={20} aria-hidden="true" />
            </div>

            <div>
              <p className="font-bold text-brand-navy">Reliable Delivery</p>
              <p className="mt-0.5 text-sm text-brand-muted">Built with care</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Headphones size={20} aria-hidden="true" />
            </div>

            <div>
              <p className="font-bold text-brand-navy">Local Support</p>
              <p className="mt-0.5 text-sm text-brand-muted">
                Here when needed
              </p>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              accent={service.accent}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
