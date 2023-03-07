// Add a "reset" button to the Login component that clears the content of all three inputs when clicked.

import React from "react";

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
            [name]: type === 'checkbox' ? checked : value
        })
    }

    isLoginValid = () => {
        return this.state.username !== '' && this.state.password !== '';
    }

    handleReset = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
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
                <br />
                <button type="submit" disabled={!this.isLoginValid()} onClick={this.props.onLogin}>Login</button>
                <button type="submit" onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
