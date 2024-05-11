import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import { Navbar, Sidebar } from "./components/template";


function pagesetup() {
  const nav = ReactDOM.createRoot(document.getElementById("nav"));
  nav.render(
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  );

  const sidebar = ReactDOM.createRoot(document.getElementById("sidebar"));
  sidebar.render(
    <React.StrictMode>
      <Sidebar />
    </React.StrictMode>
  );
}
pagesetup();
const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
