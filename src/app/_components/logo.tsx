"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export default function Logo() {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(
    () => {
      gsap.from("#logo", {
        duration: 1,
        x: -100,
        filter: "blur(5px)",
        ease: "power2.out",
        opacity: 0,
      });
      gsap.from("#logoSvg *", { duration: 1, drawSVG: 0, stagger: 0.1 });
    },
    { scope: container },
  );
  const [toggled, setToggle] = useState(false);

  const handleClick = contextSafe(() => {
    gsap.to(container.current, {
      duration: 1,
      rotation: getRandomIntInclusive(toggled ? -27 : 7, toggled ? -7 : 27),
      ease: "elastic",
    });
    setToggle(!toggled);
  });

  return (
    <div ref={container}>
      <div
        id={"logo"}
        onClick={handleClick}
        className={
          "bg-light-dark/50 container rounded-xl p-2 backdrop-blur-sm backdrop-filter dark:bg-dark/50"
        }
      >
        <div className={"text-light-light size-18 dark:text-light"}>
          <Tintable />
        </div>
      </div>
    </div>
  );
}

function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function Tintable() {
  return (
    <svg
      viewBox="0 0 111 111"
      version="1.1"
      id="logoSvg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs1" />
      <g id="layer2" style={{ display: "none" }}>
        <rect
          style={{ fill: "currentColor" }}
          id="rect1"
          width="111"
          height="111"
          x="0.19548458"
          y="0.23179473"
        />
      </g>
      <g
        id="layer1"
        style={{ display: "none" }}
        transform="translate(-58.641536,-79.279135)"
      >
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path4"
          d="m 82.178818,147.00755 a 29.97541,29.97541 0 0 1 29.975412,-29.97541 29.97541,29.97541 0 0 1 29.97541,29.97541 29.97541,29.97541 0 0 1 -29.97541,29.97541"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path5"
          d="m 82.030167,176.85865 a 13.256445,14.664391 0 0 1 -11.480418,-7.33219 13.256445,14.664391 0 0 1 0,-14.6644 13.256445,14.664391 0 0 1 11.480418,-7.33219"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 82.030167,176.85865 30.124063,0.12431 v 0 z"
          id="path6"
        />
      </g>
      <g
        id="g15"
        style={{ display: "inline" }}
        transform="translate(-58.641536,-79.279135)"
      >
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path4-2"
          d="M 82.17988,146.75519 A 29.97541,29.97541 0 0 1 94.105,123.07534"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path13"
          d="m 142.0626,149.01113 a 29.97541,29.97541 0 0 1 -29.90837,27.97183"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path14"
          d="m 82.030167,176.85865 a 13.256445,14.664391 0 0 1 -11.480418,-7.33219 13.256445,14.664391 0 0 1 0,-14.6644 13.256445,14.664391 0 0 1 11.480418,-7.33219"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 82.030167,176.85865 30.124063,0.12431 v 0 z"
          id="path15"
        />
      </g>
      <g id="layer3" transform="translate(-58.641536,-79.279135)">
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path7"
          d="m 91.096932,142.52988 a 7.8873129,7.96562 0 0 1 7.887313,-7.96562 7.8873129,7.96562 0 0 1 7.887315,7.96562"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 10,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 104.37565,142.552 c 0.0686,12.7337 -0.0194,12.64568 -0.0194,12.64568 z"
          id="path8"
        />
      </g>
      <g id="g10" transform="translate(-58.769264,-78.385039)">
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path9"
          d="m 116.76238,141.5898 a 7.8873129,7.96562 0 0 1 7.88732,-7.96562 7.8873129,7.96562 0 0 1 7.88731,7.96562"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 10,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 130.04109,141.61192 c 0.0686,12.7337 -0.0194,12.64568 -0.0194,12.64568 z"
          id="path10"
        />
      </g>
      <g id="layer4" transform="translate(-58.641536,-79.279135)">
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 82.030167,147.52987 c 0,0 -4.688665,0.2644 -11.805863,-7.00261 -7.486234,-7.64381 -3.371998,-17.59884 -3.232845,-17.47039 l 27.137942,9e-5"
          id="path11"
        />
      </g>
      <g id="layer5" transform="translate(-58.641536,-79.279135)">
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 142.22318,148.89971 c 0,0 8.4072,-0.94008 14.5233,-9.12203 6.41783,-8.58559 2.96495,-16.62718 2.96495,-16.62718 l -29.53238,-0.0935"
          id="path12"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 140.27402,139.15574 c 0,0 2.17032,-0.8081 3.02589,-2.31953 1.56404,-2.76298 3.6653,-7.23411 6.40839,-7.80647 3.37683,-0.70459 3.13373,3.90388 3.13373,3.90388"
          id="path16"
        />
      </g>
      <g id="layer6" transform="translate(-58.641536,-79.279135)">
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 79.154267,156.87052 h 5.688542 l -3.063039,1.76845 z"
          id="path17"
        />
      </g>
      <g id="layer7" transform="translate(-58.641536,-79.279135)">
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 136.32908,123.07647 c 0,0 -2.48941,-12.88904 -10.17243,-20.71708 -6.0641,-6.178564 -16.88023,-7.969859 -21.77759,-6.315641 -2.79824,0.945181 3.53035,10.900741 3.62152,14.221351 0,0 -5.37521,-3.85441 -12.517654,-4.07624 -5.389279,-0.16739 -12.244876,1.81334 -12.835499,4.75294 -0.329958,1.64225 1.526263,4.06409 11.481974,12.11516"
          id="path18"
        />
      </g>
      <g id="layer8" transform="translate(-58.641536,-79.279135)">
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "currentColor",
            strokeWidth: 5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 139.31596,108.41286 c -1.16618,1.02482 -0.37095,-14.548666 10.68596,-19.169812 7.97454,-3.332892 17.57815,4.462731 14.6718,8.883725 -2.5024,3.806517 -6.98276,-0.728102 -11.07758,0.319858 -3.70003,0.94693 -12.91046,8.964099 -14.28018,9.966229 z"
          id="path19"
        />
      </g>
    </svg>
  );
}
