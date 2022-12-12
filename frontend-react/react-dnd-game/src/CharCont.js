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
      <CharInfo char={elem} display={display} />
    </div>
  );
}

export default CharCont; 
