import { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2, suffix = "", prefix = "" }) => {
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
      { threshold: 0.1 }
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
      
      // Easing out function
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
    { value: 50, suffix: "+", label: "Brands Scaled" },
    { value: 284, suffix: "%", label: "Avg. Organic Reach Increase" },
    { value: 3, suffix: "×", label: "Average Conversion Rate Lift" },
    { value: 60, suffix: " Days", label: "Avg. Time to First Results", noAnimate: true } 
    // ^ Assuming "60 Days" can be mostly static or we animate the 60. We'll animate the 60.
  ];

  return (
    <section className="bg-emerald py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="font-display font-extrabold text-white text-4xl md:text-[48px] mb-2 leading-none">
                {stat.noAnimate ? (
                  <>{stat.value}{stat.suffix}</>
                ) : (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                )}
              </h4>
              <p className="font-body text-white/80 text-[14px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
