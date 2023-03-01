import React from "react";
import styled from "styled-components";

import { Page, PageDiv } from "@Style/PageStyle";

const About = () => {
  return (
    <Page>
      {/* <PageDiv></PageDiv> */}
      <Test />
    </Page>
  );
};

const Test = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;
export default About;
