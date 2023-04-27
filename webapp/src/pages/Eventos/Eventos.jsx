import { Box, Typography, Grid } from "@mui/material";
import { EventCard } from "./components/EventCard";
import { eventList, pastEventsList } from "./mockDb";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

function Eventos() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item height={108} xs={12} bgcolor={"white"}>
        <Header />
      </Grid>
      <Box p={8}>
        <Typography variant="h4">Calendário de Eventos</Typography>
        {/* Eventos Futuros */}
        <Grid container mt={5}>
          <Typography variant="h5">Eventos Futuros</Typography>
          <Grid mt={1.5} container spacing={4}>
            {eventList.map((event) => (
              <Grid item xs={12} sm={6} md={3}>
                <EventCard
                  img={event.img}
                  title={event.title}
                  eventDate={event.eventDate}
                  eventTime={event.eventTime}
                  moreInfo={event.moreInfo}
                ></EventCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Fim Eventos Futuros */}

        {/* Eventos Passados */}
        <Grid container mt={5}>
          <Typography variant="h5">Eventos Passados</Typography>
          <Grid mt={1.5} container spacing={4}>
            {pastEventsList.map((event) => (
              <Grid item xs={12} sm={6} md={3}>
                <EventCard
                  img={event.img}
                  title={event.title}
                  eventDate={event.eventDate}
                  eventTime={event.eventTime}
                  moreInfo={event.moreInfo}
                ></EventCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Fim Eventos Passados */}
      </Box>
      <Grid item height={500} xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
export { Eventos };
