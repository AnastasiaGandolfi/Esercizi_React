import React from "react";
import { Age } from "./Age";

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