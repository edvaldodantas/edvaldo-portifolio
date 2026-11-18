import { motion } from 'motion/react';
import { ABOUT_CONTENT } from '@/src/data/profile';
import { SectionHeader } from '@/src/components/ui/SectionHeader';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-[#27272A] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          title="About Me"
          subtitle="Background, motivation, and technical direction."
          headingId="about-heading"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Narrative prose */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 lg:col-span-6"
          >
            {ABOUT_CONTENT.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={`leading-relaxed ${
                  idx === 0
                    ? 'text-base text-[#FAFAFA] sm:text-lg'
                    : 'text-base text-[#A1A1AA]'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Concise structured pillars */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {ABOUT_CONTENT.pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="rounded-xl border border-[#27272A] bg-[#18181B] p-5 transition-colors duration-150 hover:border-[#3B82F6]/60"
              >
                <span className="font-mono text-xs font-medium text-[#60A5FA] tabular-nums">
                  {pillar.index}.
                </span>
                <h3 className="mt-2 font-display text-sm font-semibold text-[#FAFAFA]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
