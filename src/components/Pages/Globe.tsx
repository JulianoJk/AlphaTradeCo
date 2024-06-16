/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import geoData from "./geo.json"; // Import the local geo.json file
import globeDay from "../../assets/globeDay.jpeg";
const GlobeComponent: React.FC = () => {
  const globeEl = useRef<any>();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const countries = geoData.features;

  const redCountries = new Set([
    "Greece",
    "Russia",
    "Belgium",
    "Australia",
    "Germany",
    "Italy",
    "Ukraine",
  ]);

  useEffect(() => {
    const globe = globeEl.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 1.7;
      globe.controls().enableZoom = true;
      globe.controls().enablePan = false;
      globe.controls().enableRotate = true;
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: matches ? "600px" : "300px", // Responsive height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl={globeDay}
        width={matches ? 600 : 300} // Responsive width
        height={matches ? 600 : 300} // Responsive height
        backgroundColor="rgba(0, 0, 0, 0)"
        polygonsData={countries}
        polygonCapColor={(d: any) =>
          redCountries.has(d.properties.sovereignt)
            ? "red"
            : "rgba(200, 200, 200, 0.6)"
        }
        polygonStrokeColor={() => "#111"}
        polygonLabel={({ properties: d }: any) => `
          <b>${d.sovereignt}</b>
        `}
        polygonsTransitionDuration={300}
      />
    </Box>
  );
};

export default GlobeComponent;
