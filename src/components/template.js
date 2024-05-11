import React, { useState } from "react";
import "../App.css"; // Assuming your CSS file is named App.css

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleNavToggle = () => {
    setTimeout(() => {
      setIsNavOpen(!isNavOpen);
    }, 300);
  };
  const login = () => {
    alert('login');
  }

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
      <div className="nav">
        <div className="hamburger" id="hamburger" onClick={handleNavToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="nav-left" id="nav-left">
          <a href="/">
            <img src="/logo.png" alt="" />
          </a>
          <h1>Movie Mania</h1>
        </div>
        <div className={`navlinks ${isNavOpen ? "show" : ""}`}>
          <a href="/homepage">Home</a>
          <a href="/movies">Movies</a>
          <a href="/tv-shows">TV Shows</a>
          <a href="/about">About</a>
        </div>
        <div className="usersmenu" id="usersmenu">
          <a href="signup" id="signup">
            Sign Up
          </a>
          <a href="login" id="login">
            Login
          </a>
          <button className="user" onClick={handleUserMenuToggle}>
            <img src="/logo.png" alt="" />
          </button>
          <div className={`userm ${isUserMenuOpen ? "show" : ""}`} id="userm">
            <a href="/downloadhistory">History</a>
            <a href="/profile">Profile</a>
            <button onClick={login}>Logout</button>
          </div>
        </div>
      </div>
  );
};

const Sidebar = () => {
  return (
    <aside>
      <div className="atp">
        <img src="/hero-egame.jpg" alt="" />
        <h5>Get all movies here</h5>
      </div>
      <hr />
      <div className="trend">
        <h2>Movies 4 U</h2>
        <ul>
          <li>
            <a href="/movies/category/trending">Trending</a>
          </li>
          <li>
            <a href="/movies/category/popular">Popular</a>
          </li>
          <li>
            <a href="/movies/category/new">New Release</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="alinks">
        <ul>
          <h2>Categories</h2>
          <li>
            <a href="/movies/genre/action">Action</a>
          </li>
          <li>
            <a href="/movies/genre/adventure">Adventure</a>
          </li>
          <li>
            <a href="/movies/genre/comedy">Comedy</a>
          </li>
          <li>
            <a href="/movies/genre/drama">Drama</a>
          </li>
          <li>
            <a href="/movies/genre/horror">Horror</a>
          </li>
          <li>
            <a href="/movies/genre/romance">Romance</a>
          </li>
          <li>
            <a href="/movies/genre/scifi">Sci-Fi</a>
          </li>
          <li>
            <a href="/movies/genre/thriller">Thriller</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="afooter">
        <h2>Movie Mania</h2>
        <p>Get all movies here</p>
        <p>Made with love &hearts; by Devraj</p>
      </div>
    </aside>
  );
};


export { Navbar, Sidebar };
