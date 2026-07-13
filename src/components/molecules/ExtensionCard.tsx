import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Switch from "../atoms/Switch";

import type { ExtensionCardProps } from "../../interfaces/ExtensionCardProps";

export default function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  onToggle,
  onRemove,
}: ExtensionCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-[var(--neutral-700)] bg-[var(--neutral-800)] p-5 shadow-lg">

      <div className="flex items-start gap-4">
        <Icon
          src={logo}
          alt={name}
          className="h-14 w-14 flex-shrink-0"
        />

        <div className="flex-1">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            {name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--neutral-300)]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button
          onClick={onRemove}
          className="rounded-full border border-[var(--neutral-600)] px-4 py-2 text-sm text-white transition hover:bg-[var(--red-500)]"
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