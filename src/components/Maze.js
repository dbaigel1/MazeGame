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
                                        setOcean = {props.setOcean}
                                        setScore = {props.setScore}
                                        mode = {props.mode}
                                       /> : null
                }
                {props.stars || props.ocean ? <Sky mode={props.mode} 
                                                   stars={props.stars}
                                                   ocean={props.ocean}
                                              /> 
                                            : null}

            </div>
            <Message message={props.message} setMessage={props.setMessage}/>
        </div>
    )
}

export default Maze