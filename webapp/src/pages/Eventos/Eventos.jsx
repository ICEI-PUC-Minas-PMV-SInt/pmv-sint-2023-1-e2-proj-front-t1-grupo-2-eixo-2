import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { EventCard } from "./components/EventCard";
import IMG_RIO_ALMAS from "../../assets/rio-das-almas.png";
import IMG_CACHOEIRA from "../../assets/cachoeira-andorinhas.png";
import IMG_PIRINEUS from "../../assets/mutirao-limpeza-parque.png";
import { eventList } from "./mockDb";

function Eventos() {
  return (
    <Box p={8}>
      <Typography variant="h4">Calendário de Eventos</Typography>
      {/* Eventos Futuros */}
      <Grid2 container mt={5}>
        <Typography variant="h5">Eventos Futuros</Typography>
        <Grid2 mt={1.5} container spacing={4}>
          {eventList.map((event) => (
            <Grid2 xs={12} sm={6} md={3}>
              <EventCard
                img={IMG_RIO_ALMAS}
                title={event.title}
                eventDate={event.eventDate}
                eventTime={event.eventTime}
                moreInfo={event.moreInfo}
              ></EventCard>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
      {/* Fim Eventos Futuros */}

      {/* Eventos Passados */}
      <Grid2 container mt={5}>
        <Typography variant="h5">Eventos Passados</Typography>
        <Grid2 mt={1.5} container spacing={4}>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              img={IMG_CACHOEIRA}
              title={"Mutirão de Limpeza Cachoeira Andorinhas"}
              eventDate={"17/02/2023"}
              eventTime={"08:00hs"}
              moreInfo={
                "Informações adicionais sobre o Evento, local de encontro, duração, o que levar, etc."
              }
            ></EventCard>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              img={IMG_RIO_ALMAS}
              title={"Mutirão de Limpeza do Rio das Almas"}
              eventDate={"03/08/2022"}
              eventTime={"09:00hs"}
              moreInfo={
                "Informações adicionais sobre o Evento, local de encontro, duração, o que levar, etc."
              }
            ></EventCard>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              img={IMG_CACHOEIRA}
              title={"Mutirão de Limpeza Cachoeira Andorinhas"}
              eventDate={"19/07/2022"}
              eventTime={"09:00hs"}
              moreInfo={
                "Informações adicionais sobre o Evento, local de encontro, duração, o que levar, etc."
              }
            ></EventCard>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <EventCard
              img={IMG_RIO_ALMAS}
              title={"Mutirão de Limpeza do Rio das Almas"}
              eventDate={"03/05/2022"}
              eventTime={"09:00hs"}
              moreInfo={
                "Informações adicionais sobre o Evento, local de encontro, duração, o que levar, etc."
              }
            ></EventCard>
          </Grid2>
        </Grid2>
      </Grid2>
      {/* Fim Eventos Passados */}
    </Box>
  );
}
export { Eventos };
