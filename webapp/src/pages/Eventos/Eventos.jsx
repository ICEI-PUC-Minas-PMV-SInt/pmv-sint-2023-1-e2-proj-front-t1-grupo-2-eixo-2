import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { EventCard } from "./components/EventCard";

function Eventos() {
  return (
    <Box p={8}>
      <Typography variant="h4">Calendário de Eventos</Typography>
      {/* Eventos Futuros */}
      <Grid2 container mt={5}>
        <Typography variant="h5">Eventos Futuros</Typography>
        <Grid2 mt={1.5} container spacing={4}>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              title={"Mutirão de Limpeza do Rio das Almas"}
              dataEvento={"29/04/2023"}
              horaEvento={"09:00hs"}
            ></EventCard>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              title={"Mutirão de Limpeza Cachoeira Andorinhas"}
              dataEvento={"02/05/2023"}
              horaEvento={"09:00hs"}
            ></EventCard>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              title={"Mutirão de Limpeza na Saída para Pirineus"}
              dataEvento={"19/06/2023"}
              horaEvento={"08:00hs"}
            ></EventCard>
          </Grid2>
        </Grid2>
      </Grid2>
      {/* Fim Eventos Futuros */}

      {/* Eventos Passados */}
      <Grid2 container mt={5}>
        <Typography variant="h5">Eventos Passados</Typography>
        <Grid2 mt={1.5} container spacing={4}>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              title={"Mutirão de Limpeza Cachoeira Andorinhas"}
              dataEvento={"17/02/2023"}
              horaEvento={"08:00hs"}
            ></EventCard>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              title={"Mutirão de Limpeza do Rio das Almas"}
              dataEvento={"03/08/2022"}
              horaEvento={"09:00hs"}
            ></EventCard>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              title={"Mutirão de Limpeza Cachoeira Andorinhas"}
              dataEvento={"19/07/2022"}
              horaEvento={"09:00hs"}
            ></EventCard>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              title={"Mutirão de Limpeza do Rio das Almas"}
              dataEvento={"03/05/2022"}
              horaEvento={"09:00hs"}
            ></EventCard>
          </Grid2>
        </Grid2>
      </Grid2>
      {/* Fim Eventos Passados */}
    </Box>
  );
}
export { Eventos };
