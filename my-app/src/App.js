import React from "react";
import Container from "./Container";
import TodoList from "./TodoList";


export class App extends React.Component {
    handleOnLogin = (loginData) => {
        console.log(loginData);
    }
    render() {
        return (
            <div>
                <Container title={"Hello"}>
                    <TodoList
                        render={(items, handleRemoveItem) => {
                            return (
                                <ul>
                                    {items.map((item, index) => (
                                        <li key={item + index}>
                                            {item}
                                            <button className="ml-3 border border-blue-400" onClick={() => handleRemoveItem(index)}>Remove</button>
                                        </li>
                                    ))}
                                </ul>
                            );
                        }}
                    />
                </Container>
            </div>
        )
    }
}

