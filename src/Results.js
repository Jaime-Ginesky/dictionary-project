import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css"; 


export default function Results(props) {
    console.log(props.results);
   if (props.results){
    return (
    <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        <div>
           <Phonetic phonetic={props.results.phonetics[0]} />  
        </div>
        </section>
        {props.results.meanings.map(function(meaning, index) {
            return (
                <div className="Meaning">
            <section key={index}>
                <Meaning meaning={meaning} />
            </section>
            </div>
            );
        })}
        </div>
    );
} else { 
    return null;
 }
}