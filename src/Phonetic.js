import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import "./Phonetic.css";




export default function Phonetic(props) {
     console.log(props.results);
     let audio = new Audio(props.phonetic.audio);    

     function start() {
        audio.play();    
        }

       
        return (
  <div className="Phonetic">
      <FontAwesomeIcon icon= {faVolumeHigh} color="darkkhaki" onClick={start} />{"  "} 
      {props.phonetic.text}
  </div>
    );
}



