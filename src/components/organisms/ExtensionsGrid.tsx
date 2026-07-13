import ExtensionCard from "../molecules/ExtensionCard";

import type { Extension } from "../../interfaces/Extension";

interface ExtensionsGridProps {
  extensions: Extension[];
  onToggle: (name: string) => void;
  onRemove: (name: string) => void;
}

export default function ExtensionsGrid({
  extensions,
  onToggle,
  onRemove,
}: ExtensionsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {extensions.map((extension) => (
        <ExtensionCard
          key={extension.name}
          {...extension}
          onToggle={() => onToggle(extension.name)}
          onRemove={() => onRemove(extension.name)}
        />
      ))}
    </section>
  );
}