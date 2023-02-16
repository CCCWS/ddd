import React from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

import Main from "@Page/Main";
import Folder1 from "@Page/Folder/Folder1";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<Main />}>
          <Route path={"/test1"} element={<Folder1 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
