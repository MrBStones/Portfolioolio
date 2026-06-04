// src/app/_components/utils/pageTransitionProvider.tsx
"use client";

import { createContext, useContext, useState } from "react";

interface PageTransitionState {
  inPageTransition: boolean;
}

type PageTransitionContextValue = {
  state: PageTransitionState;
  setState: React.Dispatch<React.SetStateAction<PageTransitionState>>;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<PageTransitionState>({
    inPageTransition: false,
  });

  return (
    <PageTransitionContext.Provider value={{ state, setState }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransitionState() {
  const value = useContext(PageTransitionContext);

  if (!value) {
    throw new Error(
      "usePageTransitionState must be used inside PageTransitionProvider",
    );
  }

  return value;
}
