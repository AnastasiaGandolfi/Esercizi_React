import React from "react";
import TodoList from "./TodoList";
import Welcome from "./Welcome";

export class App extends React.Component {
    handleOnLogin = (loginData) => {
        console.log(loginData);
    }
    render() {
        return(
            <div>
                <Welcome name="Anastasia" />
            </div>
        )
    }
}

