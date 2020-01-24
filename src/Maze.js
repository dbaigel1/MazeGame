import React, { useState } from "react"

function Maze() {
    const [mode, setMode] = useState("night")
  
    function handleClick(){
        setMode(prevMode => prevMode === "night" ? "day" : "night")
    }
    
    return (
        <div className={mode} onClick={handleClick}>
            <div>This is the maze</div>
        </div>
    )
}

export default Maze