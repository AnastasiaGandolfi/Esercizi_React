// Modify the TodoList component so that the input clears every time a Todo is added to the items array.

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
        document.getElementById('input').value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddItem}>
                    <ul>
                        {this.state.items.map(item => <li>{item}</li>)}
                    </ul>
                    <input type="text" id="input"></input>
                    <button type='submit'>Add item</button>
                </form>
            </div>
        )
    }
}
