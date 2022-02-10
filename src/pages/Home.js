import React from "react";
import HowItWorks from "../partials/HowItWorks";
import Landing from "../partials/Landing";
import Navbar from "../partials/Navbar";
import ProductSection from "../partials/ProductSection";
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
        <div className="s4">
          <div className="s4-container">
            <div
              data-w-id="dfca8fac-85d5-84b0-7a50-f89316e1f1d3"
              className="s4-info-container"
            >
              <h2 className="h2 is-small-h2 is-s4-h2">
                Built on ETH. Owned by you.
              </h2>
              <p className="p is-s4-p">
                Unlike Palpatine, we love democracy. That’s why our platform is
                designed to be governed by you.
                <br />
                <br />
                Want leveraged exposure on your favorite crypto assets? Get
                enough people from the Futureswap community to back you and the
                protocol will automatically add it as an exchange.
                <br />‍<br />
                Want to passively earn high yields from trade fees and FST
                rewards? Simply provide stable tokens as liquidity.
              </p>
            </div>
            <div className="s4-image-wrapper">
              <div
                data-w-id="5bb8f8fa-644b-11c0-b4de-5a1a38982b81"
                className="s4-image-container"
              >
                <img
                  src="images/Graphic-Owned-Coins.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Owned-Coins-p-500.png  500w,
            images/Graphic-Owned-Coins-p-800.png  800w,
            images/Graphic-Owned-Coins.png       1266w
          "
                  alt=""
                  className="s6-cat-image"
                />
                <img
                  src="images/Graphic-Owned-Block.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Owned-Block-p-500.png   500w,
            images/Graphic-Owned-Block-p-800.png   800w,
            images/Graphic-Owned-Block-p-1080.png 1080w,
            images/Graphic-Owned-Block.png        1266w
          "
                  alt=""
                  className="s4-base-image"
                />
                <img
                  src="images/Graphic-Owned-Planets.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Owned-Planets-p-500.png   500w,
            images/Graphic-Owned-Planets-p-800.png   800w,
            images/Graphic-Owned-Planets-p-1080.png 1080w,
            images/Graphic-Owned-Planets.png        1266w
          "
                  alt=""
                  className="s4-planets-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="s5">
          <div className="s5-container">
            <div className="s5-image-wrapper">
              <div
                data-w-id="8dd876a8-21f7-d99a-e333-24df4c83038a"
                className="s5-image-container"
              >
                <img
                  src="images/Graphic-Layer-Top.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Layer-Top-p-500.png   500w,
            images/Graphic-Layer-Top-p-800.png   800w,
            images/Graphic-Layer-Top-p-1080.png 1080w,
            images/Graphic-Layer-Top.png        1260w
          "
                  alt=""
                  className="s5-top-image"
                />
                <img
                  src="images/Graphic-Layer-Coins.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Layer-Coins-p-500.png  500w,
            images/Graphic-Layer-Coins.png       1260w
          "
                  alt=""
                  className="s5-coins-image"
                />
                <img
                  src="images/Graphic-Layer-Bottom.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Layer-Bottom-p-500.png  500w,
            images/Graphic-Layer-Bottom-p-800.png  800w,
            images/Graphic-Layer-Bottom.png       1260w
          "
                  alt=""
                  className="s5-bottom-image"
                />
              </div>
            </div>
            <div
              data-w-id="67031d51-0f69-11b7-13bc-3146d884229d"
              className="s5-info-container"
            >
              <h2 className="h2 is-small-h2">
                Take full advantage of everything Layer 2 has to offer.
              </h2>
              <div className="div-block-21-copy-copy">
                <div className="s5-list-item">
                  <img
                    src="images/Icon-Fees.svg"
                    loading="lazy"
                    alt=""
                    className="s5-list-icon"
                  />
                  <div className="s5-item-description">
                    Say goodbye to eye-watering gas fees
                  </div>
                </div>
                <div className="s5-list-item">
                  <img
                    src="images/Icon-Withdrawals.svg"
                    loading="lazy"
                    alt=""
                    className="s5-list-icon"
                  />
                  <div className="s5-item-description">
                    Get your money in an instant with superfast withdrawals
                  </div>
                </div>
                <div className="s5-list-item">
                  <img
                    src="images/Icon-Private.svg"
                    loading="lazy"
                    alt=""
                    className="s5-list-icon"
                  />
                  <div className="s5-item-description">
                    Stay completely secure with optimistic rollups
                  </div>
                </div>
                <div className="s5-list-item">
                  <img
                    src="images/Icon-Instant.svg"
                    loading="lazy"
                    alt=""
                    className="s5-list-icon"
                  />
                  <div className="s5-item-description">
                    Execute your trades instantly
                  </div>
                </div>
                <div className="s5-list-item">
                  <img
                    src="images/Icon-Device.svg"
                    loading="lazy"
                    alt=""
                    className="s5-list-icon"
                  />
                  <div className="s5-item-description">
                    Trade from any device
                    <br />
                  </div>
                </div>
                <div className="s5-list-item">
                  <img
                    src="images/Icon-Single-Account.svg"
                    loading="lazy"
                    alt=""
                    className="s5-list-icon"
                  />
                  <div className="s5-item-description">
                    Gain leveraged exposure on limitless assets&nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s6">
          <div className="s6-container">
            <div
              data-w-id="649dbab4-e00a-e03a-732f-5ed95dca54ab"
              className="s6-info-container"
            >
              <h2 className="h2 is-small-h2">
                Come for the memes stay for the protocol.
              </h2>
              <p className="p is-s6-p">
                Sure, having the best price execution on the market is great.
                But is it better than having a Discord server full of spicy
                memes? We’re not sure.
                <br />‍<br />
                Join our community of meme-loving masterminds and get the inside
                scoop on what’s coming down the pipeline.
              </p>
              <a
                href="https://discord.com/invite/gRtqvfqW4V"
                className="filled-button w-button"
              >
                I need memes
              </a>
            </div>
            <div className="s6-image-wrapper">
              <div
                data-w-id="13a914f3-4ae0-191c-55b4-82b0730137d9"
                className="s6-image-container"
              >
                <img
                  src="images/Graphic-Meme-Cat.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Meme-Cat-p-800.png   800w,
            images/Graphic-Meme-Cat-p-1080.png 1080w,
            images/Graphic-Meme-Cat.png        1412w
          "
                  alt=""
                  className="s6-cat-image"
                />
                <img
                  src="images/Graphic-Meme-Message.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Meme-Message-p-500.png   500w,
            images/Graphic-Meme-Message-p-800.png   800w,
            images/Graphic-Meme-Message-p-1080.png 1080w,
            images/Graphic-Meme-Message.png        1412w
          "
                  alt=""
                  className="s6-message-image"
                />
                <img
                  src="images/Graphic-Meme-Card.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Meme-Card-p-500.png   500w,
            images/Graphic-Meme-Card-p-800.png   800w,
            images/Graphic-Meme-Card-p-1080.png 1080w,
            images/Graphic-Meme-Card.png        1412w
          "
                  alt=""
                  className="s6-card-image"
                />
                <img
                  src="images/Graphic-Meme-Rocket.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                  srcSet="
            images/Graphic-Meme-Rocket-p-500.png  500w,
            images/Graphic-Meme-Rocket-p-800.png  800w,
            images/Graphic-Meme-Rocket.png       1412w
          "
                  alt=""
                  className="s6-rocket-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="s7">
          <div
            data-w-id="a70575d2-7e3d-81a2-0c9b-379fabcedf06"
            className="s7-container"
          >
            <h2 className="h2 is-vc-h2">Backed by the best</h2>
            <div className="logos-wrapper">
              <div
                data-w-id="3a116b48-7105-1c76-ee27-722232aa6550"
                className="logo-block"
              >
                <a
                  href="https://framework.ventures/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-Framework-Gray.svg"
                    loading="eager"
                    data-w-id="3a116b48-7105-1c76-ee27-722232aa6552"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-Framework-Green.svg"
                    loading="lazy"
                    data-w-id="3a116b48-7105-1c76-ee27-722232aa6553"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
              <div
                data-w-id="beeea06e-0600-6df0-12da-b5a7370b7121"
                className="logo-block"
              >
                <a
                  href="https://ribbitcap.com/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-Ribbit-Gray.svg"
                    loading="eager"
                    data-w-id="beeea06e-0600-6df0-12da-b5a7370b7123"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-Ribbit-Green.svg"
                    loading="lazy"
                    data-w-id="beeea06e-0600-6df0-12da-b5a7370b7124"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
              <div
                data-w-id="5085e286-d2db-2a49-acb3-706dc6e2a4a0"
                className="logo-block"
              >
                <a
                  href="https://www.nascent.xyz/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-Nascent-Gray.svg"
                    loading="eager"
                    data-w-id="5085e286-d2db-2a49-acb3-706dc6e2a4a2"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-Nascent-Green.svg"
                    loading="lazy"
                    data-w-id="5085e286-d2db-2a49-acb3-706dc6e2a4a3"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
              <div
                data-w-id="7f68df3c-e24f-2ea1-72fc-8fe6f5775b6e"
                className="logo-block"
              >
                <a
                  href="https://trueventures.com/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-True-Gray.svg"
                    loading="eager"
                    data-w-id="7f68df3c-e24f-2ea1-72fc-8fe6f5775b70"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-True-Green.svg"
                    loading="lazy"
                    data-w-id="7f68df3c-e24f-2ea1-72fc-8fe6f5775b71"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
              <div
                data-w-id="f6cc5286-d7b0-7a7c-e2a6-69c5f7dcdccf"
                className="logo-block"
              >
                <a
                  href="https://www.threearrowscap.com/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-3-Arrows-Gray.svg"
                    loading="eager"
                    data-w-id="f6cc5286-d7b0-7a7c-e2a6-69c5f7dcdcd1"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-3-Arrows-Green.svg"
                    loading="lazy"
                    data-w-id="f6cc5286-d7b0-7a7c-e2a6-69c5f7dcdcd2"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
              <div
                data-w-id="779abac9-a96d-f368-bd2d-6d0db5bace4c"
                className="logo-block"
              >
                <a
                  href="https://www.ideocolab.com/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-IDEO-Gray.svg"
                    loading="eager"
                    data-w-id="779abac9-a96d-f368-bd2d-6d0db5bace4e"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-IDEO-Green.svg"
                    loading="lazy"
                    data-w-id="779abac9-a96d-f368-bd2d-6d0db5bace4f"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
              <div
                data-w-id="93173541-55e4-2cfa-1ea4-c616f71b75b6"
                className="logo-block"
              >
                <a
                  href="https://www.placeholder.vc/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-Placeholder-Gray.svg"
                    loading="eager"
                    data-w-id="93173541-55e4-2cfa-1ea4-c616f71b75b8"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-Placeholder-Green.svg"
                    loading="lazy"
                    data-w-id="93173541-55e4-2cfa-1ea4-c616f71b75b9"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
              <div
                data-w-id="db6f446c-f98a-f85e-c008-1841f6abc664"
                className="logo-block"
              >
                <a
                  href="https://www.parafi.capital/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-Parafi-Gray.svg"
                    loading="eager"
                    data-w-id="db6f446c-f98a-f85e-c008-1841f6abc666"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-Parafi-Green.svg"
                    loading="lazy"
                    data-w-id="db6f446c-f98a-f85e-c008-1841f6abc667"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
              <div
                data-w-id="296c1d86-7531-60e4-7844-73c5baf38e8b"
                className="logo-block"
              >
                <a
                  href="http://1kx.network/"
                  target="_blank"
                  className="logo-link w-inline-block"
                >
                  <img
                    src="images/Logo-1kx-Gray.svg"
                    loading="eager"
                    data-w-id="296c1d86-7531-60e4-7844-73c5baf38e8d"
                    alt=""
                    className="gray-logo"
                  />
                  <img
                    src="images/Logo-1kx-Green.svg"
                    loading="lazy"
                    data-w-id="296c1d86-7531-60e4-7844-73c5baf38e8e"
                    alt=""
                    className="green-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
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
