import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { DEVELOPER_PROFILE } from '@/src/data/profile';

const STACK = ['C#', 'ASP.NET', 'Next.js', 'React', 'React Native', 'PostgreSQL'];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex flex-col justify-between overflow-hidden border-b border-[#27272A]"
      style={{
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: '#07090E',
        backgroundImage: `
          radial-gradient(circle at 18% 25%, rgba(37, 99, 235, 0.24) 0%, rgba(15, 23, 42, 0.08) 42%, transparent 70%),
          radial-gradient(circle at 72% 48%, rgba(59, 130, 246, 0.22) 0%, transparent 62%)
        `,
      }}
    >
      {/* FOTO + FUNDO: exatamente como estavam (não mexer) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ paddingTop: '2rem' }}
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="relative flex h-full w-full items-end justify-end"
        >
          <img
            src={DEVELOPER_PROFILE.photo}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-top opacity-40 lg:h-[86%] lg:w-auto lg:max-w-[46vw] lg:object-contain lg:object-right-bottom lg:opacity-100"
            style={{
              filter: 'grayscale(100%) contrast(1.25) brightness(1.05)',
              mixBlendMode: 'screen',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 42%, black 100%), linear-gradient(to top, transparent 0%, black 18%)',
              WebkitMaskComposite: 'source-in',
              maskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 42%, black 100%)',
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #07090E 0%, transparent 24%)',
            }}
          />
        </motion.div>
      </div>

      {/* CONTEÚDO: mesma organização da imagem de fundo preto */}
      <div
        className="mx-auto flex w-full flex-1 items-center px-6 py-10 lg:px-8"
        style={{ maxWidth: '1180px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative z-10 w-full"
          style={{ maxWidth: '540px' }}
        >
          {/* 1. Nome · Cargo · Especialização */}
          <div
            className="flex flex-wrap items-center text-xs sm:text-sm"
            style={{ columnGap: '14px', rowGap: '4px' }}
          >
            <span className="font-semibold text-[#60A5FA]">
              {DEVELOPER_PROFILE.name}
            </span>
            <span className="font-semibold text-[#F8FAFC]">
              {DEVELOPER_PROFILE.title}
            </span>
            <span className="text-[#94A3B8]">
              {DEVELOPER_PROFILE.specialization}
            </span>
          </div>

          {/* 2. Headline grande */}
          <h1
            id="hero-heading"
            className="mt-5 font-display font-extrabold tracking-tight text-[#FAFAFA]"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
              lineHeight: 1.08,
            }}
          >
            {DEVELOPER_PROFILE.headline}
          </h1>

          {/* 3. Descrição com barra azul */}
          <p
            className="mt-7 text-sm leading-relaxed text-[#A1A1AA] sm:text-[15px]"
            style={{ borderLeft: '3px solid #3B82F6', paddingLeft: '14px' }}
          >
            {DEVELOPER_PROFILE.heroIntro}
          </p>

          {/* 4. Botões */}
          <div
            className="mt-9 flex flex-wrap items-center"
            style={{ gap: '14px' }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-[#FAFAFA] transition-all duration-150 hover:bg-[#60A5FA] hover:text-[#09090B]"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#27272A] px-5 py-3 text-sm font-semibold text-[#FAFAFA] transition-colors duration-150 hover:border-[#3B82F6] hover:text-[#60A5FA]"
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)' }}
            >
              <Mail className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* 5. Stack */}
          <div
            className="mt-8 flex flex-wrap items-center text-xs font-medium text-[#A1A1AA] sm:text-sm"
            style={{ columnGap: '20px', rowGap: '8px' }}
          >
            {STACK.map((tech) => (
              <span key={tech} className="flex items-center" style={{ gap: '8px' }}>
                <span
                  className="rounded-full bg-[#3B82F6]"
                  style={{ width: 6, height: 6, flex: 'none' }}
                  aria-hidden="true"
                />
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-5 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 font-mono uppercase text-[#64748B] transition-colors hover:text-[#60A5FA]"
          style={{ letterSpacing: '0.25em', fontSize: '10px' }}
        >
          <span>Scroll to explore</span>
          <ChevronDown className="h-3.5 w-3.5 animate-bounce text-[#3B82F6]" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
