import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Score from "./components/Score"
import Maze from "./components/Maze"

function App() {
  const [mode, setMode] = useState("night")
  const [message, setMessage] = useState("tap 's' to display the scoreboard. After that, you're on your own...")
  const [score, setScore] = useState(0)
  
  const isFirstRun = useRef(true)
  useEffect(() => {
    
    if (!isFirstRun.current) {
      setMessage(mode === "night" ? "night mode" : "day mode")
    }
    isFirstRun.current = false

  }, [mode]) 

  /* when scoreboard is clicked, switch between day and night mode */ 
  function handleClick(){
    changeMode()  
      
  }

  function changeMode() {
    setMode(mode === "night" ? "day" : "night")
    
  }

  return (
    <div>
      <Score 
        handleClick={handleClick} 
        setScore = {setScore}
        score = {score}
      />

      <Maze 
        mode={mode}
        message={message}
        setMessage={setMessage}
        setScore = {setScore}
      />
    </div>
  )
}

export default App
