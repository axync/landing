import React, { useState, useEffect, useRef } from "react";

export function ScrambleText({
  text,
  className,
  as: Tag = "div",
}: {
  text: string;
  className?: string;
  as?: any;
}) {
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef<any>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let interval: any;
    let iteration = 0;

    const startAnimation = () => {
      clearInterval(interval);
      iteration = 0;
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 2;
      }, 30);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          startAnimation();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [text]);

  return (
    <Tag ref={containerRef} className={className} style={{ minHeight: "1em" }}>
      {displayText || text.replace(/[^\s]/g, "\u00A0")}
    </Tag>
  );
}
