import { Card, CardHeader, Typography, Grid } from "@mui/material";
import { Header } from "../../components/Header";
import { DestaquesHome } from "../../components/CardHome";

function Home() {
  return (
    <Grid container p={2} spacing={2}>
      <Grid item height={108} xs={12}>
        <Header />
      </Grid>
      <Grid item height={400} xs={12}>
        <Typography>Banner Destaque</Typography>
      </Grid>
      <DestaquesHome />
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
