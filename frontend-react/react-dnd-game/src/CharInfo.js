import React, {useState} from "react";

export default function CharInfo({ char, display }) {
  
  // if(char.length !== undefined && char.length === 1){
  //   setChar2(char)
  // }
  console.log(char)
  return (
    <div className="main-cont">
      <div className="char-image">
        <img src={char[0].image} />
      </div>
      <div className="char-stats">
        <h1>{char[0].name}</h1>
        <h1>SKILL STATS</h1>
        <p className="stat-text">Strength: {char[0].strength}</p>
        <p className="stat-text">Health: {char[0].health}</p>
        <p className="stat-text">Intelligence: {char[0].intelligence}</p>
        <p className="stat-text">Luck: {char[0].luck}</p>
        <p className="stat-text">Cunningness:{char[0].cunningness}</p>
        <p className="stat-text">Charisma: {char[0].charisma}</p>
        <h1>Inventory</h1>
        <h1>{char[0].has_sword ? "Sword" : " "}</h1>
        <h1>{char[0].has_invisibility_cloak ? "Invisibility Cloak" : " "}</h1>
        <h1>{char[0].has_8_ball ? "Magic 8 Ball" : " "}</h1>
        <h1>{char[0].has_perfume ? "Perfume" : " "}</h1>
        <h1>{char[0].has_raven ? "Raven " : " "}</h1>
        <h1>{char[0].has_troll_army ? "Troll Friends " : " "}</h1>
      </div>
    </div>
  );
}
