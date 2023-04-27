import { Card, CardHeader, Typography, Grid } from "@mui/material";
import { Header } from "../../components/Header";
import { BannerDestaque } from "./components/BannerDestaque";
import { CardsHome } from "../../components/CardHome";
import { Footer } from "../../components/Footer";
import { Parceiros } from "../../components/Parceiros";

function Home() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item height={108} xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <BannerDestaque />
      </Grid>
      <Grid item xs={12}>
        <CardsHome />
      </Grid>
      <Grid item xs={12}>
        <Parceiros />
      </Grid>

      <Grid item height={500} xs={12}>
        <Typography>Notícias</Typography>
        <Grid container>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Notícia 1" />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Notícia 2" />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Notícia 3" />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

export { Home };
