"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { usePageTransitionState } from "./pageTransitionState";

export function PageTransitionReset() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const { state, setState } = usePageTransitionState();

  useEffect(() => {
    if (prevPathname.current !== pathname && state.inPageTransition) {
      setState({ inPageTransition: false });
    }

    prevPathname.current = pathname;
  }, [pathname, state.inPageTransition, setState]);

  return null;
}
