"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

export default function FoxholeCalc() {
  const [azimut, setAzimut] = useState(0);
  const [distance, setDistance] = useState(0);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const azimutToArty = Number(formData.get("azimut-to-arty"));
    const distanceToArty = Number(formData.get("distance-to-arty"));
    const azimutToTarget = Number(formData.get("azimut-to-target"));
    const distanceToTarget = Number(formData.get("distance-to-target"));

    // Convert angles to radians
    const artyAngleRad = (azimutToArty * Math.PI) / 180;
    const targetAngleRad = (azimutToTarget * Math.PI) / 180;

    // Calculate positions relative to observer at origin (0,0)
    const artyX = distanceToArty * Math.sin(artyAngleRad);
    const artyY = distanceToArty * Math.cos(artyAngleRad);

    const targetX = distanceToTarget * Math.sin(targetAngleRad);
    const targetY = distanceToTarget * Math.cos(targetAngleRad);

    // Calculate vector from arty to target
    const vectorX = targetX - artyX;
    const vectorY = targetY - artyY;

    // Calculate distance from arty to target
    const resultDistance = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

    // Calculate azimuth from arty to target
    let resultAzimut = (Math.atan2(vectorX, vectorY) * 180) / Math.PI;
    if (resultAzimut < 0) resultAzimut += 360;

    setDistance(Math.round(resultDistance * 10) / 10);
    setAzimut(Math.round(resultAzimut * 10) / 10);
  }

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#foxhole_calc > *", {
      duration: 1,
      filter: "blur(5px)",
      x: -100,
      ease: "power2.out",
      opacity: 0,
      stagger: 0.1,
    });
  });

  return (
    <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light-light dark:text-light">
      <div
        className="mainContainer container flex w-full flex-col gap-16 px-4"
        id="foxhole_calc"
      >
        <h1 className="text-center text-3xl text-light-dark-hero dark:text-hero">
          Foxhole Arty Calc
        </h1>
        <div className="flex flex-col gap-4 rounded-lg bg-light-dark/30 p-8 backdrop-blur-md dark:bg-dark/30">
          <h2 className="mb-2 text-2xl font-semibold text-light-dark-hero dark:text-hero">
            Result
          </h2>
          <div className="flex flex-col gap-2 rounded-md bg-light-background p-4 dark:bg-background">
            <p className="text-lg">
              <span className="font-medium text-light-dark-hero dark:text-hero">
                Distance:
              </span>{" "}
              <span className="font-semibold text-light-light dark:text-light">
                {distance} m
              </span>
            </p>
            <p className="text-lg">
              <span className="font-medium text-light-dark-hero dark:text-hero">
                Azimuth:
              </span>{" "}
              <span className="font-semibold text-light-light dark:text-light">
                {azimut}°
              </span>
            </p>
          </div>
        </div>
        <form
          className="flex flex-col gap-6 rounded-lg bg-light-dark/30 p-8 backdrop-blur-md dark:bg-dark/30"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="azimut-to-arty"
              className="font-medium text-light-dark-hero dark:text-hero"
            >
              Azimut to arty:
            </label>
            <input
              type="number"
              id="azimut-to-arty"
              name="azimut-to-arty"
              step="0.1"
              required
              className="rounded-md border-2 border-light-dark bg-light-background px-4 py-2 text-light-light focus:border-light-hero focus:outline-none dark:border-dark dark:bg-background dark:text-light dark:focus:border-hero"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="distance-to-arty"
              className="font-medium text-light-dark-hero dark:text-hero"
            >
              Distance to arty:
            </label>
            <input
              type="number"
              id="distance-to-arty"
              name="distance-to-arty"
              required
              className="rounded-md border-2 border-light-dark bg-light-background px-4 py-2 text-light-light focus:border-light-hero focus:outline-none dark:border-dark dark:bg-background dark:text-light dark:focus:border-hero"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="azimut-to-target"
              className="font-medium text-light-dark-hero dark:text-hero"
            >
              Azimut to target:
            </label>
            <input
              type="number"
              id="azimut-to-target"
              name="azimut-to-target"
              step="0.1"
              required
              className="rounded-md border-2 border-light-dark bg-light-background px-4 py-2 text-light-light focus:border-light-hero focus:outline-none dark:border-dark dark:bg-background dark:text-light dark:focus:border-hero"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="distance-to-target"
              className="font-medium text-light-dark-hero dark:text-hero"
            >
              Distance to target:
            </label>
            <input
              type="number"
              id="distance-to-target"
              name="distance-to-target"
              required
              className="rounded-md border-2 border-light-dark bg-light-background px-4 py-2 text-light-light focus:border-light-hero focus:outline-none dark:border-dark dark:bg-background dark:text-light dark:focus:border-hero"
            />
          </div>
          <div className="flex w-full flex-row gap-2">
            <input
              type="submit"
              name="Submit"
              value="Submit"
              className="mt-4 w-full cursor-pointer rounded-md bg-light-dark-hero px-6 py-3 font-semibold text-light transition-colors hover:bg-light-hero dark:bg-dark-hero dark:hover:bg-hero"
            />
            <input
              type="reset"
              name="reset"
              className="mt-4 w-full cursor-pointer rounded-md bg-light-dark-hero px-6 py-3 font-semibold text-light transition-colors hover:bg-light-hero dark:bg-dark-hero dark:hover:bg-hero"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
