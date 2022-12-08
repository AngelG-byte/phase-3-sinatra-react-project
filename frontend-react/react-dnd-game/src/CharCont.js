import React, { useState } from "react";
import CharInfo from "./CharInfo";

function CharCont({ elem, filterChars, changeButtonText }) {
    const [display, setDisplay] = useState(true)
  
  function handleDisplay(){
    setDisplay(false)
    filterChars(elem.id)
  }

  function getCharData(elem){
    changeButtonText(elem)
  }
  
    return (
    <>
      <CharInfo char={elem} display={display} />
      {display && <button
        onClick={() => {handleDisplay(); getCharData(elem)}}
        value={elem.id}
      >
        {/* <img src={elem.image}/> */}
        <p>{elem.name}</p>
      </button>}
  
    </>
  );
}

export default CharCont;
