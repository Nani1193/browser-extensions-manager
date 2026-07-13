export interface ExtensionCardProps {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  onToggle: () => void;
  onRemove: () => void;
}