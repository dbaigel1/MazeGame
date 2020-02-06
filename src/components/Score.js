import React, {useState} from "react"
import Username from "./Username"
/* This component represents the scoreboard at the top of the screen
   Clicking on the scoreboard changes the mode of the maze from night to day
   it also tracks when an 's' has been pressed to display the scoreboard 
   and username
*/ 
function Score(props){
    const [visible, setVisible] = useState(false)
    const [username, setUsername] = useState("")
    const [showForm, setShowForm] = useState(false)
    
    document.addEventListener('keydown', logKey)

    function logKey(e) {
        if (e.key === "s"){
            setVisible(true)
        }
        if (visible) {
            if (e.key === "u") {
                /* signal for username input form to appear */ 
                setShowForm(true)
            }
        }
    }

    const styles = {
        textAlign: "right"
    }
    if (visible === true) { 
        return (
            <div>
                <div className="scoreboard" onClick={props.handleClick}>
                    <div className="scoreItem">{username}</div>
                    <div className = "scoreItem">The Maze Game</div>
                    <div className="scoreItem" style={styles}>Score: {props.score}</div> 
                </div>
                {showForm ? <Username 
                                showForm={showForm} 
                                setName={setUsername}
                                setScore={props.setScore}
                            /> 
                            : null}
            </div>
        ) 
    } 
    else {
        return (
            null 
        )
    }
    
}

export default Score