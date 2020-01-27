import React, { useState } from "react"
import SearchBox from "./SearchBox"
import Message from "./Message"
import Sky from "./Sky"
/* Maze component handles the playing field
   It gets props from App to determine when to display things on the board
*/
function Maze(props) {
    const [stars, setStars] = useState(false)
    const [ocean, setOcean] = useState(false)


    return (
        <div className={props.mode}>
            <div>
                {props.searchvisible ? <SearchBox 
                                        setStars={setStars}
                                        setOcean={setOcean}
                                        setScore={props.setScore}
                                       /> : null
                }
                {stars || ocean ? <Sky mode={props.mode}/> : null}
            </div>
            <Message message={props.message} setMessage={props.setMessage}/>
        </div>
    )
}

export default Maze