import React, { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "rgb(24 41 57)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Dark mode";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
      document.title = "TextUtils- home";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextModifier"
          About="About TextModifier"
          theme={theme}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About theme={theme}/>}>
              
            </Route> */}

            {/* <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                theme={theme}
              />}> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                theme={theme}
              />
              
            {/* </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
