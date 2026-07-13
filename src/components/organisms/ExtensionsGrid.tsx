import ExtensionCard from "../molecules/ExtensionCard";

import type { Extension } from "../../interfaces/Extension";

interface ExtensionsGridProps {
  extensions: Extension[];
}

export default function ExtensionsGrid({
  extensions,
}: ExtensionsGridProps) {

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {extensions.map((extension) => (
        <ExtensionCard
          key={extension.name}
          logo={extension.logo}
          name={extension.name}
          description={extension.description}
          isActive={extension.isActive}
          onToggle={() => {}}
          onRemove={() => {}}
        />
      ))}
    </section>
  );
}