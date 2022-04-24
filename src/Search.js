import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function searchAlert(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    }


    function handlekeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">Dictionary
           <form onSubmit={searchAlert}>
            <input type="search" autoFocus={true} onChange={handlekeywordChange} />
           </form>
        </div>

    )
}