import { useEffect, useRef, useState } from "react";

export const AnimatedNumber = ({ value, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const end = parseInt(value, 10);
          const stepTime = 20; // 20ms per frame
          const steps = duration / stepTime;
          const increment = end / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(Math.floor(start));
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <h1 ref={ref} className="text-5xl text-[#98643E]">
      {count.toLocaleString()}
      {suffix}
    </h1>
  );
};

export default AnimatedNumber;
