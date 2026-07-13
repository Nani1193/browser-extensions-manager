import Button from "./components/atoms/Button";

function App() {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <Button
          className="rounded-full bg-red-500 px-5 py-2 font-medium text-white"
        >
          Remove
        </Button>
      </div>
    </main>
  );
}

export default App;