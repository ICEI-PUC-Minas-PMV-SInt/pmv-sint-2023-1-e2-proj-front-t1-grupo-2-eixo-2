import { Card, CardHeader, Typography, Grid } from "@mui/material";
import { Header } from "../../components/Header";
import { BannerDestaque } from "./components/BannerDestaque";
import { CardsHome } from "./components/CardHome";
import { Footer } from "../../components/Footer";
import { Parceiros } from "./components/Parceiros";
import { GenericCard } from "../../components/GenericCard";
import IMGNEWS from "../../assets/reduzida.jpg";
import IMGNEWS2 from "../../assets/empresa.jpg";
import IMGNEWS3 from "../../assets/escola.jpg";

function Home() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <BannerDestaque />
      </Grid>
      <Grid p={2} item xs={12}>
        <CardsHome />
      </Grid>
      <Grid item xs={12}>
        <Parceiros />
      </Grid>

      <Grid item xs={12} padding={3}>
        <Typography variant="h5" marginBottom={3}>
          Notícias
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <GenericCard
              cardImg={IMGNEWS}
              cardTitle="Cidade implementa programa de reciclagem e reduzirá emissões."
              cardText="A cidade XYZ anunciou o lançamento de um programa abrangente de reciclagem..."
            />
          </Grid>
          <Grid item xs={4}>
            <GenericCard
              cardImg={IMGNEWS2}
              cardTitle="Empresa lança programa de coleta de eletrônicos para reciclagem."
              cardText="Uma empresa líder em tecnologia anunciou o lançamento de programa de coleta de eletrônicos..."
            />
          </Grid>
          <Grid item xs={4}>
            <GenericCard
              cardImg={IMGNEWS3}
              cardTitle="Estudantes promovem campanha de conscientização sobre reciclagem nas escolas."
              cardText="Um grupo de estudantes entusiasmados está fazendo a diferença na comunidade..."
            />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

export { Home };
