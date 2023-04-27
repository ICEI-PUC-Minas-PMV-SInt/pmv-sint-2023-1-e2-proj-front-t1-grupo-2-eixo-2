import { Grid, List, ListItem, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "@mui/material/Link";
import logo from "../assets/logo-catapiri.png";

function Footer() {
  return (
    <Grid container bgcolor={"white"} padding={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5" color="secondary">
          Links Rápidos
        </Typography>
        <List>
          <ListItem>
            <Link href="/" color="inherit">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/artigo" color="inherit">
              O problema do Lixo
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/projeto" color="inherit">
              Sobre o Projeto
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/instrucoes" color="inherit">
              Como separar o Lixo
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/eventos" color="inherit">
              Calendários de eventos
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/noticias" color="inherit">
              Notícias
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h5"
          color="secondary"
          sx={{ marginInlineStart: 1 }}
        >
          Nossas Redes Sociais
        </Typography>
        <WhatsAppIcon
          onClick={() => window.open("https://wa.me/55XXXXXXXXXXX")}
          color="inherit"
          fontSize="large"
          sx={{ margin: 1 }}
        />
        <InstagramIcon
          onClick={() => window.open("https://www.instagram.com/pirirecicla/")}
          color="inherit"
          fontSize="large"
          sx={{ margin: 1 }}
        />
        <FacebookIcon
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100011348399319/"
            )
          }
          color="inherit"
          fontSize="large"
          sx={{ margin: 1 }}
        />
      </Grid>
      <Grid item xs={6} sm={12} md={4} textAlign="center">
        <img src={logo} alt="logo catapiri" height={200} />
      </Grid>
    </Grid>
  );
}

export { Footer };
