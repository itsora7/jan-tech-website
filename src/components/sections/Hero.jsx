import { ArrowRight, Cloud, Code2, Headphones, Smartphone } from "lucide-react";

import Container from "../layout/Container";

const heroServices = [
  {
    label: "Web Development",
    icon: Code2,
    color: "green",
  },
  {
    label: "Mobile Apps",
    icon: Smartphone,
    color: "blue",
  },
  {
    label: "Digital Solutions",
    icon: Cloud,
    color: "blue",
  },
  {
    label: "IT Support & Maintenance",
    icon: Headphones,
    color: "green",
  },
];

const iconStyles = {
  green: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  blue: "border-blue-400/40 bg-blue-400/10 text-blue-300",
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[780px] scroll-mt-20 overflow-hidden bg-[#020817]"
    >
      {/* Full hero background */}
      <img
        src="/images/hero/wow.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark only behind the text area */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#020817]/95 via-[#020817]/55 via-[38%] to-transparent to-[68%]"
        aria-hidden="true"
      />

      {/* Very light bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020817]/35 to-transparent"
        aria-hidden="true"
      />

      {/* Small atmosphere only, no heavy darkening */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_82%_25%,rgba(59,130,246,0.05),transparent_30%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 flex min-h-[780px] items-center py-16 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/50 bg-[#020817]/45 px-4 py-2 backdrop-blur-md">
              <span
                className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                aria-hidden="true"
              />

              <span className="text-xs font-bold tracking-[0.14em] text-blue-200 uppercase sm:text-sm">
                Welcome to <span className="text-emerald-300">Jan Tech</span>
              </span>
            </div>

            <h1 className="mt-7 text-5xl leading-[1.02] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building Digital
              <br />
              Solutions for
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h1>

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-100 sm:text-lg">
              From Pokhara to the digital world, Jan Tech builds modern
              websites, mobile applications, digital products, and practical
              technology solutions designed for real business needs.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
              {heroServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.label}
                    className={`pr-4 ${
                      index !== heroServices.length - 1
                        ? "sm:border-r sm:border-white/20"
                        : ""
                    } ${index !== 0 ? "sm:pl-4" : ""}`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-md ${
                        iconStyles[service.color]
                      }`}
                    >
                      <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <p className="mt-3 text-sm font-semibold leading-5 text-white">
                      {service.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Services
                <ArrowRight size={19} aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/50 bg-[#020817]/20 px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white/10"
              >
                Contact Us
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
