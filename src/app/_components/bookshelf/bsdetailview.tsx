"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { bsDetailViewProps, bsItemProps } from "./bsdata";
import BsItem from "./bsitem";
import { Flip } from "gsap/Flip";
import { useRef, useState } from "react";
import BsItemHover from "./bsitemhover";
import { set } from "zod";
import Image from "next/image";

gsap.registerPlugin(Flip);

export default function BsDetailView({
  description,
  linkOne,
  linkTwo,
  linkOneText,
  linkTwoText,
  image,
  imageAlt = "",
  bsItem,
  icon,
  iconAlt = "",
  technologies = [],
}: Readonly<bsDetailViewProps>) {
  const bsItemRef = useRef<HTMLDivElement>(null);
  const outerContainer = useRef<HTMLDivElement>(null);
  const innerContainer = useRef<HTMLDivElement>(null);
  const fullContainer = useRef<HTMLDivElement>(null);
  const detailViewContainer = useRef<HTMLDivElement>(null);
  const [imageToggled, setImageToggled] = useState(false);
  const [viewToggled, setViewToggled] = useState(false);
  const [animationRunning, setAnimationRunning] = useState(false);
  const [fullyClosed, setFullyClosed] = useState(true);
  const [midAnim, setMidAnim] = useState(false);
  const [fullyOpen, setFullyOpen] = useState(false);
  const { contextSafe } = useGSAP({ scope: fullContainer });

  const onImageClicked = contextSafe(() => {
    const state = Flip.getState("#imageContainer, #linkContainer a");

    setImageToggled((prev) => !prev);

    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.4,
        ease: "power3.out",
      });
    });
  });

  const onBsItemClicked = contextSafe(() => {
    if (animationRunning) return;
    setAnimationRunning(true);

    if (viewToggled) {
      const state = Flip.getState([
        bsItemRef.current,
        detailViewContainer.current,
        innerContainer.current,
        outerContainer.current,
      ]);

      setViewToggled(false);

      if (outerContainer.current && bsItemRef.current) {
        outerContainer.current.appendChild(bsItemRef.current);
      }

      setFullyOpen(false);

      requestAnimationFrame(() => {
        Flip.from(state, {
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => {
            const state2 = Flip.getState([detailViewContainer.current]);

            setMidAnim(false);

            requestAnimationFrame(() => {
              Flip.from(state2, {
                duration: 1,
                ease: "linear",
                onComplete: () => {
                  const state3 = Flip.getState([detailViewContainer.current]);
                  setFullyClosed(true);

                  requestAnimationFrame(() => {
                    Flip.from(state3, {
                      duration: 1,
                      ease: "power3.out",
                      onComplete: () => {
                        setAnimationRunning(false);
                      },
                    });
                  });
                },
              });
            });
          },
        });
      });
    } else {
      const state = Flip.getState([
        detailViewContainer.current,
        bsItemRef.current,
      ]);

      setViewToggled(true);

      setFullyClosed(false);

      requestAnimationFrame(() => {
        Flip.from(state, {
          duration: 1,
          ease: "power3.in",
          onComplete: () => {
            const state2 = Flip.getState([detailViewContainer.current]);

            setMidAnim(true);

            requestAnimationFrame(() => {
              Flip.from(state2, {
                duration: 1,
                ease: "power3.out",
                onComplete: () => {
                  const state3 = Flip.getState([
                    bsItemRef.current,
                    detailViewContainer.current,
                    innerContainer.current,
                    outerContainer.current,
                  ]);

                  setFullyOpen(true);

                  requestAnimationFrame(() => {
                    if (innerContainer.current && bsItemRef.current) {
                      innerContainer.current.appendChild(bsItemRef.current);
                    }
                    Flip.from(state3, {
                      duration: 0.5,
                      ease: "power3.inOut",
                      onComplete: () => {
                        setAnimationRunning(false);
                      },
                    });
                  });
                },
              });
            });
          },
        });
      });

      /*
      
      */
    }
  });

  return (
    <>
      <div ref={fullContainer} className="flex flex-col items-center">
        <div
          ref={detailViewContainer}
          className={`container flex flex-col gap-3 rounded-3xl bg-light-dark/50 backdrop-blur-xl backdrop-filter dark:bg-dark/50 ${fullyOpen ? "" : "overflow-clip"} ${fullyClosed ? "h-0 w-0" : midAnim ? "max-w-128 p-3" : "h-0 max-w-128 p-3"}`}
        >
          <Image
            src={icon}
            alt={iconAlt}
            className="w-10 invert dark:invert-0"
            width={24}
            height={24}
          />
          <div ref={innerContainer}></div>

          <div className="container flex w-full flex-col gap-3">
            <p className="text-right">{description}</p>
          </div>

          <div
            id="imageAndLinksContainer"
            className={`container flex ${imageToggled ? "flex-col" : "flex-row"} gap-3`}
          >
            <div
              id="linkContainer"
              className={`container flex ${imageToggled ? "flex-row-reverse" : "flex-col"} gap-3`}
            >
              <a href={linkOne} className="basis-1/2">
                <div className="h-bs-item-h w-full rounded-xl bg-hero p-3 text-right text-3xl text-dark transition-colors duration-100 hover:bg-light">
                  {linkOneText}
                </div>
              </a>
              <a href={linkTwo} className="basis-1/2">
                <div className="h-bs-item-h w-full rounded-xl bg-dark-hero p-3 text-right text-3xl text-dark transition-colors duration-100 hover:bg-light">
                  {linkTwoText}
                </div>
              </a>
            </div>
            <div
              className="w-full hover:cursor-pointer"
              onClick={onImageClicked}
            >
              <img
                id="imageContainer"
                src={image}
                alt={imageAlt}
                className={`${imageToggled ? "h-full" : "h-bv-image-h"} w-full rounded-xl object-cover`}
              />
            </div>
          </div>
          <div className="container flex h-bs-item-h flex-row items-center justify-end gap-3 hover:cursor-pointer">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-xl bg-dark-hero px-4 py-2 text-right text-dark transition-colors duration-100 hover:bg-light"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div ref={outerContainer}>
          <div
            ref={bsItemRef}
            onClick={onBsItemClicked}
            className="hover:cursor-pointer"
          >
            <BsItemHover
              num={bsItem.num}
              title={bsItem.title}
              description={bsItem.description}
              fixedWidth={!fullyOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}
