import { Paper, Typography, Grid } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { useStyles } from "./Home.styles";
import GlobeComponent from "../Globe";

const GlobePage = () => {
  const { classes } = useStyles();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        minHeight: "100vh",
        padding: "1em",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={6}>
        <Paper className={classes.globePaperRoot}>
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
            We support 13 languages, so traders from all over the world could
            enjoy and profit anytime
          </Typography>
        </Paper>
      </Grid>

      {/* Right Side - Papers */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={2} direction="column">
          {/* Top Row */}
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Paper className={classes.globePaperRoot}>
                <GroupsIcon fontSize="large" />
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#C9C9C9",
                    marginTop: "0.5em",
                  }}
                >
                  Example content for Paper 1
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.globePaperRoot}>
                <GroupsIcon fontSize="large" />
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#C9C9C9",
                    marginTop: "0.5em",
                  }}
                >
                  Example content for Paper 2
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Bottom Row */}
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Paper className={classes.globePaperRoot}>
                <GroupsIcon fontSize="large" />
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#C9C9C9",
                    marginTop: "0.5em",
                  }}
                >
                  Example content for Paper 3
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.globePaperRoot}>
                <GroupsIcon fontSize="large" />
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#C9C9C9",
                    marginTop: "0.5em",
                  }}
                >
                  Example content for Paper 4
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GlobePage;
