import { Grid, Card, Box, CardContent } from "@mui/material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import RecyclingIcon from "@mui/icons-material/Recycling";
import separar from "../../assets/separar.jpeg";
import lixoseparado from "../../assets/lixoseparado.png";
import catador from "../../assets/catador.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Instrucoes() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Card>
        <Header />

        <CardMedia
          component="img"
          height="400"
          image={separar}
          alt="Imagem da notícia principal"
        />
      </Card>

      <Box width="100%" display="flex" justifyContent="center" flexWrap="wrap">
        <Box width="300px" padding=".7em">
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "1em",
            }}
          >
            <RecyclingIcon fontSize="large" color="#222" />
            <CardContent>
              <Typography variant="h6" textAlign="center" paddingBottom=".5em">
                Separe recicláveis dos orgânicos 
              </Typography>
              <Typography variant="body2" textAlign="center">
                Separe os materiais recicláveis dos orgânicos: Certifique-se de
                não misturar os resíduos recicláveis, como plásticos, vidros,
                metais e papéis, com os resíduos orgânicos, como sobras de
                alimentos, cascas de frutas e legumes. Coloque esses dois tipos
                de resíduos em sacos separados.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box width="300px" padding=".7em">
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "1em",
            }}
          >
            <RecyclingIcon fontSize="large" color="#222" />
            <CardContent>
              <Typography variant="h6" textAlign="center" paddingBottom=".5em">
                Limpe e seque as embalagens recicláveis
              </Typography>
              <Typography variant="body2" textAlign="center">
                Limpe e seque as embalagens recicláveis: Antes de descartar as
                embalagens do tipo longa vida, latas, garrafas e frascos de
                vidro e plástico, lave-os para remover quaisquer resíduos. Em
                seguida, certifique-se de secá-los completamente antes de
                depositá-los nos coletores específicos para recicláveis.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box width="300px" padding=".7em">
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "1em",
            }}
          >
            <RecyclingIcon fontSize="large" color="#222" />
            <CardContent>
              <Typography variant="h6" textAlign="center" paddingBottom=".5em">
                Mantenha os papéis secos e desamassados
              </Typography>
              <Typography variant="body2" textAlign="center">
                Cuide dos papéis: Certifique-se de que os papéis estejam secos
                antes de descartá-los. Embora possam ser dobrados para
                economizar espaço, evite amassá-los, pois isso pode dificultar o
                processo de reciclagem. Mantenha-os em boas condições para
                garantir uma reciclagem eficiente.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Grid xs={12} sm={10} md={12}>
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap="1em"
          padding="2em  1em"
        >
          <Box width={matches ? "95%" : "30%"}>
            <img
              width="100%"
              src={lixoseparado}
              alt=" Reciclagem"
              title="Reciclagem"
            />
          </Box>
          <Box width={matches ? "100%" : "47%"}>
            <Typography variant="h5">
              {" "}
              A importância da separação de lixo{" "}
            </Typography>
            <Typography>
              A separação adequada do lixo e a prática da reciclagem são
              fundamentais para a preservação do meio ambiente. Ao separarmos os
              resíduos em categorias específicas, como papel, plástico, vidro e
              metal, podemos direcioná-los para os processos de reciclagem
              apropriados. Isso permite a redução do consumo de recursos
              naturais e a diminuição da quantidade de resíduos destinados aos
              aterros sanitários.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid xs={12} sm={10} md={12}>
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap="1em"
          padding="2em  1em"
        >
          <Box width={matches ? "100%" : "47%"}>
            <Typography variant="h5">
              {" "}
              Catadores: Parceiros essenciais{" "}
            </Typography>
            <Typography>
              A reciclagem contribui para a economia circular, em que os
              materiais são reutilizados repetidamente, reduzindo o desperdício
              e o impacto ambiental. Além disso, a separação correta do lixo
              facilita o trabalho dos catadores e cooperativas de reciclagem,
              que desempenham um papel crucial na coleta e recuperação dos
              resíduos.
            </Typography>
          </Box>
          <Box width={matches ? "95%" : "30%"}>
            <img
              width="100%"
              src={catador}
              alt=" Reciclagem"
              title="Reciclagem"
            />
          </Box>
        </Box>
      </Grid>

      <Footer />
    </div>
  );
}

export { Instrucoes };
