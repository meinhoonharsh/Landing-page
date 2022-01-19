import React from "react";
import "../../App.css";
import { Row, Col} from "antd";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Why from "../Why";
import Token_usecases from "../Token-usecases";
import Features from "../Features";
function Home() {
  return (
    <>
      <Row>
        <Col span={24}>
          <HeroSection />
          < Features />
          <Why />
          <Token_usecases />
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default Home;
