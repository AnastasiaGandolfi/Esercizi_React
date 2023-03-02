// Modify the Counter component so that the initial value of the counter, the increment interval and the increment amount are passed as props to the component.

import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return { count: state.count + this.props.incrementAmount }
            })
        }, this.props.timeout)
    }
    render() {
        return (
            <h1>Counter: {this.state.count}</h1>
        )
    }
}