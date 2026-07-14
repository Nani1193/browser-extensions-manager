import Header from "../organisms/Header";
import FilterGroup from "../molecules/FilterGroup";
import ExtensionsGrid from "../organisms/ExtensionsGrid";

import type { Extension } from "../../interfaces/Extension";
import type { Filter } from "../../interfaces/Filter";

interface MainLayoutProps {
  extensions: Extension[];
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  onToggle: (name: string) => void;
  onRemove: (name: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function MainLayout({
  extensions,
  filter,
  onFilterChange,
  onToggle,
  onRemove,
  isDarkMode,
  onThemeToggle,
}: MainLayoutProps) {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <Header
          isDarkMode={isDarkMode}
          onThemeToggle={onThemeToggle}
        />

        <section className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h1 className="text-[36px] font-bold text-[var(--text-primary)]">
            Extensions List
          </h1>

          <FilterGroup
            filter={filter}
            onFilterChange={onFilterChange}
          />
        </section>

        <div className="mt-8">
          <ExtensionsGrid
            extensions={extensions}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </div>
      </div>
    </main>
  );
}