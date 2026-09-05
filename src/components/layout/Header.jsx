import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { navigationItems } from "../../constants/navigation";
import Container from "./Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen((currentMenuState) => !currentMenuState);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#031126]/95 shadow-lg shadow-black/10 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-[76px] items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            aria-label="Go to Jan Tech home"
          >
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-md">
              <img
                src="/logo.png"
                alt="Jan Tech logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-xl leading-none font-bold tracking-tight text-white">
                <span className="text-emerald-400">JAN</span> <span>Tech</span>
              </p>

              <p className="mt-1 text-[10px] font-medium tracking-[0.14em] text-slate-400 uppercase">
                Solutions for Tomorrow
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">
            <nav
              className="flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-lg px-3 py-3 text-sm font-semibold text-slate-300 transition duration-200 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                >
                  {item.label}

                  <span className="absolute right-3 bottom-1 left-3 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            >
              Get in Touch
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-emerald-400/50 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? "Close the navigation menu"
                : "Open the navigation menu"
            }
          >
            {isMenuOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-white/10 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 px-5 py-3.5 font-bold text-white"
              >
                Get in Touch
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
