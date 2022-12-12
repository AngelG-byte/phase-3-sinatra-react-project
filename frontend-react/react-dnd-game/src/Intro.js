import React from "react";
import Typewriter from "typewriter-effect";

function Intro({ situation, outcome}) {
  return (
    <>
      
      <div className="text-cont">
        <Typewriter
        options={{
            delay:(25),
            autoStart: true,
            strings: situation
        }}
      />
      <p className="outcome">{outcome}</p>
      </div>
    </>
  );
}

export default Intro;
