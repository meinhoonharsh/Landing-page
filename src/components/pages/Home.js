import React from "react";
import "../../App.css";
import { Row, Col} from "antd";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Why from "../Why";
import HowItWorks from "../HowItWorks";
import Features from "../Features";
function Home() {
  return (
    <>
      <Row>
        <Col span={24}>
          <HeroSection />

          {/* <Why /> */}
          < Features />
          <HowItWorks />
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default Home;
