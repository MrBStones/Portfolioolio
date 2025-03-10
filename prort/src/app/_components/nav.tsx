"use client"

import Link from "next/link";
import {useState, useRef} from "react";
import Hamburger from "~/app/_components/hamburger";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {TextPlugin} from "gsap/TextPlugin";
import { text } from "stream/consumers";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);


export default function Nav() {
    const container = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useState(false);

    const containerDefault = {width: 65, height: 65};

    useGSAP(() => {
        const tl = gsap.timeline();
        const tl2 = gsap.timeline({repeat: -1, repeatDelay: 5, delay: 5});
        if (isOpen) {
            tl.from("#nav", {duration: 0.25, width: containerDefault.width, height: containerDefault.height, ease: "power2.in"})
            .to("#nav", {duration: 0.25, width: 400, height: 200, ease: "power2.out"}, "<")
            .to("#nav p", {duration: 0.25, opacity: 1, stagger: 0.1, ease: "power2.out"}, "<");
            
            tl2.to("#nav p", {duration: 0.6, stagger: 0.6, text: "CLICK ME CLICK ME CLICK ME CLICK ME "})
            .to("#nav p", {duration: 1, stagger: 0.6, text: "PLACEHOLDER LINK NAME →"},);
        } else {
            tl.to("#nav p", {duration: 0.15, opacity: 0, stagger: 0.1, ease: "power2.in"})
            .to("#nav", {duration: 0.25, width: containerDefault.width , height: containerDefault.height, ease: "power2.inOut"}, "<")

            tl2.clear();
            
        }
    }, [isOpen] );




    return (
        <div ref={container}>
            <div id="nav"
                className={"container backdrop-filter flex flex-col p-2 rounded-xl backdrop-blur-xl bg-dark/50 gap-2 divide-y divide-hero overflow-hidden"}>


                <div className="container backdrop-filter flex flex-row items-center justify-end gap-2">
                    <Hamburger toggled={isOpen} toggleAction={setOpen} />
                    {/*<p className="text-center text-2xl text-white">
                        {session && <span>Logged in as {session.user?.name}</span>}
                    </p>*/}
                </div>
                <p className="text-left text-2xl text-light text-nowrap">
                    PLACEHOLDER LINK NAME →
                </p>
                <p className="text-left text-2xl text-light text-nowrap">
                    PLACEHOLDER LINK NAME →
                </p>
                <p className="text-left text-2xl text-light text-nowrap">
                    PLACEHOLDER LINK NAME →
                </p>
            </div>
        </div>
    )
}

function FakeLink({isVisible}: {isVisible: boolean }) {
    if (isVisible){
        return (
            <p className="text-left text-2xl text-light text-nowrap">
                PLACEHOLDER LINK NAME →
            </p>
        )
    }
}