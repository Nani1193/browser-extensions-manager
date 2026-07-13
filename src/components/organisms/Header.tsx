import Icon from "../atoms/Icon";

interface HeaderProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function Header({
  isDarkMode,
  onThemeToggle,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-[var(--neutral-800)] p-4 shadow-lg">
      <Icon
        src="/images/logo.svg"
        alt="Extensions"
        className="h-10"
      />

      <button
        type="button"
        onClick={onThemeToggle}
        className="rounded-xl bg-[var(--neutral-700)] p-3 transition hover:bg-[var(--neutral-600)]"
      >
        <Icon
          src={
            isDarkMode
              ? "/images/icon-sun.svg"
              : "/images/icon-moon.svg"
          }
          alt="Change theme"
          className="h-5 w-5"
        />
      </button>
    </header>
  );
}