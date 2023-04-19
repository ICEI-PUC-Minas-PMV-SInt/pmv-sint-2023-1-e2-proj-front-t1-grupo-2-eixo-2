import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import IMGBANNER1 from "../../../assets/lixeiras-reciclaveis.png";
import IMGBANNER2 from "../../../assets/garota-e-lixo.png";
export function BannerDestaque() {
  return (
    <Carousel height={400}>
      <Paper
        sx={{
          backgroundImage: `url(${IMGBANNER1})`,
          height: 400,
          backgroundSize: "cover",
        }}
      >
        <h2>CONHEÇA O PROJETO CATAPIRI</h2>
        <Button>Conheça</Button>
      </Paper>
      <Paper
        sx={{
          backgroundImage: `url(${IMGBANNER2})`,
          height: 400,
          backgroundSize: "cover",
        }}
      >
        <h1>O Problema do Lixo</h1>
        <Button>Leia Artigo</Button>
      </Paper>
    </Carousel>
  );
}
