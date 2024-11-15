"use client"

import {Dispatch, SetStateAction} from "react";

export default function Hamburger({toggled, toggleAction}: {toggled: boolean, toggleAction: Dispatch<SetStateAction<boolean>>}) {
    const handleToggle = () => {
        toggleAction(!toggled)
    }
    return (
        <div
            className={`container flex flex-col gap-1 items-center justify-center size-12 rounded  ${toggled ? 'bg-spring-green' : 'bg-celadon'}`}
            onClick={handleToggle}>
            <div className={`bg-black w-7 h-1 rounded`}></div>
            <div className={`bg-black w-7 h-1 rounded`}></div>
            <div className={`bg-black w-7 h-1 rounded`}></div>
        </div>
    )


}