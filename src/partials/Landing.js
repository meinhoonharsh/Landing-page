import React from "react";
import "./styles/Landing.scss";

export default function Landing() {
  return (
    <>
      <div className="hero-wrapper landing">
        <div className="hero-info-container">
          <div className="hero-info">
            {/* <div className="hero-subheader gtext">Now </div> */}
            <h1 className="h1">
              <span className="gtext">GEAR UP</span>
              <br />
              <span className="gtext"> YOUR NFT</span>
              <br />
              <span className="gtext"> PURCHASE</span>
            </h1>
            {/* <p className="p">
              Invest in a non-volatile, familiar asset backed Tokens with real
              world value and earn regular returns.
            </p> */}
            <div className="hero-buttons-container">
              <a
                href="https://discord.gg/Auqs3tGryT"
                className="filled-button is-filled-hero-button w-button"
                style={{
                  position: "relative",
                }}
              >
                Join Discord
              </a>
            </div>
          </div>
          <div className="video hero-video">
            <div className="video-wrapper">
              {/* <video autoPlay loop muted playsInline>
                <source src={Video} type="video/mp4" />
              </video> */}

              <h1 class="neon" data-text="U">
                <span class="flicker-1">G</span>
                <span class="flicker-2">E</span>
                <span>A</span>
                <span class="flicker-4">R</span>
              </h1>

              <span className="gear-box ">
                <i class="gear-1 gear fa fa-gear"></i>
                <i class="gear-2  gear fa fa-cog"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
