import React, { useState, useEffect } from "react";

export default function NAvbar() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  // const toggleMenu = () => {
  //   // document.querySelector('.w-nav-menu').style.display = "block"
  //   console.log("Toggling menu")
  // }

  useEffect(() => {
    // If window width is less than 768px, close the navbar
    if (window.innerWidth < 768) {
      setIsNavOpen(false);
    }
  }, []);

  useEffect(() => {
    document.querySelector(".w-nav-menu").style.display = isNavOpen
      ? "block"
      : "none";
  }, [isNavOpen]);

  return (
    <>
      <div
        data-collapse="medium"
        data-animation="over-right"
        data-duration={800}
        data-easing="ease-in-out-quart"
        data-easing2="ease-in-out-quart"
        data-w-id="312063b2-8b3a-4edc-dcfd-b7b68bda434c"
        role="banner"
        className="nav w-nav"
      >
        <div className="nav-container w-container">
          {/* <a
            href="index.html"
            aria-current="page"
            className="nav-logo-link w-nav-brand w--current"
          >
            <img
              src="assets/img/logo.png"
              loading="lazy"
              alt=""
              className="nav-logo"
            />
            <h2 style={{ color: "#fff" }}>GearFi</h2>
          </a> */}

          <div
            className="menu-button w-nav-button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className="menu-icon-container">
              <div className="menu-icon-top" />
              <div className="menu-icon-bottom" />
            </div>
          </div>
          <nav role="navigation" className="nav-menu-container w-nav-menu">
            <div className="nav-menu">
              <a
                data-w-id="b884066b-dfe0-b27f-d8b6-602283a3d9b0"
                href="/realnft"
                className="nav-link-block w-inline-block"
              >
                <img
                  src="images/Icon-Nav-Hover.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link"
                />
                <div className="nav-link-name"> Real NFT </div>
              </a>
              <a
                data-w-id="b884066b-dfe0-b27f-d8b6-602283a3d9b0"
                href="#"
                className="nav-link-block w-inline-block"
              >
                <img
                  src="images/Icon-Nav-Hover.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link"
                />
                <div className="nav-link-name">
                  {" "}
                  Marketplace{" "}
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      backgroundColor: "var(--bpink)",

                      borderRadius: "5px",
                      right: 0,
                      padding: "4px",
                      fontSize: "0.6em",
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              </a>
              <a
                href="https://discord.gg/8pYU3yDNAH"
                className="nav-link-block w-inline-block is-filled-hero-button w-button filled-button"
                style={{ color: "#07071c" }}
              >
                Early Access
              </a>
              <div className="nav-social-info">Follow us</div>
              <div className="nav-social-container">
                <a
                  href="https://twitter.com/futureswapx"
                  target="_blank"
                  className="social-holder is-nav-social-holder w-inline-block"
                >
                  <img
                    src="images/Icon-Twitter-Green.svg"
                    loading="lazy"
                    alt=""
                    className="green-social is-nav-green-social"
                  />
                </a>
                <a
                  href="https://discord.gg/futureswap"
                  target="_blank"
                  className="social-holder w-inline-block"
                >
                  <img
                    src="images/Icon-Discord-Green.svg"
                    loading="lazy"
                    alt=""
                    className="green-social is-nav-green-social"
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
