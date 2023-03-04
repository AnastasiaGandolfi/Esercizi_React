import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component {
    render() {
        return(
            <div>
                <Counter initialValue={0} incrementAmount={1} timeout={1000}/>
            </div>
        )
    }
}

