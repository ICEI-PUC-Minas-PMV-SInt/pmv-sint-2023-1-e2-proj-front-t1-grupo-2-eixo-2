import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function GenericCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={props.cardImg} height="140" />
        <CardContent>
          <Typography variant="body2" gutterBottom fontWeight="500">
            {props.cardTitle}
          </Typography>
          <Typography variant="caption">{props.cardText}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { GenericCard };
