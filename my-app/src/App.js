import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

// Add an index route to the GithubUserList route that shows the "Add a user and select it" message.

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
                        <Link to='/'>Go home</Link> | <Link to='.'>Go back to users</Link> </div>}>
                        <Route index element={<p>Add a user and select it</p>} />
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

