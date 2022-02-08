import React from "react";

export default function Landing() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-info-container">
          <div className="hero-info">
            <div className="hero-subheader">Real Estate</div>
            <h1 className="h1">Ecosystem in Decentralized Finance</h1>
            <p className="p">
              We aim to democratize real estate investments so that anyone from
              anywhere can invest in real estate and leverage it in defi world.
            </p>
            <div className="hero-buttons-container">
              <a
                href="https://app.futureswap.com/"
                className="filled-button is-filled-hero-button w-button"
              >
                Start Trading
              </a>
              <a
                href="https://app.futureswap.com/pool"
                className="outlined-button w-button"
              >
                Add Liquidity
              </a>
            </div>
          </div>
        </div>
        <div className="waves-wrapper">
          <div className="waves-container">
            <img src="assets/img/landing-02.png" />
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
