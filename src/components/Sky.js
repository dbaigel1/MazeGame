import React from "react"

function Sky(props) {
    let source = ""
    if (props.mode === "night") {
        source = "../images/stars.jpg"
    }
    else {
        source = "../images/ocean.jpg"
    }
    
    if ((props.mode === "night" && props.stars) || (props.mode === "day" && props.ocean)) {
        return (
            <div className="imageContainer">
                <img className="skyImage" src={source}/>
            </div>
        )
    }
    else{
        return null
    }
    
}

export default Sky