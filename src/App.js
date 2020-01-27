import React, { useState } from 'react'
import './App.css'
import Score from "./components/Score"
import Maze from "./components/Maze"
import Message from "./components/Message"
import { timeout } from 'q'

function App() {
  const [mode, setMode] = useState("night")
  const [searchvisible, setVisible] = useState(false)
  const [message, setMessage] = useState("tap 's' to display the scoreboard. After that, you're on your own...")
  const [score, setScore] = useState(0)

  /* when scoreboard is clicked, switch between day and night mode */ 
  function handleClick(){
    changeMode()  
      
  }

  function changeMode() {
    setMode(prevMode => prevMode === "night" ? "day" : "night")
    displayMessage()
  }

  function displayMessage() {
    setMessage(mode === "night" ? "day mode" : "night mode")
  }


  document.addEventListener('keydown', logKey)

  function logKey(e) {
    /* makes the search bar visible */     
    if (e.key === "t"){ 
      setVisible({searchvisible: true})
    }
        
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
        searchvisible={searchvisible}
        message={message}
        setMessage={setMessage}
        setScore = {setScore}
      />
    </div>
  )
}

export default App
