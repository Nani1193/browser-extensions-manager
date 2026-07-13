import Button from "../atoms/Button";

import type { Filter } from "../../interfaces/Filter";

interface FilterGroupProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export default function FilterGroup({
  filter,
  onFilterChange,
}: FilterGroupProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        onClick={() => onFilterChange("all")}
        className={`rounded-full px-5 py-2 font-medium transition ${
          filter === "all"
            ? "bg-[var(--red-500)] text-white"
            : "border border-[var(--neutral-600)] bg-[var(--neutral-700)] text-white"
        }`}
      >
        All
      </Button>

      <Button
        onClick={() => onFilterChange("active")}
        className={`rounded-full px-5 py-2 font-medium transition ${
          filter === "active"
            ? "bg-[var(--red-500)] text-white"
            : "border border-[var(--neutral-600)] bg-[var(--neutral-700)] text-white"
        }`}
      >
        Active
      </Button>

      <Button
        onClick={() => onFilterChange("inactive")}
        className={`rounded-full px-5 py-2 font-medium transition ${
          filter === "inactive"
            ? "bg-[var(--red-500)] text-white"
            : "border border-[var(--neutral-600)] bg-[var(--neutral-700)] text-white"
        }`}
      >
        Inactive
      </Button>
    </div>
  );
}