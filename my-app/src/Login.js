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
                <button
                    type="submit"
                    disabled={!this.isLoginValid()}
                    onClick={this.props.onLogin}
                    style={{
                        backgroundColor: this.state.password.length < 8 ? "red" : "green"
                    }}>
                        Login
                </button>
                <button type="submit" onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

// Modify the Login component from Forms 03 so that the "login" button background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise.