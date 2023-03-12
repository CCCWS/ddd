import styled, { css } from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.color.black};
  overflow-y: scroll;
  overflow: overlay;
`;

export const PageDiv = styled.div`
  width: 100%;
  height: 300vh;
`;
