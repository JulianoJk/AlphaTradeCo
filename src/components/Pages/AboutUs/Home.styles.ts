import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  landPageRoot: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
    boxSizing: "border-box",
  },
  aboutMeRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
}));
