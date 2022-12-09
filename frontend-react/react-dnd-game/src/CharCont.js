import React, { useState } from "react";
import CharInfo from "./CharInfo";

function CharCont({ elem, filterChars, changeButtonText }) {
  const [display, setDisplay] = useState(true);

  function handleDisplay() {
    setDisplay(false);
    filterChars(elem.id);
  }

  function getCharData(elem) {
    changeButtonText(elem);
  }

  return (
    <div>

        {display && (
          <button
            id="char-buttons"
            onClick={() => {
              handleDisplay();
              getCharData(elem);
            }}
            value={elem.id}>
             <img src={elem.image}/>
            <p className="char-btns-p">{elem.name}</p>
          </button>
        )}
        {/* <div className={display ? "show" : "hide"}>
        <h1>CHARACTER</h1>
        <p>{elem.name}</p>
        <img src={elem.image}/>
        <h1>SKILL STATS</h1>
        <p>Strength: {elem.strength}</p>
        <p>Health: {elem.health}</p>
        <p>Intelligence: {elem.intelligence}</p>
        <p>Luck: {elem.luck}</p>
        <p>Cunningness:{elem.cunningness}</p>
        <p>Charisma: {elem.charisma}</p>  */}
      <CharInfo char={elem} display={display} />
     
    </div>
  );
}

export default CharCont; 
