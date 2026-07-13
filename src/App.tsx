import { useState } from "react";

import MainLayout from "./components/templates/MainLayout";

import extensionsData from "./assets/data.json";

import type { Extension } from "./interfaces/Extension";
import type { Filter } from "./interfaces/Filter";

function App() {
  const [extensions, setExtensions] = useState<Extension[]>(extensionsData);

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

  const filteredExtensions = extensions.filter((extension) => {
    if (filter === "active") {
      return extension.isActive;
    }

    if (filter === "inactive") {
      return !extension.isActive;
    }

    return true;
  });

  return (
    <MainLayout
      extensions={filteredExtensions}
      filter={filter}
      onFilterChange={setFilter}
      onToggle={handleToggle}
    />
  );
}

export default App;