import { useState, useEffect } from "react";

interface HoveredElementData {
  element: Element | null;
  rect: DOMRect | null;
  rotation: number; // For potential future use in rotating the cursor based on element orientation
  cursorType: string | null; // For changing cursor styles dynamically
}

export function useHoveredElement() {
  const [hoveredData, setHoveredData] = useState<HoveredElementData>({
    element: null,
    rect: null,
    rotation: 0,
    cursorType: null,
  });

  const getRoundedRect = (element: Element) => {
    const rect = element.getBoundingClientRect();

    return new DOMRect(
      Math.round(rect.x),
      Math.round(rect.y),
      Math.round(rect.width),
      Math.round(rect.height),
    );
  };

  useEffect(() => {
    let frameId = 0;
    const pointerPosition = { x: -1, y: -1 };
    let lastElement: Element | null = null;

    const updateHoveredElement = () => {
      const target = document.elementFromPoint(pointerPosition.x, pointerPosition.y);
      const interactiveEl = target instanceof Element ? target.closest("[data-cursor]") : null;

      if (interactiveEl instanceof Element) {
        if (interactiveEl !== lastElement) {
          lastElement = interactiveEl;
          setHoveredData({
            element: interactiveEl,
            rect: getRoundedRect(interactiveEl),
            rotation: interactiveEl.getAttribute("data-rotation") ? parseFloat(interactiveEl.getAttribute("data-rotation")!) : 0,
            cursorType: interactiveEl.getAttribute("data-cursor"),
          });
        } else {
          setHoveredData((current) => ({
            ...current,
            rect: getRoundedRect(interactiveEl),
            rotation: interactiveEl.getAttribute("data-rotation") ? parseFloat(interactiveEl.getAttribute("data-rotation")!) : 0,
          }));
        }
      } else if (lastElement !== null) {
        lastElement = null;
        setHoveredData({
          element: null,
          rect: null,
          rotation: 0,
          cursorType: null,
        });
      }

      frameId = window.requestAnimationFrame(updateHoveredElement);
    };

    const handlePointerMove = (e: PointerEvent) => {
      pointerPosition.x = e.clientX;
      pointerPosition.y = e.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove);
    frameId = window.requestAnimationFrame(updateHoveredElement);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return hoveredData;
}