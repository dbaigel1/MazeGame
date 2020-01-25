import React, { useState } from 'react'
import './App.css'
import Score from "./components/Score"
import Maze from "./components/Maze"

function App() {
  const [mode, setMode] = useState("night")

  function handleClick(){
      setMode(prevMode => prevMode === "night" ? "day" : "night")
  }

  return (
    <div>
      <Score handleClick={handleClick}/>
      <Maze mode={mode}/>
    </div>
  )
}

export default App
