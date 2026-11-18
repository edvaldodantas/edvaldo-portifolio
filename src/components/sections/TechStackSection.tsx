import { useState } from 'react';
import {
  Server,
  Layout,
  Database,
  Smartphone,
  Layers,
  Wrench,
} from 'lucide-react';
import { TECH_STACK_CATEGORIES } from '@/src/data/techStack';
import type { TechCategory } from '@/src/lib/types';
import { SectionHeader } from '@/src/components/ui/SectionHeader';

const FILTER_OPTIONS = [
  { id: 'all', label: 'All Domains' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'databases', label: 'Databases' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'tools', label: 'Tools & DevOps' },
];

function CategoryIcon({ name }: { name: TechCategory['iconName'] }) {
  const iconClass = 'h-4 w-4 text-[#60A5FA]';
  switch (name) {
    case 'server':
      return <Server className={iconClass} aria-hidden="true" />;
    case 'layout':
      return <Layout className={iconClass} aria-hidden="true" />;
    case 'database':
      return <Database className={iconClass} aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className={iconClass} aria-hidden="true" />;
    case 'layers':
      return <Layers className={iconClass} aria-hidden="true" />;
    case 'wrench':
      return <Wrench className={iconClass} aria-hidden="true" />;
  }
}

export function TechStackSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const visibleCategories =
    selectedFilter === 'all'
      ? TECH_STACK_CATEGORIES
      : TECH_STACK_CATEGORIES.filter((cat) => cat.id === selectedFilter);

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="border-b border-[#27272A] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          title="Tech Stack"
          subtitle="Core languages, frameworks, architectural patterns, and engineering tools."
          headingId="tech-stack-heading"
        />

        {/* Interactive Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter technologies by category"
          className="mb-8 flex flex-wrap items-center gap-2"
        >
          {FILTER_OPTIONS.map((option) => {
            const isActive = selectedFilter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedFilter(option.id)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'bg-[#3B82F6] text-[#FAFAFA]'
                    : 'border border-[#27272A] bg-[#18181B] text-[#A1A1AA] hover:border-[#3B82F6]/60 hover:text-[#FAFAFA]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Categorized Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((category) => (
            <article
              key={category.id}
              className="flex flex-col justify-between rounded-2xl border border-[#27272A] bg-[#18181B] p-6 transition-colors duration-150 hover:border-[#3B82F6]/50"
            >
              <div>
                <div className="flex items-start justify-between gap-3 border-b border-[#27272A] pb-4">
                  <div>
                    <h3 className="font-display text-base font-semibold text-[#FAFAFA]">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#A1A1AA]">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#27272A] bg-[#09090B]">
                    <CategoryIcon name={category.iconName} />
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {category.items.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2.5 rounded-md border border-[#27272A] bg-[#09090B] px-3 py-2 text-xs font-medium text-[#FAFAFA]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#3B82F6]"
                      />
                      <span className="truncate">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
