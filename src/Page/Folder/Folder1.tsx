import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Folder1 = () => {
  const nav = useNavigate();
  const [isFull, setIsFull] = useState<boolean>(false);
  return (
    <Div>
      <Box isFull={isFull}>
        <Header onDoubleClick={() => setIsFull((prev) => !prev)}>
          <button onClick={() => nav(-1)}>닫기</button>
          <button onClick={() => setIsFull((prev) => !prev)}>확대</button>
        </Header>
      </Box>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: #7e7e7e73;

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
