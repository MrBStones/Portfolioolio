"use client"

import Image from 'next/image'
import SpeechBubble from "~/app/_components/speechBubble";
import { useState } from "react";

export default function SpeechWithImg() {
    const [isActive, setIsActive] = useState(false);
    const [mouseE, setMouseE] = useState<React.MouseEvent>();

    return (
        <div className="container flex flex-row h-sc h-[70vh] place-items-center" onMouseEnter={(e) => { setIsActive(true); setMouseE(e); }} onMouseLeave={() => setIsActive(false)} onMouseMove={(e) => { setMouseE(e); }} >
            <Image 
                src={"/hisketch.png"} 
                width={694} 
                height={841} 
                alt={"Sketch of scrunches"}
                style={{width: 'auto', height: '70%',}}/>
            <SpeechBubble 
                text1={"Welcome to"} 
                text2={"the site brah!"} 
                mouseOver={isActive}
                mouseEvent={mouseE}/>
        </div>
    )
}