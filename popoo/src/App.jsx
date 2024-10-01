import {useState} from 'react'
import Sketchbook from "./components/sketchbook.jsx";
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={"bento-grid-container"}>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

                <div className="bento">
                    <div className={"shelf"}>
                        <Sketchbook color={"red"} bookTitle={"book 1y"}/>
                        <Sketchbook color={"green"} bookTitle={"book 2"}/>
                        <Sketchbook color={"blue"} bookTitle={"book 3"}/>
                    </div>
                </div>
            </div>


        </>
    )
}

export default App
