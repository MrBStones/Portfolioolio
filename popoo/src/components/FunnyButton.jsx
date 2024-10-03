import "../App.css"
import {useEffect, useState} from "react";

function FunnyButton() {
    const [count, setCount] = useState(0)
    let [textIndex, setTextIndex] = useState(0)

    const buttonText = [
        "This is a button that you can click.",
        "Oh you clicked me!",
        "That's kinda fun right?",
        "Okay maybe not that fun really...",
        "But i mean you all ready clicked me " + count + " times, so might as well keep going i guess?",
        "I guess " + count + " is pretty much the same as "+ (count + 1) +".",
        "Okay now its a game right? I bet you cant get to 1000! You're only at " + count + " lmao",
        "Wow you actually got to a thousand. Why?",
        "Im still keeping track you know. But im not gonna tell you what you're at >:)",
        "Fine you're at " + count + "...",
        "Okay im done now... Your count is at " + count + ".",
        "No but for real there is no more dialog... Count is " + count,
        "Byeeeeeee times " + count + "!!!",
        count,
        ":3",
        count,
    ]



    console.log(buttonText.length)

    useEffect(() => {
        if (count <= 0) {
            setTextIndex(()  => 0)
        } else if (count <= 1) {
            setTextIndex(()  => 1)
        } else if (count <= 5) {
            setTextIndex(()  => 2)
        } else if (count <= 10) {
            setTextIndex(()  => 3)
        } else if (count <= 30) {
            setTextIndex(()  => 4)
        } else if (count <= 100) {
            setTextIndex(()  => 5)
        } else if (count < 1000) {
            setTextIndex(()  => 6)
        } else if (count <= 1030) {
            setTextIndex(()  => 7)
        } else if (count <= 1070) {
            setTextIndex(()  => 8)
        } else if (count <= 1111) {
            setTextIndex(()  => 9)
        } else if (count <= 1200) {
            setTextIndex(()  => 10)
        } else if (count <= 1300) {
            setTextIndex(()  => 11)
        } else if (count <= 1400) {
            setTextIndex(()  => 12)
        } else if (count <= 1600) {
            setTextIndex(()  => 13)
        } else if (count <= 1696) {
            setTextIndex(()  => 14)
        } else if (count <= 1697) {
            setTextIndex(()  => 15)
        }
    }, [count])


    return (
        <button onClick={() => setCount((count) => count + 1)}>
            {buttonText[textIndex]}
        </button>
    )
}

export default FunnyButton;