import React, { useState } from "react";
import styled, { css } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { ProjectType } from "@Data/ProjectList";
import monitorImg from "@Data/image/monitor.png";

import Folder1 from "@Page/Folder/Folder1";

interface Props {
  data: ProjectType;
}

const ProjectDetail = ({ data }: Props) => {
  const [click, setClick] = useState<boolean>(false);

  // console.log(data);
  return (
    <Div>
      <Monitor img={monitorImg}>
        <div>
          <Title>
            <TTest />
          </Title>
        </div>
      </Monitor>

      {/* <Test>
        <div></div>
        <div></div>
      </Test> */}

      <button onClick={() => setClick(true)}>test</button>

      <TransitionGroup>
        {click && (
          <CSSTransition in={true} classNames="modal" timeout={500}>
            <Folder1 projectData={data} setOnModalOpen={setClick}></Folder1>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Div>
  );
};

const TTest = styled.div`
  width: 60px;
  height: 40px;
  background-color: gray;

  opacity: 0;

  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );

  position: absolute;
  top: -45px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  justify-content: center;

  padding: 5px;

  transition: 0.5s;

  ::before {
    content: "TEST";
    color: white;
  }
`;

const Title = styled.div`
  width: 100px;
  height: 30px;
  background-color: black;
  position: relative;

  &:hover {
    ${TTest} {
      opacity: 1;
    }
  }
`;

const Div = styled.div`
  /* padding: 50px; */
  background-color: gray;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Monitor = styled.div<{ img: ImageData }>`
  width: 600px;
  height: 600px;
  background: ${(props) => `url(${props.img})`};
  background-size: cover;

  position: relative;

  & > :first-child {
    position: absolute;

    width: 565px;
    height: 360px;
    background-color: white;
    border-radius: 10px;

    top: 76px;
    left: 18px;

    padding: 50px;
  }
`;

const Test = styled.div`
  position: relative;

  width: 260px;
  height: 500px;
  background-color: black;

  border-radius: 10px;
  border: 10px solid black;

  & > :first-child {
    position: absolute;

    width: 18px;
    height: 18px;
    background-color: black;
    border-radius: 50px;

    top: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > :nth-child(2) {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
  }
`;

export default ProjectDetail;
