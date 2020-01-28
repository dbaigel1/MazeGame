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
        </div>
    )
}

export default Maze