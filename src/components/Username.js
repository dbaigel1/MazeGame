import React from "react"

class Username extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: "",
            showForm: props.showForm

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.setName(this.state.value)
        /* remove form from the maze */
        this.setState({showForm: false})
   
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {    
        if(this.state.showForm) {
            return (
                <div className = "inputUser">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            placeholder = "Enter Username" 
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                        <button>Submit</button>
                    </form>
                </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default Username