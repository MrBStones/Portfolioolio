import gsap from "gsap";
import {useGSAP} from '@gsap/react';

import './book.css'
import {useRef} from "react";

function Book({bookColor, text}: { bookColor: string, text: string }) {
    const fullBook = useRef<HTMLDivElement>(null);
    const bookSide = useRef<HTMLDivElement>(null);

    useGSAP((_context, contextSafe ) => {

        const tl = gsap.timeline()
            .to(bookSide.current, {rotationY: -45})
            .to(fullBook.current, {scaleX: 1, x: 70}, '<')
            .reverse()

        const onHover = contextSafe(() => {
            tl.play().reversed()
        });

        const unHover = contextSafe(() => {
            tl.reversed()
            console.log("unhovered")
        })

        fullBook.current.addEventListener("mouseenter", onHover);
        fullBook.current.addEventListener("mouseleave", unHover);






    }, []);

    return (
        <>
            <div className={"book"} ref={fullBook}>
                <div className={"book-neck"} ref={bookSide} style={{backgroundColor: bookColor}}>
                    <h1 className={"rotate"}>{text}</h1>
                </div>
                <div className={"book-side"} style={{backgroundColor: bookColor}}></div>

            </div>
        </>
    )
}

export default Book
