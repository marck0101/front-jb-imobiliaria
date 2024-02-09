/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Rental page components
import FaqCollapse from "pages/LandingPages/Rental/components/FaqCollapse";

function Faq() {
  const [collapse, setCollapse] = useState(false);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <MKTypography variant="h2" align="center" fontWeight="bold" gutterBottom>
              Perguntas frequentes
            </MKTypography>
            <MKBox mb={2}>
              <MKTypography variant="body2" align="center" color="text">
                Muitas pessoas não apreciam o momento até que ele tenha passado.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={10}>
            <FaqCollapse
              title="Como faço para agendar uma visita?"
              open={collapse === 1}
              onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
            >
              <p>
                Para agendar uma visita aos imóveis disponíveis, simplificamos o processo para sua
                comodidade. Basta entrar em contato conosco utilizando uma das seguintes opções:
              </p>
              <br />
              <p>
                WhatsApp: Envie uma mensagem para o número 55 999234969. Nossa equipe estará pronta
                para auxiliá-lo no agendamento e fornecer informações adicionais.
              </p>
              <br />
              <p>
                Instagram: Visite nosso perfil no Instagram, @jbimobiliaria, e envie uma mensagem
                direta para solicitar o agendamento da visita. Estamos atentos e prontos para
                responder prontamente.
              </p>
              <br />
              <p>
                E-mail: Se preferir, você pode entrar em contato conosco através do e-mail
                jbtransacoesimobiliarias@gmail.com. Informe-nos sobre sua disponibilidade e
                interesse, e nossa equipe organizará a visita de acordo com suas preferências.
              </p>
              <br />
              <p>
                Estamos aqui para tornar a experiência de agendamento de visitas o mais fácil
                possível, proporcionando um atendimento personalizado e eficiente.
              </p>
            </FaqCollapse>
            <FaqCollapse
              title="Como posso fazer o pagamento?"
              open={collapse === 2}
              onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
            >
              <p>
                Oferecemos diversas opções de pagamento para atender às suas necessidades. Para a
                sua conveniência, aceitamos as seguintes formas de pagamento:
              </p>
              <br />
              <p>
                PIX: Realize pagamentos de forma rápida e segura através do PIX. Garantimos
                praticidade e eficiência para facilitar a transação financeira.
              </p>
              <br />

              <p>
                Boleto: Para quem prefere a comodidade de pagamento via boleto bancário,
                disponibilizamos essa opção. Basta seguir as instruções do boleto para efetuar o
                pagamento de maneira fácil e segura.
              </p>
              <br />

              <p>
                Estamos comprometidos em oferecer flexibilidade e opções variadas de pagamento,
                garantindo uma experiência transparente e conveniente para nossos clientes. Em caso
                de dúvidas ou necessidade de mais informações, nossa equipe de suporte está à
                disposição para ajudar.
              </p>
            </FaqCollapse>
            {/* <FaqCollapse
              title="How much time does it take to receive the order?"
              open={collapse === 3}
              onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
            >
              The time is now for it to be okay to be great. People in this world shun people for
              being great. For being a bright color. For standing out. But the time is now to be
              okay to be the greatest you. Would you believe in what you believe in, if you were the
              only one who believed it? If everything I did failed - which it doesn&apos;t, it
              actually succeeds - just the fact that I&apos;m willing to fail is an inspiration.
              People are so scared to lose that they don&apos;t even try. Like, one thing people
              can&apos;t say is that I&apos;m not trying, and I&apos;m not trying my hardest, and
              I&apos;m not trying to do the best way I know how.
            </FaqCollapse> */}
            {/* <FaqCollapse
              title="Can I resell the products?"
              open={collapse === 4}
              onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
            >
              I always felt like I could do anything. That&apos;s the main thing people are
              controlled by! Thoughts- their perception of themselves! They&apos;re slowed down by
              their perception of themselves. If you&apos;re taught you can&apos;t do anything, you
              won&apos;t do anything. I was taught I could do everything.
              <br />
              <br />
              If everything I did failed - which it doesn&apos;t, it actually succeeds - just the
              fact that I&apos;m willing to fail is an inspiration. People are so scared to lose
              that they don&apos;t even try. Like, one thing people can&apos;t say is that I&apos;m
              not trying, and I&apos;m not trying my hardest, and I&apos;m not trying to do the best
              way I know how.
            </FaqCollapse> */}
            <FaqCollapse
              title="Como cheegar até a Imobiliaria JB"
              open={collapse === 5}
              onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
            >
              Texto textoTexto texxto Texto textoTexto texxto Texto textoTexto texxtoTexto
              textoTexto texxto Texto textoTexto texxto. Texto textoTexto texxtoTexto textoTexto
              texxto Texto textoTexto texxtoTexto textoTexto texxtoTexto textoTexto texxto.
            </FaqCollapse>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Faq;
