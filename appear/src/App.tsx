import Book from "./components/Book.tsx";
import './App.css'

function App() {

    return (
        <>

        <div className="flex-container">
            <h1>
                hello world
            </h1>
            <div className={"bento"} style={{width: "1000px"}}>
                <div className="bookshelf-container">
                    <Book bookColor="red" text={"Book1"}/>
                    <Book bookColor="green" text={"Book2"}/>
                    <Book bookColor="blue" text={"Book3"}/>
                </div>
            </div>

        </div>
        </>
    )
}

export default App
