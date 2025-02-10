"use client";

import {Dispatch, SetStateAction, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import tailwindConfig from "../../../tailwind.config";
gsap.registerPlugin(useGSAP);

export default function Hamburger({toggled, toggleAction}: {toggled: boolean, toggleAction: Dispatch<SetStateAction<boolean>>}) {
    const container = useRef<HTMLDivElement>(null);

    const originalPathTop = "m 64.116627,48.725064 c 0,0 -2.039536,-28.178531 12.5,-28.974724 15.14734,-0.829477 15.674451,32.579526 9.93681,32.64863 -5.737641,0.0691 -3.161268,-21.616237 -3.161268,-21.616237";
    const originalPathMid = "m 10,48.724724 c 0,0 -2.0395362,-28.178531 12.5,-28.974724 15.14734,-0.829477 15.674451,32.579526 9.93681,32.64863 -5.737641,0.0691 -3.161268,-21.616237 -3.161268,-21.616237";
    const originalPathBot = "m 10,76.25 c 0,0 6.470449,12.379454 12.5,13.5 10.039747,1.865811 17.288351,-13.5 27.5,-13.5 10.211649,0 17.460253,15.365811 27.5,13.5 C 83.529551,88.629454 90,76.25 90,76.25";
    const straightLineTop = "m 10,23.25 c 0,0 4.53938,0.04149 12.5,0 9.958126,-0.0519 53.237641,-0.0691 47.5,0 -5.737641,0.0691 20,0 20,0";
    const straightLineMid = "m 10,49.75 c 0,0 5.991665,-0.04156 12.5,0 7.864336,0.05022 30.237232,0.01268 47.5,0 17.262768,-0.01268 20,0 20,0";
    const straightLineBot = "m 10,76.25 c 0,0 6.470449,0 12.5,0 10.039747,0 17.288351,0 27.5,0 10.211649,0 17.460253,0 27.5,0 C 83.529551,76.25 90,76.25 90,76.25";

    const easeMode = "power2.out"
    const duration = 0.25;
    const originalColor = tailwindConfig.theme.extend.colors["dark-hero"]
    const newColor = tailwindConfig.theme.extend.colors.hero

    const { contextSafe } = useGSAP({scope: container});

    const handleToggle = contextSafe(() => {
        if (toggled) {
            const tl = gsap.timeline();
            tl.to("#top", {
                duration: duration,
                attr: { d: straightLineTop},
                ease: easeMode,
            })
            .to("#mid", {
                duration: duration,
                attr: { d: straightLineMid },
                ease: easeMode,
            }, "<")
            .to("#bot", {
                duration: duration,
                attr: { d: straightLineBot },
                ease: easeMode,
            }, "<")
            .to("#container", {
                duration: duration,
                backgroundColor: originalColor,
                ease: easeMode,
            }, "<");
        } else {
            const tl = gsap.timeline();
            tl.to("#top", {
                duration: duration,
                attr: { d: originalPathTop},
                ease: easeMode,
            })
            .to("#mid", {
                duration: duration,
                attr: { d: originalPathMid },
                ease: easeMode,
            }, "<")
            .to("#bot", {
                duration: duration,
                attr: { d: originalPathBot },
                ease: easeMode,
            }, "<")
            .to("#container", {
                duration: duration,
                backgroundColor: newColor,
                ease: easeMode,
            }, "<");
        }


        toggleAction(!toggled)
    })


    return (
        <div ref={container}>
            <div id={"container"}
                 className={`container flex flex-col gap-1 items-center justify-center size-12 rounded bg-dark-hero`}
                 onClick={handleToggle}>
                <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 100 100"
                    version="1.1"
                    id="svg1"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs
                        id="defs1" />
                    <g
                        id="layer1">
                        <path
                            style={{
                                fill: "none",
                                stroke: "#000000",
                                strokeWidth: 12,
                                strokeLinecap: "round",
                                strokeDasharray: "none",
                                strokeOpacity: 1,
                            }}
                            d={straightLineTop}
                            id="top"/>
                        <path
                            style={{
                                fill: "none",
                                stroke: "#000000",
                                strokeWidth: 12,
                                strokeLinecap: "round",
                                strokeDasharray: "none",
                                strokeOpacity: 1,
                            }}
                            d={straightLineMid}
                            id="mid"/>
                        <path
                            style={{
                                fill: "none",
                                stroke: "#000000",
                                strokeWidth: 12,
                                strokeLinecap: "round",
                                strokeDasharray: "none",
                                strokeOpacity: 1,
                            }}
                            d={straightLineBot}
                            id="bot"/>
                    </g>
                </svg>
            </div>
        </div>
    )


}
