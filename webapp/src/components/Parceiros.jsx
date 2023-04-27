import { Grid, Link, Typography } from "@mui/material";
import logoPiriRecicla from "../assets/logo-pirirecicla.png";
import logoCoepi from "../assets/logo-coepi.png";
import logoIdec from "../assets/logo-idec.png";
import logoGaw from "../assets/logo-GAW.png";
import logoPrefeitura from "../assets/logo-prefeitura-sec-meio-ambiente.jpeg";

function Parceiros() {
  return (
    <Grid container bgcolor={"white"} padding={3}>
      <Typography variant="h5" marginBottom={3}>
        Parceiros
      </Typography>
      <Grid
        container
        padding={0}
        marginLeft={2}
        spacing={0}
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Grid
          item
          height={100}
          lg={1.5}
          md={2}
          sm={3}
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="          https://www.instagram.com/pirirecicla/"
            target="_blank"
            rel="noopener"
          >
            <img src={logoPiriRecicla} alt="logo PiriRecicla" height={75} />
          </Link>
        </Grid>
        <Grid
          item
          height={100}
          lg={3.4}
          md={5}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="https://coepi.org.br/" target="_blank" rel="noopener">
            <img src={logoCoepi} alt="logo PiriCoepi" height={75} />
          </Link>
        </Grid>
        <Grid
          item
          height={100}
          lg={1.8}
          md={3}
          sm={3}
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="https://idec.org.br/" target="_blank" rel="noopener">
            <img src={logoIdec} alt="logo Idec" height={75} />
          </Link>
        </Grid>
        <Grid
          item
          height={100}
          lg={1.3}
          md={2}
          sm={4}
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="https://greenactionweek.org/"
            target="_blank"
            rel="noopener"
          >
            <img src={logoGaw} alt="logo GAW" height={75} />
          </Link>
        </Grid>
        <Grid
          item
          height={100}
          lg={4}
          md={6}
          sm={8}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="https://pirenopolis.go.gov.br/category/meio-ambiente-e-urbanismo/"
            target="_blank"
            rel="noopener"
          >
            <img
              src={logoPrefeitura}
              alt="logo Prefeitura de Pirenópolis"
              height={40}
              style={{ marginTop: 20 }}
            />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export { Parceiros };
