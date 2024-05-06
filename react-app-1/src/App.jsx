import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let holaMundo = ["Hola mundo", "Juan José Carmona Ortiz"];

  return (
    <>
      <div ClassName="App">
        {alert("vaaaaamooooo")}
        <img src={reactLogo} className='img'/>
        <h1>{holaMundo[0]}</h1>
        <input value={holaMundo[1]} />
        <br />
      </div>
    </>
  )
}

export default App
