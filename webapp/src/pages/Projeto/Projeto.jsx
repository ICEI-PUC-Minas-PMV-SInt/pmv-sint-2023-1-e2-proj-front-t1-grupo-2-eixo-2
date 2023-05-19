import { Box, Typography, Grid } from "@mui/material";
import lixeirasreciclaveis from "../../assets/garrafa-plastica-parque.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum luctus rhoncus. Curabitur nec vulputate elit. Mauris tempus mattis nulla nec tempor. Donec vitae odio eu quam suscipit posuere. Phasellus sed nulla suscipit lectus gravida lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed varius felis vitae ipsum dapibus, ac hendrerit tellus laoreet. In tellus erat, fermentum ac velit imperdiet, posuere egestas ipsum..`;

function Projeto() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} bgcolor={"white"}>
        <Header />
        <Box p={8} sx={{ display: "flex" }}>
          <Box component="div" style={{ marginRight: 50 }}>
            <Typography variant="h4" style={{ marginBottom: 10 }}>
              O Projeto Catapiri
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </Box>
          <Box component="div">
            <img
              src={lixeirasreciclaveis}
              alt=""
              style={{
                display: "flex",
                objectFit: "cover",
                width: 400,
                height: 400,
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Footer />
    </Grid>
  );
}

export { Projeto };
