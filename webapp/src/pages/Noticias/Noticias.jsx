import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';



function Noticias() {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image="/caminho/para/imagem.jpg"
          alt="Imagem da notícia principal"
        />
        <CardContent>
          <Typography variant="h2" component="h2">
            Título da Notícia Principal
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Conteúdo da notícia principal
          </Typography>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="caminho/para/imagem.jpg"
              alt="Imagem da notícia 1"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Título da Notícia 1
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Conteúdo da notícia 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="caminho/para/imagem.jpg"
              alt="Imagem da notícia 2"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Título da Notícia 2
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Conteúdo da notícia 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="caminho/para/imagem.jpg"
              alt="Imagem da notícia 3"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Título da Notícia 3
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Conteúdo da notícia 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="caminho/para/imagem.jpg"
              alt="Imagem da notícia 4"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Título da Notícia 4
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Conteúdo da notícia 4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export { Noticias };
