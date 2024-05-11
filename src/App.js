import React from "react";

import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import StudentDetail from "./components/StudentDetail";
import Getdata from "./components/testdata";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/api/data" element={<Getdata />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
