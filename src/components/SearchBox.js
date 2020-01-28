import React from "react"

class SearchBox extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("submitting!")
        /*put in conditional logic for the values people are submitting*/
        if ((this.state.value).toLowerCase() === "stars") {
            if (this.props.mode === "night") {
                this.props.setStars(true)
                this.props.setScore(prevScore => prevScore + 10) 
            }
        }
        if ((this.state.value).toLowerCase() === "beach") {
            if (this.props.mode === "day") {
                this.props.setBeach(true)
                this.props.setScore(prevScore => prevScore + 10) 
            }
        }
        
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {    
        return (
            <div className = "search">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder = "looking for something?" 
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBox