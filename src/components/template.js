import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mdata from "../api.json";

import "../App.css"; // Assuming your CSS file is named App.css

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleNavToggle = () => {
    setTimeout(() => {
      setIsNavOpen(!isNavOpen);
      const hamburger = document.getElementById("hamburger");
      hamburger.children[0].classList.toggle("rotate1");
      hamburger.children[1].classList.toggle("hide");
      hamburger.children[2].classList.toggle("rotate2");
    }, 300);
  };
  const login = () => {
    alert("login");
  };

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
  const [issideOpen, setIssideOpen] = useState(false);
  const handlesidebartogle = () => {
    setIssideOpen(!issideOpen);
    const i = document.querySelector("aside i");
    i.classList.toggle("rotate");
  };

  return (
    <aside className={`${issideOpen ? "show" : ""}`}>
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
      <button onClick={handlesidebartogle}>
        <i className="fas fa-caret-down"></i>
      </button>
    </aside>
  );
};

const Homepage = () => {
  const setupslider = () => {
    var sliderContainer = document.getElementById("slidercontainer");
    var slider = document.getElementById("slider");
    var main = document.querySelector("main");
    // Clone first and last images
    var firstSlide = sliderContainer.querySelector(".slide:first-child");
    var lastSlide = sliderContainer.querySelector(".slide:last-child");
    var clonedFirstSlide = firstSlide.cloneNode(true);
    slider.appendChild(clonedFirstSlide);
    var clonedLastSlide = lastSlide.cloneNode(true);
    slider.insertBefore(
      clonedLastSlide,
      slider.querySelector(".slide:first-child")
    );
    // Handle scroll event
    slider.addEventListener("scroll", function () {
      var scrollPos = slider.scrollLeft;
      var slideWidth = slider.querySelector(".slide").offsetWidth;
      var slides = slider.querySelectorAll(".slide");
      var totalWidth = Array.from(slides).reduce(function (acc, slide) {
        return acc + slide.offsetWidth;
      }, 0);
      var mainPaddingLeft = parseFloat(
        window.getComputedStyle(main).paddingLeft
      );
      var mainPaddingRight = parseFloat(
        window.getComputedStyle(main).paddingRight
      );
      var adjustedScrollPos = scrollPos - mainPaddingLeft;
      if (adjustedScrollPos <= 0) {
        slider.scrollLeft = (slides.length - 2) * slideWidth + mainPaddingLeft;
      } else if (
        adjustedScrollPos + slider.offsetWidth >=
        totalWidth - mainPaddingRight
      ) {
        slider.scrollLeft = slideWidth + mainPaddingLeft;
      }
    });
    // Center second card on reload
    var sliderWidth = slider.offsetWidth;
    var slideWidth = slider.querySelector(".slide").offsetWidth;
    var scrollPosition = slideWidth;
    var marginLeft = (sliderWidth - slideWidth) / 2;
    scrollPosition -= marginLeft;
    setTimeout(function () {
      slider.scrollLeft = scrollPosition;
    }, 10);
  };

  useEffect(() => {
    setupslider();
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="hblr">
          <div className="hblrcnt">
            <h1>
              <span>Movie</span> Mania
            </h1>
            <p>Get all movies here</p>
          </div>
          <div className="hbbtn">
            <a href="movies">Browse</a>
            <a href="tv-shows">Search</a>
          </div>
        </div>
      </div>
      <div className="slider-container" id="slidercontainer">
        <h2>
          <span>Now</span> Showing
        </h2>
        <div className="slider" id="slider">
          <div className="slide">
            <img
              src="https://w0.peakpx.com/wallpaper/983/1000/HD-wallpaper-the-jungle-book-movie-poster.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://w0.peakpx.com/wallpaper/475/959/HD-wallpaper-venom-movie-2018-official-poster-venom-movie-venom-movies-2018-movies-poster.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://w0.peakpx.com/wallpaper/246/232/HD-wallpaper-spiderman-no-way-home-movie-poster-spider-man-no-way-home-spiderman-2021-movies-movies-poster-artstation.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://w0.peakpx.com/wallpaper/31/267/HD-wallpaper-rampage-8k-poster-rampage-dwayne-johnson-2018-movies-movies-poster.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mcard-cont">
        <div className="mdata">
          <h2>
            <span>Popular</span> Movies
          </h2>
          <p>
            Rating more than <span>8.5</span>
          </p>
        </div>
        <div className="mcards">
          {mdata
            .filter((m) => m.rating > 8.5)
            .slice(0, 12)
            .map((m, i) => (
              <Link key={i} to={m.link} className="mcard-link">
                <div className="mcard">
                  <img src={m.imageUrl} alt="" />
                  <div className="mcard-info">
                    <div>
                      <h3>{m.movieTitle}</h3>
                      <a href={m.link}>
                        Watch
                        <br />
                        Now
                      </a>{" "}
                      {/* Link added here */}
                      <p>{m.description}</p>
                      <h5>Rating: {m.rating} ★★★★★</h5>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          <div className="mcard2">
            <div className="mcard2-info">
              <a href="movie">Watch more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar, Sidebar, Homepage };
