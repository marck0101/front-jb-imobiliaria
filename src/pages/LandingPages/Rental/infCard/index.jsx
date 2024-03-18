import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/images/key.png";
import Card from "@mui/material/Card";

import { DiCode } from "react-icons/di";
import MKTypography from "components/MKTypography";
import Contact from "../sections/Contact";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import { useEffect, useState } from "react";
import { getAllInfs } from "../../../../helpers/FakeApi";
import CardContent from "assets/theme/components/card/cardContent";

const InfCard = () => {
  const pegaInfId = `${location.pathname.split("/")[2]}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllInfs();
        console.log("result", result);

        const filtro = result.filter((item) => item._id == parseInt(pegaInfId));
        console.log("filtro", filtro);
        setData(filtro);
        // getIdHome();
      } catch (error) {
        console.error("Erro ao buscar informações:", error);
      }
    };

    fetchData();
  }, []);

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
        {data?.map((item) => {
          return (
            <Card>
              <Grid container>
                <Grid item lg={6} xs={12}>
                  <MKBox
                    component="img"
                    alt="lake house"
                    src={item.image}
                    width={{ xs: "100%", lg: "100%" }}
                    height={{ xs: "100%", lg: "100%" }}
                    //   position="absolute"
                    right={0}
                    bottom={{ xs: "-25%", lg: "unset" }}
                    top={{ xs: 0, lg: "unset" }}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: ({ borders: { borderRadius } }) => ({
                        xs: 0,
                        lg: borderRadius.lg,
                      }),
                      borderBottomLeftRadius: ({ borders: { borderRadius } }) => ({
                        xs: 0,
                        lg: borderRadius.lg,
                      }),
                    }}
                  />
                </Grid>

                <Grid item lg={6} xs={12}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1>Teste</h1>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Grid xs={6} style={{ marginLeft: "2%" }}>
                      <p>bla bla bla</p>
                      <p>bla bla blabla bla blabla </p>
                      <p>bla bla bla</p>
                      <p>bla bla blabla bla blabla </p>
                    </Grid>
                    <Grid xs={6} style={{ marginLeft: "2%" }}>
                      <p>bla bla bla</p>
                      <p>bla bla blabla bla blabla </p>
                      <p>bla bla bla</p>
                      <p>bla bla blabla bla blabla </p>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Card>
          );
        })}
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid item>componente em desenvolvimento!!</Grid>
          <Grid>
            <DiCode size={50} />
          </Grid>
        </Grid>

        <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};
export default InfCard;
