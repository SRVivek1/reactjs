import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import DefaultErrorPage from "./error/DefaultErrorPage";
import NoPage from "./components/NoPage";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Dark mode");
  const [alert, setAlert] = useState(null);

  /**
   * Set title dynamically.
   */
  document.title = "Textutils - word counter | character counter | text formatting";

  /** Change theme. */
  const changeTheme = () => {
    if (mode === "light") {
      console.log("dark mode enabled");
      setMode("dark");
      setModeText("Light mode");
      document.body.style.backgroundColor = "#11111c";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else if (mode === "dark") {
      console.log("light mode enabled");
      setMode("light");
      setModeText("Dark mode");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  /** Show alert */
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar mode={mode} modeText={modeText} toggle={changeTheme} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact path="/"
            element={<TextForm mode={mode} alert={showAlert}/>}
            errorElement={<DefaultErrorPage />}
          />
          <Route
            exact path="/about"
            element={<About mode={mode} />}
            errorElement={<DefaultErrorPage />}
          />
          <Route
            path="*"
            element={<NoPage />}
            errorElement={<DefaultErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
