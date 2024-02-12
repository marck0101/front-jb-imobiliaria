
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKPagination from "components/MKPagination";

// Material Kit 2 PRO React components
import SimpleBookingCard from "examples/Cards/BookingCards/SimpleBookingCard";

// Images
import product1 from "assets/images/products/product-1-min.jpg";
import product2 from "assets/images/products/product-2-min.jpg";
import product3 from "assets/images/products/product-3-min.jpg";
import product4 from "assets/images/products/product-5-min.jpg";
import product5 from "assets/images/products/product-6-min.jpg";
import product6 from "assets/images/products/product-7-min.jpg";

function Places() {
  const actionProps = {
    type: "internal",
    route: "/",
    // route: "/pages/landing-pages/rental",
    color: "info",
    label: "from / night",
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBookingCard
                image={product2}
                title="Lindo e acolhedor apartamento"
                description="Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto."
                categories={["Apartamento inteiro", " 3 Hóspedes", "2 Camas"]}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBookingCard
                image={product1}
                title="Quarto individual no centro da cidade"
                description="Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto."
                // description="As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business."
                categories={["Private Room", "1 Guest", "1 Sofa"]}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBookingCard
                image={product3}
                title="Cozinha independente do quarto da casa"
                description="Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto."
                // description="Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music."
                categories={["Entire Apartment", "4 Guests", "2 Beds"]}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBookingCard
                image={product4}
                title="Zen Gateway com piscina e jardim"
                description="Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto."
                // description="Fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote."
                categories={["Entire Apartment", "2 Guests", "1 Bed"]}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBookingCard
                image={product5}
                title="Cheapest hotels for a luxury vacation"
                description="Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto."
                // description="Today, the company announced it will be combining its rides-on-demand business, specific skill and UberEATS."
                categories={["Entire Flat", "8 Guests", "3 Rooms"]}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBookingCard
                image={product6}
                title="Quarto Duplo Aconchegante perto da Estação"
                description="Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto."
                // description="Different people have different taste, and various types of music have many ways of leaving an impact on someone."
                categories={["Entire Apartment", "2 Guests", "1 Bed"]}
                action={actionProps}
              />
            </MKBox>
          </Grid>
        </Grid>
        <MKBox mt={5}>
          <MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>4</MKPagination>
            <MKPagination item>5</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Places;
