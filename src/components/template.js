import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../api.json";
import { useParams } from "react-router-dom";

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
        {data.navlinks.map((nl, i) => {
          return (
            <a href={nl.url} key={i}>
              {nl.name}
            </a>
          );
        })}
        {/* <a href="/homepage">Home</a>
        <a href="/movies">Movies</a>
        <a href="/tv-shows">TV Shows</a>
        <a href="/about">About</a> */}
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
        <h2>Movie Mania</h2>
        <h5>Get all your favourites at one place</h5>
      </div>
      <hr />
      <div className="trend alinks">
        <h2>Movies 4 U</h2>
        <a href="/movies/category/trending">Trending</a>
        <a href="/movies/category/popular">Popular</a>
        <a href="/movies/category/new">New Release</a>
      </div>
      <hr />
      <div className="alinks">
        <h2>Genre</h2>
        <a href="/movies/genre/action">Action</a>
        <a href="/movies/genre/adventure">Adventure</a>
        <a href="/movies/genre/comedy">Comedy</a>
        <a href="/movies/genre/drama">Drama</a>
        <a href="/movies/genre/horror">Horror</a>
        <a href="/movies/genre/romance">Romance</a>
        <a href="/movies/genre/scifi">Sci-Fi</a>
        <a href="/movies/genre/thriller">Thriller</a>
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

const Footer = () => {
  return (
    <footer>
      <div className="f-cont" id="fcont">
        <div className="ftop" id="ftop">
          <form action="">
            <h2>
              Join us for latest updates and news. <br />
              <span>Stay Connected</span>
            </h2>
            <div className="form-cont">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
              <button type="submit" id="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="fbtm" id="fbtm">
          {data.footer.map((f, i) => {
            return (
              <ul key={i}>
                <h2>{f.heading}</h2>
                {f.urls.map((u, j) => {
                  return (
                    <li key={j}>
                      <a href={u.url}>{u.name}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="fabout" id="fabout">
          <div className="fab1">
            <img src="/logo.png" alt="" />
            <address>
              <h3>
                {data.admin.add1} <br />
                <span>
                  {data.admin.add2} <br />
                  {data.admin.add3}
                </span>
              </h3>
              <h5>
                Phone:{" "}
                <a href={`tel:${data.admin.phone}`}>{data.admin.phone}</a>
                <br />
                Email:{" "}
                <a href={`mailto:${data.admin.email}`}>{data.admin.email}</a>
              </h5>
            </address>
          </div>
          <div className="fab2">
            <a href="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFbUlEQVR4nO2WW0xTdxzHSVxikEkR0IlI5apQNNQHE+Me3OKDS/a2ZNvjkmWP25Ite1iWuCyhhV64iSIioCIMEAUKyGSQOZ1b4pyDQu899EoLvVLwMqGUfpee6oFCO/kfjWRJv8kn6en5nu/v96UN/yYkxBVXXHH9L8Qfni84PDwr4Q/7xvkjvvnDIz68Svgjvnk6e3hWHJr1yhY//ive4A/NSkqGvH7+z7N4HZSEZ4k+7MKWl16+5Kanv2TIi02i76VKHBz0SA795MWmMugRsVq+aMBVUHzD7T846MFmUnzD7Q/tQlyAN+CRFg94QEy/C7zeGfBkjmfX7vB17wz9mk0mr98jJv8EZO5xXp8bRPQ6cOSqHqX37Pho0IiiLisOdBjx9R0rvvltCoUdRvBkLrLMPjeKZG45eYFe53yRzAUSCjvNGDT6ENJCIIj3eiic+sOG5/r27hQKu+0gzpU5fcQFCntcIOVAhxk3jXPMwvdnHsO3sMRcf3fXhgPX7MS5hT0uEBfY3+0EKQVddpzsoRBYDmKtLPML4LXpsP+6gzh3f7eTvEDBNQfYkN9qQIvCta7AZ0NG5HdMscosuOYgL5B/1QFWdE7jcIsai4GVT+G2ZR65lyh2eVfDEBfI65wBG3JbLfhixMws718O4t1OHXJbzchrt7HKzOucIS+Q2z4NYn60o7BJBdvDRabA+b8dyLlIIadRjexmPXlmexjiAjlt0yAl+6IBtfdnmOXdT/woblLT75+6bcVHPRSyWyzEuTltLArsa7WDiBYr3r6ixkJgmSnw1YgZ3GYjuOcUcD3xQ+V+guwGFfZdsZFlt9rJC3BbbCAhq0GLocnwIRbSuOMxuPUqcC9Z8E6bZuUsuGVBVpOBKJvbYiMvkHXZho2yt9mMj3v0zJKhY+D9Ti2yms3IumTFsctq5t7c0wAONSrp97MIZhAX2HtxChui2QruWQU07n+YJdsVLmSe0zIebp0SJt8Cc/+y3Blxf+8GIC6Q2WTFRthTT+GH21ZmuYeLAfAvKJF5wbTiOW/AJzKK8QSCQZy4okLmBeOGZoQgLrCn0YoIGkzIqFVhd7U8goP145hfCDDLfX/Lgt3VYxGejDod/ewvq34n/Wl7hIyqSB/trVXRs9bOJy6Q0WDBajJPKzBEzdJ/PRItBpZxslWNjDo9jjUr4V91Qq9VKPumfhZ7ahQRs0MQF3jrvAUM9SYcbVKCrbpVHuw6raGpuzf9Qv/RJiU9c/UOxAV2nTNjNburJtCv8WIpyi/NF+mOaQ47q1XYVWdETo0czsf+qL6l5SD61B561tr5xAV2njUhgjMGpFcqkSYeZUV6tTacU6PD5wMGZunFQBBH6uUrvkolPWvtfOIC6WdMiEqtAWmScaSKRpEmmUB6DRXdF/N5I9Ilcvxle8SUGNR6w1n/8RxxgbTTRkQjVapC9e82PF1axj3rQxxvVCC1QhPVG5NqCiealfSB91wftGmQVqWP+QxxgdQaA6KRUvYg4t/mp9f1dIFY/ljsEE+gddTJ5PQo3dghVsT0ExfgVBnmUqoMWAtHKEe/2ksPvaHxIkU4ts6zISop5FWOwfLshP6y34AUiSaGf3KWuEByBTXOqZjEOqR6cEpHUVQlB6d0DByJbr1no4i12Cl4gDzpGJKFE+BIqai+5IrJMfICUkqcLKUQE4ku9j0SJPoXZm2XUuXkBcqo/O0iyr9dTGGTWUyW6PMS2ChJpCt/U6THZpIk0gsTWKsLW5KEOllSmQ6bRG9oB/YFnpVIFOjKtwl0/m1CHV4Ti4kCrfDll1+lrWVUfqJQJ0oUaOWJAu3cq146UaCdC2fryreWsvzOxxVXXHElvG79Cz6asNinRc1eAAAAAElFTkSuQmCC"
                alt="App store"
              />
            </a>
            <a href="/">
              <img
                src="data:image/png;base64,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"
                alt="Play store"
              />
            </a>
          </div>
          <div className="fab3">
            <a href={data.admin.facebook}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1klEQVR4nO2Z609bZRzHT7ht64DJdWNlzA7GWoyvjIv+FZqomZkvJJkvfa8hjsNt0DEqQ2DQcqczJijgBXDqFuOyxPhCsxBMHPSyXg6l7WnP6SnQnkL5maeoYeG05zx9oGrCN/m9/3xPn9/v+T3fUtSRjnQkck1BtnYi9OqlcaGhdjw0XTvO/35xNBSsGeNi1aNcrHqED2qGuSXNcHBaYwo2nDexr1A0ZFH/tl74bPOczhzWaycF96UJAVDVjofg4hgqHmpGeage4eHCMJcozVAQnjehCsD5wYCraoDtUJvYyoyD10wJZTpz2KidFETtZBiw4Y0BqBpkE1V5xy9W3vENVBiZ0ozA190NX9VOrgd05jCQwp8bSBhIlLrfx57t9b19aOAvGSG37m54SGdeh0OAh7N9qLxQ0esdpIyQe9DwqjpzeCED8HDmEy+U96zNVxgZ1UHB52YS/nTPWqLKbq/+QNFLecQGMnRsYC98+W0PlHV7oLSbGSCD/zT8Dim8xsjCtXsCjC5G4IFDhF/XtuBnJgYPnSLMWaLw0UNBEr6sexVKP16Foi73lbTgtROhEt3kup8E/rVZHmz8NqTSI5eYFL7EwEBJFxPI70pjxKI5TwL/+iwP4vZOSvi9BiThDQwUdzFQ1Onqx4J/0bxRSXJJXTCx4BLioESPXGJq+FtuVGKRnqnC+fp6koZ9/35YEfzfBmTg4blOF5y66exQRk9DlnZCcJFMm+knUZCSI7QNb85wUDvo260BL2j61xTAu6BQ73CjpVGWP7FVEo7K5aB0474xw6VuWIM0/KmbTijUJ+qyrAG0EpPO+WBkf/N61uNwhgC+oMMB+XrHh/IGJkIzpJfUlkT//rIaI4Iv6HDAyXbH57IGasf4JdIbNi4xPe/bo0Tw+e0OUN2wL8oaqBkLBUjXAykD39uiRPAnbzyFE212v7yBUU4k3W2SG0gfXtX2FFSt9qisgeoRTsSBRxcWH915pqQUiwNwkfi+Mv22rgy+zQ4nWpQZCOB8eUGUXxdSqeknXhl8qx2OtdjkjxBKD3CODamBqzOsIvjjLTY43myTb2LNUHAG58yTGrg87FEG32KDY802+TGKchuchg0RGNiKA5TecimFh7wmyweyBlDohPOSqp/j4b2Fv2qeg2tzHEhZerwWg/qvA1D/FQvvfrlbV77wY8BbIafZ+rKiZa7KyDrTfQaiUSk1Rr+zRpRPm9b98LlNVofiNA8lZunCozmfzEC68HnIAG1pp5QKxX27iRk+PLqgpAzcs0RI4KNUwxM1hSMU96UDn9zAZrrwkN1o6cWCTxgY4ovVfT4/LjxaD5IZSAc+p9HCUvQf6eWmKKvEhUd7TSoDmPCQ3bjyFkUilFXiwKcygA1/fbmPItYUZJ/u8cziPEYkDaxsYsHnNK7MUfSPOeQG0K9gZFTl3Z55pfu8lIFvVzaVw19f+YaiDyjc/UdGyEVZpZJ9PrkBhceGPqAvLyWUVZYY3P5Uj5FkBmTgfcQNq1QF7e4SFPcVdbqjUutBMgPJLqlsNOfppWIq0yo2ONUoMSvUO5x7LykpAwvLG8/uNrTVmVgPcG/YQxENWSh0QrkNij4WveKGi4/FN2I7sLm1A0xoK25+LLBon0crcWKr/C/8zXqkI1H/f/0JPDNnaCVeJTwAAAAASUVORK5CYII="
                alt="facebook"
              />
            </a>
            <a href={data.admin.twitter}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEc0lEQVR4nO2XyUsjURDG/UPGm9iJL4lLOu5pcSd4ET0oooKCiHhQULyLKCLePIgbiLcZBuNyURAExQW8CXFBPLggijPRiCsub6gi3bSx7bz3omEOKfgOHV/k91VXvarExcUiFrGIxX8bbrc7XlGU34qi3CiKQt1u9zvl5uZqysnJ0ZSdna0pKyvrnTIzMzVlZGRoSk9P1+RyuagsyzeyLHtlWZYigf8L4KHwLOCh8KzgLp1kWQb5ZVmO5zYQzDwTuFnWWcDTQ+CD4Cin0wn6JfIGbiIpFz04a9blj+CotLS0gIiBb69zlwG4ATyK20CU65x+Bg5KTU0VNxBJnQuWCw2FFzIQ7Tp3GmRdVUpKipiBz8Dhzfh8PmoUc3NzTHXe1tZGX19f6erqKj5/Bq6K20C4rFdXV9PHx0f69vZGl5eX6dLSEt3d3UUTXV1dplmvra2l9/f3eB4SFQoeCp+cnCxmIFydDw4OIvDY2BhmvKCggJ6dndGrqyvq8XgMywU+v7i4QHk8HtOsA7gqbgMsdQ5aW1ujLy8vtLGxEbPd1NSEpbGxsYHP+hqHwXhwcEBvb29pVVUVE7jD4UAJGWBp0JKSEur3++np6SnNy8vDbE9OTuKb6e/v1+Dh7ObmJn1+fqYtLS2G4CmfwAsZ4Bn/nZ2dCOz1etEAnIUmf3h4oBUVFWgAmhuit7eXOesOh4Pa7XYUtwHe+3x+fl5rYACurKzEJodGHR0dxb+Nj49zg9sjNcA6/mHtOD4+xgYuLi7G5hwYGNCu14WFhXfwevBkE3ibzYbiNiAy/hsaGrCB19fXtXsd6h6u2ubmZq6s24LgIEKIuAHe8T8xMYEZ7+vrw4zD27i+vsYmh6uZB9wWhBcyIDr+4cze3h59enqi5eXlmPH29nY0NT09/Q7cESbregkZYFlzQwcR9M3+/j6Wzc7ODn4PMj47O4smOjo6uMAJITQpKYnfAC84ZBo+g5UC4NVbCW4gAIYr+ejoCJs8Pz+fCZwE4YUNsKy5+ptlamoKoYeGhvB5ZWUFmxqmNADX1dXhM0xvvQFiAi5sgDXrqrq7uxF+ZmZGq+/CwkLMODQwTHaAHhkZwXM9PT1M4BEZYAGH+m5tbcV9aGtrCw3rGxTWZnVKQ7bh/Pb2Nk7psrIyJnghA0bgRvCwlN3d3dHDw0NcjY0aFN6K2sAAClsofMfn8+H/MAO3Wq0oIQPhtsWioiJ6fn5OLy8vaWlp6Yfxr9Y4zBNo4EAggCs3mIASghgeHjYFFzYQbuGCmob7HvYd+IES7lqsr6/HBoZ1GtaKxcVF3Eyh9GpqakzhhQyYrblgDNYFAIIhxXqfww8fozg5OcGBaQQesQHevYX1WgyXcWtQFosFxW2Adc39LnCrDj4iAyJ7Szhw1qxbIjEgCv4V5WL5IgM30SoXiwk4SJKka24DdrvdG+06t3wEV/VTxIBECPFHs84tH8FpYmLin4SEhB9xIkEIiSeE/CKEBKJRLpIOXJKkAGReGD4WsYhFLOKiEf8Af1P68HbF1egAAAAASUVORK5CYII="
                alt="twitter"
              />
            </a>
            <a href={data.admin.instagram}>
              <img
                src="data:image/png;base64,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"
                alt="instagram"
              />
            </a>
            <a href={data.admin.youtube}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE8klEQVR4nO2XyW8bZRjGc2MR3KlUCbIvzerxvo1nscfrTJzESexItOqhEhKXiiLUQlt6CydOgOAfgEZcWRTCJhC0BdETlUgc0ibx2LPbHieBBPKicUiENM4y40SNhB/puf+e932/9/u+pqaGGmqooYYaOkQCffHZMj3VU2HSVIWevFihJ2+qiYkP1NjEx+XY+Fw5Nv5zOZrKlqIprhwek8vUqFyiRv8oUaNQCo1AMZRcL5FJuUgkZYVk8grOzCs4c0/B6Fk5QM8oWOIdGY2/IftjLyq+CC64qc5lZ+qpJrMqxdLtKp1+S6XT9yt0plhhMlA1na5aTUyCGtc8AWpsHMpRzSkoR1JQDo9BOTwKu/BVB5NQJDUPQ5FgdozToGCaE6AEEqCgcVDQGMj+GMi+aNWSNyJKnvBdyUXd4n3UmSPBV5jMBZVJr+1BPyZ42RsByRMGyU2B5KJAdAQl3k7GDoRXmSlCpTN/nTZ4yRkC0RkE0UFUZCfZd0CA9I+nF54E0U6CYMVv14RfS06dVZnM9mmGF20ECAi+sYSiT+qrT2dIc/BjVfhiaATE4DBIGvRJwVtxEKwYiEP+bn0HhjOX6qk8S9CwevVNWLl8DVaxOMg4fSLwAoKBMBhganVg2kzld8dmKRCD7c1N0FT8fA6W4ingAvHjh7cEgBtEr9RanzNm4bWZX0Sj8F9tSTKsXr0FK/4ISFXw44Hnh1AtwPv6APTk92bhtZlfRCNQS6Uvv4XfI6NQ8EeOBZ4fRIEb8H2qD5BIPzALrx3YRX+4ZoDdbqy8dhOW3SEQfZG64PkBP3D9vp90AcrxCdYsvHZYDwqw1425b2CRGgHWHTINzw/4gOvzLOkPcXyiZBa+GsBHHRpgrxuvXodHdgIEDdwofL8XuF6PUKMD4xtm4bVVmfUeLcCuirNfQ5ZgIG8njMH3eaHQ61b1AaKpv83Ca6sy6w2BUW1yPCwGEiAYgOd6PZDvcW3pApQiWgBz8Nqez3rMBogDbwC+cM4NhR7Xuj5AdGzDLLx2SWXdQUPwxdmvIIslgNWgjcFDvsfJ6kcoMlYyC69dUlk3eSTwLVGC5Vdeh4fajWo1Dl91l/OBvgPhMdYsvHbDLrjII1V9AUtArgpueGyg6m4nsJ32O/oA1Oiv9TyJF5z7B9gS5Z2qIxjwNrwu+HyXA/Kd9s90AYqhke/qec/vF0Bblwt4AnI23NCq5PaHB7bD9qG+A8Hk7Xo+IwsOsnbVrRjw2q4/Jvh8hx3y7ba3awQYma7nJ7VgJ2D7z53ntPLJbHXD5Oy44UuKOxwecu3IyzVGaPhSPT+pVScJy5evwaOXrsBDGw68gzgReLbdCmwLEtUHIEbIer6BoouCgiMIBe1dY/Rt02cAvg2B1ResnboAIpo8qxDM9ol9A48Jnm21bMy3tT3RVEsKTv9wuuERYJstH9WE/zcAJmP01mmFzzVb1HxLf2/TQZIDifMKmlg7bfBs85C40jKoP7y1VMTCrTIam5Z8sV9kb7T42OBbLVKuBbnDtlhucM/bnmsyKw5FnxG94R7REwqKDuqC6AzdEB3B9wQHMSPYyS9EG35PQLB5HsFWeASTeUtA5gfR9T34ft9aod8rF/q8MtfrXs6fc/1W6Hbdzfe4Zgtdjpl8l/1dtsN2nW23nS902IhcB9KVO4M8bRq4oYYaaqih/43+AQy0b09LS6azAAAAAElFTkSuQmCC"
                alt="Youtube"
              />
            </a>
            <a href={data.admin.pinterest}>
              <img
                src="data:image/png;base64,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"
                alt="pinterest"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
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
          {data.movies
            .filter((m) => m.rating > 8.5)
            .slice(0, 12)
            .map((m, i) => (
              <Link
                key={i}
                to={`mymovies/${m.movieName}`}
                className="mcard-link"
              >
                <div className="mcard">
                  <img src={m.imageUrl} alt="" />
                  <div className="mcard-info">
                    <div>
                      <h3>{m.movieTitle}</h3>
                      <a href={`mymovies/${m.movieName}`}>
                        Watch
                        <br />
                        Now
                      </a>
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
              <a href="movies">Watch more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="featured">
        <h2>
          <span>Featured</span> Movies
        </h2>
        <div className="features">
          {data.movies
            .filter((f) =>
              Object.values(f).some(
                (value) =>
                  typeof value === "string" &&
                  value.toLowerCase().includes("featured")
              )
            )
            .slice(0, 4)
            .map((f, i) => (
              <div key={i} className="feature">
                <img src={f.imageUrl} alt="" />
                <h3>{f.movieTitle}</h3>
                <p>{f.description}</p>
                <a href={f.link}>Watch Now</a>
              </div>
            ))}
          {/* <div className="feature">
            <img src="/peakpx.jpg" alt="" />
            <h3>Movie Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quod, voluptates, quae, quos lo
            </p>
            <a href="movie">Watch Now</a>
          </div>
          <div className="feature">
            <img src="/peakpx (1).jpg" alt="" />
            <h3>Movie Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quod, voluptates, quae, quos
            </p>
            <a href="movie">Watch Now</a>
          </div>
          <div className="feature">
            <img src="/peakpx (1).jpg" alt="" />
            <h3>Movie Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quod, voluptates, quae, quos
            </p>
            <a href="movie">Watch Now</a>
          </div>
          <div className="feature">
            <img src="/peakpx (1).jpg" alt="" />
            <h3>Movie Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quod, voluptates, quae, quos
            </p>
            <a href="movie">Watch Now</a>
          </div> */}
        </div>
      </div>
      <div className="aboutus">
        <h2>About Us</h2>
        <p>
          Welcome to <span>Movie Mania</span>, where passion for cinema meets
          the thrill of entertainment! I'm <span>Devraj</span>, the cinephile
          extraordinaire behind this cinematic wonderland. From the silver
          screen to the digital realm, I live and breathe movies, TV series, and{" "}
          <span>web series</span>, embracing the mesmerizing world of
          storytelling.
        </p>
        <br />

        <p>
          At <span>Movie Mania</span>, we're not just another film hub; we're
          your ultimate destination for reviews that sizzle,{" "}
          <span>spoilers</span> that ignite your curiosity, and{" "}
          <span>download</span> options that let you dive deep into the heart of
          cinematic brilliance. Whether you're craving the latest
          <span>blockbuster buzz</span> or seeking hidden gems waiting to be
          discovered, we've got you covered.
        </p>
        <br />
        <p>
          Join me on this electrifying journey through the realms of
          <span>imagination</span> and <span>excitement</span>. Let's explore,
          discuss, and celebrate the magic of movies together at{" "}
          <span>Movie Mania</span>, where every frame tells a story, and every
          click unlocks a world of infinite possibilities. Get ready to unleash
          your inner movie maven and embark on an
          <span>adventure like no other</span>!
        </p>
        <br />
        <p>
          Lights, camera, action – let the <span>Movie Mania</span> begin!
        </p>
      </div>
    </div>
  );
};

const Page404 = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <a href="/" className="link_404">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mymoviecontent = () => {
  let { name } = useParams();
  let movie = data.movies.find((m) => m.movieName === name);
  return (
    <div className="mvmncnt">
      <div className="mvcnt">
        <img src={movie.imageUrl} alt="" />
        <div className="mvblr"></div>
        <div className="mvimage">
          <img src={movie.imageUrl} alt="" />
        </div>
        <div className="mvinfo">
          <h2>{movie.movieTitle}</h2>
          <p>
            <span>Rating:</span> {movie.rating}
          </p>
          <p>
            <span>Genre:</span> {movie.genre}
          </p>
          <p>{movie.description}</p>
          <div className="mvbtn">
            <a href="p/id">Watch Now</a>
            <a href="d/id">Download</a>
          </div>
        </div>
      </div>
    </div>
  );
};
const MovieContent = () => {
  let { name } = useParams();
  const [m, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${name}?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTEzNzFkYjZlNDdlMDNjNTNjNWUxNDY0ZDE3MjQzYSIsInN1YiI6IjY2NDMxNDc5YjFmM2EzMTUzYTk2MTRmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UlzDdKnvRQ_g2FCNjqlNGRRzclT8g-SOfoA2dtYPH6Y",
        },
      };

      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setMovie(json);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchData();
  }, []);
  console.log(m);
  return (
    <div className="mvmncnt">
      <div className="mvcnt">
        <img src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`} alt="" />

        <div className="mvblr"></div>
        <div className="mvimage">
          <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt="" />
        </div>
        <div className="mvinfo">
          <h2>{m.title}</h2>
          <p>
            <span>Rating:</span> {m.vote_average}
          </p>
          <p>
            <span>Genre:</span>{" "}
            {m.genres?.map((genre) => genre.name).join(", ")} <br />
            <br />
            {m.overview}
          </p>
          <div className="mvbtn">
            <a href="p/id">Watch Now</a>
            <a href="d/id">Download</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTEzNzFkYjZlNDdlMDNjNTNjNWUxNDY0ZDE3MjQzYSIsInN1YiI6IjY2NDMxNDc5YjFmM2EzMTUzYTk2MTRmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UlzDdKnvRQ_g2FCNjqlNGRRzclT8g-SOfoA2dtYPH6Y",
        },
      };

      try {
        const res = await fetch(url, options);
        const json = await res.json();
        console.log(json);
        setMovies(json.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mcard-cont">
      <div className="mdata">
        <h2>
          <span>Now</span> Showing
        </h2>
        <p>Latest movies in theatres</p>
      </div>
      <div className="mcards">
        {movies.map((m, i) => (
          <Link key={i} to={`${m.id}`} className="mcard-link">
            <div key={i} className="mcard">
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt=""
              />
              <div className="mcard-info">
                <div>
                  <h3>{m.title}</h3>
                  <a href={`movies/${m.id}`}>Watch Now</a>
                  <p>{m.overview}</p>
                  <h5>Rating: {m.vote_average} ★★★★★</h5>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export {
  Navbar,
  Sidebar,
  Homepage,
  Footer,
  Page404,
  MovieContent,
  Movies,
  Mymoviecontent,
};
