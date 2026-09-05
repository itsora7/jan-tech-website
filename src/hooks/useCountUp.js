import { useEffect, useRef, useState } from "react";

const parseValue = (value) => {
  const match = /^(\d+)(.*)$/.exec(value);

  if (!match) {
    return { target: null, suffix: value };
  }

  return { target: Number(match[1]), suffix: match[2] };
};

const easeOutCubic = (progress) => 1 - (1 - progress) ** 3;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useCountUp = (value, duration = 1400) => {
  const { target, suffix } = parseValue(value);
  const [display, setDisplay] = useState(() => {
    if (target === null || prefersReducedMotion()) {
      return value;
    }

    return `0${suffix}`;
  });
  const elementRef = useRef(null);

  useEffect(() => {
    if (target === null || prefersReducedMotion()) {
      return;
    }

    const node = elementRef.current;

    if (!node) {
      return;
    }

    let frameId;
    let hasAnimated = false;

    const animate = () => {
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.round(target * easeOutCubic(progress));

        setDisplay(`${current}${suffix}`);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        }
      };

      frameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animate();
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [value, target, suffix, duration]);

  return { display, ref: elementRef };
};
