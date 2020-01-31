import React, { useState, useEffect } from "react"

function Weather(props) {
    const [data, setData] = useState(props.data)

    useEffect(() => {
        document.documentElement.style.setProperty(`--humidity`, 100-data.main.humidity + "%")
    }, [data])

    return (
        <div className="weather">
            <h4>{data.name}</h4>
            <h3>{data.weather[0].main}</h3>
            <h2>{Math.round(data.main.temp)}</h2>
            <h6>Min: {Math.round(data.main.temp_min)}  Max: {Math.round(data.main.temp_max)}</h6>
        </div>
    )
}


export default Weather