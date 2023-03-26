import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

// Add a Not Found route that renders when a user navigates to a path that does not exist.

export class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={
                        <div>
                            <Welcome name={'Anastasia'} />
                            <div><Link to='/counter'>
                                Go to the counter
                            </Link>
                            </div>
                            <div><Link to='users/AnastasiaGandolfi'>
                                Go to the Github User
                            </Link>
                            </div>
                        </div>} />
                    <Route path="/counter" element={
                        <div>
                            <Counter />
                            <Link to='/'>
                                Go home
                            </Link>
                        </div>} />
                    <Route path="users/:username" element={
                        <div>
                            <ShowGithubUser />
                            <Link to='/'>
                                Go home
                            </Link>
                        </div>
                    } />
                    <Route path='*' element={
                        <div>
                            <p>Not found</p>
                            <Link to='/'>
                                Go home
                            </Link>
                        </div>}>
                    </Route>
                </Routes>
            </div >
        )
    }
}

