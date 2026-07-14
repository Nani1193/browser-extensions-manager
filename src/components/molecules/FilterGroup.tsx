import Button from "../atoms/Button";

import type { Filter } from "../../interfaces/Filter";

interface FilterGroupProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const filters: Filter[] = ["all", "active", "inactive"];

export default function FilterGroup({
  filter,
  onFilterChange,
}: FilterGroupProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((item) => {
        const isActive = filter === item;

        return (
          <Button
            key={item}
            onClick={() => onFilterChange(item)}
            className={`
              flex
              items-center
              justify-center
              h-[46px]
              rounded-full
              text-[16px]
              font-medium
              transition-all
              focus:outline-none
              focus-visible:outline-none
              focus:ring-0
              focus-visible:ring-0
              ${
                item === "all"
                  ? "w-[64px]"
                  : item === "active"
                  ? "w-[88px]"
                  : "w-[98px]"
              }
              ${
                isActive
                  ? "bg-[var(--red-500)] text-[var(--neutral-900)]"
                  : "border border-[var(--neutral-600)] bg-[var(--neutral-700)] text-[var(--neutral-0)] hover:border-[var(--red-500)] hover:bg-[var(--neutral-600)]"
              }
            `}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        );
      })}
    </div>
  );
}