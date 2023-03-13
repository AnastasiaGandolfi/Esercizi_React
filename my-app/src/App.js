import React from "react";
import Container from "./Container";
import { Hello } from "./HelloWorld";
import TodoList from "./TodoList";


export class App extends React.Component {
    /* handleOnLogin = (loginData) => {
        console.log(loginData);
    } */
    render() {
        return (
            <div>
                <Container title={"To Do List"}>
                    <TodoList render={(items, handleRemoveItem) => {
                        return( <ul> {items.map((item, index) => {
                            return <li key={item + index}>
                                {item}
                                <button className='border ml-3 border-blue-400' onClick={() => {
                                    handleRemoveItem(index)
                                }}>Remove</button>
                            </li>
                        })}
                        </ul>
                        )
                    }} />
                </Container>
            </div>
        )
    }
}

