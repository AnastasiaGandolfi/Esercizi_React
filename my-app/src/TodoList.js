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
