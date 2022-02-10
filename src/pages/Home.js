import React from "react";
import HowItWorks from "../partials/HowItWorks";
import Landing from "../partials/Landing";
import Navbar from "../partials/Navbar";
import ProductSection from "../partials/ProductSection";
import VersatileToken from "../partials/VersatileToken";
import WhyUs from "../partials/WhyUs";

export default function Home() {
  return (
    <>
      <div className="page-wrap">
        <Navbar />
        <Landing />
        <ProductSection />
        <HowItWorks />
        <WhyUs />
        <VersatileToken />

        <div className="footer">
          <div className="footer-container">
            <div className="footer-legal">
              Copyright ©<span className="copyright-year">year</span> Futureswap
              <br />
              All rights reserved &nbsp;| &nbsp;
              <a href="#" target="_blank" className="privacy-link">
                Privacy
              </a>
            </div>
            <img
              src="images/Logo-Futureswap.svg"
              loading="lazy"
              alt=""
              className="footer-logo"
            />
            <div className="social-container">
              <a
                href="https://twitter.com/futureswapx"
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
                href="https://discord.com/invite/gRtqvfqW4V"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
