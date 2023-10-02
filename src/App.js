import "./App.css";
import React ,{useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import NavBar from "./components/NavBar";
import Homepage from "./pages/homepage";
import { createTheme } from "@mui/material/styles";
import Register from "./pages/Register";
import Login from "./pages/login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./themes";
import { Toaster } from 'react-hot-toast';
import Summary from "./pages/Summary";
import ScifiImage from "./pages/ScifiImage";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsCoverter";
import Paragraph from "./pages/Paragraph";
function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('authToken')){
     navigate("/")   
    }else{
      navigate("/login")   
    }
},[])
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Toaster/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/paragraph" element={<Paragraph />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
