import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={viteLogo} className="h-24 w-24 animate-spin" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={reactLogo} className="h-24 w-24 animate-pulse" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-lg">
          Vite + React + Tailwind
        </h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg 
                     hover:bg-purple-100 transition-all duration-200 
                     transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Count is {count}
          </button>
          
          <p className="text-white/80 mt-6 text-lg">
            Edit <code className="bg-black/20 px-2 py-1 rounded font-mono">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-white/60 mt-8 text-lg">
          Click on the Vite and React logos to learn more
        </p>
        
        <div className="mt-8">
          <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
            Tailwind CSS is working! 🎉
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
