import { useState } from "react";

import ExtensionCard from "./components/molecules/ExtensionCard";

import logo from "./assets/images/logo-devlens.svg";

function App() {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleRemove = () => {
    alert("Remove extension");
  };

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <ExtensionCard
          logo={logo}
          name="DevLens"
          description="Quickly inspect page layouts and visualize element boundaries."
          isActive={isActive}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </div>
    </main>
  );
}

export default App;