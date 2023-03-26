import React from "react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

// Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component from useEffect 03 by passing it the received username.

export class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/'element={<div><Welcome name={'Anastasia'} /></div>} />
                    <Route path="/counter" element={<Counter />}/>
                    <Route path="users/:username" element={<ShowGithubUser />}/>
                </Routes>
            </div >
        )
    }
}

