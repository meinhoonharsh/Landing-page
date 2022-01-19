import React from "react";
import "./Token-usecases.css";

function HowItWorks() {
  return (
    <div className="container">
      <h1 className="Token-usecases-heading">A Versatile Token</h1>

      <div className="Token-usecases-main">
        <div className="text">
          <p className="Sub-heading">
            {" "}
            Our on-platform liquidity pools let you seamlessly borrow, lend or
            swap your Real Estate Tokens.{" "}
          </p>
        </div>
        <div className="img">
          <img src="/images/flow-2.png" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
