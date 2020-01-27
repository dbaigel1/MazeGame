import React from "react"

function Sky(props) {
    let source = ""
    if (props.mode === "night") {
        source = "../images/stars.jpg"
    }
    else {
        source = "../images/ocean.jpg"
    }
    return (
        <div className="imageContainer">
            <img className="skyImage" src={source}/>
        </div>
    )
}

export default Sky