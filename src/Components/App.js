import { ThemeProvider } from "@mui/material";
import Theme from "../Styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Homepage/HomePage'
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Routes>
            <Route Route exact path="/" element={<HomePage/>}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
