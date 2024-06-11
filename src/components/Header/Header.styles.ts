import { Theme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<{ mode: string }>()(
  (theme: Theme, { mode }) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "90vh",
      position: "fixed",
      top: "1em",
      left: "50%",
      transform: "translateX(-10%)",
      marginBottom: "5em",
    },
    linkItems: {
      display: "grid",
      alignItems: "center",
      gap: "40px",
      gridAutoFlow: "column",
      margin: 0,
      textTransform: "capitalize",
    },
    appBarRoot: {
      backgroundColor: "#202020",
      border: "1px solid #2d3138",
      borderRadius: "1em",
      height: "4em",
    },
    buttonEffect: {
      position: "relative",
      display: "inline-block",
      textTransform: "uppercase",
      margin: 0,
      padding: "5px 10px", // Adjust padding for spacing
      backgroundImage: `linear-gradient(to right, ${
        mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.dark
      } 50%, ${
        mode === "dark"
          ? theme.palette.common.white
          : theme.palette.common.black
      }  50%)`,
      backgroundSize: "200% 100%",
      backgroundPosition: "-100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: "all 0.3s ease-in-out",
      "&:before": {
        content: '""',
        background: `${mode === "dark" ? "#EFE2BA" : "#9d6d10"}`,
        display: "block",
        position: "absolute",
        bottom: "-3px",
        left: 0,
        width: 0,
        height: "3px",
        transition: "all 0.3s ease-in-out",
      },
      "&:hover": {
        backgroundPosition: "0",
      },
      "&:hover:before": {
        width: "100%",
      },
    },
  })
);
