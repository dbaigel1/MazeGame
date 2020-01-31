import React from "react"

class Weather extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: props.data
        }
    }
    componentDidMount() {
    }

    render(){
        return (
            null
        )
    }
}

export default Weather