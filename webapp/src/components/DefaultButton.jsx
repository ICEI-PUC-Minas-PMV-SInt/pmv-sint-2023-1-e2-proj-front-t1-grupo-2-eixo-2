import { Button, styled } from "@mui/material";
import { green, lightBlue } from "@mui/material/colors";
import PropTypes from "prop-types";

const styles = () => ({
  default: {
    borderRadius: 15,
    textTransform: "none",
  },
  primary: {
    "&:hover": {
      backgroundColor: green[900],
      color: "#FFFFFF",
    },
  },
  secondary: {
    "&:hover": {
      backgroundColor: lightBlue[800],
      color: "#FFFFFF",
    },
  },
});

const DefaultButton = ({ color, children, classes }) => {
  return (
    <Button
      variant="contained"
      color={text}
      classes={{
        root: classes.default,
        containedPrimary: classes.primary,
        containedSecondary: classes.secondary,
      }}
      disableElevation
    >
      {children}
    </Button>
  );
};

DefaultButton.PropTypes = {
  color: PropTypes.string,
};

export default styled(styles)(DefaultButton);
