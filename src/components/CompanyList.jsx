import { useEffect, useState, useRef } from "react";
import "../assets/scss/ticket.scss";
import { companyList } from "../constants/news";

export default function CompanyList() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef();

  // Smooth scrolling animation
  useEffect(() => {
    if (companyList.length === 0 || isPaused) return;

    const animate = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1.5;
        const containerWidth = scrollRef.current?.scrollWidth || 0;
        if (newPosition >= containerWidth / 2) return 0;
        return newPosition;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="comapnyList"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="ticker-content"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: isPaused ? "none" : undefined,
        }}
      >
        <div className="ticker-row">
          {companyList.concat(companyList).map((item, index) => (
            <div key={`${item.id}-${index}`} className="ticker-item">
              <img src={item.img} alt="Save Tax India" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
