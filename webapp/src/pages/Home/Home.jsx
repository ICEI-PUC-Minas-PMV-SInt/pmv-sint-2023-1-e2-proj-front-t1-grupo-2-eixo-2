import { Card, CardHeader, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Header } from "../../components/Header";
function Home() {
  return (
    //<Box sx={{ flex: 1 }}>
    <Grid container p={2} spacing={2}>
      <Grid height={108} xs={12}>
        <Header />
      </Grid>
      <Grid height={400} xs={12}>
        <Typography>Banner Destaque</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography>Cards Destaque</Typography>
        <Grid container>
          <Grid height={250} xs={3}>
            <Card>
              <CardHeader title="Eventos" />
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card>
              <CardHeader title="Como Separar" />
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card>
              <CardHeader title="O Lixo" />
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card>
              <CardHeader title="Rotas de Coleta" />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid height={200} xs={12}>
        <Typography>Parceiros</Typography>
      </Grid>
      <Grid height={500} xs={12}>
        <Typography>Notícias</Typography>
        <Grid container>
          <Grid xs={4}>
            <Card>
              <CardHeader title="Notícia 1" />
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card>
              <CardHeader title="Notícia 2" />
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card>
              <CardHeader title="Notícia 3" />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid height={200} xs={12}>
        <Typography>Footer</Typography>
      </Grid>
    </Grid>
    //</Box>
  );
}

export { Home };
