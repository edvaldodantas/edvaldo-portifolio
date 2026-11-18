import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { DEVELOPER_PROFILE } from '@/src/data/profile';

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative border-b border-[#27272A] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Identity, Headline, Intro, CTAs */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#60A5FA]">
              <span>{DEVELOPER_PROFILE.name}</span>
              <span aria-hidden="true" className="text-[#27272A]">
                ·
              </span>
              <span className="text-[#FAFAFA]">{DEVELOPER_PROFILE.title}</span>
              <span aria-hidden="true" className="text-[#27272A]">
                ·
              </span>
              <span className="text-[#A1A1AA]">
                {DEVELOPER_PROFILE.specialization}
              </span>
            </div>

            <h1
              id="hero-heading"
              className="mt-5 font-display text-4xl font-extrabold tracking-tight text-[#FAFAFA] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
            >
              {DEVELOPER_PROFILE.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
              {DEVELOPER_PROFILE.heroIntro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#60A5FA] hover:text-[#09090B]"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#27272A] bg-[#18181B] px-6 py-3 text-sm font-semibold text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#3B82F6] hover:text-[#60A5FA]"
              >
                <Mail className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right column: Structured Engineering Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-[#27272A] bg-[#18181B] p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#27272A] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-[#09090B] text-[#3B82F6]">
                    <Terminal className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-[#FAFAFA]">
                      Engineering Profile
                    </p>
                    <p className="text-xs text-[#A1A1AA]">
                      Backend &amp; Full Stack Focus
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#60A5FA] tabular-nums">
                  Since 2022
                </span>
              </div>

              <dl className="mt-6 divide-y divide-[#27272A]">
                {DEVELOPER_PROFILE.specifications.map((spec) => (
                  <div key={spec.label} className="py-3.5 first:pt-0 last:pb-0">
                    <dt className="text-xs font-mono text-[#A1A1AA]">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[#FAFAFA]">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[#27272A] pt-4 text-xs text-[#A1A1AA]">
              <span>Information Systems Management · IPIL</span>
              <a
                href="#about"
                className="font-medium text-[#60A5FA] transition-colors hover:text-[#FAFAFA]"
              >
                Read overview
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
