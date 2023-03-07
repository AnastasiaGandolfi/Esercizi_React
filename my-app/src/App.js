import React from "react";
// import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

export class App extends React.Component {
    handleOnLogin = (loginData) => {
        console.log(loginData);
    }
    render() {
        return(
            <div>
                <UncontrolledLogin onLogin={this.handleOnLogin} />
            </div>
        )
    }
}

