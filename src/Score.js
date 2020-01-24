import React, {useState} from "react"

function Score(){
    const [score, setScore] = useState(0)
    const [visible, setVisible] = useState(false)
    
    document.addEventListener('keydown', logKey)

    function logKey(e) {
        if (e.key === "s"){
            setVisible(true)
        }
    }

    if (visible === true) { 
        return (
            <div>
                <h3 className="score">Score: {score}</h3> 
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