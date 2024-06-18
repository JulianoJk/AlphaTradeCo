import IntrestAreas from "../IntrestAreas/IntrestAreas.component";
import GlobePage from "./GlobePage.component";
import LandingPage from "./LandingPage.component";

const Home = () => {
  return (
    // <Box>
    //   {/* Hero Section */}
    //   <Box>
    //     <LangingPage />
    //   </Box>
    //   <Box>
    //     <GlobeComponent />
    //   </Box>
    // </Box>
    <>
      <LandingPage />
      <GlobePage />
      <IntrestAreas />
    </>
  );
};

export default Home;
