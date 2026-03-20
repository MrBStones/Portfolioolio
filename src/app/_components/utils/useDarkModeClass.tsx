import { useSyncExternalStore } from "react";

export function useDarkModeClass() {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof document === "undefined") return () => {};
      const html = document.documentElement;
      const observer = new MutationObserver(onStoreChange);

      observer.observe(html, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    },
    () => {
      if (typeof document === "undefined") return false;
      return document.documentElement.classList.contains("dark");
    },
    () => false,
  );
}
