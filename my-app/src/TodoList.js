// Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array.

import React, { Component, createRef } from 'react'

export default class TodoList extends Component {
    state = {
        items: [],
    };

    formRef = createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        const { todo } = this.formRef.current.elements;
        if (todo.value !== "") {
            this.setState((state) => {
                const newState = { items: [...state.items, todo.value] };
                todo.value = "";
                todo.focus();
                return newState;
            });
        }
    };

    handleReset = () => {
        const { todo } = this.formRef.current.elements;
        this.setState({ items: [] });
        todo.focus();
    };

    handleRemoveItem = (index) => {
        this.setState((state) => ({
            items: state.items.filter((item, itemIndex) => itemIndex !== index),
        }));
    };

    render() {
        return (
            <>
                <h1>To Do List</h1>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <input className='border border-blue-400' name="todo" />
                    <button className='border border-blue-400' >Add</button>
                    <button className='border border-blue-400' type="reset" onClick={this.handleReset}>
                        Reset
                    </button>
                </form>
                {this.props.render(this.state.items, this.handleRemoveItem)}
            </>
        );
    }
}
