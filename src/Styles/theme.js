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
      main: "#39424E",
    },
  }
});
export default theme;
