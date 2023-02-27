import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
            {this.props.name 
                    ? <h1>Welcome, {this.props.name}!</h1>
                    : <h1>Welcome, Anastasia!</h1>

            }
            </div>
        )
    }
}
