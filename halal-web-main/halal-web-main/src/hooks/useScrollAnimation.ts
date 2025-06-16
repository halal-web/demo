
import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement>(
  animationClass = "animate-fade-in",
  offset: number = 80
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Always ensure node has correct starting classes
    node.classList.add("scroll-animate");
    node.classList.remove(animationClass);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add(animationClass);
          node.classList.remove("scroll-animate");
        } else {
          // Reset classes when leaving viewport to enable animation again
          node.classList.remove(animationClass);
          node.classList.add("scroll-animate");
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.13,
      rootMargin: `0px 0px -${offset}px 0px`,
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [animationClass, offset]);

  return ref;
}
