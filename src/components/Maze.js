import React, { useState } from "react"
import SearchBox from "./SearchBox"

function Maze(props) {
    
    
    return (
        <div className={props.mode}>
            <div>
                <h3>{props.mode} mode</h3>
                <SearchBox />
            
            </div>
        </div>
    )
}

export default Maze