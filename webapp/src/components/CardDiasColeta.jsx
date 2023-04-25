import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import styled from "@emotion/styled";

//estiliza o card para uso nos dias da semana
const CardPersonalizado = styled(Card)(() => ({
  height: "140px",
  width: "140px",
  background: "#FFFFFF",
  border: "1px solid #000000",
  marginBottom: "10px",
  textAlign: "center",
  borderRadius: "10px",
  backgroundColor: "#F2F2F2",
}));

//função para customizar os cards dos dias da semana que tem coleta
function DiaEntregaCard({ dia, horarioInicio, horarioFim }) {
  return (
    <Grid item>
      <CardPersonalizado variant="contained">
        <CardContent>
          <Typography variant="h6" color="primary">
            {dia}
          </Typography>
          <Typography variant="body1" color="black">
            Das {horarioInicio}h às {horarioFim}h
          </Typography>
        </CardContent>
      </CardPersonalizado>
    </Grid>
  );
}

//função para customizar os cards dos dias da semana que não tem coleta
function DiaSemEntregaCard({ dia }) {
  return (
    <Grid item>
      <CardPersonalizado variant="contained">
        <CardContent>
          <Typography variant="h6" color="inherit">
            {dia}
          </Typography>
        </CardContent>
      </CardPersonalizado>
    </Grid>
  );
}

export { DiaEntregaCard, DiaSemEntregaCard };
