import { useState, useCallback, useEffect, useRef } from 'react'
import { Copy, RefreshCw } from 'lucide-react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState('weak')

  const passwordRef = useRef(null)
   
  const passwordGenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz"

    if (charAllowed) str += "!@#$%^&*()-_+=[]{}|;:,.<>/?"
    if (numberAllowed) str += "123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

    const strengthScore = (length * 4) + 
      (numberAllowed ? 10 : 0) + 
      (charAllowed ? 20 : 0)
    setStrength(
      strengthScore > 70 ? 'strong' : 
      strengthScore > 40 ? 'medium' : 'weak'
    )
  },[length, numberAllowed, charAllowed, setPassword] )

  const passwordClipBoardCopy = useCallback(() => {
    passwordRef.current?.select();
    document.execCommand("copy"); 
    alert("Password copied!");
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect( ()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, setPassword] )

  return (
    <div className="w-full max-w-lg mx-auto shadow-2xl rounded-2xl p-8 my-12
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
      border border-gray-800/50 backdrop-blur-sm">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-white tracking-tight">
          Password Generator
        </h1>
        <button
          onClick={passwordGenerator}
          className="p-2 rounded-full hover:bg-gray-700 text-gray-300 
            transition-colors duration-200"
          aria-label="Generate new password"
        >
          <RefreshCw size={20} />
        </button>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          value={password}
          className="w-full py-3 px-4 pr-12 rounded-lg bg-gray-800/50 
            text-white border border-gray-700 focus:outline-none 
            focus:ring-2 focus:ring-orange-500/50 focus:border-transparent
            font-mono text-sm tracking-wider"
          placeholder="Generated Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={passwordClipBoardCopy}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 
            text-gray-400 hover:text-orange-500 transition-colors"
          aria-label="Copy to clipboard"
        >
          <Copy size={18} />
        </button>
        <div className="mt-2 flex items-center gap-2">
          <div className={`h-1.5 w-12 rounded-full ${
            strength === 'weak' ? 'bg-red-500' :
            strength === 'medium' ? 'bg-yellow-500' :
            'bg-green-500'
          }`} />
          <span className="text-xs text-gray-400 capitalize">
            {strength} Password
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="text-sm font-medium text-gray-200 col-span-1">
            Length: {length}
          </label>
          <input
            type="range"
            value={length}
            min={8}
            max={100}
            onChange={(e) => setLength(e.target.value)}
            className="col-span-2 h-2 bg-gray-700 rounded-lg appearance-none 
              cursor-pointer accent-orange-500 hover:accent-orange-400 
              transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none 
              peer-focus:ring-2 peer-focus:ring-orange-500/50 rounded-full 
              peer peer-checked:after:translate-x-full 
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
              after:bg-white after:rounded-full after:h-5 after:w-5 
              after:transition-all peer-checked:bg-orange-500/80"/>
            <span className="ml-3 text-sm font-medium text-gray-200">
              Special Characters
            </span>
          </label>

          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none 
              peer-focus:ring-2 peer-focus:ring-orange-500/50 rounded-full 
              peer peer-checked:after:translate-x-full 
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
              after:bg-white after:rounded-full after:h-5 after:w-5 
              after:transition-all peer-checked:bg-orange-500/80"/>
            <span className="ml-3 text-sm font-medium text-gray-200">
              Numbers
            </span>
          </label>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        Secure password generated on {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}

export default App