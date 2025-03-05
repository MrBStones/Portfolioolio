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
    const duration = 2;
    const hero = fullConfig.theme.colors.hero
    const light = fullConfig.theme.colors.light

    useGSAP(() => {
        const tl = gsap.timeline({repeat: -1, yoyo: true});
        tl.to("#title", {
            duration: duration,
            color: light,
            ease: easeMode,
        })
        .to("#title", {
            duration: duration,
            color: hero,
            ease: easeMode,
        })
        .to("#scramble", {
            duration: 2,
            text: subText,
            ease: easeMode,
            delimiter: " ",
        })
    }, {scope : container})

    return (
        <div ref={container} >
            <h1 id="title" className="text-6xl text-center text-light">
                {text}
            </h1>
            <div id="scramble" className="text-light"></div>
        </div>
    );
}