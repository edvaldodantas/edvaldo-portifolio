import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { DEVELOPER_PROFILE } from '@/src/data/profile';

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[620px] overflow-hidden border-b border-[#27272A] lg:min-h-[680px]"
    >
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[52%]">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={DEVELOPER_PROFILE.photo}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[center_20%]"
          />

          {/* Keep the image as an integrated right-side portrait */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/25 to-transparent lg:via-[#09090B]/10" />
          <div className="absolute inset-0 bg-[#09090B]/30" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_0%,transparent_68%,rgba(9,9,11,.42)_100%)] lg:block" />
        </motion.div>
      </div>

      <div className="mx-auto flex min-h-[620px] max-w-[1200px] items-center px-4 sm:px-6 lg:min-h-[680px] lg:px-8">
        <div className="relative z-10 w-full lg:w-[58%]">
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

          <p className="mt-6 max-w-2xl border-l-4 border-[#3B82F6] pl-4 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
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

          {/* Main Frameworks & Technologies */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-[#A1A1AA] sm:text-sm">
            {['C#', 'ASP.NET', 'Next.js', 'React', 'React Native', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-sm bg-[#3B82F6]" aria-hidden="true" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
