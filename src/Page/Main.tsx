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
import Footer from "@Component/Footer";

import "../Layout.css";

const Main = () => {
  const nav = useNavigate();

  return (
    <Div>
      {/* <TransitionGroup>
        {test && (
          <CSSTransition in={true} classNames="page" timeout={500}>
            <Folder1 setTest={setTest}></Folder1>
          </CSSTransition>
        )}
      </TransitionGroup> */}
      {/* <Button>TEST</Button> */}
      <Footer />
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
  height: 300vh;
  background-color: ${(props) => props.theme.color.black};
  overflow-x: hidden;

  /* position: absolute; */
`;

const Foodter = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;

  position: fixed;
  bottom: 0;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 100px;

  /* border: none; */

  background-color: transparent;
  border-radius: 5px;
  position: relative;
  transition: 0.5s;

  &:hover {
    /* font-size: large; */
    color: white;
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background-color: red;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.5s ease 0.5s;
  }

  &:hover::before {
    width: 100%;
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
`;

export default Main;
