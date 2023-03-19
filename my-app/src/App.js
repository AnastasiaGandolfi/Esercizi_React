import React, { useState } from "react";
import FilteredList from "./FilteredList";


const list = [
    {
        name: 'Anastasia Gandolfi',
        id: '1',
        age: 27,
    },
    {
        name: 'Marco Rossi',
        id: '2',
        age: 17,
    },
    {
        name: 'Giulia Bianchi',
        id: '3',
        age: 33,
    },
]

export function App() {
    const [language, setLanguage] = useState('en')
    function handleChangeLanguage(event){
        setLanguage(event.target.value)
    }
    return (
        <div>
            <FilteredList list={list}/>
        </div >
    )
}

