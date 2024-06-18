import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    trailsText: {
      position: "relative",
      width: "100%",
      height: "80px",
      lineHeight: "80px",
      color: "rgb(255, 255, 255)",
      fontWeight: 800,
      letterSpacing: "-0.05em",
      willChange: "transform, opacity",
      overflow: "hidden",
      "& > div": {
        paddingRight: "0.05em",
        overflow: "hidden",
      },
    },
  };
});
