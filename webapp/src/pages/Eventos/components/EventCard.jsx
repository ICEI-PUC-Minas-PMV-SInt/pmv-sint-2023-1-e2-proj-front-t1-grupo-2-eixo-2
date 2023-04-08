import { ExpandMore, MoreVert } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function EventCard(props) {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const handleExpand = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  return (
    <Card>
      <CardMedia
        sx={{ p: 2 }}
        component={"img"}
        height="170"
        image={props.img}
      />
      <CardHeader
        sx={{ p: "0 1rem" }}
        titleTypographyProps={{ fontSize: "1rem" }}
        title={props.title}
      />
      <CardContent sx={{ py: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="caption">Data: {props.eventDate}</Typography>
        <Typography variant="caption">Hora: {props.eventTime}</Typography>
      </CardContent>
      <CardActions sx={{ pt: 0, pb: 1 }}>
        <IconButton onClick={handleExpand}>
          <ExpandMore
            sx={{
              transform: isCardExpanded ? "rotate(180deg)" : "unset",
              transition: "all 200ms",
            }}
          />
        </IconButton>
      </CardActions>
      <Collapse in={isCardExpanded}>
        <CardContent sx={{ py: 0 }}>
          <Typography variant="caption">{props.moreInfo}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export { EventCard };
