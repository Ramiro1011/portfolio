import { useEffect } from "react";

export function useReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      // threshold 0 (+ small bottom margin) so a section reveals as soon as its
      // top edge enters the viewport, regardless of height. With threshold 0.15
      // a very tall element (the Tinta Total card) only revealed after 15% of
      // its height showed, leaving a big blank gap before it on mobile.
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
