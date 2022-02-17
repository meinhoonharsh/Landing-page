import React from "react";
import "./styles/WhyUs.scss";

export default function WhyUs() {
  return (
    <>
      <div className="s3 whyus">
        <div className="s3-container">
          <div
            className="s3-content"
          >
            <h2 className="h2 is-small-h2">Why Invest with Us?</h2>
            <p className="p">
              We are bridging the gap between conventional asset and
              Decentralized Finance. We are experts of both the Real Estate and
              Blockchain industry.
            </p>
            <img src="/assets/img/whyus.png" alt="" className="whyusimg" />
          </div>
        </div>
      </div>
    </>
  );
}
