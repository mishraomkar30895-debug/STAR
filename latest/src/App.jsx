import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  function callpen()
  {
    alert("function called")
  }

  return (
    <div>
      <button onclick={callpen}>click</button>
      <h1>welcome in my project</h1>
    </div>
  )
}
    

export default App
