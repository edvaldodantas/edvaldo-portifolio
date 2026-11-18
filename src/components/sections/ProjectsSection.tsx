import { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Code2,
  Archive,
  Award,
  Users,
  Maximize2,
} from 'lucide-react';
import { PROJECTS } from '@/src/data/projects';
import type { Project } from '@/src/lib/types';
import { SectionHeader } from '@/src/components/ui/SectionHeader';
import { ProjectMediaGallery } from '@/src/components/ui/ProjectMediaGallery';
import { ProjectModal } from '@/src/components/ui/ProjectModal';

function ProjectStatusLabel({ status }: { status: Project['status'] }) {
  if (status === 'In Production') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA]">
        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
        <span>In Production</span>
      </span>
    );
  }
  if (status === 'In Development') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA]">
        <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
        <span>In Development</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A1A1AA]">
      <Archive className="h-3.5 w-3.5" aria-hidden="true" />
      <span>Discontinued (Not Maintained)</span>
    </span>
  );
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS.filter((p) => p.tier === 'featured');
  const secondaryProjects = PROJECTS.filter((p) => p.tier === 'secondary');

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-[#27272A] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          title="Featured Projects"
          subtitle="Production platforms, backend architectures, and archived engineering work."
          headingId="projects-heading"
        />

        {/* Tier 1: Prominent Featured Projects (GlowApp & Eventus) */}
        <div className="space-y-8">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="rounded-2xl border border-[#27272A] bg-[#18181B] p-6 transition-colors duration-150 hover:border-[#3B82F6]/60 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                {/* Project Info */}
                <div
                  className={`flex flex-col justify-between space-y-6 lg:col-span-6 ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
                      <span className="font-medium text-[#FAFAFA]">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <ProjectStatusLabel status={project.status} />
                    </div>

                    <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                        {project.name}
                      </h3>
                      <span className="text-xs font-mono text-[#60A5FA]">
                        Role: {project.role}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA] sm:text-[15px]">
                      {project.description}
                    </p>

                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2 border-t border-[#27272A] pt-4 text-xs leading-relaxed text-[#FAFAFA]/90 sm:text-sm">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#3B82F6]"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Academic Achievement / Team details (Eventus) */}
                    {(project.achievement || project.team) && (
                      <div className="mt-5 grid gap-4 border-t border-[#27272A] pt-4 sm:grid-cols-2">
                        {project.achievement && (
                          <div>
                            <p className="flex items-center gap-1.5 text-xs font-mono text-[#60A5FA]">
                              <Award className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>Academic Result</span>
                            </p>
                            <p className="mt-1 text-xs font-medium text-[#FAFAFA]">
                              {project.achievement}
                            </p>
                            {project.duration && (
                              <p className="mt-0.5 text-xs text-[#A1A1AA]">
                                {project.duration}
                              </p>
                            )}
                          </div>
                        )}
                        {project.team && (
                          <div>
                            <p className="flex items-center gap-1.5 text-xs font-mono text-[#60A5FA]">
                              <Users className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>Development Team</span>
                            </p>
                            <ul className="mt-1 space-y-1 text-xs text-[#A1A1AA]">
                              {project.team.map((member) => (
                                <li key={member.name}>
                                  <span className="font-medium text-[#FAFAFA]">
                                    {member.name}
                                  </span>{' '}
                                  — {member.role}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Technologies & Actions */}
                  <div className="space-y-5 border-t border-[#27272A] pt-5">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#27272A] bg-[#09090B] px-2.5 py-1 font-mono text-xs text-[#FAFAFA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors hover:bg-[#60A5FA] hover:text-[#09090B]"
                        >
                          <span>{project.liveLabel ?? 'Visit Live Website'}</span>
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-dashed border-[#27272A] bg-[#09090B] px-3.5 py-2 text-xs text-[#A1A1AA]">
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Live URL placeholder</span>
                        </span>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#27272A] bg-[#09090B] px-4 py-2 text-xs font-medium text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors hover:border-[#3B82F6]"
                        >
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <span className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-dashed border-[#27272A] bg-[#09090B] px-3.5 py-2 text-xs text-[#A1A1AA]">
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>GitHub link placeholder</span>
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#27272A] bg-[#09090B] px-4 py-2 text-xs font-medium text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors hover:border-[#3B82F6] hover:text-[#60A5FA]"
                      >
                        <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Project Details</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Media Showcase */}
                <div
                  className={`lg:col-span-6 ${
                    idx % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <ProjectMediaGallery
                    project={project}
                    onExpand={() => setActiveProject(project)}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tier 2: Secondary / Archived Projects */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-[#27272A] bg-[#18181B] p-6 transition-colors duration-150 hover:border-[#3B82F6]/40"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
                  <span className="font-medium text-[#FAFAFA]">
                    {project.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <ProjectStatusLabel status={project.status} />
                </div>

                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-[#FAFAFA]">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    Role: {project.role}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  {project.description}
                </p>

                <div className="mt-5">
                  <ProjectMediaGallery
                    project={project}
                    compact
                    onExpand={() => setActiveProject(project)}
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#27272A] pt-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#27272A] bg-[#09090B] px-2.5 py-1 font-mono text-xs text-[#A1A1AA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#27272A] bg-[#09090B] px-3 py-1.5 text-[#FAFAFA] hover:border-[#3B82F6]"
                      >
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Repository</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-[#27272A] px-3 py-1.5">
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>GitHub link placeholder</span>
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#60A5FA] transition-colors hover:text-[#FAFAFA]"
                  >
                    <span>View details</span>
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
