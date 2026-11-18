import { Briefcase, GraduationCap, CheckCircle2, Clock } from 'lucide-react';
import {
  EDUCATION_ENTRIES,
  EXPERIENCE_ENTRIES,
} from '@/src/data/experience';
import { SectionHeader } from '@/src/components/ui/SectionHeader';
import { ResumeViewer } from '@/src/components/ui/ResumeViewer';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-[#27272A] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          title="Experience & Education"
          subtitle="Professional engineering experience, academic track, and curriculum vitae."
          headingId="experience-heading"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Professional Experience Column */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-2.5">
              <Briefcase className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#FAFAFA]">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-6">
              {EXPERIENCE_ENTRIES.map((entry) => (
                <article
                  key={entry.id}
                  className="rounded-2xl border border-[#27272A] bg-[#18181B] p-6 transition-colors duration-150 hover:border-[#3B82F6]/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#27272A] pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
                        <span className="font-semibold text-[#60A5FA]">
                          {entry.company}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{entry.employmentType}</span>
                      </div>
                      <h4 className="mt-1 font-display text-lg font-bold text-[#FAFAFA]">
                        {entry.role}
                      </h4>
                    </div>

                    <span className="font-mono text-xs text-[#A1A1AA] tabular-nums">
                      {entry.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#A1A1AA]">
                    {entry.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#3B82F6]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-2.5">
              <GraduationCap className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#FAFAFA]">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION_ENTRIES.map((edu) => (
                <article
                  key={edu.id}
                  className="rounded-2xl border border-[#27272A] bg-[#18181B] p-6 transition-colors duration-150 hover:border-[#3B82F6]/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-[#A1A1AA] tabular-nums">
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#60A5FA]">
                      {edu.status === 'Completed' ? (
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      <span>{edu.status}</span>
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-base font-bold text-[#FAFAFA]">
                    {edu.institution}
                    {edu.acronym ? ` (${edu.acronym})` : ''}
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                    {edu.degree}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated CV / Resume Area */}
        <ResumeViewer />
      </div>
    </section>
  );
}
