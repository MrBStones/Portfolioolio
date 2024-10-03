import Sketchbook from "./components/sketchbook.jsx";
import './App.css'
import FunnyButton from "./components/FunnyButton.jsx";

function App() {
    return (
        <>
            <div className={"bento-grid-container"}>
                <FunnyButton/>

                <div className="bento" style={{width: '100%'}}>
                    <div className={"shelf"}>
                        <Sketchbook color={"#140d07"} bookTitle={"skill issues"}/>
                        <Sketchbook color={"#89CFF0"} bookTitle={"scrunches"}/>
                        <Sketchbook color={"#987554"} bookTitle={"train book"}/>
                    </div>
                </div>
                <div className="bento" style={{width: '100%'}}>
                    <div className={"shelf"}>
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
