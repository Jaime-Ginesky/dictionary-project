import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";
import axios from "axios";

export default function Search() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function searchAlert(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handlekeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
           <form onSubmit={searchAlert}>
            <input type="search" placeholder="Enter any word..." className= "form-elements" onChange={handlekeywordChange} />
           </form>
           <Results results={results} />
        </div>

    )
}