import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styled from "styled-components";
import {
  TransitionGroup,
  CSSTransition,
  Transition,
  SwitchTransition,
} from "react-transition-group";

import "../../Layout.css";

interface props {
  setTest: any;
}

const Folder1 = ({ setTest }: props) => {
  const nav = useNavigate();
  const [isFull, setIsFull] = useState<boolean>(false);
  const [todo, setTodo] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const location = useLocation();
  return (
    <Div>
      <Box isFull={isFull}>
        <Header onDoubleClick={() => setIsFull((prev) => !prev)}>
          <button onClick={() => setTest(false)}>닫기</button>
          <button onClick={() => setIsFull((prev) => !prev)}>확대</button>
        </Header>

        <input onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={() => setTodo((prev) => [...prev, inputValue])}>
          dddd
        </button>

        {todo.map((todo, index) => (
          <Test>{todo}</Test>
        ))}
      </Box>
    </Div>
  );
};

const Test = styled.div`
  width: 100px;
  height: 30px;
  background-color: gray;
  margin-bottom: 10px;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #7e7e7e73; */

  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div<{ isFull: boolean }>`
  width: ${(props) => (props.isFull ? "100%" : "70%")};
  height: ${(props) => (props.isFull ? "100%" : "70%")};
  background-color: white;
  border-radius: ${(props) => (props.isFull ? "0" : "20px")};
  overflow: hidden;

  transition: 0.5s;
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  background-color: #7a7a7a;
`;

export default Folder1;
