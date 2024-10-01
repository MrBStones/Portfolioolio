import "./book.css"
import PropTypes from "prop-types";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

function Sketchbook({color, bookTitle}) {
    const container = useRef(null);
    const tl = useRef(null);



    useGSAP(()=>{
        tl.current = gsap.timeline({paused: true})
            .to(container.current, {scaleX:3})
    })

    container.current.addEventListener("mouseenter", () =>{
        tl.current.play()
    })
    container.current.addEventListener("mouseout", () =>{
        tl.current.reverse()
    })

    return (
        <>
            <div className="book" ref={container}>
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