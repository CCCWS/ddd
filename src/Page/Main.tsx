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
import { Page, PageDiv } from "@Style/PageStyle";

import "@Style/Layout.css";

const Main = () => {
  const nav = useNavigate();

  return (
    <Page>
      {/* <TransitionGroup>
        {test && (
          <CSSTransition in={true} classNames="page" timeout={500}>
            <Folder1 setTest={setTest}></Folder1>
          </CSSTransition>
        )}
      </TransitionGroup> */}
      {/* <Button>TEST</Button> */}
      <PageDiv></PageDiv>
      {/* <Footer /> */}
    </Page>
  );
};

export default Main;
