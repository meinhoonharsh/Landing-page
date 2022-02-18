import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-legal">
            Copyright ©<span className="copyright-year">2022</span> Brickstox
            <br />
            All rights reserved &nbsp;| &nbsp;
            <a href="#" target="_blank" className="privacy-link">
              Privacy
            </a>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <img
              src="assets/img/logo.png"
              loading="lazy"
              alt=""
              className="nav-logo"
            />
            <h2 style={{ color: "#fff" }}>Brickstox</h2>
          </div>
          <div className="social-container">
          <a
              href="https://twitter.com/brickstox"
              target="_blank"
              className="social-holder w-inline-block"
            >
              <img
                src="images/Icon-Twitter-Gray.svg"
                loading="lazy"
                alt=""
                className="gray-social"
              />
              <img
                src="images/Icon-Twitter-Green.svg"
                loading="lazy"
                alt=""
                className="green-social"
              />
            </a>
            <a
              href="https://discord.gg/vvjGTMkC"
              target="_blank"
              className="social-holder w-inline-block"
            >
              <img
                src="images/Icon-Discord-Gray.svg"
                loading="lazy"
                alt=""
                className="gray-social"
              />
              <img
                src="images/Icon-Discord-Green.svg"
                loading="lazy"
                alt=""
                className="green-social"
              />
            </a>
            {/* <a
              href="https://www.linkedin.com/company/the-ledger-company0"
              target="_blank"
              className="social-holder w-inline-block"
            >
              <img
                src="images/Icon-Discord-Gray.svg"
                loading="lazy"
                alt=""
                className="gray-social"
              />
              <img
                src="images/Icon-Discord-Green.svg"
                loading="lazy"
                alt=""
                className="green-social"
              />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
