"use client"

import {useRef} from "react";

export default function SpeechBubble({text} :{text: string}) {
    const container = useRef<HTMLDivElement>(null);

    return (
        <div ref={container} >
            <div id={"container"} className={"w-full h-full "}>
                <svg
                    width="320px"
                    height="120px"
                    version="1.1"
                    id="svg1"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs
                        id="defs1">
                    </defs>
                    <g
                        id="layer1">
                        <path
                            style={{
                                fill: "#ffffff",
                                fillOpacity: 1,
                                stroke: "#000000",
                                strokeWidth: 1.32292,
                                strokeDasharray: "none",
                                strokeOpacity: 1,
                            }}
                            d="M 1.4264831,21.50752 29.14854,0.66224953 89.320446,0.87714953 85.667156,28.3843 27.751694,29.78115 Z"
                            id="path1" />
                        <text
                            style={{
                                fontStyle: "normal",
                                fontVariant: "normal",
                                fontWeight: "normal",
                                fontStretch: "normal",
                                fontSize: "7.05556px",
                                lineHeight: 1.5,
                                fontFamily: "System-ui",
                                textAlign:"center",
                                letterSpacing: "0px",
                                wordSpacing: "0px",
                                direction: "ltr",
                                textAnchor: "middle",
                                whiteSpace:"pre",
                                inlineSize: 56.7191,
                                fill: "#000000",
                                fillOpacity: 1,
                                stroke: "none",
                                strokeWidth:0.740833,
                                strokeLinejoin:"miter",
                                strokeDasharray:"none",
                                strokeOpacity: 1,
                            }}
                            x="55.741558"
                            y="11.461107"
                            id="text2">
                            <tspan
                                x="55.741558"
                                y="11.461107"
                                id="tspan1">
                                Welcome to my
                            </tspan>
                            <tspan
                                x="55.741558"
                                y="22.044447"
                                id="tspan2">
                                Website!
                            </tspan>
                        </text>
                    </g>
                </svg>

                <div className={"bg-light rounded-lg h-fit w-fit p-5"}>
                    <p className={"text-background text-4xl font-bold"}>{text}</p>
                </div>
            </div>
        </div>
    )
}