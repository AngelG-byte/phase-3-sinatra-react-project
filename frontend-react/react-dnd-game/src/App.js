import {useState, useEffect} from "react"
import CharInfo from "./CharInfo"
import Intro from "./Intro"
import Story from "./Story"
import GameOver
 from "./GameOver"


function App() {
// char gets character information
const [char, setChar] = useState([])
// char charDisplay displays name buttons
const [charDisplay, setCharDisplay] = useState(true)
// intro displays introduction text
const [intro, setIntro] = useState(true)
// page displays the next page
const [pageId, setPageId] = useState(0)
// setId reperesents situation id
const [sitId, setSitId]= useState(0)
// situation will display the current story portion
const [situation, setSituation] = useState([])
// outcome displays outcome of the situation
const [outcome, setOutcome] = useState('')
// represents health of character
const [health, setHealth] = useState(30)

useEffect(() => {
    fetch(`http://localhost:9292/intro`)
    .then(r => r.json())
    .then(data => setIntro(data))
}, [])


function handleStory(){
    setSitId(sitId + 1)
    fetch(`http://localhost:9292/situation/${sitId + 1}`)
    .then(r => r.json())
    .then(data => setSituation(data))
    setHealth(char.health)
}

function handleScreen(){
    setCharDisplay(false)
    setIntro(false)
    setPageId(pageId + 1)
}

function handleFetchChett(){
    fetch("http://localhost:9292/battle/1")
    .then(resp => resp.json())
    .then(charData => {
        setChar(charData)
    })
}

function handleFetchAlina(){
    fetch("http://localhost:9292/battle/2")
    .then(resp => resp.json())
    .then(charData => {
        setChar(charData)
    })
}

function handleFetchMaxim(){
    fetch("http://localhost:9292/battle/3")
    .then(resp => resp.json())
    .then(charData => {
        setChar(charData)
    })
}

function handleFetchAngel(){
    fetch("http://localhost:9292/battle/4")
    .then(resp => resp.json())
    .then(charData => {
        setChar(charData)
    })
}

function handleFetchEmily(){
    fetch("http://localhost:9292/battle/5")
    .then(resp => resp.json())
    .then(charData => {
        setChar(charData)
    })
}

// console.log(outcome)
function handleFight(e) {
    fetch(`http://localhost:9292/battles/${e.target.value}/${char.id}/${sitId}`)
    .then(resp => resp.json())
    .then(data => setOutcome(data))

    fetch(`http://localhost:9292/battle/${char.id}`)
    .then(r => r.json())
    .then(data => setChar(data))

    if (outcome === "Game Over!!!"){
    //   return(
    //   <GameOver />
    //   )
    console.log(outcome)
    }
}
return(
    <div>
    <button onClick={handleFetchChett} className= {charDisplay ? "show" : "hide"}>Chett</button>
    <button onClick={handleFetchAlina} className= {charDisplay ? "show" : "hide"} >Alina</button>
    <button onClick={handleFetchMaxim} className= {charDisplay ? "show" : "hide"}>Maxim</button>
    <button onClick={handleFetchAngel} className={charDisplay ? "show" : "hide"}>Angel</button>
    <button onClick={handleFetchEmily} className= {charDisplay ? "show" : "hide"}>Emily</button>
    <CharInfo char = {char}  health={health}/>

    {/* <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71c8d4c1-f1a9-47f1-855c-030b165278fa/dektl6b-3b40000d-d04a-4d92-b767-17b70b19fb22.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxYzhkNGMxLWYxYTktNDdmMS04NTVjLTAzMGIxNjUyNzhmYVwvZGVrdGw2Yi0zYjQwMDAwZC1kMDRhLTRkOTItYjc2Ny0xN2I3MGIxOWZiMjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sk9f7WGbHKRhgtFKSY4dVx73H2s9WkXdPzWAdEXgGzI"/> */}
    <button onClick={() => {handleScreen(); handleStory();}}>Next</button>
    <Intro intro={intro} />
    <Story outcome={outcome} situation={situation}/>


    <button onClick = {(e) => handleFight(e)} value="strength">Use strength</button>
    <button onClick = {(e) => handleFight(e)} value="intelligence">Use intelligence</button>
    <button onClick = {(e) => handleFight(e)} value="charisma">Use charisma</button>
    <button onClick = {(e) => handleFight(e)} value="luck">Use luck</button>
    <button onClick = {(e) => handleFight(e)} value="cunningness">Use cunningness</button>
</div>
 )
}

export default App;
