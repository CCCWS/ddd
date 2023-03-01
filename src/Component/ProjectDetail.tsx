import React, { useState } from "react";
import styled, { css } from "styled-components";

import { ProjectType } from "@Data/ProjectList";
import monitorImg from "@Data/image/monitor.png";

interface Props {
  data: ProjectType;
}

const ProjectDetail = ({ data }: Props) => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <Div>
      <Monitor img={monitorImg}>
        <div></div>
      </Monitor>

      {/* <Test>
        <div></div>
        <div></div>
      </Test> */}
    </Div>
  );
};

const Div = styled.div`
  /* padding: 50px; */
  background-color: gray;
  width: 100%;
  height: 200vh;
`;

const Monitor = styled.div<{ img: ImageData }>`
  width: 600px;
  height: 600px;
  background: ${(props) => `url(${props.img})`};
  background-size: cover;

  position: relative;

  div {
    position: absolute;

    width: 565px;
    height: 360px;
    background-color: white;
    border-radius: 10px;

    top: 76px;
    left: 18px;
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
