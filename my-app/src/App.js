import React from "react";
import CarDetails from "./CarDetails";

const car = {
    model: 'FIAT 500L',
    year: '2010',
    color: 'white cream'
}

export class App extends React.Component {
    render() {
        return (
            <div>
                <CarDetails initialData={car} />
            </div >
        )
    }
}

