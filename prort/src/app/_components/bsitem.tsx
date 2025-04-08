"use client"

interface BsItemProps {
    num: string;
    title: string;
    description: string;
}

export default function BsItem({num, title, description}: Readonly<BsItemProps>){

    return <>
        <div className="min-w-[400px] container flex flex-row bg-light w-bs-item-w h-bs-item-h rounded-xl text-dark">
            <div className="container flex flex-row items-center justify-center content-center h-full w-fit text-6xl">
                <h1 className="w-bs-item-h text-center">{num}</h1>
            </div>
            <div className="container flex flex-col text-right w-full pr-3 justify-center">
                <h1 className="w-full text-4xl"><b>{title}</b></h1>
                <h2 className="w-full text-xl">{description}</h2>

            </div>
        </div>
    </>
}