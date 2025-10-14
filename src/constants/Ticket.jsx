import { useEffect, useState, useRef } from "react";
import "../assets/scss/ticket.scss";
import { news } from "../constants/news";
import { Tooltip } from "antd";
import { fetchNewsAPI } from "../api/api";

export default function Ticket() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef();

  const FetchNews = async () => {
    try {
      setLoading(true);
      const result = await fetchNewsAPI();
      if (result?.data?.data) {
        setState(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchNews();
  }, []);

  // Smooth scrolling animation
  useEffect(() => {
    if (state.length === 0 || isPaused) return;

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

const loadingNews = [
  "Hang tight — fresh news coming soon!",
  "Just a moment, getting today’s headlines...",
  "Almost there! News is loading...",
  "We’re grabbing the latest buzz for you...",
  "Your news feed is on the way...",
  "Getting the scoop right now...",
];

  return (
    <div
      className="ticker"
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
          {loading
            ? loadingNews.concat(loadingNews).map((item, index) => (
                <div key={`${item._id}-${index}`} className="ticker-item">
                  <Tooltip placement="bottom" title={item}>
                    <p className="symbol">{item}</p>
                  </Tooltip>

                  {index < loadingNews.length * 2 - 1 && (
                    <span className="divider">|</span>
                  )}
                </div>
              ))
            : state.concat(state).map((item, index) => (
                <div key={`${item._id}-${index}`} className="ticker-item">
                  <Tooltip placement="bottom" title={item.description}>
                    <p className="symbol">{item?.title}</p>
                  </Tooltip>

                  {index < state.length * 2 - 1 && (
                    <span className="divider">|</span>
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
