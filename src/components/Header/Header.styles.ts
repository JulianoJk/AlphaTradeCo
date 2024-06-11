import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
     container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "90vh",
      position: "fixed",
      top: "1em", // Adjust the distance from the top as needed
      left: "50%",
      transform: "translateX(-10%)",
      marginBottom: "5em",
    },
    linkItems: {
      display: "grid",
      alignItems: "center",
      gap: "40px",
      gridAutoFlow: "column",
      margin: "0",
      textTransform: "capitalize",
    },
    appBarRoot: {
      backgroundColor: "#202020",
      border: "1px solid #2d3138",
      borderRadius: "1em", // 16px
      height: "4em",
    },
  };
});
