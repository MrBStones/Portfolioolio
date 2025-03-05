"use client"

import Image from 'next/image'
import SpeechBubble from "~/app/_components/speechBubble";
import { useState } from "react";

export default function SpeechWithImg() {
    const [topIsMouseOver, setTopIsMouseOver] = useState(false);
    const [botIsMouseOver, setBotIsMouseOver] = useState(false);
    const [mouseE, setMouseE] = useState<React.MouseEvent>();

    return (
        <div>
            <div className="container flex flex-row h-sc h-[70vh] place-items-center" onMouseEnter={(e) => { setTopIsMouseOver(true); setMouseE(e); }} onMouseLeave={() => setTopIsMouseOver(false)} onMouseMove={(e) => { setMouseE(e); }} >
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

            <div className="container flex flex-row h-sc h-[70vh] place-items-center" onMouseEnter={(e) => { setBotIsMouseOver(true); setMouseE(e); }} onMouseLeave={() => setBotIsMouseOver(false)} onMouseMove={(e) => { setMouseE(e); }} >
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