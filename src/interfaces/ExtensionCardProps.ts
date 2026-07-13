import type { Extension } from "./Extension";

export interface ExtensionCardProps extends Extension {
  onToggle: () => void;
  onRemove: () => void;
}