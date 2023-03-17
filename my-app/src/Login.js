import React, { useState } from "react";

// Rewrite the Login component from Forms 03 as a function component, and use the useState hook to track the state of the username, password and remember inputs. Tip: you can use useState more than once.

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        onLogin({ username, password, remember })
    }
    const isLoginValid = !username || !password;

    function handleReset() {
        setUsername('')
        setPassword('')
        setRemember(false)
    }
    return (
        <div>
            <label>Name: </label>
            <input
                name="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)} />
            <br />
            <br />
            <label>Password: </label>
            <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <br />
            <br />
            <label>Remember me: </label>
            <input
                name="remember"
                type="checkbox"
                value="remember"
                checked={remember}
                onChange={e => setRemember(e.target.checked)} />
            <br />
            <button
                type="submit"
                disabled={isLoginValid}
                onClick={handleLogin}
                style={{
                    backgroundColor: isLoginValid ? "purple" : "green"
                }}>
                Login
            </button>
            <button type="submit" onClick={handleReset}>Reset</button>
        </div>
    )
}