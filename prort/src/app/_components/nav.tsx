"use client"

import Link from "next/link";
import {useState} from "react";
import Hamburger from "~/app/_components/hamburger";

export default function Nav({hasSession}: {hasSession : boolean}) {
    const [isOpen, setOpen] = useState(false);


    return (
        <div
            className={"container backdrop-filter flex flex-col p-2 rounded-xl backdrop-blur-xl bg-black/50 gap-2 divide-y divide-spring-green"}>


            <div className="container backdrop-filter flex flex-row items-center justify-end gap-2">
                <Hamburger toggled={isOpen} toggleAction={setOpen} />
                {/*<p className="text-center text-2xl text-white">
                    {session && <span>Logged in as {session.user?.name}</span>}
                </p>*/}
                <Link
                    href={hasSession ? "/api/auth/signout" : "/api/auth/signin"}
                    className="rounded-full bg-spring-green/10 px-10 py-3 font-semibold no-underline transition hover:bg-spring-green/20"
                >
                    {hasSession ? "Sign out" : "Sign in"}
                </Link>
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