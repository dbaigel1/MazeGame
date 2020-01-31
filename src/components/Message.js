import React, {useState, useEffect} from "react"

/* Message component displays messages to the user
    timeout function gets rid of message after amount of time
*/ 
function Message(props) {
    const [visible, setVisible] = useState(true)
    
    useEffect(() => {
        setVisible(true)

        let displayAmount = 1000
        if (props.message === "tap 's' to display the scoreboard. After that, you're on your own...") {
            displayAmount +=2000
        }
        setTimeout(function(){
            setVisible(false)
        
        }, displayAmount) 
    }, [props.message])

    

    if (props.message) {
        return (
            <div className={`message${visible ? "" : "hidden"}`}>
                <h1>{props.message}</h1>
            </div>
        )  
    }
    else{
        return (null)
    }
    
}

export default Message