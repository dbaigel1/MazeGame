import React, { useState, useEffect } from "react"
import SearchBox from "./SearchBox"
import Message from "./Message"
import Sky from "./Sky"
import Weather from "./Weather"
/* Maze component handles the playing field
   It gets props from App to determine when to display things on the board
*/
function Maze(props) {
    const [searchvisible, setVisible] = useState(false)
    const [stars, setStars] = useState(false)
    const [beach, setBeach] = useState(false)
    const [weatherData, setData] = useState("")
    const [location, setLocation] = useState("")
    const [gotWeather, setGotWeather] = useState(false)

    //when w is pressed and the location is retrieved
    useEffect(() => { 
        if (gotWeather && location) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=imperial&APPID=ad3fa995d613cd69122cfffc24bc1222`)
          .then(response => response.json())
          .then(data => setData(data))
          
          //set the score
          props.setScore((prevScore) => prevScore + 10)
        }
    }, [location])

    //get location when w is pressed
    useEffect(() => {
        if (gotWeather) {
        getLocation()
        }
    }, [gotWeather])


    document.addEventListener('keydown', logKey)
    /* makes the search bar visible */     
    function logKey(e) {
        if (e.repeat) { 
          return 
        }
        
        if (e.key === "t"){ 
            setVisible({searchvisible: true})
        }
        if (e.key === "w"){
            /*get the user's location and display the weather using open weather map api*/
            if (!gotWeather) {
              setGotWeather(true)
            }
            
          }
            
    }

    function getLocation() {
        function success(position) {
          const latitude  = position.coords.latitude
          const longitude = position.coords.longitude
      
          console.log(latitude, longitude)
          setLocation([latitude, longitude])
        }
      
        function error() {
          console.log('Unable to retrieve your location')
        }
      
        if (!navigator.geolocation) {
          console.log("Geolocation is not supported by your browser")
        } else {
          console.log('Locating…')
          navigator.geolocation.getCurrentPosition(success, error)
        }
        
      }
    

    return (
        <div className={props.mode}>
            <div>
                {searchvisible ? <SearchBox 
                                        setStars = {setStars}
                                        setBeach = {setBeach}
                                        setScore = {props.setScore}
                                        mode = {props.mode}
                                        stars = {stars}
                                        beach = {beach}
                                       /> : null
                }
                {stars || beach ? <Sky mode={props.mode} 
                                                   stars={stars}
                                                   beach={beach}
                                              /> 
                                            : null}

            </div>
            <Message message={props.message} setMessage={props.setMessage}/>
            {weatherData ? <Weather 
                                data={weatherData}
                           /> : null}
            
        </div>
    )
}

export default Maze