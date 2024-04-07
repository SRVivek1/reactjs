import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  let navBarProps = {
    title: "Textutils",
    home: "Home",
    aboutText: "About us",
  };

  const [mode, setMode] = useState("light");
  const [modeLabel, setModeLable] = useState("Enable light mode.");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setModeLable("Enable dark mode.");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled.", "success");
    } else {
      setMode("dark");
      setModeLable("Enable light mode.");
      document.body.style.backgroundColor = "#11111c";
      showAlert("Dark mode is enabled.", "success");
    }
  };

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
      <Navbar
        title={navBarProps.title}
        aboutText={navBarProps.aboutText}
        home={navBarProps.home}
        mode={mode}
        modeLabel={modeLabel}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container mx-3 my-3">
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
