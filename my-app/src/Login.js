// Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state. 

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

    isLoginInvalid = () => {
        return this.state.username === '' || this.state.password === '';
    }

    handleOnLogin = () => {

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
                    <br/>
                    <button type="submit" disabled={this.isLoginInvalid()} onClick={() => this.props.onLogin(this.state)}>Login</button>
            </div>
        )
    }
}
