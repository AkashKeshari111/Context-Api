import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./ContextApi/ThemeContext";
import { useContext } from "react";
import Login from "./Pages/Login";
import Status from "./Pages/Status";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  const { ToggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : "light"}>
      <Navbar />
      <button onClick={ToggleTheme}>{theme ? "Light" : "Dark"}</button>
      {/* <Login/>
      <Status/> */}
      <AllRoutes />
    </div>
  );
}

export default App;
