import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import {
  BookOutlined,
  PieChartOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
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
          <Row>
            <Col span={18} offset={3}>
              <div className="site-card-wrapper">
                <h1 className="WhyHeading">
                  {" "}
                  Why Choose Us?
                </h1>
                <Row gutter={16}>
                  <Col span={7} style={{ margin: "2%" }}>
                    <Card className="Feature-card">
                      <h2>
                        <CheckCircleOutlined /> Smart Contact
                      </h2>
                      <p>
                        Our Smart contracts will ensure that timely dividends
                        and rights that are promised are given to the token
                        holders. It will also allow secondary trading of the
                        tokens and .
                      </p>
                    </Card>
                  </Col>
                  <Col span={7} style={{ margin: "2%" }}>
                    <Card className="Feature-card">
                      <h2>
                        <BookOutlined /> Marketplaces
                      </h2>
                      <p>
                        {" "}
                        Brickstox is a marketplace for primary distribution and
                        secondary trading of estate tokens. will also allow
                        secondary trading of the tokens and sending of metadata
                        with the token.
                      </p>
                    </Card>
                  </Col>
                  <Col span={7} style={{ margin: "2%" }}>
                    <Card className="Feature-card">
                      <h2>
                        <PieChartOutlined /> Hand-picked
                      </h2>
                      <p>
                        Trustworthy high yielding real estates are listed on
                        Brickstox. will also allow secondary trading of the
                        tokens and sending of metadata with the token metadata
                        with the token
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Features;
