import { useEffect, useState } from "react";

import MainLayout from "./components/templates/MainLayout";

import extensionsData from "./assets/data.json";

import type { Extension } from "./interfaces/Extension";
import type { Filter } from "./interfaces/Filter";

function App() {
  const [extensions, setExtensions] = useState<Extension[]>(extensionsData);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");

  const handleToggle = (name: string) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.name === name
          ? {
              ...extension,
              isActive: !extension.isActive,
            }
          : extension
      )
    );
  };

  const handleRemove = (name: string) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter(
        (extension) => extension.name !== name
      )
    );
  };

  const filteredExtensions = extensions.filter((extension) => {
    if (filter === "active") {
      return extension.isActive;
    }

    if (filter === "inactive") {
      return !extension.isActive;
    }

    return true;
  });

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
  document.documentElement.classList.toggle(
    "light",
    !isDarkMode
  );
}, [isDarkMode]);

  return (
  <MainLayout
    extensions={filteredExtensions}
    filter={filter}
    onFilterChange={setFilter}
    onToggle={handleToggle}
    onRemove={handleRemove}
    isDarkMode={isDarkMode}
    onThemeToggle={handleThemeToggle}
  />
);
}

export default App;