import { Card, CardHeader, Typography, Grid } from "@mui/material";
import { Header } from "../../components/Header";
import { CardsHome } from "../../components/CardHome";
import { Footer } from "../../components/Footer";
import { Parceiros } from "../../components/Parceiros";

function Home() {
  return (
    <Grid container justifyContent="center" alignItems="center" padding={2}>
      <Grid item height={108} xs={12}>
        <Header />
      </Grid>
      <Grid item height={400} xs={12}>
        <Typography>Banner Destaque</Typography>
      </Grid>
      <CardsHome />
      <Parceiros />
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
    //</Box>
  );
}

export { Home };
