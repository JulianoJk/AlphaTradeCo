import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useStyles } from "./Home.styles";
import { Typography, useMediaQuery } from "@mui/material";

const LangingPage = () => {
  const { classes } = useStyles();

  const isMobile = useMediaQuery("(max-width:770px)");

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={classes.landPageRoot}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={isMobile ? 12 : 7}>
          <Paper elevation={0}>
            <Typography variant="h3">Profitability on the rise</Typography>
            <Typography>
              A trading platform that supports your financial goals.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={isMobile ? 12 : 5}>
          <Paper
            elevation={0}
            sx={{ width: "25em", height: "25em", borderRadius: "0.8em" }}
          >
            <img
              style={{ borderRadius: "0.8em" }}
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

export default LangingPage;
