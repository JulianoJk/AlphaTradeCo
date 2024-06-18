/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import geoData from "./geo.json";
import globeDay from "../../assets/globeDay.jpeg";

const GlobeComponent: React.FC = () => {
  const globeEl = useRef<any>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      globe.controls().autoRotateSpeed = 2;
      globe.controls().enableZoom = false;
      globe.controls().enablePan = false;
      globe.controls().enableRotate = false;
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: isMobile ? "none" : "auto", // Disable pointer events on mobile
      }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl={globeDay}
        width={isMobile ? 210 : 430}
        height={isMobile ? 310 : 430}
        backgroundColor="rgba(0, 0, 0, 0)"
        polygonsData={countries}
        polygonCapColor={(d: any) =>
          redCountries.has(d.properties.sovereignt)
            ? "darkRed"
            : "rgba(0, 0, 0, 0)"
        }
        polygonStrokeColor={() => "rgba(0, 0, 0, 0)"}
        polygonSideColor={() => "rgba(0, 0, 0, 0)"}
      />
    </Box>
  );
};

export default GlobeComponent;
