import React, { useState } from "react"

function Ground(props) {
    const [dClicked, setDClicked] = useState(false)
    
    let source = ""
    if (props.mode === "night") {
        source = "../images/city.jpg"
    }
    else {
        source = "../images/Daniel.png"
    }
    
    //clicking on daniel gets 5 points
    function handleClick(){
        if (props.mode === "day") {
            if (!dClicked){
                props.setScore(prevScore => prevScore + 5)
                setDClicked(true)
            }
        }
    }

    if ((props.mode === "night" && props.city) || (props.mode === "day" && props.daniel)) {
        return (
            <div>
                <img className="groundImage" src={source} onClick={handleClick} alt="ground"/>
            </div>
        )
    }
    else{
        return null
    }
    
}

export default Ground