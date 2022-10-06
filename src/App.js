// import logo from './logo.svg';
import React from "react";
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [buttonText, setButtonText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if (mode === "light") {
      setMode("dark");
      setButtonText("Disable DarkMode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled.", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      setButtonText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled.", "success");
      document.title = "TextUtils - Light mode";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} buttonText={buttonText}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <Routes> */}
          {/* <Route path="/" element= */}
          {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}
          {/* /> */}
          {/* <Route path="/about" element={<About />}/> */}
      {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  )
}

export default App;
