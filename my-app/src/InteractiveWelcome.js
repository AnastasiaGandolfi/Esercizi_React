import React from 'react'
import Welcome from './Welcome'

export default class InteractiveWelcome extends React.Component {
    state = {
        username: "",
    }
    handleNameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    render() {
        return (
            <div>
                <Welcome name={this.state.username} />
                <label>Enter your name: </label>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleNameChange} />
            </div>
        )
    }
}
