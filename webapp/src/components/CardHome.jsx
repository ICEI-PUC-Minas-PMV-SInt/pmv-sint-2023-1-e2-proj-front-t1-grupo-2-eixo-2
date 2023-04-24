import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import iconEventos from "../assets/icon-eventos.png";
import iconReciclagem from "../assets/icon-reciclagem.png";
import iconRotas from "../assets/icon-rotas.png";
import iconInfo from "../assets/icon-info.png";

function CardHomeEventos() {
  return (
    <CardActionArea href="/eventos">
      <Card
        sx={{
          maxWidth: 345,
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
            marginBottom: 2,
          }}
          component="img"
          image={iconEventos}
          alt="logo eventos"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Calendário de Eventos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fique por dentro de todos os eventos realizados pelo projeto
            catapiri
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
          maxWidth: 345,
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
            marginBottom: 2,
          }}
          component="img"
          image={iconReciclagem}
          alt="logo reciclagem"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Saiba como Separar{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descubra a forma ideal de separar e descartar o seu lixo
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
          maxWidth: 345,
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
            marginBottom: 2,
          }}
          component="img"
          image={iconInfo}
          alt="logo info"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            O Problema do Lixo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Saiba o motivo do projeto catapiri existir e como o lixo tem um
            impacto enorme
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
          maxWidth: 345,
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
            marginBottom: 2,
          }}
          component="img"
          image={iconRotas}
          alt="logo rotas"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Rotas de Coleta{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Veja as rotas de coleta que o projeto catapiri abrange na sua região
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
export { CardHomeEventos, CardHomeReciclagem, CardHomeInfo, CardHomeRotas };
