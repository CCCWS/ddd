import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

import GlobalStyle from "./GlobalStyle";

import Main from "@Page/Main";
import Folder1 from "@Page/Folder/Folder1";

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

      {/* <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
        </CSSTransition>
      </SwitchTransition> */}

      <Routes>
        <Route path={"/"} element={<Main />}>
          {/* <Route path={"/test1"} element={<Folder1 />} /> */}
        </Route>
        <Route path={"/test2"} element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
