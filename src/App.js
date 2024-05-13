
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Homepage, Page404 } from "./components/template";

import StudentDetail from "./components/StudentDetail";
import Getdata from "./components/testdata";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404/>} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/api/data" element={<Getdata />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;