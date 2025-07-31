import { useEffect, useState } from "react";

export function useDarkModeClass() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });

    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return isDark;
}
