import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import iconEventos from "../assets/icon-eventos.png";
import iconReciclagem from "../assets/icon-reciclagem.png";
import iconRotas from "../assets/icon-rotas.png";
import iconInfo from "../assets/icon-info.png";

function CardHomeEventos() {
  return (
    <CardActionArea href="/eventos">
      <Card
        sx={{
          boxShadow: 0,
          backgroundColor: "inherit",
        }}
      >
        <CardMedia
          sx={{
            height: 64,
            width: 64,
            margin: "auto",
            marginTop: 2,
          }}
          component="img"
          image={iconEventos}
          alt="logo eventos"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            Calendário de Eventos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fique por dentro de todos os eventos realizados pelo Projeto
            Catapiri.
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

function CardHomeReciclagem() {
  return (
    <CardActionArea href="/instrucoes">
      <Card
        sx={{
          boxShadow: 0,
          backgroundColor: "inherit",
        }}
      >
        <CardMedia
          sx={{
            height: 64,
            width: 64,
            margin: "auto",
            marginTop: 2,
          }}
          component="img"
          image={iconReciclagem}
          alt="logo reciclagem"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            Saiba como Separar{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descubra a forma correta de separar e descartar o seu lixo.
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

function CardHomeInfo() {
  return (
    <CardActionArea href="/projeto">
      <Card
        sx={{
          boxShadow: 0,
          backgroundColor: "inherit",
        }}
      >
        <CardMedia
          sx={{
            height: 64,
            width: 64,
            margin: "auto",
            marginTop: 2,
          }}
          component="img"
          image={iconInfo}
          alt="logo info"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            O Problema do Lixo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Saiba o motivo do Projeto Catapiri existir e como o lixo tem um
            impacto enorme.
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

function CardHomeRotas() {
  return (
    <CardActionArea href="/coleta">
      <Card
        sx={{
          boxShadow: 0,
          backgroundColor: "inherit",
        }}
      >
        <CardMedia
          sx={{
            height: 64,
            width: 64,
            margin: "auto",
            marginTop: 2,
          }}
          component="img"
          image={iconRotas}
          alt="logo rotas"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            Rotas de Coleta{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Veja as rotas de coleta que o projeto catapiri abrange na sua
            região.
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

function CardsHome() {
  return (
    <Grid container spacing={2}>
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
  );
}

export { CardsHome };
