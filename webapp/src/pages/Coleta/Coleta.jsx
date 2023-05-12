import { Grid, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MapaColeta } from "./components/MapaColeta";
import { DiaEntregaCard, DiaSemEntregaCard } from "./components/CardDiasColeta";

//função para criar a página de coleta, incluindo o mapa e os dias da semana
function Coleta() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} bgcolor="white">
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" xs={12} p={3}>
          Coleta Seletiva em Pirenópolis / Goiás
        </Typography>
      </Grid>

      <Grid item xs={12} bgcolor="white">
        <MapaColeta />
      </Grid>

      <Grid item xs={12} p={3}>
        <Typography variant="h4">Horários da Coleta Seletiva</Typography>
      </Grid>
      <Grid
        container
        spacing={0}
        marginBottom={4}
        direction="row"
        justifyContent="space-evenly"
        alignItems="baseline"
        bgcolor="inherit"
      >
        <DiaEntregaCard
          dia={"Segunda-feira"}
          horarioInicio={"7"}
          horarioFim={"12"}
        />
        <DiaSemEntregaCard dia={"Terça-feira"} />
        <DiaEntregaCard
          dia={"Quarta-feira"}
          horarioInicio={"7"}
          horarioFim={"12"}
        />
        <DiaSemEntregaCard dia={"Quinta-feira"} />
        <DiaEntregaCard
          dia={"Sexta-feira"}
          horarioInicio={"7"}
          horarioFim={"12"}
        />
        <DiaSemEntregaCard dia={"Sábado"} />
        <DiaSemEntregaCard dia={"Domingo"} />
      </Grid>
      <Footer />
    </Grid>
  );
}

export { Coleta };
