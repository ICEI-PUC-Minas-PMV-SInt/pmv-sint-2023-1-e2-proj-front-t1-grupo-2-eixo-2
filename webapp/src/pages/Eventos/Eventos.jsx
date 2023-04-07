import { Box, Typography } from "@mui/material";
import { EventCard } from "./components/EventCard";

function Eventos() {
  return (
    <Box>
      <Typography variant="h2">CALENDÁRIO DE EVENTOS</Typography>
      <EventCard title={"Mutirão de Limpeza do Rio das Almas"}>
        Data: 07/05/2023 Hora: 09:00hs
      </EventCard>
    </Box>
  );
}
export { Eventos };
