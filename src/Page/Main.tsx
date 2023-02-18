import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const Main = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <Div>
      <button onClick={() => nav("/test1")}>ddd</button>
      <Footer></Footer>
      <Outlet />
    </Div>
  );
};

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
