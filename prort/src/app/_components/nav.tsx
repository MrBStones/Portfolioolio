"use client"

import Link from "next/link";
import {useState} from "react";
import Hamburger from "~/app/_components/hamburger";


export default function Nav({hasSession}: {hasSession : boolean}) {
    const [isOpen, setOpen] = useState(false);


    return (
        <div
            className={"container backdrop-filter flex flex-col p-2 rounded-xl backdrop-blur-xl bg-dark/50 gap-2 divide-y divide-hero"}>


            <div className="container backdrop-filter flex flex-row items-center justify-end gap-2">
                <Hamburger toggled={isOpen} toggleAction={setOpen} />
                {/*<p className="text-center text-2xl text-white">
                    {session && <span>Logged in as {session.user?.name}</span>}
                </p>*/}
            </div>
            <FakeLink isOpen={isOpen}/>
            <FakeLink isOpen={isOpen}/>
            <FakeLink isOpen={isOpen}/>
        </div>


    )
}

function FakeLink({isOpen}: {isOpen: boolean }) {
    if (isOpen){
        return (
            <p className="text-center text-2xl text-white">
                PLACEHOLDER LINK NAME →
            </p>
        )
    }
}