import { useEffect } from "react";

export function useReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
