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
    let neckHeight = useRef(null);


    function UpdateWindowHeight() {
        neckHeight.current = window.getComputedStyle(document.querySelector(".book-neck")).height
    }


    window.addEventListener("resize", UpdateWindowHeight)



    useGSAP((context, contextSafe) => {
        UpdateWindowHeight()
        console.log(neckHeight)
        tl.current = gsap.timeline({paused: true, onStart: UpdateWindowHeight  })
            .fromTo(".book", {rotateY: 0}, {rotateY: -45})
            .fromTo(".book-side", {width: 0}, {width: (neckHeight.current),}, '<')


        const mouseOver = contextSafe(() => {
            console.log(neckHeight.current);
            if (tl.current.isActive()) {
                tl.current.play();
            } else {
                tl.current = gsap.timeline({paused: false})
                    .fromTo(".book", {rotateY: 0}, {rotateY: -45})
                    .fromTo(".book-side", {width: 0}, {width: (neckHeight.current),}, '<')
            }
        })

        const mouseOut = contextSafe(() => {
            tl.current.reverse()
        })

        container.current.addEventListener("mouseover", mouseOver)
        container.current.addEventListener("mouseout", mouseOut)

        return () => {
            container.current.removeEventListener("mouseover", mouseOver)
            container.current.removeEventListener("mouseout", mouseOut)
        }
    }, {scope: container});

    return (
        <>
            <a className={"container"} ref={container} style={{color: "floralwhite"}}>
                <div className="book">
                    <div className="book-neck" ref={neck} style={{backgroundColor: color}}>
                        <h1 className="book-title" style={{color: color}}>{bookTitle}</h1>
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