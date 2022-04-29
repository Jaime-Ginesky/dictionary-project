import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";
import axios from "axios";

export default function Search(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    function searchAlert() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        searchAlert();
    }


    function handlekeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        searchAlert();
    }

        if(loaded) {
            return (
                <div className="Search">
                  <section>
                      <h1>Enter a word to look up.</h1>
                   <form onSubmit={handleSubmit}>
                    <input type="search" className= "form-elements" onChange={handlekeywordChange} 
                    defaultValue={props.defaultKeyword} />
                   </form>
                   </section>
                   <Results results={results} />
                </div>
           );
        }else{
            load();
            return"Loading";
             }
       }