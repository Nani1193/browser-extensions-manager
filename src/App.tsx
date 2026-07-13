import ExtensionsGrid from "./components/organisms/ExtensionsGrid";
import extensions from "./assets/data.json";

function App() {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <ExtensionsGrid extensions={extensions} />
      </div>
    </main>
  );
}

export default App;