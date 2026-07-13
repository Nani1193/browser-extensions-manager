import Button from "./components/atoms/Button";
import Icon from "./components/atoms/Icon";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <Button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white">
          Remove
        </Button>

        <Icon
          src={logo}
          alt="Extensions logo"
          className="w-10"
        />
      </div>
    </main>
  );
}

export default App;