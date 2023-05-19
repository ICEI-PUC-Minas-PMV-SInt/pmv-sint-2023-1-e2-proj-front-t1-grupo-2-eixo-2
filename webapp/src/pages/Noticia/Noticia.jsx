import { Box, Typography, Grid } from "@mui/material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import lixeirasreciclaveis from "../../assets/garrafa-plastica-parque.png";
import imagen01 from "../../assets/imagen01.jpg";
import reduzida from "../../assets/reduzida.jpg";
import iniciativa from "../../assets/iniciativa.jpg";
import empresa from "../../assets/empresa.jpg";
import escola from "../../assets/escola.jpg";

const bodyNoticia = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Vivamus interdum luctus rhoncus. 
 Curabitur nec vulputate elit. Mauris tempus mattis nulla nec tempor. Donec vitae odio eu quam suscipit posuere. 
 Phasellus sed nulla suscipit lectus gravida lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
 Sed varius felis vitae ipsum dapibus, ac hendrerit tellus laoreet. In tellus erat, fermentum ac velit imperdiet, posuere egestas ipsum.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Vivamus interdum luctus rhoncus. 
 Curabitur nec vulputate elit. Mauris tempus mattis nulla nec tempor. Donec vitae odio eu quam suscipit posuere. 
 Phasellus sed nulla suscipit lectus gravida lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
 Sed varius felis vitae ipsum dapibus, ac hendrerit tellus laoreet. In tellus erat, fermentum ac velit imperdiet, posuere egestas ipsum.`;
const title = "Titulo da noticia";
const subtitle = "Subtitulo da noticia";

const noticiasCard = [
  {
    titulo:
      "Comunidade se une em prol da reciclagem e transforma resíduos em arte",
    imagem: imagen01,
    conteudo: "Conteúdo da notícia principal",
    link: "link-da-noticia-1",
  },
  {
    titulo:
      "Cidade implementa programa de reciclagem e reduzirá emissão de resíduos",
    imagem: reduzida,
    conteudo:
      "A cidade XYZ anunciou o lançamento de um programa abrangente de reciclagem...",
    link: "link-da-noticia-2",
  },
  {
    titulo:
      "Iniciativa de reciclagem transforma resíduos em materiais de construção",
    imagem: iniciativa,
    conteudo:
      "Uma nova iniciativa de reciclagem está transformando resíduos em recursos valiosos...",
    link: "link-da-noticia-3",
  },
  {
    titulo:
      "Empresa lança programa de coleta de eletrônicos para reciclagem ...",
    imagem: empresa,
    conteudo:
      "Uma empresa líder em tecnologia anunciou o lançamento de um programa de coleta de eletrônicos...",
    link: "link-da-noticia-4",
  },
  {
    titulo:
      "Estudantes promovem campanha de conscientização sobre reciclagem nas esco...",
    imagem: escola,
    conteudo:
      "Um grupo de estudantes entusiasmados está fazendo a diferença na comunidade por meio de uma campanha...",
    link: "link-da-noticia-5",
  },
];

function Noticia() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} bgcolor={"white"}>
        <Header />
        <Box p={8}>
          <Box sx={{ paddingBottom: 3 }}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
          </Box>
          <Box sx={{ paddingBottom: 3, height: "40vh", width: "100vh" }}>
            <img
              src={lixeirasreciclaveis}
              alt="Foto com uma garrafa sendo reciclada"
              style={{
                display: "flex",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Typography variant="body1" color="textSecondary">
            {bodyNoticia}
          </Typography>
          <Box sx={{ paddingTop: 3 }}>
            <Typography variant="h6" sx={{ paddingBottom: 3 }}>
              Leia mais
            </Typography>
            <Grid container spacing={2}>
              {noticiasCard.slice(1).map((noticia, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
                    <CardActionArea>
                      <a
                        href={noticia.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <CardMedia
                          component="img"
                          height="200"
                          image={noticia.imagem}
                          alt={`Imagem da notícia ${index + 1}`}
                        />
                      </a>
                      <CardContent>
                        <Typography variant="h6" component="h2">
                          {noticia.titulo}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {noticia.conteudo}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Footer />
    </Grid>
  );
}
export { Noticia };
