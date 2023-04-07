import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CARD_IMG from "../../../assets/mutirao-limpeza-parque.png";

function EventCard(props) {
  return (
    <Card>
      <CardMedia
        sx={{ p: 2 }}
        component={"img"}
        height="170"
        image={CARD_IMG}
      />
      <CardHeader
        sx={{ p: "0 1rem" }}
        titleTypographyProps={{ fontSize: "1rem" }}
        title={props.title}
      />
      <CardContent sx={{ py: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="caption">Data: {props.dataEvento}</Typography>
        <Typography variant="caption">Hora: {props.horaEvento}</Typography>
      </CardContent>
    </Card>
  );
}

export { EventCard };
