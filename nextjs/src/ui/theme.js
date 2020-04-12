import { createMuiTheme } from "@material-ui/core/styles";

const textColor = "#01193F";
const buttonColor = "#D2B486";
const detailColor = "#6BADDF";

export default createMuiTheme({
  palette: {
    common: {
      blue: textColor,
      orange: buttonColor
    },
    primary: {
      main: textColor
    },
    secondary: {
      main: buttonColor
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem"
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: textColor,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: textColor
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: textColor,
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: textColor
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: detailColor
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: detailColor,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: detailColor
    },
    learnButton: {
      borderColor: textColor,
      borderWidth: 2,
      textTransform: "none",
      color: textColor,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiTableCell: {
      head: {
        fontSize: "1rem",
        fontWeight: 700,
        color: textColor,
        borderColor: textColor,
        borderWidth: 2
      },
      body: {
        color: detailColor,
        borderColor: textColor,
        borderWidth: 2
      }
    },
    MuiSvgIcon: {
      root: {
        "&.MuiSelect-icon": {
          fill: buttonColor
        }
      }
    },
    MuiFormControlLabel: {
      label: {
        color: textColor,
        fontWeight: 700
      },
      labelPlacementStart: {
        marginLeft: 0
      }
    },
    MuiInputLabel: {
      root: {
        color: textColor,
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color: detailColor,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${textColor}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${textColor}`
        }
      }
    }
  }
});
