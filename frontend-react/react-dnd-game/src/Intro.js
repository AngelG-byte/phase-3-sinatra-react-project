import React from "react";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function Intro({ situation, setSituation }) {
    console.log(situation.situation);
    const [i, setI] = useState(-1);
    const [arr, setArr] = useState([]);
    //const [newIntro, setNewIntro] = useState(intro.split(''))
    // if (situation.situation == undefined) return null;
    let newSituation = situation.situation?.split("");
    console.log(newSituation)
    useEffect(() => {
        setTimeout(() => {
            setArr([...arr, newSituation[i]]);
            //setIntro(arr.join(''))
            setI(i + 1);
            //console.log(arr.join(''))
        }, 100);
    }, [i]);
    console.log(newSituation);
  return (
    <div className={situation ? "show" : "hide"}>
      <div className="text-cont">
        {/* <p>{arr.join("")}</p> */}
      </div>
      {/* <p>{situation.situation}</p> */}
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(-400)
            .typeString(situation.situation)
            .start()
        }}
      /> */}
    </div>
  );
}
