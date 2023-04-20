import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: green[500],
  color: "#FFFFFF",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: green[900]
  }
}));

export {CustomizedGreenButton};

function CustomizedGreenButton({text}) {
  return (
    <>
      <ColorButton variant="contained">{text}</ColorButton>
    </>
  );
  }