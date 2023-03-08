// Modify the TodoList by adding a "reset" button that clears the items array when clicked.

import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    handleAddItem = (event) => {
        event.preventDefault()
        let newValue = document.getElementById('input').value
        this.setState((prevState) => ({ items: [...prevState.items, newValue] }))
        document.getElementById('input').value = '';
    }

    handleReset = () => {
        this.setState({
            items:[]
        })
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
                    <button type='reset' onClick={this.handleReset}>Reset Todo List</button>
                </form>
            </div>
        )
    }
}
