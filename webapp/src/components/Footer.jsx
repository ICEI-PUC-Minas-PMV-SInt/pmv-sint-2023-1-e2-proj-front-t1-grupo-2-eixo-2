import { Grid, List, ListItem, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Links Rápidos</Typography>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>O problema do Lixo</ListItem>
            <ListItem>Sobre o Projeto</ListItem>
            <ListItem>Como separar o Lixo</ListItem>
            <ListItem>Calendários de eventos</ListItem>
            <ListItem>Notícias</ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography>Nossas Redes Sociais</Typography>
          <LinkedInIcon color="secondary" fontSize="large" />
          <FacebookIcon color="secondary" fontSize="large" />
          <InstagramIcon color="secondary" fontSize="large" />
          <WhatsAppIcon color="secondary" fontSize="large" />
        </Grid>
        <Grid item xs={12} sm={3} textAlign={"end"}>
          Logo
        </Grid>
      </Grid>
    </>
  );
}

export { Footer };
