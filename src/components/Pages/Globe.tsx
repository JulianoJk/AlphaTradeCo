/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { Box } from "@mui/material";
import geoData from "./geo.json";
import globeDay from "../../assets/globeDay.jpeg";
import globeNight from "../../assets/globeEarthNight.jpeg";
import { useAppState } from "../context/AppContext";

const GlobeComponent: React.FC = () => {
  const globeEl = useRef<any>();
  // const theme = useTheme();
  const { mode } = useAppState();
  // const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
        // width: matches ? "37em" : "18em",
        // height: matches ? "37em" : "18em", // Responsive height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl={mode === "dark" ? globeDay : globeNight}
        // globeImageUrl={globeDay}
        width={300}
        height={300}
        backgroundColor="rgba(0, 0, 0, 0)"
        polygonsData={countries}
        polygonCapColor={(d: any) =>
          redCountries.has(d.properties.sovereignt)
            ? mode === "light"
              ? "darkred"
              : "lightcoral"
            : "rgba(0, 0, 0, 0)"
        }
        polygonStrokeColor={() => "rgba(0, 0, 0, 0)"}
        polygonSideColor={() => "rgba(0, 0, 0, 0)"}
        polygonLabel={({ properties: d }: any) => `
          <b>${d.sovereignt}</b>
        `}
        polygonsTransitionDuration={300}
      />
    </Box>
  );
};

export default GlobeComponent;
