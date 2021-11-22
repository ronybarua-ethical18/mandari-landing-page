import { ThemeProvider } from "@material-ui/styles";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import theme from "./presentation/mui-theme.js";
function App() {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
