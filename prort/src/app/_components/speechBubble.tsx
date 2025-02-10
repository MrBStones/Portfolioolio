"use client"

export default function SpeechBubble({text} :{text: string}) {
    return (
        <div className={"w-full h-full "}>
            <div className={"bg-white rounded-lg h-fit w-fit p-5"}>
                <p className={"text-black text-4xl font-bold"}>{text}</p>
            </div>
        </div>

    )
}