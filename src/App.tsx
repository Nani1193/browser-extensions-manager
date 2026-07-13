import { useState } from "react";

import Button from "./components/atoms/Button";
import Icon from "./components/atoms/Icon";
import Switch from "./components/atoms/Switch";

import logo from "./assets/images/logo.svg";

function App() {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Button className="w-fit rounded-full bg-red-500 px-5 py-2 font-medium text-white">
          Remove
        </Button>

        <Icon
          src={logo}
          alt="Extensions logo"
          className="w-10"
        />

        <Switch
          checked={isActive}
          onChange={handleToggle}
        />
      </div>
    </main>
  );
}

export default App;