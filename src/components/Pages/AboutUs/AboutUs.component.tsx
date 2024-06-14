// AboutUs.tsx
import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useModeTheme from "../../../hooks/useModeTheme";
import Demo from "./Demo"; // Import the modified Demo component

const AboutUs = () => {
  const theme = useTheme();
  const backgroundColor = useModeTheme("#323232", theme.palette.grey[100]);
  const textColor = useModeTheme(
    theme.palette.common.white,
    theme.palette.common.black
  );

  const trailData = [
    {
      open: true,
      texts: ["We are on a mission dedicated"],
    },
    {
      open: false,
      texts: ["to empower the next generation."],
    },
  ];

  return (
    <Box
      sx={{
        marginTop: theme.spacing(10),
        padding: theme.spacing(2),
        color: theme.palette.common.white,
      }}
    >
      <Paper
        sx={{
          padding: theme.spacing(4),
          backgroundColor: backgroundColor,
          color: textColor,
        }}
        elevation={3}
      >
        <Box sx={{ maxWidth: "100%", textAlign: "center" }}>
          <Demo trailData={trailData} />
        </Box>

        <br />
        <Typography variant="body1" paragraph>
          Alpha TRADE co, headquartered in Athens, Greece, has built and
          sustained enduring connections with businesses and financial
          institutions in numerous European countries, as well as in Japan and
          the USA. The company, located at Miaouli & Samuil str., Gerakas,
          focuses on Import/Exports and Wholesales of items like Coffee, Cheese,
          Pasta from Italy, Greek Olive Products, and Alcoholic beverages from
          various countries. They also provide Logistics services.
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.primary.main}
          sx={{ marginTop: theme.spacing(2) }}
        >
          Our Group of Companies, comprising:
        </Typography>
        {[
          {
            name: "A TC",
            description:
              "The trading arm of our group, specializing in the import/export and wholesale distribution of premium products including coffee, fresh food ingredients like cheese and pasta from Italy, olive products from Greece, and a diverse range of alcoholic beverages from around the globe. Additionally, we offer comprehensive logistics services to our partners.",
          },
          {
            name: "A CC",
            description:
              "Focused on the food chain sector, managing and operating Italian restaurants/pizzerias, mobile barbecue units (planned franchise), coffee shops, and culinary outlets.",
          },
          {
            name: "A LC",
            description:
              "Specializing in the establishment and management of health and well-being centers, including spa retreats, athlete facilities, and retirement retreats, along with VIP security services.",
          },
          {
            name: "A REC",
            description:
              "Primarily involved in land development for residential and commercial properties, offering expertise in construction, asset management, investment, and sales. We manage a diverse portfolio of mobile and immobile assets, leveraging our resources for further growth and investment opportunities.",
          },
          {
            name: "A GIG",
            description:
              "A forthcoming trust foundation based in Luxembourg, serving as the umbrella entity for our diversified group activities across multiple sectors.",
          },
          {
            name: "A CPC",
            description:
              "Our trustee, portfolio manager, and financial branch, specializing in financial engineering, mergers and acquisitions, master planning, and consultancy services. We provide comprehensive support, including financial project analysis, feasibility studies, risk assessments, architectural and engineering planning, construction supervision, and strategic marketing for managed projects.",
          },
        ].map((company, index) => (
          <Typography key={index} variant="body1" paragraph>
            <strong>{company.name}</strong>: {company.description}
          </Typography>
        ))}
      </Paper>
    </Box>
  );
};

export default AboutUs;
