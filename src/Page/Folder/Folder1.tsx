import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styled from "styled-components";
import "@Style/Modal.css";

import { ProjectType } from "@Data/ProjectList";

interface props {
  projectData: ProjectType | null;
  setOnModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Folder1 = ({ projectData, setOnModalOpen }: props) => {
  const [isFull, setIsFull] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Div>
      <Box isFull={isFull}>
        <Header onDoubleClick={() => setIsFull((prev) => !prev)}>
          <button onClick={() => setOnModalOpen(false)}>닫기</button>
          <button onClick={() => setIsFull((prev) => !prev)}>확대</button>
        </Header>
        {projectData && projectData.title}
      </Box>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */

  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div<{ isFull: boolean }>`
  width: ${(props) => (props.isFull ? "100%" : "70%")};
  height: ${(props) => (props.isFull ? "100%" : "70%")};

  /* background-color: white; */
  border-radius: ${(props) => (props.isFull ? "0" : "10px")};

  overflow: hidden;
  position: relative;
  transition: 0.3s;

  z-index: 9999;

  background: linear-gradient(to right, #859398, #283048);
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  background-color: #7a7a7a;
`;

export default Folder1;
