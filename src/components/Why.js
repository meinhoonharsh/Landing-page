import React from "react";
import "./Why.css";

function Why() {
  return (
    <div className="Why-container">
      <h1 className="Why-heading">Why invest with us?</h1>
      <div className="why-main">
          <img
            src="/images/building-2.svg"
          />
          <ul>
            <li>Diversify your portfolio and invest as high/low as you want. </li>
            <li>Hassle-free investing with high liquidity.</li>
            <li>We handpick every property, with high IRR, after complete due diligence.</li>
            <li>At Brickstox, we are bridging up the gap between conventional Real Estate and Open Finance.</li>
          </ul>
      </div>
    </div>
  );
}

export default Why;
