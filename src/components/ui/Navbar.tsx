import { useEffect, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { DEVELOPER_PROFILE, SITE_NAVIGATION } from '@/src/data/profile';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#27272A] bg-[#09090B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="font-display text-base font-bold tracking-tight text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#60A5FA]"
        >
          {DEVELOPER_PROFILE.name}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]"
        >
          {SITE_NAVIGATION.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#FAFAFA] after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[#3B82F6] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#cv"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#60A5FA] hover:text-[#09090B]"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Resume CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#FAFAFA] transition-colors duration-150 hover:border-[#3B82F6] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="border-t border-[#27272A] bg-[#09090B] px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {SITE_NAVIGATION.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-[#A1A1AA] transition-colors duration-150 hover:bg-[#18181B] hover:text-[#FAFAFA]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cv"
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-[#60A5FA] transition-colors duration-150 hover:bg-[#18181B]"
              >
                CV / Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
