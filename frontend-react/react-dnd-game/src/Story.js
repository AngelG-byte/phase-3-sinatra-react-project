import React from "react";

export default function Story({ situation, outcome }){

    return(
        <div>
            <p>{outcome}</p>
            <p>{situation.situation}</p>
        </div>
    )
    }