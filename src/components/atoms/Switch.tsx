import type { SwitchProps } from "../../interfaces/SwitchProps";

export default function Switch({
  checked,
  onChange,
}: SwitchProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={checked}
      className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
        checked ? "bg-red-500" : "bg-gray-500"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}