// Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event.

import React from "react";

export class ClickTracker extends React.Component {
    state = { lastButton: "" }

    clickButton = (event) => {
        this.setState(() => {
            return { lastButton: event.target.innerHTML }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.clickButton}>Button 1</button>
                <button onClick={this.clickButton}>Button 2</button>
                <button onClick={this.clickButton}>Button 3</button>
                <h1>Hai cliccato il... {this.state.lastButton}</h1>
            </div>
        )
    }
}