import React, { useState } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Page, PageDiv } from "@Style/PageStyle";
import { ProjectList, ProjectType } from "@Data/ProjectList";
import Folder1 from "./Folder/Folder1";
import PageScroll from "@Component/PageScroll";

const Project = () => {
  const [onModalOpen, setOnModalOpen] = useState<boolean>(false);
  const [onModalData, setOnModalData] = useState<ProjectType | null>(null);

  const onClickProject = (data: ProjectType) => {
    setOnModalData(data);
    setOnModalOpen(true);
  };

  return (
    <Page>
      <PageScroll delay={500} point={true}>
        <ProjectListBox>
          {ProjectList.map((data, index) => (
            <ProjectIcon
              key={index}
              onClick={() => onClickProject(data)}
              projectTitle={data.title}
            />
          ))}
        </ProjectListBox>

        <TransitionGroup>
          {onModalOpen && (
            <CSSTransition in={true} classNames="modal" timeout={500}>
              <Folder1
                projectData={onModalData}
                setOnModalOpen={setOnModalOpen}
              ></Folder1>
            </CSSTransition>
          )}
        </TransitionGroup>
      </PageScroll>
    </Page>
  );
};

const ProjectListBox = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
