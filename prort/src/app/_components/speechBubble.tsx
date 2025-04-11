"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface SpeechBubbleProps {
  text1: string;
  text2: string;
  mouseEvent: React.MouseEvent | undefined;
  mouseOver: boolean;
  left: boolean;
}

export default function SpeechBubble({
  text1,
  text2,
  mouseEvent,
  mouseOver,
  left,
}: Readonly<SpeechBubbleProps>) {
  const container = useRef<HTMLDivElement>(null);

  const firstX = 2.0;
  const firstY = 30.0;
  const lastX = 298.0;
  const lastY = 30.0;
  const pointsXRestTemp = [
    29.14854, 89.320446, 85.667156, 27.751694, 55.741558, 55.741558, 55.741558,
  ];
  const pointsXRest = left
    ? pointsXRestTemp
    : pointsXRestTemp.map((n) => n + 180);
  const pointsYRest = [
    0.66224953, 0.87714953, 28.3843, 29.78115, 11.461107, 11.461107, 22.044447,
  ].map((n) => n + 22.14854);

  const [pointsX, setPointsX] = useState(pointsXRest);
  const [pointsY, setPointsY] = useState(pointsYRest);
  const [isActive, setIsActive] = useState(false);
  const [targetPointsX, setTargetPointsX] = useState(pointsXRest);
  const [targetPointsY, setTargetPointsY] = useState(pointsYRest);

  function lerp(start: number, end: number, t: number): number {
    return start + t * (end - start);
  }

  function resetPoints() {
    setTargetPointsX(pointsXRest);
    setTargetPointsY(pointsYRest);
    setIsActive(true);
  }

  function setPointsHalfMousePosition(event: React.MouseEvent) {
    if (container.current && event !== undefined) {
      const rect = container.current.getBoundingClientRect();
      const x = (event.clientX - (left ? rect.left : rect.right)) / 10;
      const y = (event.clientY - rect.top - 220) / 10;

      setTargetPointsX(pointsXRest.map((xo) => xo + x));
      setTargetPointsY(pointsYRest.map((yo) => yo + y));
      setIsActive(true);
    }
  }

  /* eslint-disable */
  useEffect(() => {
    if (mouseOver) {
      setPointsHalfMousePosition(mouseEvent!);
    } else {
      resetPoints();
    }
  }, [mouseOver, mouseEvent]);
  /* eslint-enable */

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setPointsX((prevPointsX) =>
        prevPointsX.map((xo, i) => lerp(xo, targetPointsX[i] ?? xo, 0.1)),
      );
      setPointsY((prevPointsY) =>
        prevPointsY.map((yo, i) => lerp(yo, targetPointsY[i] ?? yo, 0.1)),
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    if (isActive) {
      animationFrameId = requestAnimationFrame(animate);

      const timeout = setTimeout(() => {
        setIsActive(false);
        cancelAnimationFrame(animationFrameId);
      }, 1000); // duration of the lerp animation

      return () => {
        cancelAnimationFrame(animationFrameId);
        clearTimeout(timeout);
      };
    }
  }, [isActive, targetPointsX, targetPointsY, mouseOver]);

  return (
    <div ref={container}>
      <div id={"container"} className={"h-full w-full"}>
        <svg
          width="500px" // Adjusted width
          height="300px" // Adjusted height
          viewBox="0 0 300 100" // Ensures proper scaling
          version="1.1"
          id="svg1"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "1000px",
            height: "100%",
          }}
        >
          <defs id="defs1"></defs>
          <g id="layer1">
            <path
              className="fill-dark/50 stroke-light backdrop-blur-sm"
              style={{
                fillOpacity: 1,
                strokeWidth: 1.32292,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              d={`M ${left ? firstX + "," + firstY : ""} ${pointsX[0]},${pointsY[0]} ${pointsX[1]},${pointsY[1]} ${left ? "" : lastX + "," + lastY} ${pointsX[2]},${pointsY[2]} ${pointsX[3]},${pointsY[3]}  Z`}
              id="path1"
            />
            <text
              className="fill-light"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                fontStretch: "normal",
                fontSize: "7.05556px",
                lineHeight: 1.5,
                fontFamily: "System-ui",
                textAlign: "center",
                letterSpacing: "0px",
                wordSpacing: "0px",
                direction: "ltr",
                textAnchor: "middle",
                whiteSpace: "pre",
                inlineSize: 56.7191,
                stroke: "none",
                strokeWidth: 0.740833,
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              x={pointsX[4]}
              y={pointsY[4]}
              id="text2"
            >
              <tspan x={pointsX[5]} y={pointsY[5]} id="tspan1">
                {text1}
              </tspan>
              <tspan x={pointsX[6]} y={pointsY[6]} id="tspan2">
                {text2}
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
