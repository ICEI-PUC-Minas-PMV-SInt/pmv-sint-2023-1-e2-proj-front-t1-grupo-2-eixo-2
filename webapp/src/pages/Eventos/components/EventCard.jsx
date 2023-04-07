import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

function EventCard(props) {
  return (
    <Card>
      <CardMedia component={"img"} height="170" image="/" />
      <CardHeader title={props.title} />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}

export { EventCard };
