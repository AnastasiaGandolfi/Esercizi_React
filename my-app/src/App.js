import React from "react";
import Container from "./Container";
import { Hello } from "./HelloWorld";
import {Age} from "./Age";


export class App extends React.Component {
    handleOnLogin = (loginData) => {
        console.log(loginData);
    }
    render() {
        return(
            <div>
                <Container title={"Hello"}>
                    <Hello />
                </Container>
            </div>
        )
    }
}

