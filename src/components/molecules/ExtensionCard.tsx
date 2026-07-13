import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Switch from "../atoms/Switch";

interface ExtensionCardProps {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export default function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  onToggle,
  onRemove,
}: ExtensionCardProps) {
  return (
    <article className="w-full max-w-md rounded-2xl border border-[var(--neutral-700)] bg-[var(--neutral-800)] p-5 shadow-lg">
      {/* Encabezado */}
      <div className="flex items-start gap-4">
        <Icon
          src={logo}
          alt={name}
          className="h-14 w-14 flex-shrink-0"
        />

        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">
            {name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--neutral-300)]">
            {description}
          </p>
        </div>
      </div>

      {/* Acciones */}
      <div className="mt-6 flex items-center justify-between">
        <Button
          onClick={onRemove}
          className="rounded-full border border-[var(--neutral-600)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--red-500)]"
        >
          Remove
        </Button>

        <Switch
          checked={isActive}
          onChange={onToggle}
        />
      </div>
    </article>
  );
}