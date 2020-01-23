import React, { useState } from 'react'
import './App.css'
import Score from "./Score"

function App() {
  const [mode, setMode] = useState("night")
  
  function handleClick(){
    setMode(prevMode => prevMode === "night" ? "day" : "night")
  }
  
  return (
    <div className={mode} onClick={handleClick}>
      <Score />
    </div>
    )
}

export default App
