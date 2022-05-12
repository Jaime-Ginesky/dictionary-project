import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";
import axios from "axios";
import Hits from "./Hits";



export default function Search(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [hits, setHits] = useState(null);

    function handleDictionResponse(response) {
        setResults(response.data[0]);
    }

    function handlePixabayResponse(response) {
        setHits(response.data.hits);
    }

    function searchAlert() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        const pixabayApiKey = `27126845-46da248e1fa8e733b2399285c`;
        const pixabayApiUrl = `https://pixabay.com/api/?key=27126845-46da248e1fa8e733b2399285c&q=${keyword}&image_type=photo&apiKey=${pixabayApiKey}&per_page=6`;
        axios.get(pixabayApiUrl).then(handlePixabayResponse);
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
            <div>
              <section className="Search">
                  <h1>Enter a word to look up.</h1>
               <form onSubmit={handleSubmit}>
                <input type="search" className= "form-elements" onChange={handlekeywordChange} 
                defaultValue={props.defaultKeyword} />
               </form>
               <p>Suggested words: plane, book, coffee, swimming, etc.</p>
               </section>
               <Results results={results} />
               <Hits hits={hits} />
               </div>
       );
    }else{
        load();
        return"Loading";
         }
   }