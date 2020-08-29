import React, {useState} from 'react'
import './App.css'
import Game from "./components/Game";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <header className="App-header">
                <Game/>
            </header>
        </div>
    )
}

export default App
