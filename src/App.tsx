import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@Style/GlobalStyle";
import theme from "./Style/Theme";

import Main from "@Page/Main";
import About from "@Page/About";
import Project from "@Page/Project";
import Header from "@Component/Header";
import Footer from "@Component/Footer";

import RouteTransition from "@Component/RouteTransition";

import "@Style/Layout.css";

function App() {
  const location = useLocation();
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Footer />

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/project"} element={<Project />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </ThemeProvider>
  );
}

export default App;
