import { Paper, Typography } from "@mui/material";
import GlobeComponent from "./Globe";

const Home = () => {
  return (
    <Paper
      sx={{
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
      }}
    >
      <GlobeComponent />
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          marginTop: "1em",
          fontSize: "2em",
          color: "#C9C9C9",
        }}
      >
        5+ <br />
        countries
      </Typography>
      <Typography
        variant="body2"
        fontWeight="medium"
        sx={{
          marginTop: "1em",
          fontSize: "1em",
          color: "#C9C9C9",
        }}
      >
        We support 13 languages, so traders from all over the world could enjoy
        and profit anytime
      </Typography>
    </Paper>
  );
};

export default Home;
