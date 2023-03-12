import React, { useState } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Page, PageDiv } from "@Style/PageStyle";
import { ProjectList, ProjectType } from "@Data/ProjectList";
import Folder1 from "./Folder/Folder1";
import PageScroll from "@Component/PageScroll";
import ProjectDetail from "@Component/ProjectDetail";
import Carousel from "@Component/Carousel";

const Project = () => {
  const [onModalOpen, setOnModalOpen] = useState<boolean>(false);
  const [onModalData, setOnModalData] = useState<ProjectType | null>(null);

  const onClickProject = (data: ProjectType) => {
    setOnModalData(data);
    setOnModalOpen(true);
  };

  return (
    <Page>
      {/* <PageScroll delay={300} point={true}>
        {ProjectList.map((data, index) => (
          <ProjectDetail key={index} data={data}></ProjectDetail>
        ))}
      </PageScroll> */}
      <CarouselBox>
        <Carousel height={"500px"} point={true} auto={true} delay={100000}>
          {ProjectList.map((data, index) => (
            <ProjectImg img={data.image} key={index}></ProjectImg>
          ))}
        </Carousel>
      </CarouselBox>
    </Page>
  );
};

const CarouselBox = styled.div`
  width: 100%;
  /* height: 500px; */
`;

const ProjectImg = styled.div<{ img: string }>`
  width: 100%;
  height: 100%;

  background-image: ${(props) => `url(${props.img})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProjectIcon = styled.div<{ projectTitle: string }>`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: black;

  margin: 50px;

  position: relative;
  transition: 0.3s;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &::after {
    content: "${(props) => props.projectTitle}";

    width: 100%;
    height: 30px;

    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: gray;
  }
`;

export default Project;
