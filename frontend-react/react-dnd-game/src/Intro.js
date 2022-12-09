import React from 'react';

export default function Intro({intro}){

    return(
        <div id="intro" className= {intro ? "show" : "hide"}>
            <p>{intro}</p>
        </div>
    )
}