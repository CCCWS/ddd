import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    overscroll-behavior: contain;
}

body{
    margin: 0;
    overflow-x: hidden;

}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #ff444462, #ff932db7);
  border-radius: 100px;
}

`;

export default GlobalStyle;
