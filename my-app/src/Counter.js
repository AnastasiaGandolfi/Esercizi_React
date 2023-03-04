// Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. Is the constructor still required?

import React from "react";
import CounterDisplay from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }
    componentDidMount(){

        this.interval = setInterval(() => {
            this.setState((prevState) => {
                return { count: prevState.count + this.props.incrementAmount }
            })
        }, this.props.timeout)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        return (
            <CounterDisplay countState={this.state.count} />
        )
    }
}