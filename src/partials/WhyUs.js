import React from "react";
import "./styles/WhyUs.scss";

export default function WhyUs() {
  return (
    <>
      <div className="s3 whyus">
        <div className="s3-container">
          <div className="s3-content">
            <h2 className="h2 is-small-h2">Why Invest with Us?</h2>
            <p className="p">
              We are bridging the gap between conventional asset and
              Decentralized Finance.
            </p>
            <img src="/assets/img/whyus/desktop.png" alt="" className="whyusimg desktop" />
            <img src="/assets/img/whyus/tablet.png" alt="" className="whyusimg tablet" />
            <img src="/assets/img/whyus/mobile1.png" alt="" className="whyusimg mobile" />


          </div>
        </div>
      </div>
    </>
  );
}
