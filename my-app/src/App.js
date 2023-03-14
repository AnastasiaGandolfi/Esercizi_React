import React from "react";
import {DisplayLanguage} from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


export class App extends React.Component {
    state = {
        language: "English"
    }
    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value,
        });
    }
    render() {
        return (
            <div className="ml-5">
                <select onChange={this.handleLanguageChange}>
                    <option value="English">English</option>
                    <option value="Italian">Italiano</option>
                    <option value="French">French</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                   <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }
}

