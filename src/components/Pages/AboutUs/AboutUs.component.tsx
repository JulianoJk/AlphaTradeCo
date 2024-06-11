import { useTheme } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
// import ThemeProvider from "@mui/material";
const AboutUs = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ backgroundColor: "#34373f", marginTop: 20, padding: 2 }}>
      <Typography variant="h4" sx={{ color: "#ffffff", marginBottom: 2 }}>
        Who We Are
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        ALPHA TRADE Co. is a distinguished company based in Athens, Greece. We
        pride ourselves on nurturing enduring partnerships with industries,
        financial institutions, and business development entities across Europe
        (including Italy, Germany, Belgium, etc.) and beyond (Japan, USA, etc.),
        laying a robust foundation for our strategic development initiatives.
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.primary.main}
        sx={{ marginTop: 2 }}
      >
        Our Group of Companies, comprising:
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A TC"</strong>: The trading arm of our group, specializing in
        the import/export and wholesale distribution of premium products
        including coffee, fresh food ingredients like cheese and pasta from
        Italy, olive products from Greece, and a diverse range of alcoholic
        beverages from around the globe. Additionally, we offer comprehensive
        logistics services to our partners.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A CC"</strong>: Focused on the food chain sector, managing and
        operating Italian restaurants/pizzerias, mobile barbecue units (planned
        franchise), coffee shops, and culinary outlets.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A LC"</strong>: Specializing in the establishment and
        management of health and well-being centers, including spa retreats,
        athlete facilities, and retirement retreats, along with VIP security
        services.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A REC"</strong>: Primarily involved in land development for
        residential and commercial properties, offering expertise in
        construction, asset management, investment, and sales. We manage a
        diverse portfolio of mobile and immobile assets, leveraging our
        resources for further growth and investment opportunities.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A GIG"</strong>: A forthcoming trust foundation based in
        Luxembourg, serving as the umbrella entity for our diversified group
        activities across multiple sectors.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A CPC"</strong>: Our trustee, portfolio manager, and financial
        branch, specializing in financial engineering, mergers and acquisitions,
        master planning, and consultancy services. We provide comprehensive
        support, including financial project analysis, feasibility studies, risk
        assessments, architectural and engineering planning, construction
        supervision, and strategic marketing for managed projects.
      </Typography>

      <Typography variant="h4" sx={{ color: "#ffffff", marginBottom: 2 }}>
        Who We Are
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        ALPHA TRADE Co. is a distinguished company based in Athens, Greece. We
        pride ourselves on nurturing enduring partnerships with industries,
        financial institutions, and business development entities across Europe
        (including Italy, Germany, Belgium, etc.) and beyond (Japan, USA, etc.),
        laying a robust foundation for our strategic development initiatives.
      </Typography>
      <Typography variant="body1" color="success" sx={{ marginTop: 2 }}>
        Our Group of Companies, comprising:
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A TC"</strong>: The trading arm of our group, specializing in
        the import/export and wholesale distribution of premium products
        including coffee, fresh food ingredients like cheese and pasta from
        Italy, olive products from Greece, and a diverse range of alcoholic
        beverages from around the globe. Additionally, we offer comprehensive
        logistics services to our partners.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A CC"</strong>: Focused on the food chain sector, managing and
        operating Italian restaurants/pizzerias, mobile barbecue units (planned
        franchise), coffee shops, and culinary outlets.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A LC"</strong>: Specializing in the establishment and
        management of health and well-being centers, including spa retreats,
        athlete facilities, and retirement retreats, along with VIP security
        services.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A REC"</strong>: Primarily involved in land development for
        residential and commercial properties, offering expertise in
        construction, asset management, investment, and sales. We manage a
        diverse portfolio of mobile and immobile assets, leveraging our
        resources for further growth and investment opportunities.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A GIG"</strong>: A forthcoming trust foundation based in
        Luxembourg, serving as the umbrella entity for our diversified group
        activities across multiple sectors.
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        <strong>"A CPC"</strong>: Our trustee, portfolio manager, and financial
        branch, specializing in financial engineering, mergers and acquisitions,
        master planning, and consultancy services. We provide comprehensive
        support, including financial project analysis, feasibility studies, risk
        assessments, architectural and engineering planning, construction
        supervision, and strategic marketing for managed projects.
      </Typography>
    </Paper>
  );
};

export default AboutUs;
