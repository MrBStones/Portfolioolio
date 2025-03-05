"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import colors from "tailwindcss/colors";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'


gsap.registerPlugin(TextPlugin);


interface TitleTextProps {
    text: string
    subText: string
}

export default function TitleText({text, subText}: Readonly<TitleTextProps>) {
    const container = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP();
    const fullConfig = resolveConfig(tailwindConfig)
    const easeMode = "power2.Out"
    const duration = 1;
    const hero = fullConfig.theme.colors.hero
    const light = fullConfig.theme.colors.light
    const reversedText = text.split("").reverse().join("")

    useGSAP(() => {
        const tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 2});
        tl.from("#title", {
            duration: duration,
            ease: easeMode,
        })
        .to("#title", {
            duration: duration,
            color: hero,
            ease: easeMode,
            text: {delimiter: "", value: text, rtl: true},
        }, "<")
        .to("#scramble", {
            duration: 2,
            text: {delimiter: "", value: subText,},
            ease: easeMode,
        }, "<")
    }, {scope : container})

    return (
        <div ref={container} className="w-[16rem]">
            <h1 id="title" className="text-6xl text-light">
            {reversedText}
            </h1>
            <div className="flex flex-row">
                <div id="scramble" className="text-light">(Scrunches</div>
                <p>)</p>
            </div>
            
        </div>
    );
}