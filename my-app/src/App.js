import React from "react";
import Login from "./Login";



export class App extends React.Component {

    onLogin = (data) => {
        console.log(data);
    }

    render() {
        return (
            <div>
                <Login onLogin={this.onLogin} />
            </div >
        )
    }
}

