// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)



//   function callpen()
//   {
//     alert("function called")
//   }

//   return (
//     <div>
//       <button onclick={callpen}>click</button>
//       <h1>welcome in my project</h1>
//     </div>
//   )
// }
    

// export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)



//   function callpen()
//   {
//     alert("function called")
//   }

//   return (
//     <div>
      


//       <h1>example of arrow function</h1>
      




//     </div>
//   )
// }
    

// export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)



//   function callpen()
//   {
//     const fruit=()=>
//     alert("function called")
//   }

//   return (
//     <div>
      
//       <h1>example of arrow function</h1>
//       <button onclick={callpen}>click to call function</button>
//       <button onclick={()=>fruit("first parameter")}>arrow</button>
//       <button onclick={()=>fruit("first parameter")}>apple</button>
//       <button onclick={()=>fruit("first parameter")}>banana</button>

//     </div>
//   )
// }
    

// export default App
import { startTransition, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  function callpen()
  {
    const fruit=()=>
    alert("function called")
  }
  const fruit=(name)=>{
    alert(name)
  }
  let data="demo"
  function update(){
    data="example";
    startTransition(data)
  }

  return (
    <div>
      
      <h1>state in react</h1>
      <h1>{data}</h1>

      <button onclick={update}>click to change the value</button>
    </div>
  )
}
    

export default App
