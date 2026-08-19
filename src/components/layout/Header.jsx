import { useState } from "react";
import { Menu, X } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy shadow-lg">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="shrink-0 rounded-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy focus-visible:outline-none"
            aria-label="Go to the Jan Tech home section"
          >
            <img
              src="/logo.png"
              alt="Jan Tech logo"
              className="h-16 w-16 rounded-lg bg-white object-contain p-1"
            />
          </a>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-brand-red hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:outline-none lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? "Close the navigation menu"
                : "Open the navigation menu"
            }
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>

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
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:outline-none"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
