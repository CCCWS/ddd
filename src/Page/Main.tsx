import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition,
  Transition,
  SwitchTransition,
} from "react-transition-group";

import Folder1 from "./Folder/Folder1";

import "../Layout.css";

const Main = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [test, setTest] = useState<boolean>(false);

  return (
    <Div>
      <button onClick={() => nav("/test1")}>ddd</button>
      <button onClick={() => setTest((prev) => !prev)}>test</button>
      <Footer></Footer>

      <TransitionGroup>
        {test && (
          <CSSTransition in={true} classNames="page" timeout={500}>
            <Folder1 setTest={setTest}></Folder1>
          </CSSTransition>
        )}
      </TransitionGroup>
      <Outlet />
    </Div>
  );
};

const Test = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
`;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: wheat;

  position: absolute;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;

  position: fixed;
  bottom: 0;
`;

export default Main;
