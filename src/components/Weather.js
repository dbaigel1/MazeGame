import React, { useState, useEffect} from "react"
import ReactHover from "react-hover"

function Weather(props) {
    const [data] = useState(props.data)
    const optionsCursorTrueWithMargin = {
        followCursor:true,
        shiftX:-250,
        shiftY:10
    }

    useEffect(() => {
        document.documentElement.style.setProperty(`--humidity`, 100-data.main.humidity + "%")
    }, [data])

    return (
        <div className="weather">
            <ReactHover options={optionsCursorTrueWithMargin}>
                <ReactHover.Trigger type="trigger">
                    <div>
                        <h4>{data.name}</h4>
                        <h3>{data.weather[0].main}</h3>
                        <h2>{Math.round(data.main.temp)}</h2>
                        <h5>Min: {Math.round(data.main.temp_min)}  Max: {Math.round(data.main.temp_max)}</h5>
                    </div>
                </ReactHover.Trigger>
                <ReactHover.Hover type="hover">
                    <div className="weathertooltip">
                        <p>The humidity is: {data.main.humidity}%. 
                        The amount of green in the box is a visual representation of the humidity.</p>
                    </div>
                </ReactHover.Hover>
            </ReactHover>
        </div>
    )
}


export default Weather