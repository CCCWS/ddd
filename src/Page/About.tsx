import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Page, PageDiv } from "@Style/PageStyle";
import TestModal from "@Page/Folder/TestModal";

const About = () => {
  const API_KEY = "17058e11301a4bf892f409d4ea85d5ff";

  const [img, setImage] = useState<any>([]);
  const [curr, setCurr] = useState<any>("");
  const [click, setClick] = useState<boolean>(false);
  const [currImg, setCurrImg] = useState<string>("");

  useEffect(() => {
    const URL = `https://rawg.io/api/games?key=${API_KEY}&search=fire emblem engage`;
    const getApi = () => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => setImage(res.results[0].short_screenshots));
    };

    getApi();
  }, []);

  return (
    <Page>
      <Test>
        <Box>
          {img &&
            img.map((data: any) => (
              <Img
                key={data.id}
                img={data.image}
                onMouseEnter={() => setCurr(true)}
                onMouseLeave={() => setCurr(false)}
                onClick={() => {
                  setCurrImg(data.image);
                  setClick(true);
                }}
                hoverCheck={curr}
              />
            ))}
        </Box>
      </Test>

      <TransitionGroup>
        {click && (
          <CSSTransition in={true} classNames="modal" timeout={200}>
            <TestModal setOnModalOpen={setClick} data={currImg}></TestModal>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Page>
  );
};

const Test = styled.div`
  padding: 30px;
`;

const Box = styled.div`
  width: 800px;
  height: 200px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface ImgProps {
  img: string;
  hoverCheck: boolean;
}

const Img = styled.div<ImgProps>`
  width: 18%;
  height: 100%;

  border-radius: 10px;
  transition: 0.5s;

  opacity: ${(props) => (props.hoverCheck ? "0.5" : "1")};

  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;

  &:hover {
    transform: translateY(-20px);
    opacity: 1;
    cursor: pointer;
  }
`;

export default About;
