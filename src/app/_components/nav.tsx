"use client";

import { useState, useRef, useEffect } from "react";
import Hamburger from "~/app/_components/hamburger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Link from "next/link";
import TransitionLink from "./utils/transitionLink";
import { useRouter } from "next/navigation";
import Image from "next/image";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export default function Nav() {
  const container = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fst, setFst] = useState(true);
  const containerDefault = { width: 65, height: 65 };
  const containerOpen = { width: 300, height: 200 };

  useGSAP(
    () => {
      if (fst) {
        gsap.set("#nav .link", { opacity: 0, x: 40 });
        gsap.set("#nav", {
          width: containerDefault.width,
          height: containerDefault.height,
        });

        gsap.from(container.current, {
          duration: 1,
          x: 100,
          filter: "blur(5px)",
          ease: "power2.out",
          opacity: 0,
        });

        setFst(false);
        setIsOpen(false);
      }

      const tl1 = gsap.timeline();
      const tl2 = gsap.timeline();
      gsap.killTweensOf("#nav, #nav .link");

      if (isOpen) {
        tl1
          .from("#nav", {
            duration: 0.5,
            width: containerDefault.width,
            height: containerDefault.height,
            ease: "power2.in",
          })
          .from(
            "#nav .link",
            {
              duration: 0.5,
              x: 40,
              opacity: 0,
              stagger: 0.1,
              ease: "power2.in",
            },
            "<",
          )
          .to(
            "#nav",
            {
              duration: 0.5,
              width: containerOpen.width,
              height: containerOpen.height,
              ease: "power2.out",
            },
            "<",
          )
          .to(
            "#nav .link",
            {
              duration: 0.5,
              x: 0,
              opacity: 1,
              stagger: 0.1,
              ease: "power2.out",
            },
            "<",
          );
      } else {
        tl2
          .to("#nav .link", {
            duration: 0.25,
            opacity: 0,
            x: 40,
            stagger: 0.1,
            ease: "power2.in",
          })
          .to(
            "#nav",
            {
              duration: 0.5,
              width: containerDefault.width,
              height: containerDefault.height,
              ease: "power2.inOut",
            },
            "<",
          )
          .set("#nav .link", { opacity: 0, x: 40 });
      }
    },
    { dependencies: [isOpen], scope: container },
  );

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
        document.documentElement.classList.contains("dark"),
    );
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (isDark) {
        html.classList.remove("dark");
        setIsDark(false);
      } else {
        html.classList.add("dark");
        setIsDark(true);
      }
    }
  };

  return (
    <div ref={container}>
      <div
        id="nav"
        className={`container flex flex-col gap-2 divide-y divide-hero overflow-hidden rounded-xl bg-light-dark/50 p-2 backdrop-blur-xl backdrop-filter dark:bg-dark/50 ${"h-[" + containerDefault.height + "px]" + "w-[" + containerDefault.width + "px]"}`}
      >
        <div className="container flex flex-row items-center justify-end gap-2 backdrop-filter">
          <div onClick={toggleTheme} className="cursor-pointer">
            {isDark ? (
              <img
                src={"/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"}
                alt="Theme Toggle"
                width={24}
                height={24}
              />
            ) : (
              <img
                src={"/dark_mode_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg"}
                alt="Theme Toggle"
                width={24}
                height={24}
              />
            )}
          </div>

          <Hamburger toggled={isOpen} toggleAction={setIsOpen} />
          {/*<p className="text-center text-2xl text-white">
                        {session && <span>Logged in as {session.user?.name}</span>}
                    </p>*/}
        </div>
        <TransitionLink
          href={"/"}
          className="link"
          onClick={() => setIsOpen(false)}
        >
          <p className="link text-nowrap text-left text-2xl text-light-light opacity-0 dark:text-light">
            HOME →
          </p>
        </TransitionLink>
        <TransitionLink
          href={"/projects"}
          className="link"
          onClick={() => setIsOpen(false)}
        >
          <p className="link text-nowrap text-left text-2xl text-light-light opacity-0 dark:text-light">
            PROJECTS →
          </p>
        </TransitionLink>
        <TransitionLink
          href={"/contact"}
          className="link"
          onClick={() => setIsOpen(false)}
        >
          <p className="link text-nowrap text-left text-2xl text-light-light opacity-0 dark:text-light">
            CONTACT →
          </p>
        </TransitionLink>
      </div>
    </div>
  );
}
