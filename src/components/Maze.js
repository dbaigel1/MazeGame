import React, { useState } from "react"
import SearchBox from "./SearchBox"
import Message from "./Message"
import Sky from "./Sky"
/* Maze component handles the playing field
   It gets props from App to determine when to display things on the board
*/
function Maze(props) {
    
    return (
        <div className={props.mode}>
            <div>
                {props.searchvisible ? <SearchBox 
                                        setStars = {props.setStars}
                                        setBeach = {props.setBeach}
                                        setScore = {props.setScore}
                                        mode = {props.mode}
                                       /> : null
                }
                {props.stars || props.beach ? <Sky mode={props.mode} 
                                                   stars={props.stars}
                                                   beach={props.beach}
                                              /> 
                                            : null}

            </div>
            <Message message={props.message} setMessage={props.setMessage}/>
            {props.location ? <h1>{props.location[0]} {props.location[1]}</h1> : null}
            {props.data ? <h1>{props.data.main.temp}</h1> : null}
            
        </div>
    )
}

export default Maze