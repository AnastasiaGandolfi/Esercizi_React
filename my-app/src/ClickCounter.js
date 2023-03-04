import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    handleCounterIncrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + this.props.incrementBy,
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.handleCounterIncrement}>Increment</button>
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1
}