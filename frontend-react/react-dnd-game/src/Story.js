import React from "react";

export default function Story({ situation, outcome }){

    return(
        <div >
            <p className="story-and-intro">{outcome}</p>
            <p>{situation.situation}</p>
        </div>
    )
    }