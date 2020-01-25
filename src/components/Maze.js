import React, { useState } from "react"
import SearchBox from "./SearchBox"

function Maze() {
    const [mode, setMode] = useState("night")

    function handleClick(){
        console.log(mode)
        setMode(prevMode => prevMode === "night" ? "day" : "night")
    }
    
    return (
        <div className={mode} onClick={handleClick}>
            <div>
                <h3>{mode} mode</h3>
                <SearchBox />
            
            </div>
        </div>
    )
}

export default Maze