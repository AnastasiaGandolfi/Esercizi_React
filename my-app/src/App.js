import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./HelloWorld";

export class App extends React.Component {
    render() {
        return(
            <div>
                <Counter />
            </div>
        )
    }
}

