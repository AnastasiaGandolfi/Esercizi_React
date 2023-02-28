import React from "react";
import { Age } from "./Age";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                <Age age={this.props.age} />
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Anastasia"
}

export default Welcome