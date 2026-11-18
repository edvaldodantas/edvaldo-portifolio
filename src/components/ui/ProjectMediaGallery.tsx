import { useState } from 'react';
import {
  Image as ImageIcon,
  PlaySquare,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import type { Project } from '@/src/lib/types';

type MediaTab = 'screenshots' | 'video' | 'embed';

interface ProjectMediaGalleryProps {
  project: Project;
  compact?: boolean;
  onExpand?: () => void;
}

export function ProjectMediaGallery({
  project,
  compact = false,
  onExpand,
}: ProjectMediaGalleryProps) {
  const { screenshots, videoUrl, iframeUrl, iframeAspectRatio, placeholderNote } =
    project.media;

  const initialTab: MediaTab =
    screenshots.length > 0
      ? 'screenshots'
      : iframeUrl
        ? 'embed'
        : videoUrl
          ? 'video'
          : 'screenshots';

  const [activeTab, setActiveTab] = useState<MediaTab>(initialTab);
  const [activeIndex, setActiveIndex] = useState(0);

  const aspectClass =
    iframeAspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : iframeAspectRatio === '9/16'
        ? 'aspect-[9/16] max-w-xs mx-auto'
        : 'aspect-video';

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Media Mode Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          role="tablist"
          aria-label={`${project.name} media modes`}
          className="inline-flex items-center gap-1 rounded-lg border border-[#27272A] bg-[#09090B] p-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'screenshots'}
            onClick={() => setActiveTab('screenshots')}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
              activeTab === 'screenshots'
                ? 'bg-[#18181B] text-[#FAFAFA] border border-[#27272A]'
                : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
            }`}
          >
            <ImageIcon className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
            <span>Gallery</span>
            <span className="font-mono text-[11px] text-[#A1A1AA] tabular-nums">
              ({screenshots.length})
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'video'}
            onClick={() => setActiveTab('video')}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
              activeTab === 'video'
                ? 'bg-[#18181B] text-[#FAFAFA] border border-[#27272A]'
                : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
            }`}
          >
            <PlaySquare className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
            <span>Video</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'embed'}
            onClick={() => setActiveTab('embed')}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
              activeTab === 'embed'
                ? 'bg-[#18181B] text-[#FAFAFA] border border-[#27272A]'
                : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
            }`}
          >
            <Monitor className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
            <span>Live Embed</span>
          </button>
        </div>

        {onExpand && (
          <button
            type="button"
            onClick={onExpand}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#27272A] bg-[#09090B] px-2.5 py-1.5 text-xs font-medium text-[#A1A1AA] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#3B82F6] hover:text-[#FAFAFA]"
          >
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Inspect</span>
          </button>
        )}
      </div>

      {/* Media Viewport */}
      <div
        className={`relative overflow-hidden rounded-xl border border-[#27272A] bg-[#09090B] ${
          compact ? 'aspect-[16/10]' : aspectClass
        }`}
      >
        {activeTab === 'screenshots' && (
          <>
            {screenshots.length > 0 ? (
              <div className="relative h-full w-full">
                <img
                  src={screenshots[activeIndex].src}
                  alt={screenshots[activeIndex].alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {screenshots[activeIndex].caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09090B]/95 via-[#09090B]/70 to-transparent px-4 py-3 text-xs text-[#FAFAFA]">
                    {screenshots[activeIndex].caption}
                  </div>
                )}
                {screenshots.length > 1 && (
                  <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous screenshot"
                      className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-[#09090B]/85 text-[#FAFAFA] transition-colors hover:border-[#3B82F6]"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next screenshot"
                      className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-[#09090B]/85 text-[#FAFAFA] transition-colors hover:border-[#3B82F6]"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#60A5FA]">
                  <ImageIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-[#FAFAFA]">
                  Screenshots &amp; Gallery Area
                </p>
                <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-[#A1A1AA]">
                  {placeholderNote}
                </p>
                <p className="mt-3 font-mono text-[11px] text-[#60A5FA]/80">
                  Add images via src/data/projects.ts
                </p>
              </div>
            )}
          </>
        )}

        {activeTab === 'video' && (
          <>
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                preload="metadata"
                className="h-full w-full object-contain bg-[#09090B]"
              >
                Your browser does not support embedded video playback.
              </video>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#60A5FA]">
                  <PlaySquare className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-[#FAFAFA]">
                  Video Demonstration Slot
                </p>
                <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-[#A1A1AA]">
                  Reserved for a recorded walkthrough or feature demonstration of{' '}
                  {project.name}.
                </p>
                <p className="mt-3 font-mono text-[11px] text-[#60A5FA]/80">
                  Set media.videoUrl in src/data/projects.ts
                </p>
              </div>
            )}
          </>
        )}

        {activeTab === 'embed' && (
          <>
            {iframeUrl ? (
              <iframe
                src={iframeUrl}
                title={`${project.name} interactive demonstration`}
                loading="lazy"
                className="h-full w-full border-0 bg-[#09090B]"
                allow="fullscreen; clipboard-read; clipboard-write"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#60A5FA]">
                  <Monitor className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-[#FAFAFA]">
                  Interactive Iframe Container
                </p>
                <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-[#A1A1AA]">
                  Responsive {iframeAspectRatio ?? '16/9'} container reserved for an
                  embedded live demo or interactive preview.
                </p>
                <p className="mt-3 font-mono text-[11px] text-[#60A5FA]/80">
                  Set media.iframeUrl in src/data/projects.ts
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Thumbnail strip when multiple screenshots exist */}
      {activeTab === 'screenshots' && screenshots.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {screenshots.map((shot, idx) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`h-12 w-20 shrink-0 overflow-hidden rounded-md border transition-colors ${
                idx === activeIndex
                  ? 'border-[#3B82F6]'
                  : 'border-[#27272A] opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
