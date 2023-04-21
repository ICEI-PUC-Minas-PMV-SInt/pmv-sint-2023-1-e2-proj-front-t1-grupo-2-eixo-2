import { Card, CardHeader, Typography, Grid } from "@mui/material";
import { Header } from "../../components/Header";
import {
  CardHomeEventos,
  CardHomeInfo,
  CardHomeReciclagem,
  CardHomeRotas,
} from "../../components/CardHome";

function Home() {
  return (
    <Grid container p={2} spacing={2}>
      <Grid item height={108} xs={12}>
        <Header />
      </Grid>
      <Grid item height={400} xs={12}>
        <Typography>Banner Destaque</Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="stretch"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          boxShadow: 0,
          border: 0,
          margin: 0,
          padding: "1 rem 1.5rem",
          borderRadius: 8,
          boxShadow: "0 0 0 0",
        }}
      >
        <Grid item sm={6} md={3}>
          <CardHomeEventos />
        </Grid>
        <Grid item sm={6} md={3}>
          <CardHomeReciclagem />
        </Grid>
        <Grid item sm={6} md={3}>
          <CardHomeInfo />
        </Grid>
        <Grid item sm={6} md={3}>
          <CardHomeRotas />
        </Grid>
      </Grid>
    <Grid item height={200} xs={12}>
        <Typography>Parceiros</Typography>
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
      <Grid item height={200} xs={12}>
        <Typography>Footer</Typography>
      </Grid>
    </Grid>
    //</Box>
  );
}

export { Home };
