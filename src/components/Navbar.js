import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./Navbar.css";
import Home from "./pages/Home";
import About_us from "./pages/About-us";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
           <img src="/images/logo.png"  />BRICKSTOX
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About_us} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default Navbar;
