import { useEffect } from 'react';
import { X, ExternalLink, Github, Archive, CheckCircle2, Code2, Users, Award } from 'lucide-react';
import type { Project } from '@/src/lib/types';
import { ProjectMediaGallery } from './ProjectMediaGallery';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const isDiscontinued = project.status === 'Discontinued';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090B]/85 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#27272A] bg-[#18181B] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#27272A] pb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#FAFAFA]">
                {project.status === 'In Production' && (
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
                )}
                {project.status === 'In Development' && (
                  <Code2 className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
                )}
                {isDiscontinued && (
                  <Archive className="h-3.5 w-3.5 text-[#A1A1AA]" aria-hidden="true" />
                )}
                <span>{project.status}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#60A5FA]">{project.role}</span>
            </div>
            <h3
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-bold text-[#FAFAFA]"
            >
              {project.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#27272A] bg-[#09090B] text-[#A1A1AA] transition-colors hover:border-[#3B82F6] hover:text-[#FAFAFA]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Media Gallery / Video / Embed */}
        <div className="mt-6">
          <ProjectMediaGallery project={project} />
        </div>

        {/* Details Grid */}
        <div className="mt-6 grid gap-6 border-t border-[#27272A] pt-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm leading-relaxed text-[#A1A1AA]">
              {project.description}
            </p>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="space-y-2 text-sm text-[#FAFAFA]/90">
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

            {project.achievement && (
              <div className="flex items-center gap-2.5 pt-2 text-sm font-medium text-[#60A5FA]">
                <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{project.achievement}</span>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-mono font-medium text-[#A1A1AA]">
                Technologies
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[#27272A] bg-[#09090B] px-2.5 py-1 text-xs font-medium text-[#FAFAFA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.team && project.team.length > 0 && (
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#A1A1AA]">
                  <Users className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
                  <span>Project Team</span>
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs text-[#FAFAFA]">
                  {project.team.map((member) => (
                    <li key={member.name} className="flex flex-col">
                      <span className="font-medium">{member.name}</span>
                      <span className="text-[#A1A1AA]">{member.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-col gap-2 pt-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2.5 text-xs font-semibold text-[#FAFAFA] transition-colors hover:bg-[#60A5FA] hover:text-[#09090B]"
                >
                  <span>{project.liveLabel ?? 'Visit Live Site'}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : (
                <div className="rounded-lg border border-dashed border-[#27272A] px-3 py-2 text-xs text-[#A1A1AA]">
                  External link placeholder (to be added)
                </div>
              )}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#27272A] bg-[#09090B] px-4 py-2.5 text-xs font-medium text-[#FAFAFA] transition-colors hover:border-[#3B82F6]"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>View Repository</span>
                </a>
              ) : (
                <div className="rounded-lg border border-dashed border-[#27272A] px-3 py-2 text-xs text-[#A1A1AA]">
                  GitHub repository link placeholder
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
