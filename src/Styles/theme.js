import { createTheme } from "@mui/material/styles";
import { red, blue, orange, grey } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: red,
    secondary: blue,
    error: orange,
    warning: grey,
    success: {
      main: '#1BA94C',
    },
    info: {
      light:'#738F93',
      main: "#39424E",
    },
  },
  typography: {
    h3: {
      color: '#738F93'
    },
    h4: {
      color: '#39424E'
    },
    subtitle1: {
      color: '#576871'
    },
    subtitle2: {
      color: '#576871'
    },
    caption: {
      color: '#738F93'
    }
  }
});
export default theme;
