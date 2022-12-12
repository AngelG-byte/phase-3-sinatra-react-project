import React from "react";

export default function CharInfo({ char, display }) {
  return (
    <div className={display ? "hide" : "show"}>
      <img className="char-image" src={char.image} />
      <div className="char-stats">
        <h1>{char.name}</h1>
        <h1>SKILL STATS</h1>
        <p className="stat-text">Strength: {char.strength}</p>
        <p className="stat-text">Health: {char.health}</p>
        <p className="stat-text">Intelligence: {char.intelligence}</p>
        <p className="stat-text">Luck: {char.luck}</p>
        <p className="stat-text">Cunningness:{char.cunningness}</p>
        <p className="stat-text">Charisma: {char.charisma}</p>
        <h1>Inventory</h1>
        <h1>{char.has_sword ? "Sword" : " "}</h1>
        <h1>{char.has_invisibility_cloak ? "Invisibility Cloak" : " "}</h1>
        <h1>{char.has_8_ball ? "Magic 8 Ball" : " "}</h1>
        <h1>{char.has_perfume ? "Perfume" : " "}</h1>
        <h1>{char.has_raven ? "Raven " : " "}</h1>
        <h1>{char.has_troll_army ? "Troll Friends " : " "}</h1>
      </div>
    </div>
  );
}
