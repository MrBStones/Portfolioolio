import "./book.css"
import PropTypes from "./proptypes"

function Sketchbook({color, bookTitle}) {

    return (
        <>
            <div className="book">
                <div className="book-neck" style={{backgroundColor: color}}>
                    <h1 className="book-title">{bookTitle}</h1>
                </div>
            </div>
        </>
    )
}

Sketchbook.propTypes = {
    color: PropTypes.string.isRequired,
    bookTitle: PropTypes.string,
}

export default Sketchbook;