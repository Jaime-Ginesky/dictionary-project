import React from "react";

import "./Hits.css";

export default function Hits(props) {
    if(props.hits) {
    return (
    <section>
        <div className="row">
        {props.hits.map(function(hit, index) {
            return (
            <div className="col-4" key={index}>
                <a href={hit[0]} target="_blank" rel="noreferrer">
            <img src={hit.largeImageURL} alt=" " className="img-fluid"/>
            </a>
            </div>
            );
        })}
        </div>
    </section>
    );
} else {
    return null;
}
}