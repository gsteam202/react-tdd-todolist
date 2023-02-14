import React from "react";
import Styled from "styled-components";
import { ToDoListProvider } from "Contexts";
import { PageHeader } from "./Components";
import { Routes, Route } from "react-router-dom";
import { List, Add, Detail, NotFound } from "Pages";

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <PageHeader />
        <Routes>
          <Route element={<List />} path="/" />
          <Route element={<Add />} path="/add" />
          <Route element={<Detail />} path="/detail:id" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
