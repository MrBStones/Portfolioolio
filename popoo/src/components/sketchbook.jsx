import "./book.css"
import PropTypes from "prop-types";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

function Sketchbook({color, bookTitle}) {
    const container = useRef(null);
    const neck = useRef(null);
    const side = useRef(null);
    const tl = useRef(null);


    useGSAP(() => {
        tl.current = gsap.timeline({paused: true})
            .to(".book", {rotateY: -45})
            .to(".book-side", {width: 300,}, '<')

        container.current.addEventListener("mouseover", () => {
            tl.current.play()
        })
        container.current.addEventListener("mouseout", () => {
            tl.current.reverse()
        })
    }, {scope: container});


    return (
        <>
            <a className={"container"} ref={container} style={{color: "floralwhite"}}>
                <div className="book">
                    <div className="book-neck" ref={neck} style={{backgroundColor: color}}>
                        <h1 className="book-title">{bookTitle}</h1>
                    </div>
                    <div className={"book-side"} ref={side} style={{backgroundColor: color}}/>
                </div>
            </a>

        </>
    )
}

Sketchbook.propTypes = {
    color: PropTypes.string.isRequired,
    bookTitle: PropTypes.string,
}

export default Sketchbook;