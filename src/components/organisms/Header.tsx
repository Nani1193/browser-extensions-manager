import Icon from "../atoms/Icon";

import logo from "../../assets/images/logo.svg";
import iconMoon from "../../assets/images/icon-moon.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-[var(--neutral-800)] p-4 shadow-lg">
      <Icon
        src={logo}
        alt="Extensions"
        className="h-10"
      />

      <button
        type="button"
        className="rounded-xl bg-[var(--neutral-700)] p-3 transition hover:bg-[var(--neutral-600)]"
      >
        <Icon
          src={iconMoon}
          alt="Change theme"
          className="h-5 w-5"
        />
      </button>
    </header>
  );
}