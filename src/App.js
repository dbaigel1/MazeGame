import React, { useState, useEffect } from 'react'
import './App.css'
import Score from "./components/Score"
import Maze from "./components/Maze"
import Message from "./components/Message"
import Weather from "./components/Weather"

function App() {
  const [mode, setMode] = useState("night")
  const [searchvisible, setVisible] = useState(false)
  const [message, setMessage] = useState("tap 's' to display the scoreboard. After that, you're on your own...")
  const [score, setScore] = useState(0)
  const [stars, setStars] = useState(false)
  const [beach, setBeach] = useState(false)
  const [weatherData, setData] = useState("")
  const [location, setLocation] = useState("")
  const [gotWeather, setGotWeather] = useState(false)

  // Similar to componentDidMount and componentDidUpdate:
  //when the mode changes
  useEffect(() => {
    displayMessage()
   
  }, [mode]) 

  //when w is pressed and the location is retrieved
  useEffect(() => { 
    if (gotWeather && location) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=imperial&APPID=ad3fa995d613cd69122cfffc24bc1222`)
      .then(response => response.json())
      .then(data => setData(data))
      
    }
  }, [location])

  //get location when w is pressed
  useEffect(() => {
    if (gotWeather) {
      getLocation()
    }
  }, [gotWeather])

  //you can have multiple useEffect functions for when diff
  // variables are changing
  //the second parameter is an array that dictates when to call the function
  //only calls when vars in the array change

  /* when scoreboard is clicked, switch between day and night mode */ 
  function handleClick(){
    changeMode()  
      
  }

  function changeMode() {
    setMode(mode === "night" ? "day" : "night")
    
  }

  function displayMessage() {
    setMessage(mode === "night" ? "night mode" : "day mode")
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

  document.addEventListener('keydown', logKey)

  function logKey(e) {
    if (e.repeat) { 
      return 
    }
    /* makes the search bar visible */     
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
  
  return (
    <div>
      <Score 
        handleClick={handleClick} 
        setScore = {setScore}
        score = {score}
      />

      <Maze 
        mode={mode}
        searchvisible={searchvisible}
        message={message}
        setMessage={setMessage}
        setScore = {setScore}
        stars = {stars}
        setStars = {setStars}
        beach = {beach}
        setBeach = {setBeach}
        data = {weatherData}
        location = {location}
      />
    </div>
  )
}

export default App
