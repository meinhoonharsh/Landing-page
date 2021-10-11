import React from "react";
import { Card, Avatar } from "antd";
import { Col, Row } from "antd";
import "./Why.css";
import equality from "../../src/equality.jpg";
import liquidity from "../../src/liquidity.webp";
import trust from "../../src/trust.jpg";
import barrier from "../../src/barrier.webp";

const { Meta } = Card;

function Why() {
  return (
    <>
      <Row style={{ marginBottom: "4%" }}>
        <Col span={22} offset={2}>
          <h1 className={"WhyHeading"}> Why Real Estate Tokenization </h1>{" "}
          <Row>
            <Col span={10}>
              <Card
                style={{
                  width: 450,
                  borderRadius: true,
                  padding: 0,
                  margin: "5% auto",
                  //   margin: "auto",
                }}
                cover={<img alt="example" src={equality} />}
              >
                {" "}
                {/* <Meta
                                                  description=" We define a bitcoin as a chain of digital signatures. Each
                                      owner transfers bitcoin to the next by digitally signing a
                                      hash of the previous transaction and the public key of the
                                      next owner and adding these to the end of the coin. A payee
                                      can verify the signatures to verify the chain of ownership."
                                                /> */}{" "}
                <h2> Democratization </h2>{" "}
                <p>
                  {" "}
                  Fractionalization is a key to democratization.It provides
                  opportunities to invest as low or as high as you want.Since
                  crypto space is gaining a lot of attraction from the young
                  generation, fractionalization will allow these young investors
                  to invest in real estate even with whatever savings they have.{" "}
                </p>{" "}
              </Card>{" "}
            </Col>{" "}
            <Col span={10}>
              <Card
                style={{ width: 450, float: "right", margin: "5% auto" }}
                cover={<img alt="example" src={liquidity} />}
              >
                {" "}
                {/* <Meta
                                                      avatar={
                                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                      }
                                                      title="Card title"
                                                      description=" We define a bitcoin as a chain of digital signatures. Each
                                          owner transfers bitcoin to the next by digitally signing a
                                          hash of the previous transaction and the public key of the
                                          next owner and adding these to the end of the coin. A payee
                                          can verify the signatures to verify the chain of ownership."
                                                    /> */}{" "}
                <h2> High Liquidity </h2>{" "}
                <p>
                  {" "}
                  Real estate is a highly illiquid asset.Tokenizing solves the
                  liquidity problem by allowing fractional ownership and
                  availability of a secondary market.{" "}
                </p>{" "}
              </Card>{" "}
            </Col>{" "}
          </Row>{" "}
          <Row>
            <Col span={10}>
              <Card
                style={{
                  width: 450,
                  borderRadius: true,
                  padding: 0,
                  margin: "5% auto",
                }}
                cover={
                  <img
                    alt="example"
                    src={trust}
                    // style={{ height: 200 }}
                  />
                }
              >
                {" "}
                {/* <Meta
                                                      description=" We define a bitcoin as a chain of digital signatures. Each
                                          owner transfers bitcoin to the next by digitally signing a
                                          hash of the previous transaction and the public key of the
                                          next owner and adding these to the end of the coin. A payee
                                          can verify the signatures to verify the chain of ownership."
                                                    /> */}{" "}
                <h2> Transparency and Security </h2>{" "}
                <p>
                  {" "}
                  Blockchain is a public ledger that is immutable, this makes it
                  almost impossible to hack and indulge in frauds like double -
                  spending.This makes the whole process of issuing and
                  distributing tokens very transparent and secure.{" "}
                </p>{" "}
              </Card>{" "}
            </Col>{" "}
            <Col span={10}>
              <Card
                style={{
                  width: 450,
                  margin: "auto",
                  float: "right",
                  margin: "5% auto",
                }}
                cover={<img alt="example" src={barrier} />}
              >
                {" "}
                {/* <Meta
                                                         
                                                          title="Card title"
                                                          description=" We define a bitcoin as a chain of digital signatures. Each
                                              owner transfers bitcoin to the next by digitally signing a
                                              hash of the previous transaction and the public key of the
                                              next owner and adding these to the end of the coin. A payee
                                              can verify the signatures to verify the chain of ownership."
                                                        /> */}{" "}
                <h2> No Geographical Barrier </h2>{" "}
                <p>
                  {" "}
                  Investors can invest in any real estate without demographical
                  limitations.{" "}
                </p>{" "}
              </Card>{" "}
            </Col>{" "}
          </Row>{" "}
        </Col>{" "}
      </Row>{" "}
    </>
  );
}

export default Why;
