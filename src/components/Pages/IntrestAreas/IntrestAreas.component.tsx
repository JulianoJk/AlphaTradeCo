import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useStyles } from "../Home/Home.styles";
import { Typography } from "@mui/material";

const interestAreas = [
  {
    title: "Italian Coffee",
    description:
      "Discover the richness of Italian café culture, from aromatic coffee blends to delightful pastries, and the finest brewing equipment.",
  },
  {
    title: "F&B Supply",
    description:
      "Our curated F&B collection brings Italy's celebrated pastas, prosciuttos, Parmesans, and deli delights directly to you.",
  },
  {
    title: "Energy Waste Management",
    description:
      "Leading the way in sustainable waste management with our commitment to quality and eco-efficiency.",
  },
  {
    title: "Spa & Well-being",
    description:
      "Offering private, luxurious spa experiences for complete rejuvenation and well-being.",
  },
  {
    title: "Hotels & Tourism",
    description:
      "Investing in prime properties, we craft villas and apartments poised for high returns and exceptional experiences",
  },
  {
    title: "VIP Security Services",
    description:
      "Ensuring tranquility with premier event security and personal protection services.",
  },
];

const IntrestAreas = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container spacing={2} className={classes.landPageRoot}>
      {interestAreas.map((area, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            className={cx(classes.globePaperRoot, classes.areasInterestPaper)}
            sx={{}}
          >
            <Typography variant="h4" gutterBottom>
              {area.title}
            </Typography>
            <Typography variant="body2">{area.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default IntrestAreas;
