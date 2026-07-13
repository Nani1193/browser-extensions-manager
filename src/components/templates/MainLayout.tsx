import Header from "../organisms/Header";
import FilterGroup from "../molecules/FilterGroup";
import ExtensionsGrid from "../organisms/ExtensionsGrid";

import type { Extension } from "../../interfaces/Extension";
import type { Filter } from "../../interfaces/Filter";

interface MainLayoutProps {
  extensions: Extension[];
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export default function MainLayout({
  extensions,
  filter,
  onFilterChange,
}: MainLayoutProps) {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <Header />

        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h1 className="text-4xl font-bold text-white">
            Extensions List
          </h1>

          <FilterGroup
            filter={filter}
            onFilterChange={onFilterChange}
          />
        </section>

        <ExtensionsGrid extensions={extensions} />
      </div>
    </main>
  );
}