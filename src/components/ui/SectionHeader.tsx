interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  headingId: string;
}

export function SectionHeader({
  index,
  title,
  subtitle,
  headingId,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 md:mb-12 flex flex-col gap-3 border-b border-[#27272A] pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2 text-xs font-mono font-medium text-[#60A5FA] tabular-nums">
          <span>{index}.</span>
          <span aria-hidden="true" className="text-[#27272A]">
            /
          </span>
          <span className="text-[#A1A1AA]">{title}</span>
        </div>
        <h2
          id={headingId}
          className="font-display text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl"
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-md text-sm leading-relaxed text-[#A1A1AA]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
