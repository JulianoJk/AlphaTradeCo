import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
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
    "&:after": {
      display: "block",
      content: '""',
      borderBottom: `solid 3px ${theme.palette.primary.main}`,
      transform: "scaleX(0)",
      transition: "transform 250ms ease-in-out",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
    },
    "&.fromLeft:after": {
      transformOrigin: "0% 50%",
    },
  },
}));
