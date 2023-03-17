import React from "react";
import ClickCounter from "./ClickCounter";
import Login from "./Login";



export class App extends React.Component {

    handleCounterChange = (count) => {
        console.log(`The counter is ${count}`);
    }

    render() {
        return (
            <div>
                <ClickCounter onCounterChange={this.handleCounterChange} />
            </div >
        )
    }
}

