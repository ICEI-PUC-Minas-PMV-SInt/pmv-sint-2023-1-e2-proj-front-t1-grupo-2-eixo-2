import { Typography, Grid } from "@mui/material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BannerArtigo } from "./Components/BannerArtigo";

function Artigo() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} bgcolor={"white"}>
        <Header />
        <BannerArtigo/>
        <grid item xs={12}
        sx={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
        padding: 1,
      }} 
      > </grid>
      <Typography variant="h4" xs={12} padding={4}>
        O problema do Lixo </Typography>
        <Typography variant="body1" xs={12} p={4}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus, sed ipsam assumenda dignissimos, cum exercitationem at expedita atque rerum molestias recusandae? Facilis et ea repellat dignissimos, voluptates omnis. Quibusdam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi amet fuga at illo doloribus et, maiores perferendis deserunt quis nihil! Ea quos id repellat aut cupiditate, dolorum exercitationem fugit? <> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam non modi, aperiam quae amet debitis autem itaque nostrum officiis quam laudantium odio quibusdam deserunt, laboriosam ratione ipsa? Repellat, eligendi magni? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate distinctio illo reprehenderit iusto autem nihil ea totam ut dolorum quo alias debitis veniam ad similique corporis commodi quaerat, saepe ipsa.</></Typography>
        <Typography variant="body1" xs={12} p={4}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum praesentium ratione nisi vel doloremque excepturi, illo ipsam, velit soluta voluptas ipsum nesciunt provident modi, nam sequi optio iure! Vel, esse! <> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eum nobis hic nisi, autem assumenda possimus est tempora doloribus expedita dolorum, voluptates ipsa animi cupiditate inventore eos nulla, quidem mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quis, dolorum laborum quidem iure at maxime praesentium quibusdam repellat nisi provident, nostrum labore, voluptatibus animi facilis laudantium. Commodi, harum facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate repudiandae iure, rem voluptates laborum fugiat obcaecati. Ullam quam nihil natus amet quas ut dolores? Numquam possimus hic quasi exercitationem dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quisquam fugit magni, numquam aperiam quo sint dolorem, ex hic amet nesciunt repudiandae! Natus impedit reprehenderit quae voluptatum explicabo nisi sunt.</> </Typography>
      </Grid>
      <Footer />
    </Grid>
  );
}

 export {Artigo}