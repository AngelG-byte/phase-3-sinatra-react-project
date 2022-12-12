import React, { useState } from "react";

function CharCont({ elem, filterChars, changeButtonText, setCharId, display, setDisplay }) {

  function handleDisplay() {
    setDisplay(false);
    filterChars(elem.id);
  }

  function getCharData(elem) {
    changeButtonText(elem);
  }

  return (
    <>
        {display && (
          <button
            className={display ? "show" : "hide" }
            id="char-buttons"
            onClick={() => {
              handleDisplay();
              setDisplay(false)
              getCharData(elem);
              setCharId(elem.id)
            }}
            value={elem.id}
          >
             <img src={elem.image}/>
            <p>{elem.name}</p>
          </button>
        )}
    </>
  );
}

export default CharCont;
