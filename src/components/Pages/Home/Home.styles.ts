import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    landPageRoot: {
      backgroundColor: "transparent",
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1em",
      boxSizing: "border-box",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    globePaperRoot: {
      backgroundColor: "#1b2430",
      borderRadius: "1em",
      marginTop: "14vh",
      width: "90%",
      height: "auto",
      padding: "1em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    areasInterestPaper: {
      height: "15em",
      padding: "1em",
      backgroundColor: "#1c1b1b",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      borderRadius: "8px",
      textAlign: "center",
      color: "#C9C9C9",
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.05)",
      },
      cursor: "default",

      "@media (max-width: 600px)": {
        marginBottom: "1em",
        height: "auto",
      },
    },
  };
});
