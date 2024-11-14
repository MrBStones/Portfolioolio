"use client"

import {Dispatch, SetStateAction} from "react";

export default function Hamburger({toggled, toggleAction}: {toggled: boolean, toggleAction: Dispatch<SetStateAction<boolean>>}) {
    const handleToggle = () => {
        toggleAction(!toggled)
    }
    return (
        <div className={`size-10  ${toggled ? 'bg-spring-green' : 'bg-celadon'}`} onClick={handleToggle}>
            
        </div>
    )


}