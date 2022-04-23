import React, { useState } from "react";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword] = useState("");

    function searchAlert(event) {
        event.preventDefault();
        alert(`Retrieving definition of ${keyword}`);
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