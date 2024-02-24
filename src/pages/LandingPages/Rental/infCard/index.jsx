import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/images/bg-rental.jpeg";
import Card from "@mui/material/Card";
import Places from "pages/LandingPages/Rental/sections/Places";

import product2 from "assets/images/products/product-2-min.jpg";
import SimpleBookingCard from "examples/Cards/BookingCards/SimpleBookingCard";
import MKTypography from "components/MKTypography";
import Faq from "../sections/Faq";
import Contact from "../sections/Contact";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

const InfCard = () => {
  const navigate = useNavigate();

  const voltar = () => {
    navigate("/");
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/",
          label: "Mais informações",
          color: "info",
        }}
        transparent
        light
      />

      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              JB Imobiliária
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1}>
              Lindas casas com valores acessíveis, seu conforto é nossa prioridade!!
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "hidden",
        }}
      >
        <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};
export default InfCard;
