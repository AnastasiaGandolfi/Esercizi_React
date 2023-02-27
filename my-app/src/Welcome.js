import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            function Welcome(props) {
                return <h1>Welcome, {props.name || "Anastasia"}</h1>

            }
        )
    }
}
