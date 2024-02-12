// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// DesktopApp page sections
import Banner from "pages/Apps/DesktopApp/sections/Banner";
import Information from "pages/Apps/DesktopApp/sections/Information";
import Features from "pages/Apps/DesktopApp/sections/Features";
import Testimonials from "pages/Apps/DesktopApp/sections/Testimonials";
import Pricing from "pages/Apps/DesktopApp/sections/Pricing";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function DesktopApp() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "",
          // route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
          color: "warning",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="50vh"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
              linearGradient(gradients.dark.main, gradients.dark.state),
          }}
        />
        <Banner />
        <Information />
        <Features />
        <Testimonials />
        <Pricing />
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default DesktopApp;
