import { Button, Link, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import IMGBANNER1 from "../../../assets/lixeiras-reciclaveis1.png";
import IMGBANNER2 from "../../../assets/aterro.png";

export function BannerDestaque() {
  return (
    <Carousel height={400}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          justifyContent: "center",
          padding: 6,
          backgroundImage: `url(${IMGBANNER1})`,
          height: 400,
          backgroundSize: "cover",
        }}
      >
        <Button color="primary" variant="contained">
          <Link href="/projeto" target="_self" color="inherit" underline="none">
            <Typography color="white" variant="h5">
              CONHEÇA O PROJETO CATAPIRI
            </Typography>
          </Link>
        </Button>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
          padding: 6,
          backgroundImage: `url(${IMGBANNER2})`,
          height: 400,
          backgroundSize: "cover",
        }}
      >
        <Button color="primary" variant="contained">
          <Link href="/artigo" target="_self" underline="none">
            <Typography color="white" variant="h5">
              Artigo: O Problema do Lixo{" "}
            </Typography>
          </Link>
        </Button>
      </Paper>
    </Carousel>
  );
}
