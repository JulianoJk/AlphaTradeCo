import { Paper, Typography, useTheme } from "@mui/material";
import useModeTheme from "../../hooks/useModeTheme";

const Home = () => {
  const theme = useTheme();
  const backgroundColorss = useModeTheme(
    theme.palette.grey[500],
    theme.palette.grey[100]
  ); // Use actual color values

  return (
    <Paper
      sx={{
        backgroundColor: `${backgroundColorss}!important`,

        marginTop: 20,
      }}
    >
      <Typography color={theme.palette.primary.main} variant="h2">
        We create a Stable Ground For Successful Business Development
      </Typography>
    </Paper>
  );
};

export default Home;
