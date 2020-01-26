import React from "react"

class SearchBox extends React.Component {
    constructor() {
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
        if ((this.state.value).toLowerCase() === "daniel") {
            console.log("yep, it'sa me")
            /*add me to the screen*/ 
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