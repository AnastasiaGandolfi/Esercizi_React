import React from "react";
import { Counter } from "./Counter";
import GithubUser from "./GithubUser";




export class App extends React.Component {
    render() {
        return (
            <div>
                <GithubUser username='passasooz' />
            </div >
        )
    }
}

