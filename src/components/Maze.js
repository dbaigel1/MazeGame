import React, { useState } from "react"
import SearchBox from "./SearchBox"
/* Maze component handles the playing field
   It gets props from App to determine when to display things on the board
*/
function Maze(props) {
    
    return (
        <div className={props.mode}>
            <div>
                <h3>{props.mode} mode</h3>
                {props.visible ? <SearchBox /> : null}
            
            </div>
        </div>
    )
}

export default Maze