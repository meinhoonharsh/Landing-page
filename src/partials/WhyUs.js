import React from "react";
import "./styles/WhyUs.scss";

export default function WhyUs() {
  return (
    <>
      <div className="s3 whyus">
        <div className="s3-container">
          <div
            data-w-id="dd382521-3a47-1d9a-0f32-82e357f71309"
            className="s3-info-container"
          >
            <h2 className="h2 is-small-h2">Why Invest with Us?</h2>
            <p className="p is-s3-p">
              We are bridging the gap between conventional asset and Decentralized Finance.
              We are experts of both the Real Estate and Blockchain industry.
            </p>
            <div className="s3-list-container">
              <div className="s3-list-item">
                <img
                  src="images/Icon-Reviews.svg"
                  loading="lazy"
                  alt=""
                  className="s3-icon"
                />
                <div className="s3-item-description">
                  Diversify your portfolio and invest as high/low as you want.
                </div>
              </div>
              <div className="s3-list-item">
                <img
                  src="images/Icon-Secure.svg"
                  loading="lazy"
                  alt=""
                  className="s3-icon"
                />
                <div className="s3-item-description">
                  Hassle-free investing with high liquidity.
                </div>
              </div>
              <div className="s3-list-item">
                <img
                  src="images/Icon-Decentralized.svg"
                  loading="lazy"
                  alt=""
                  className="s3-icon"
                />
                <div className="s3-item-description">
                  We handpick every property, with high IRR, after complete due
                  diligence.
                </div>
              </div>
              <div className="s3-list-item">
                <img
                  src="images/Icon-Experience.svg"
                  loading="lazy"
                  alt=""
                  className="s3-icon"
                />
                <div className="s3-item-description">
                  Bridge up the gap between conventional Real Estate and Open
                  Finance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
