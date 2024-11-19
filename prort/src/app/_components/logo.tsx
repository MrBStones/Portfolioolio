"use client"

import {useState} from "react";
import Image from "next/image";

export default function Logo() {
    const [isOpen, setOpen] = useState(false);


    return (
        <div
            className={"container backdrop-filter p-2 rounded-xl backdrop-blur-xl bg-black/50"}>
            <div className={"size-18"}>
                <Image src={"/scrunchesvgwhite.svg"} alt={"Scrunches Logo"} layout="fill"  className={"p-2"} />
            </div>
        </div>


    )
}