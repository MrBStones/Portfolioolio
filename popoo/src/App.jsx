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
                        <Sketchbook color={"#140d07"} bookTitle={"skill issues"}/>
                        <Sketchbook color={"#89CFF0"} bookTitle={"scrunches"}/>
                        <Sketchbook color={"#987554"} bookTitle={"train book"}/>
                        <Sketchbook color={"#140d07"} bookTitle={"skill issues"}/>
                        <Sketchbook color={"#89CFF0"} bookTitle={"scrunches"}/>
                        <Sketchbook color={"#987554"} bookTitle={"train book"}/>
                        <Sketchbook color={"#140d07"} bookTitle={"skill issues"}/>
                        <Sketchbook color={"#89CFF0"} bookTitle={"scrunches"}/>
                        <Sketchbook color={"#987554"} bookTitle={"train book"}/>
                    </div>
                </div>
            </div>


        </>
    )
}

export default App
