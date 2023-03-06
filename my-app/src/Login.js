// Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.

import React from 'react'

export default class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
        this.setState({
            [name] : type === 'checkbox' ? checked : value
        })
    }

    render() {
        return (
            <div>
                <label>Name: </label>
                <input
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInputChange} />
                <br />
                <br />
                <label>Password: </label>
                <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                <br />
                <br />
                <label>Remember me: </label>
                <input
                    name="remember"
                    type="checkbox"
                    value="remember"
                    checked={this.state.remember}
                    onChange={this.handleInputChange} />
            </div>
        )
    }
}
