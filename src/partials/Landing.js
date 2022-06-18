import React from "react";
import './styles/Landing.scss'

export default function Landing() {
  return (
    <>
      <div className="hero-wrapper landing">
        <div className="hero-info-container">
          <div className="hero-info">
            <div className="hero-subheader gtext">Introducing</div>
            <h1 className="h1">Real Estate Backed Tokens</h1>
            <p className="p">
              Invest in a non-volatile, familiar asset backed Tokens with real world value and earn regular returns.
            </p>
            <div className="hero-buttons-container">
              <a
                href="https://discord.gg/8pYU3yDNAH"
                className="filled-button is-filled-hero-button w-button"
                style={{
                  position: "relative",
                }}
              >
                Join Discord
              </a>
              <a
                href="#whyusvideo"
                className="outlined-button w-button gtext"
              >
                How It Works!
              </a>
            </div>
          </div>
        </div>
        <div className="waves-wrapper">
          <div className="waves-container">
            <img src="assets/img/landing.png"  />
            
          
          </div>
        </div>
      </div>
    </>
  );
}
