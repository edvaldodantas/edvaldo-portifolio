import { ArrowUp } from 'lucide-react';
import { DEVELOPER_PROFILE, SITE_NAVIGATION } from '@/src/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#09090B] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-[#FAFAFA]">
            {DEVELOPER_PROFILE.name}
          </p>
          <p className="mt-1 text-xs text-[#A1A1AA]">
            {DEVELOPER_PROFILE.title} · {DEVELOPER_PROFILE.specialization}
          </p>
        </div>

        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center gap-5 text-xs text-[#A1A1AA]"
        >
          {SITE_NAVIGATION.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#FAFAFA]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#hero"
            className="inline-flex items-center gap-1 text-[#60A5FA] transition-colors hover:text-[#FAFAFA]"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
