import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to Redux Toolkit</h1>
     <p>You are learning about Redux Toolkit</p>
    </>
  )
}

export default App
