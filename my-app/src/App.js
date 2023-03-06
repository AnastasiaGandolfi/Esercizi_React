import React from "react";
import Login from "./Login";

export class App extends React.Component {
    handleOnLogin = (loginData) => {
        console.log(loginData);
    }
    render() {
        return(
            <div>
                <Login onLogin={this.handleOnLogin} />
            </div>
        )
    }
}

