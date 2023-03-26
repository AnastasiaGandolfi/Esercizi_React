import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

// Add a Route to the users path that shows the GihubUserList component from useEffect 04. Modify it so that instead of showing the GithubUser component for each username entered, it shows a link to a nested route that shows the ShowGithubUser component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.

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
                            <div><Link to='users'>
                                Go to the Github User List
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
                    <Route path="users" element={<div><GithubUserList />
                    <Link to='/'>Go home</Link></div>}>
                        <Route path=":username" element={<ShowGithubUser />} />
                    </Route>
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

