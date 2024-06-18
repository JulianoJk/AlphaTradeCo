import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, useMediaQuery } from "@mui/material";
import { useStyles } from "./Home.styles";

const LandingPage = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width:770px)");

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingLeft: isMobile ? "0" : "2em",
        paddingRight: isMobile ? "0" : "1em",
      }}
      className={classes.landPageRoot}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={isMobile ? 12 : 7}>
          <Paper elevation={0} sx={{ textAlign: "center" }}>
            <Typography variant="h3">Profitability on the rise</Typography>
            <Typography>
              A trading platform that supports your financial goals.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={isMobile ? 12 : 5}>
          <Paper
            elevation={0}
            sx={{
              width: "100%", // Adjusted to be responsive
              maxWidth: "20em", // Maximum width for larger screens
              height: "20em",
              borderRadius: "0.8em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                borderRadius: "0.8em",
                maxWidth: "100%",
                height: "auto",
              }}
              draggable={false}
              src="https://picsum.photos/400/400"
              alt="Random image to display"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
