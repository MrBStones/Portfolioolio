"use client"

import {useRef} from "react";
import { useState } from "react";

export default function SpeechBubble({text1, text2} :{text1: string, text2: string}) {
    const container = useRef<HTMLDivElement>(null);

    const firstX = 2.0
    const firstY = 30.0
    const pointsXRest = [29.14854, 89.320446, 85.667156, 27.751694, 55.741558, 55.741558, 55.741558]
    const pointsYRest = [0.66224953, 0.87714953, 28.3843, 29.78115, 11.461107, 11.461107, 22.044447].map((n) => n + 22.14854)

    var [pointsX, setPointsX] = useState(pointsXRest)
    var [pointsY, setPointsY] = useState(pointsYRest)

    function resetPoints() {
        setPointsX(pointsXRest)
        setPointsY(pointsYRest)
    }

    function setPointsHalfMousePosition(event: React.MouseEvent) {
        if (container.current) {
            const rect = container.current.getBoundingClientRect();
            const x = (event.clientX - rect.left) / 10;
            const y = (event.clientY - rect.top- 220) / 10;
            setPointsX(pointsXRest.map((xo) => xo + x));
            setPointsY(pointsYRest.map((yo) => yo + y));
        }
    }

    return (
        <div ref={container} onMouseMove={(event) => setPointsHalfMousePosition(event)} onMouseLeave={resetPoints}>
            <div id={"container"} className={"w-full h-full "}>
                <svg
                    width="500px"  // Adjusted width
                    height="300px"  // Adjusted height
                    viewBox="0 0 300 100"  // Ensures proper scaling
                    version="1.1"
                    id="svg1"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        width: "1000px",
                        height: "100%",
                    }}>
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
                            d={`M ${firstX},${firstY} ${pointsX[0]},${pointsY[0]} ${pointsX[1]},${pointsY[1]} ${pointsX[2]},${pointsY[2]} ${pointsX[3]},${pointsY[3]} Z`}
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
                            x={pointsX[4]}
                            y={pointsY[4]}
                            id="text2">
                            <tspan
                                x={pointsX[5]}
                                y={pointsY[5]}
                                id="tspan1">
                                {text1}
                            </tspan>
                            <tspan
                                x={pointsX[6]}
                                y={pointsY[6]}
                                id="tspan2">
                                {text2}
                            </tspan>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    )
}