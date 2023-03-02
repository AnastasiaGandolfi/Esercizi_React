import React from "react";
import { Hello } from "./HelloWorld";
import Welcome from "./Welcome";

export class App extends React.Component {
    render() {
        return(
            <div>
                <Hello />
                <Welcome age={64} name={"John"}/>
            </div>
        )
    }
}

