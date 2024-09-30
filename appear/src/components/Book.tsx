import './book.css'

function Book({bookColor, text} : {bookColor: string, text: string}) {
    return (
        <>
            <div className={"sketchbook"} style={{backgroundColor: bookColor}}>
                {text}
            </div>
        </>
    )
}

export default Book
