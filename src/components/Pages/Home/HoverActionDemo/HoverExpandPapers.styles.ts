// HoverExpandPapers.styles.ts

import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px", // Adjust height as needed
    width: "100%", // Adjust width as needed
    position: "relative",
    overflow: "hidden",
  },
  paperItem: {
    m: 1,
    width: 300,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  leftPaper: {
    left: 0,
  },
  rightPaper: {
    right: 0,
  },
  expanded: {
    width: "100%", // Width when expanded
  },
});
