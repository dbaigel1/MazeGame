import React from "react"

/* Message component displays messages to the user
    timeout function gets rid of message after amount of time
*/ 
function Message(props) {
    let displayAmount = 1000
    if (props.message === "tap 's' to display the scoreboard. After that, you're on your own...") {
        displayAmount +=2000
    }

    setTimeout(function(){
        props.setMessage("")
    
    }, displayAmount)

    if (props.message) {
        return (
            <div className="message">
                <h1>{props.message}</h1>
            </div>
        )  
    }
    else{
        return (null)
    }
    
}

export default Message