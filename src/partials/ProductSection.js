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
                  <h3 className="h3">All-time trade volume</h3>
                  <div className="s1-numbers">
                    $<span className="counter">4,200,368,117</span>
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
                  <h3 className="h3">All-time trade volume</h3>
                  <div className="s1-numbers">
                    $<span className="counter">4,200,368,117</span>
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
                  <h3 className="h3 is-green-h3">Total Trades</h3>
                  <div className="s1-numbers">
                    <span className="counter">10,434</span>
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
