import React from "react";
import Container from "./Container";
import { Hello } from "./HelloWorld";


export class App extends React.Component {
    handleOnLogin = (loginData) => {
        console.log(loginData);
    }
    render() {
        return(
            <div>
                <Container>
                    <Hello />
                </Container>
            </div>
        )
    }
}

