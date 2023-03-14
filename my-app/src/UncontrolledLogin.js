// Modify the UncontrolledLogin component so that the username input is automatically focused when the component renders the first time.

import React, { createRef } from 'react'

export default class UncontrolledLogin extends React.Component {
  constructor(props) {
    super(props)
    this._formRef = createRef()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let username = event.target.elements.username.value
    let password = event.target.elements.password.value
    let remember = event.target.elements.remember.checked
    if (username !== '' || password !== '') {
      this.props.onLogin({ username, password, remember })
    }
  }

  handleReset = () => {
    this._formRef.current.elements.username.value = "";
    this._formRef.current.elements.password.value = "";
    this._formRef.current.elements.remember.checked = false;
  }

  isLoginValid = () => {
    if (this._formRef.current.elements.username.value === "" || this._formRef.current.elements.password.value === "") {
      this._formRef.current.elements.submit.disabled = true
    } else {
      this._formRef.current.elements.submit.disabled = false
    }
  }

  componentDidMount = () => {
    this._formRef.current.elements.username.focus()
  }

  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            name="username"
            type="text"
            onChange={this.isLoginValid}
          />
          <br />
          <br />
          <label>Password: </label>
          <input
            name="password"
            type="password"
            onChange={this.isLoginValid}
          />
          <br />
          <br />
          <label>Remember me: </label>
          <input
            name="remember"
            type="checkbox"
            value="remember" />
          <br />
          <button type="submit" name="submit" disabled>Login</button>
          <button onClick={this.handleReset}>Reset</button>
        </form>
      </div>
    )
  }
}