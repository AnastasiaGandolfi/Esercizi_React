import React from "react";
import './index.css'

/* Create an index.css file and import it within the index.js file. 
Add a .welcome class to the Welcome component that changes its background color and adds a border. */

class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <h1>Welcome, {this.props.name}!</h1>
            </div>
        )
    }
}

export default Welcome