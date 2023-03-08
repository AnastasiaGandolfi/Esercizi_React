// Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. When the button is clicked, the event handler should add the value of the input tag to the items array.

import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["preparare il pranzo", "allenarsi", "studiare", "fare gli esercizi"]
        }
    }
    handleAddItem = (event) => {
        event.preventDefault()
        let newValue = document.getElementById('input').value
        this.setState((prevState) => ({ items: [...prevState.items, newValue] }))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddItem}>
                    <ul>
                        {this.state.items.map(item => <li>{item}</li>)}
                    </ul>
                    <input type="text" id="input"></input>
                    <button type='submit' >Add item</button>
                </form>
            </div>
        )
    }
}
