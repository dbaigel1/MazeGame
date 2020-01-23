import React, {useState} from "react"

function Score(){
    const [score, setScore] = useState(0)

    return (
        <div>
            <h3 className="score">Score: {score}</h3>
        </div>
    )
}

export default Score