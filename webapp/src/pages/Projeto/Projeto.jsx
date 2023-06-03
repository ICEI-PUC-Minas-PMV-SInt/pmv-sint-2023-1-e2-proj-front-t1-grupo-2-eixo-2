import { Box, Typography, Grid } from "@mui/material";
import lixeirasreciclaveis from "../../assets/garrafa-plastica-parque.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const text = `A Associação de Catadores de Materiais Recicláveis de Pirenópolis - CATAPIRI foi fundada em 2013. Atualmente possui cerca de 20 associados, que trabalham com a coleta, separação e destinação de materiais recicláveis. O galpão da CATAPIRI, sede da Associação, está localizada no antigo lixão de Pirenópolis, às margens da GO 431. 

Os catadores da CATAPIRI são quem realizam a coleta seletiva no município, implementada pela Prefeitura em 2021. Além disso, oferecem palestras sobre separação de resíduos para estabelecimentos, e também ofertam o serviço de coleta e separação de resíduos em eventos.`;

function Projeto() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} bgcolor={"white"}>
        <Header />
        <Box p={8} sx={{ display: "flex" }}>
          <Box component="div" style={{ marginRight: 50 }}>
            <Typography variant="h4" style={{ marginBottom: 10 }}>
              O Projeto Catapiri
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </Box>
          <Box component="div">
            <img
              src={lixeirasreciclaveis}
              alt=""
              style={{
                display: "flex",
                objectFit: "cover",
                width: 400,
                height: 400,
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Footer />
    </Grid>
  );
}

export { Projeto };
