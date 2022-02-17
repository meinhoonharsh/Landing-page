import React from "react";
import './styles/Landing.scss'

export default function Landing() {
  return (
    <>
      <div className="hero-wrapper landing">
        <div className="hero-info-container">
          <div className="hero-info">
            <div className="hero-subheader gtext">Introducing</div>
            <h1 className="h1">Real Estate Backed NFTs</h1>
            <p className="p">
              Invest in a non-volatile, familiar asset backed NFT with real world value and earn regular returns.
            </p>
            <div className="hero-buttons-container">
              <a
                href="https://app.futureswap.com/"
                className="filled-button is-filled-hero-button w-button"
                style={{
                  position: "relative",
                }}
              >
                Discord
              </a>
              <a
                href="https://app.futureswap.com/pool"
                className="outlined-button w-button gtext"
              >
                Add Liquidity
              </a>
            </div>
          </div>
        </div>
        <div className="waves-wrapper">
          <div className="waves-container">
            <img src="assets/img/landing.png"  />
            <img src="assets/img/landing-brain.png" className="landing-brain" />
            <img src="assets/img/landing-bitcoin.png" className="landing-bitcoin" />
            {/* <img
                src="images/Graphic-Hero-Blur.jpg"
                loading="lazy"
                sizes="(max-width: 1279px) 100vw, 1250px"
                srcSet="
          images/Graphic-Hero-Blur-p-500.jpeg   500w,
          images/Graphic-Hero-Blur-p-800.jpeg   800w,
          images/Graphic-Hero-Blur-p-1080.jpeg 1080w,
          images/Graphic-Hero-Blur.jpg         1286w
        "
                alt=""
                className="hero-blurs"
              />
              <img
                src="images/Graphic-Purple-Wave.svg"
                data-w-id="263f6a83-5c78-daa1-24fe-f7abc4bc7923"
                alt=""
                className="purple-wave"
              />
              <img
                src="images/Graphic-Blue-Wave.svg"
                loading="lazy"
                data-w-id="a47fece7-889f-b8b6-1383-0e97bcca5444"
                alt=""
                className="blue-wave"
              />
              <img
                src="images/Graphic-Teal-Wave.svg"
                loading="lazy"
                data-w-id="bb040d50-17ca-554b-b660-c61e673dfc36"
                alt=""
                className="teal-wave"
              />
              <div
                data-w-id="06060a13-93bb-29b5-98d1-3a092dfdb004"
                className="hero-card-wrapper"
              >
                <a
                  href="https://app.futureswap.com/"
                  className="hero-card w-inline-block"
                >
                  <img
                    src="images/Icon-Ethereum.svg"
                    loading="lazy"
                    alt=""
                    className="hero-card-icon"
                  />
                  <div className="hero-card-info">
                    <div className="hero-card-name">
                      Ethereum <span className="hero-card-short">ETH</span>
                    </div>
                  </div>{" "}
                </a>
                <img
                  src="images/Graphic-Hero-Stem.svg"
                  loading="lazy"
                  alt=""
                  className="hero-card-stem"
                />
              </div>
              <div
                data-w-id="333e9f30-75cc-796d-5b16-5da1cb7e00a4"
                className="hero-card-wrapper is-bitcoin"
              >
                <a
                  href="https://app.futureswap.com/"
                  className="hero-card w-inline-block"
                >
                  <img
                    src="images/Icon-Bitcoin.svg"
                    loading="lazy"
                    alt=""
                    className="hero-card-icon"
                  />
                  <div className="hero-card-info">
                    <div className="hero-card-name">
                      Bitcoin <span className="hero-card-short">BTC</span>
                    </div>
                  </div>{" "}
                </a>
                <img
                  src="images/Graphic-Hero-Stem.svg"
                  loading="lazy"
                  alt=""
                  className="hero-card-stem"
                />
              </div>
              <div
                data-w-id="d07a390e-c3d6-57af-d4fc-97f57c9ec4f0"
                className="hero-card-wrapper is-chainlink"
              >
                <a
                  href="https://app.futureswap.com/"
                  className="hero-card w-inline-block"
                >
                  <img
                    src="images/Icon-Uniswap.svg"
                    loading="lazy"
                    alt=""
                    className="hero-card-icon"
                  />
                  <div className="hero-card-info">
                    <div className="hero-card-name">
                      Uniswap <span className="hero-card-short">UNI</span>
                    </div>
                  </div>{" "}
                </a>
                <img
                  src="images/Graphic-Hero-Stem.svg"
                  loading="lazy"
                  alt=""
                  className="hero-card-stem"
                />
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
