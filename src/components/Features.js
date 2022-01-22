import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import "./Features.css";

function Features() {
  return (
    <>
      <div className="container">
        <div className="bulletBlock">
          <ul>
            <li>
              <img
                className="small-icons"
                src="/images/real-estate.png"
                style={{ marginTop: "-10px" }}
              />
              <h1>Real Estate backed Tokens</h1>
            </li>{" "}
            <li>
              {" "}
              <img
                className="small-icons"
                src="/images/market-investment.png"
                style={{ marginTop: "-15px" }}
              />
              <h1>Stable and Regular Returns</h1>
            </li>
            <li>
              {" "}
              <img className="small-icons" src="/images/liquidate.png" />
              <h1>Lend, Borrow & Swap</h1>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div>

          <div className="how-it-works">
            <Row>
              <Col span={18} offset={3}>
                <div className="site-card-wrapper">
                  <h1 className="WhyHeading"> How it works?</h1>
                </div>
              </Col>
            </Row>
           <Row>
           <img className= "flowchart center" src="/images/flow.svg" />
           </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
