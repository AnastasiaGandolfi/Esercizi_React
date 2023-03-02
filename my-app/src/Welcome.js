import React from "react";
import { Age } from "./Age";

// Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.


class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                {this.props.age > 18 
                ? <Age age={this.props.age} /> 
                : <p>You are very young!</p>}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Anastasia",
}

export default Welcome