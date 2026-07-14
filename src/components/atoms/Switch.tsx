import type { SwitchProps } from "../../interfaces/SwitchProps";

export default function Switch({
  checked,
  onChange,
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`
        relative
        h-6
        w-11
        cursor-pointer
        rounded-full
        transition-colors
        duration-300
        ${
          checked
            ? "bg-[var(--red-500)]"
            : "bg-[var(--neutral-600)]"
        }
      `}
    >
      <span
        className={`
          absolute
          top-0.5
          left-0.5
          h-5
          w-5
          rounded-full
          bg-white
          transition-transform
          duration-300
          ${
            checked
              ? "translate-x-5"
              : "translate-x-0"
          }
        `}
      />
    </button>
  );
}