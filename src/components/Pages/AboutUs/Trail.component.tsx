// Trail.component.tsx
import React from "react";
import { useTrail, a } from "@react-spring/web";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStyles } from "./Trail.styles";
import { Typography } from "@mui/material";

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const {
    classes: { trailsText },
  } = useStyles(); // Use styles directly here
  const isMobile = useMediaQuery("(max-width:600px)");

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 60,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 60, height: 10 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          className={trailsText} // Apply the className directly
          style={{ ...style, fontSize: isMobile ? "1em" : "3em" }}
        >
          <a.div style={{ height }}>
            <Typography variant="h2">{items[index]}</Typography>
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
