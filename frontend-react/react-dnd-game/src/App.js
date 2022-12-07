import {useState} from "react"
import CharInfo from "./CharInfo"


function App() {
const [char, setChar] = useState([])
const [screen, setScreen] = useState([])
const [pageId, setPageId] = useState(0)

function handleScreen(){
    setPageId(pageId += 1)
    fetch(`http://localhost:9292/battles/${pageId}`)
    .then(r => r.json())
    .then(data => setScreen(data))
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

return(
<div>
    <button onClick={handleFetchChett}>Chett</button>
    <button onClick={handleFetchAlina}>Alina</button>
    <button onClick={handleFetchMaxim}>Maxim</button>
    <button onClick={handleFetchAngel}>Angel</button>
    <button onClick={handleFetchEmily}>Emily</button>
    <CharInfo char = {char}/>
    <button onClick={handleScreen}>Next</button>

</div>
 )
}

export default App;
