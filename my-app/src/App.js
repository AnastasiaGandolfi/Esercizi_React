import React from "react";
import TodoList from "./TodoList";

export class App extends React.Component {
    handleOnLogin = (loginData) => {
        console.log(loginData);
    }
    render() {
        return(
            <div>
                <TodoList />
            </div>
        )
    }
}

