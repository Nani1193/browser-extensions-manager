import Button from "../atoms/Button";
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
    <header
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-[var(--neutral-700)]
        bg-[var(--neutral-800)]
        px-5
        py-3
      "
    >
      <Icon
        src="/images/logo.svg"
        alt="Extensions"
        className="h-10"
      />

      <Button
        onClick={onThemeToggle}
        className="
          h-12
          w-12
          rounded-xl
          bg-[var(--neutral-700)]
          p-0
          hover:bg-[var(--neutral-600)]
        "
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
      </Button>
    </header>
  );
}