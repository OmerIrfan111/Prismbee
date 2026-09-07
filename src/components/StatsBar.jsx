import { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default function StatsBar() {
  const stats = [
    { value: 100, suffix: '%', label: 'In-House Execution.' },
    { value: 284, suffix: '%', label: 'Avg. Organic Reach.' },
    { value: 3, suffix: '×', label: 'Conversion Rate Lift.' },
    { value: 60, suffix: ' Days', label: 'Time to Results.' }
  ];

  return (
    <section className="w-full bg-[#064E3B] text-white py-20 md:py-28 px-6 md:px-12 my-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-[#A7F3D0]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <p className="text-white/80 font-medium text-base sm:text-lg md:text-xl tracking-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
