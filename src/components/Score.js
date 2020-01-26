import React, {useState} from "react"
/* This component represents the scoreboard at the top of the screen
   Clicking on the scoreboard changes the mode of the maze from night to day
   it also tracks when an 's' has been pressed to display the scoreboard 
*/ 
function Score(props){
    const [score, setScore] = useState(0)
    const [visible, setVisible] = useState(false)
    const [username, setUsername] = useState("")
    
    document.addEventListener('keydown', logKey)

    function logKey(e) {
        if (e.key === "s"){
            setVisible(true)
        }
        if (e.key === "u") {
            setUsername("result of form")
        }
    }

    if (visible === true) { 
        return (
            <div className="scoreboard" onClick={props.handleClick}>
                <span className="user">{username}</span>
                <span className="score">Score: {score}</span>
                
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