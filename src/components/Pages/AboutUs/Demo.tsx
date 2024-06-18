// Demo.tsx
import React, { useEffect, useState } from "react";
import Trail from "./Trail.component";

interface TrailData {
  open: boolean;
  texts: string[];
}

interface DemoProps {
  trailData: TrailData[];
}

const Demo: React.FC<DemoProps> = ({ trailData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trailData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [trailData]);

  return (
    <div>
      {trailData.map((trail, index) => (
        <Trail key={index} open={index === currentIndex}>
          {trail.texts.map((text, idx) => (
            <span key={idx}>{text}</span>
          ))}
        </Trail>
      ))}
    </div>
  );
};

export default Demo;


