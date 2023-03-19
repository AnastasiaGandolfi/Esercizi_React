// Rewrite the DisplayLanguage component from Context 02 to be a function component, and access the LanguageContext through the useContext hook.


import React, { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const translation = {
    en: {
        'lang': 'The language selected is: '
    },
    it: {
        'lang': 'La lingua selezionata è: '
    }
}

export default function DisplayLanguage() {
    const language = useContext(LanguageContext)

    return (
        <div >
            <h1>{translation[language]['lang']}{language}</h1>
        </div>
    )
}