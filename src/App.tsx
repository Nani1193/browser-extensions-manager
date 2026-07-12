import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <h1 className="text-5xl font-bold text-blue-600">
        Tailwind funcionando 🚀
      </h1>
    </main>
  );

}

export default App
