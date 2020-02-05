import React from "react"

function Ground(props) {
    let source = ""
    if (props.mode === "night") {
        source = "../images/city.jpg"
    }
    else {
        source = "../images/Daniel.png"
    }
    
    if ((props.mode === "night" && props.city) || (props.mode === "day" && props.daniel)) {
        return (
            <div>
                <img className="groundImage" src={source} alt="ground"/>
            </div>
        )
    }
    else{
        return null
    }
    
}


export default Ground