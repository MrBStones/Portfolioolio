"use client"

import Image from 'next/image'
import SpeechBubble from "~/app/_components/speechBubble";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger) 

export default function SpeechWithImg() {
    const container = useRef<HTMLDivElement>(null);
    const [topIsMouseOver, setTopIsMouseOver] = useState(false);
    const [botIsMouseOver, setBotIsMouseOver] = useState(false);
    const [mouseE, setMouseE] = useState<React.MouseEvent>();

    useGSAP(() => {
        gsap.from(".container:nth-child(1)", {
            scrollTrigger: {
                trigger: ".container:nth-child(1)",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 100,
            duration: 1,
        })
        gsap.from(".container:nth-child(2)", {
            scrollTrigger: {
                trigger: ".container:nth-child(2)",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 100,
            duration: 1,
        });
    }, {scope: container});

    return (
        <div ref={container} className='w-full flex flex-col gap-12'>
            <div className="container flex flex-row h-sc h-128 place-items-left" onMouseEnter={(e) => { setTopIsMouseOver(true); setMouseE(e); }} onMouseLeave={() => setTopIsMouseOver(false)} onMouseMove={(e) => { setMouseE(e); }} >
                <Image 
                    src={"/hisketch.png"} 
                    width={694} 
                    height={841} 
                    alt={"Sketch of scrunches"}
                    style={{width: 'auto', height: '100%',}}/>
                <SpeechBubble 
                    text1={"Welcome to"} 
                    text2={"the site brah!"} 
                    mouseOver={topIsMouseOver}
                    mouseEvent={mouseE}
                    left={true}/>
            </div>

            <div className="container flex flex-row h-sc h-128 place-items-end justify-end" onMouseEnter={(e) => { setBotIsMouseOver(true); setMouseE(e); }} onMouseLeave={() => setBotIsMouseOver(false)} onMouseMove={(e) => { setMouseE(e); }} >
                <SpeechBubble 
                    text1={"This is where"} 
                    text2={"all my stuff is!"} 
                    mouseOver={botIsMouseOver}
                    mouseEvent={mouseE}
                    left={false}/>
                <Image 
                    src={"/showingsketch.png"} 
                    width={694} 
                    height={841} 
                    alt={"Sketch of scrunches"}
                    style={{width: 'auto', height: '100%',}}/>
            </div>
        </div>
    )
}