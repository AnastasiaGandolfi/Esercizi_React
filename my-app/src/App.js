import React from "react";
import Sum from "./Sum";


export class App extends React.Component {
    render() {
        return (
            <div>
                <Sum numbers = {[3, 5, 6, 7, 7, 2]} />
            </div >
        )
    }
}

