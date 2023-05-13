import React from 'react';
import Typography from '@mui/material/Typography';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import imagen01 from '../../assets/imagen01.jpg';
import reduzida from '../../assets/reduzida.jpg';
import iniciativa from '../../assets/iniciativa.jpg';
import empresa from '../../assets/empresa.jpg';
import escola from '../../assets/escola.jpg';






function Noticias() {
  // Array de notícias
  const noticias = [
    {
      titulo: 'Comunidade se une em prol da reciclagem e transforma resíduos em arte',
      imagem:  imagen01,
      conteudo: 'Conteúdo da notícia principal',
    },
    {
      titulo: 'Cidade implementa programa de reciclagem e reduzirá emissão de resíduos',
      imagem: reduzida,
      conteudo: 'A cidade XYZ anunciou o lançamento de um programa abrangente de reciclagem...',
    },
    {
      titulo: 'Iniciativa de reciclagem transforma resíduos em materiais de construção',
      imagem: iniciativa,
      conteudo: 'Uma nova iniciativa de reciclagem está transformando resíduos em recursos valiosos...',
    },
    {
      titulo: 'Empresa lança programa de coleta de eletrônicos para reciclagem ...',
      imagem: empresa,
      conteudo: 'Uma empresa líder em tecnologia anunciou o lançamento de um programa de coleta de eletrônicos...',
    },
    {
      titulo: 'Estudantes promovem campanha de conscientização sobre reciclagem nas esco...',
      imagem: escola,
      conteudo: 'Um grupo de estudantes entusiasmados está fazendo a diferença na comunidade por meio de uma campanha...',
    },
  ];

  return (
    <div>
      <Card>
      <Header />

        <CardMedia
          component="img"
          height="400"
          image={noticias[0].imagem}
          alt="Imagem da notícia principal"
        />
        <CardContent>
          <Typography variant="h2" component="h2">
            {noticias[0].titulo}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {noticias[0].conteudo}
          </Typography>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        {noticias.slice(1).map((noticia, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={noticia.imagem}
                alt={`Imagem da notícia ${index + 1}`}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {noticia.titulo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {noticia.conteudo}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />

    </div>
  );
}

export { Noticias };
