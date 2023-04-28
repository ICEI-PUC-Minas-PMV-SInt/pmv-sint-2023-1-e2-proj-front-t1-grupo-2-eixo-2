import React from "react";
import { Grid, Typography } from "@mui/material";

function MapaColeta() {
  return (
    <Grid container>
      <Grid item xs={12} p={2} marginLeft={2}>
        <Typography variant="h4">Mapa dos Pontos de Coleta Seletiva</Typography>
        <Typography variant="p">
          Em verde claro, pontos de coleta de vidros. <br /> Em verde escuro,
          pontos de coleta de recicláveis.
        </Typography>
      </Grid>
      <Grid
        item
        height={400}
        padding={2}
        xs={12}
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "400px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          marginTop: "-10px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1DSrU6nH4_n-D_t8ZepMEsv-8aNTPLHg&ehbc=2E312F"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Grid>
    </Grid>
  );
}

export { MapaColeta };
