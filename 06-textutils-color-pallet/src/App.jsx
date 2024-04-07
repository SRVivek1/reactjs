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
  const [mode, setMode] = useState("primary");
  const [modeText, setModeText] = useState("Primary");
  const [alert, setAlert] = useState(null);

  /**
   * Set title dynamically.
   */
  document.title = "Textutils - word counter | character counter | text formatting";


  /**Remove bg themese */
  const removeBgThemes = () =>{
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
  }

  /** Change theme. */
  const changeTheme = (themeClass) => {

    //remove old bg-themeClass
    removeBgThemes();

    // add bg-color
    document.body.classList.add('bg-' + themeClass);

    if (mode === "primary") {
      console.log("dark mode enabled");
      setMode("dark");
      setModeText("Light mode");
      document.body.style.backgroundColor = "#11111c";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else if (mode === "danger") {
      console.log("light mode enabled");
      setMode("light");
      setModeText("Dark mode");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
    else if (mode === "warning") {
      console.log("light mode enabled");
      setMode("light");
      setModeText("Dark mode");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
    else if (mode === "success") {
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
