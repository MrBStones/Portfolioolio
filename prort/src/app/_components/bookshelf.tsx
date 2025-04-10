"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BsItem from "./bsitem";

export default function Bookshelf() {

  
  useGSAP(() =>{
    let targetsTop = gsap.utils.toArray("#scrollTop");
    let targetsBot = gsap.utils.toArray("#scrollBot");

    const tl = gsap.timeline({repeat: -1});
    // carousel animation
    tl.to(targetsTop, {
      duration: 3,
      x: -412,
      ease: "linear",
    })
    .to(targetsBot, {
      duration: 3,
      x: 412,
      ease: "linear",
    }, "<")
    .call(() => {
      
    }
    )
    



  });


  return (
    <div
      className={
        "h-sc container flex h-128 flex-col overflow-clip rounded-xl bg-dark/50 backdrop-blur-sm"
      }
    >
      <div className="container flex flex-row justify-center">
        <p className={"p-5 text-5xl"}>BOOKSHELF</p>
      </div>
      <div className="container flex h-full flex-col justify-center gap-3">
        <div id="scrollTop" className="container flex flex-row justify-center gap-3 overflow-visible">
          <BsItem num="01" title="CHIRP" description="clone of twitter" />
          <BsItem num="03" title="CHIRP" description="clone of twitter" />
          <BsItem num="05" title="CHIRP" description="clone of twitter" />
          <BsItem num="07" title="CHIRP" description="clone of twitter" />
          <BsItem num="09" title="CHIRP" description="clone of twitter" />
        </div>
        <div id="scrollBot" className="container flex flex-row justify-center gap-3 overflow-visible">
          <BsItem num="02" title="CHIRP" description="clone of twitter" />
          <BsItem num="04" title="CHIRP" description="clone of twitter" />
          <BsItem num="06" title="CHIRP" description="clone of twitter" />
          <BsItem num="08" title="CHIRP" description="clone of twitter" />
          <BsItem num="10" title="CHIRP" description="clone of twitter" />
          <BsItem num="12" title="CHIRP" description="clone of twitter" />
        </div>
      </div>
    </div>
  );
}
