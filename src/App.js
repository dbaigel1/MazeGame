import React, { useState } from 'react'
import './App.css'
import Score from "./components/Score"
import Maze from "./components/Maze"

function App() {
  const [mode, setMode] = useState("night")
  const [visible, setVisible] = useState(false)

  function handleClick(){
      setMode(prevMode => prevMode === "night" ? "day" : "night")
  }


  document.addEventListener('keydown', logKey)

  function logKey(e) {
    /* makes the search bar visible */     
    if (e.key === "t"){ 
      setVisible({visible: true})
    }
        
    }

  return (
    <div>
      <Score handleClick={handleClick}/>
      <Maze mode={mode} visible={visible}/>
    </div>
  )
}

export default App
