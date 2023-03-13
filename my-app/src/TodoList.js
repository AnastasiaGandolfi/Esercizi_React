// Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array.

import React, { Component, createRef } from 'react'

export default class TodoList extends Component {
    formRef = createRef()

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    handleAddItem = (event) => {
        event.preventDefault()
        let { todo } = this.formRef.current.elements
        this.setState((prevState) => ({ items: [...prevState.items, todo.value] }))
    }

    handleRemoveItem = (value) => {
        this.setState((prevState) => ({
            items: prevState.items.filter((item, index) => index !== value)
        }))
    }

    handleReset = () => {
        this.setState({
            items: []
        })
    }

    render() {
        return (
            <div>
                <form ref={this.formRef} onSubmit={this.handleAddItem}>
                    {this.props.render(this.state.items, this.handleRemoveItem)}
                    <input  type="text" name="todo" className='border border-blue-400'></input>
                    <button type='submit' className='border border-blue-400'>Add item</button>
                </form>
            </div>
        )
    }
}
