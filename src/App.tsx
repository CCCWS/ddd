import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

import GlobalStyle from "./GlobalStyle";

import Main from "@Page/Main";
import About from "@Page/About";
import Project from "@Page/Project";
import Header from "@Component/Header";

import RouteTransition from "@Component/RouteTransition";

import "./Layout.css";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <TransitionGroup className="transitions-wrapper">
        <CSSTransition
          key={location.pathname}
          classNames={"right"}
          timeout={300}
        ></CSSTransition>
      </TransitionGroup> */}
      <GlobalStyle />
      <Header />

      {/* <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
        </CSSTransition>
      </SwitchTransition> */}

      <RouteTransition location={location}>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/project"} element={<Project />} />
        </Routes>
      </RouteTransition>
    </>
  );
}

export default App;
