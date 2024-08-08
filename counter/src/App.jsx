import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = ()=>(
    setCount(prevcount=>prevcount+1)
  )
  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };


  return (
    <>
    <h1>Count is {count}</h1>
       <button onClick={increment}>Click to incremet</button>
       <button onClick={decrement}>Click to decrement</button>
    </>
  )
}
//    <button onClick={()=>setCount(count=>count+1)}> count is {count}</button>
//    <button onClick={()=>setCount(count+1)}> count is {count}</button>


export default App
