import React from "react"

/* Message component displays messages to the user
    timeout function gets rid of message after amount of time
*/ 
function Message(props) {

    setTimeout(function(){
        props.setMessage("")
    
    }, 3000)

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