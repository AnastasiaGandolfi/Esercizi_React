import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import Welcome from "./Welcome";

// Add a new Route to the /counter path that renders the Counter component from useState 01.

export class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/'
                        element={
                            <div>
                                <Welcome name={'Anastasia'} />
                            </div>
                        } />

                    <Route path="/counter" element={<Counter />}>
                    </Route>
                </Routes>
            </div >
        )
    }
}

