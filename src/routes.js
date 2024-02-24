// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import Rental from "layouts/pages/landing-pages/rental";

// Account
import SignInBasicPage from "layouts/authentication/sign-in/basic";
import InfCard from "pages/LandingPages/Rental/infCard";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Navegação",
        collapse: [
          {
            name: "Menu",
            route: "/",
            component: <Rental />,
          },
        ],
      },
    ],
  },
  {
    name: "Conta",
    icon: <Icon>contacts</Icon>,
    collapse: [
      {
        name: "sign in",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasicPage />,
          },
        ],
      },
    ],
  },

];
export default routes;
