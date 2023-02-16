import React from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyle from "./global-style";
import Main from "@Page/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
