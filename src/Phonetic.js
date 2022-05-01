import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa-volume-high } from '@fortawesome/free-solid-svg-icons';
import "./Phonetic.css";



export default function Phonetic(props) {
    let audio = new Audio(props.phonetic.audio);

    function start() {
        audio.play();
    }

    return (
  <div className="Phonetic">
      <FontAwesomeIcon icon= "fa-solid fa-volume-high" onClick={start} />
      {props.phonetic.text}
  </div>
    );
}