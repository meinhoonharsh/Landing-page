import React from "react";

export default function ProductSection() {
  return (
    <>
      <div className="s1">
        <div className="s1-wrapper">
          <div className="s1-container">
            <div className="s1-block-container">
              <div className="s1-block">
                <div className="s1-content-container">
                  <h3 className="h3"></h3>
                  <div className="s1-numbers">
                    <span className="counter">16% IRR</span>
                  </div>
                </div>
                <div className="s1-gradient-glow" />
                <div className="s1-gradient-mask" />
                <div className="s1-gradient-outline" />
              </div>
            </div>
          </div>
          <div className="s1-container">
            <div className="s1-block-container">
              <div className="s1-block">
                <div className="s1-content-container">
                  <h3 className="h3">Marketplace</h3>
                  <div className="s1-numbers">
                    <span className="counter">Choose from a variety of listed Tokens</span>
                  </div>
                </div>
                <div className="s1-gradient-glow" />
                <div className="s1-gradient-mask" />
                <div className="s1-gradient-outline" />
              </div>
            </div>
            <div className="s1-block-container is-total-trades-block-container">
              <div className="s1-block">
                <div className="s1-content-container">
                  <h3 className="h3 is-green-h3">Regular Returns</h3>
                  <div className="s1-numbers">
                    <span className="counter">Earn from regular rent and price appreciation</span>
                  </div>
                </div>
                <div className="s1-gradient-glow is-green-gradient-glow" />
                <div className="s1-gradient-mask" />
                <div className="s1-gradient-outline" />
              </div>
            </div>
            <div className="s1-block-container is-total-trades-block-container">
              <div className="s1-block">
                <div className="s1-content-container">
                  <h3 className="h3 is-green-h3">Trade</h3>
                  <div className="s1-numbers">
                    <span className="counter">Liquidate anytime</span>
                  </div>
                </div>
                <div className="s1-gradient-glow is-green-gradient-glow" />
                <div className="s1-gradient-mask" />
                <div className="s1-gradient-outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
