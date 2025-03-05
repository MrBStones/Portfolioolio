"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function ScrollIndicator({text, hoverText}: {text: string, hoverText: string}) {
    const container = useRef<HTMLDivElement>(null);
    var toggle = false;

    const { contextSafe } = useGSAP(() => {
        const tl = gsap.timeline({repeat: -1, yoyo: true,});
        tl.from("#down", {duration: 0.5, y: -10, ease: "power2.in"})
        .to("#down", {duration: 0.2, y: 10, ease: "linear"})
    }, {scope: container});

    const handleMouseOver = contextSafe(() => {
        const tl = gsap.timeline();
        if (toggle) {
            toggle = false;
            tl.to("#text", {text: {value: text, speed: 2}})
        } else {
            
            gsap.to("#text", {text: {value: hoverText, speed: 2}})
            toggle = true;
        }
    }
    );



    

    return (
        <div ref={container} className="container flex flex-row text-2xl text-light gap-2" >
            <p id={"text"} onMouseOver={handleMouseOver}>{text}</p>
            <div id={"down"}>↓↓↓</div>
        </div>
    );
}