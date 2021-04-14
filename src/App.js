// import logo from './logo.svg';
import {useState} from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {
  const [theme, setTheme] = useState("light");
  const [logo_v, setLogo] = useState("logo_1");
  return (
    <div className={"App " + theme}>
      <ThemeProvider theme={themes[theme]}>
        <Navigation theme={theme} setTheme={setTheme} logo_v={logo_v} setLogo={setLogo} />
        <Homepage className="homepage-bg" />
        <Footer />
      </ThemeProvider>
    </div>   
  );
}

export default App;
