import { useState } from 'react';
import { FileText, ExternalLink, Download, Eye, EyeOff } from 'lucide-react';
import { RESUME_CONFIG } from '@/src/data/experience';

export function ResumeViewer() {
  const [showEmbed, setShowEmbed] = useState(true);
  const hasPdf = Boolean(RESUME_CONFIG.pdfUrl);

  return (
    <div
      id="cv"
      className="mt-14 rounded-2xl border border-[#27272A] bg-[#18181B] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6 border-b border-[#27272A] pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#60A5FA]">
            <FileText className="h-4 w-4" aria-hidden="true" />
            <span>Curriculum Vitae</span>
            <span aria-hidden="true" className="text-[#27272A]">
              ·
            </span>
            <span className="text-[#A1A1AA]">
              {hasPdf ? 'PDF Ready' : RESUME_CONFIG.lastUpdatedLabel}
            </span>
          </div>
          <h3 className="mt-2 font-display text-xl font-bold text-[#FAFAFA]">
            Professional CV / Resume
          </h3>
          <p className="mt-1 text-sm text-[#A1A1AA]">
            Direct embedded preview, new-tab inspection, and PDF download area.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          {hasPdf && RESUME_CONFIG.pdfUrl ? (
            <>
              <button
                type="button"
                onClick={() => setShowEmbed((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg border border-[#27272A] bg-[#09090B] px-4 py-2 text-xs font-medium text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors hover:border-[#3B82F6]"
              >
                {showEmbed ? (
                  <>
                    <EyeOff className="h-3.5 w-3.5 text-[#A1A1AA]" aria-hidden="true" />
                    <span>Hide Preview</span>
                  </>
                ) : (
                  <>
                    <Eye className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
                    <span>Show Preview</span>
                  </>
                )}
              </button>

              <a
                href={RESUME_CONFIG.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#27272A] bg-[#09090B] px-4 py-2 text-xs font-medium text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors hover:border-[#3B82F6]"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
                <span>Open in New Tab</span>
              </a>

              <a
                href={RESUME_CONFIG.pdfUrl}
                download={RESUME_CONFIG.fileName}
                className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors hover:bg-[#60A5FA] hover:text-[#09090B]"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Download PDF</span>
              </a>
            </>
          ) : (
            <>
              <button
                type="button"
                disabled
                title="Upload your CV PDF to enable opening in a new tab"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-[#27272A] bg-[#09090B]/60 px-4 py-2 text-xs font-medium text-[#A1A1AA]/60 whitespace-nowrap shrink-0"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Open in New Tab</span>
              </button>

              <button
                type="button"
                disabled
                title="Upload your CV PDF to enable download"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-[#27272A] bg-[#09090B]/60 px-4 py-2 text-xs font-medium text-[#A1A1AA]/60 whitespace-nowrap shrink-0"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Download PDF</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Embedded PDF Viewport or Clean Placeholder */}
      <div className="mt-6">
        {hasPdf && RESUME_CONFIG.pdfUrl ? (
          showEmbed && (
            <div className="overflow-hidden rounded-xl border border-[#27272A] bg-[#09090B]">
              <iframe
                src={RESUME_CONFIG.pdfUrl}
                title="Edvaldo João Curriculum Vitae PDF"
                className="h-[640px] w-full border-0"
              />
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#27272A] bg-[#09090B] px-6 py-12 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#27272A] bg-[#18181B] text-[#60A5FA]">
              <FileText className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="font-display text-base font-semibold text-[#FAFAFA]">
              CV Document Placeholder
            </p>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#A1A1AA]">
              {RESUME_CONFIG.placeholderMessage}
            </p>
            <div className="mt-5 rounded-lg border border-[#27272A] bg-[#18181B] px-4 py-2 font-mono text-xs text-[#60A5FA]">
              public/documents/{RESUME_CONFIG.fileName}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
