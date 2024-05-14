
import { Route, Routes, BrowserRouter, } from "react-router-dom";

import "./App.css";
import { Homepage, Page404, Mymoviecontent, MovieContent, Movies } from "./components/template";

import StudentDetail from "./components/StudentDetail";
import Getdata from "./components/testdata";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="*" element={<Page404/>} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:name" element={<MovieContent/>} />
        <Route path="/mymovies/:name" element={<Mymoviecontent/>} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/api/data" element={<Getdata />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;