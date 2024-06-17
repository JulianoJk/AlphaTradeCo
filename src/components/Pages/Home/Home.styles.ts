import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    paperRoot: {
      backgroundColor: "#1b2430",
      borderRadius: "1em",
      marginTop: "14vh",
      width: "90%",
      height: "auto", // Let height be auto to adjust based on content
      padding: "1em", // Add padding for spacing
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});
