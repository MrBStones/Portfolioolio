"use client"

import {useRef, useState} from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Logo() {
    const container = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({scope: container});
    var [toggled, setToggle] = useState(false)

    const handleClick = contextSafe(() => { 
        gsap.to(container.current, {duration: 1, rotation: getRandomIntInclusive(toggled? -27 : 7,toggled? -7 : 27), ease: "elastic"})
        setToggle(!toggled)
    })

    return (
        <div ref={container}>
            <div onClick={handleClick} 
            className={"container backdrop-filter p-2 rounded-xl backdrop-blur-xl bg-black/50"}>
                <div className={"size-18"}>
                    <Image src={"/scrunchesvgwhite.svg"} alt={"Scrunches Logo"} layout="fill"  className={"p-2"} />
                </div>
            </div>
        </div>
        


    )
}

function getRandomIntInclusive(min: int, max: int) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  