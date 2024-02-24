import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

const InfCard = () => {

  const navigate = useNavigate();

  const voltar = () => {
    navigate("/");
  };
  

  
  return (
    <>
      <MKBox component="section" py={3}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 3 }}>

            <Grid item xs={12} md={6} lg={4}>
              <div>teste</div>
              <MKButton variant="gradient" color="info" onClick={() => voltar()}>
              Voltar
            </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
};
export default InfCard;
