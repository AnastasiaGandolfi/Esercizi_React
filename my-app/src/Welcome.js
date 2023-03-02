import React from "react";
import { Age } from "./Age";

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John".

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                {this.props.age > 18 && this.props.age < 65 && this.props.name === "John" && <Age age={this.props.age} />}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Anastasia",
}

export default Welcome