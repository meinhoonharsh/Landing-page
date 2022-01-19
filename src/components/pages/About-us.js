import React from "react";
import "../../App.css";
import "./About-us.css";

function About_us() {
  return (
    <>
      <div className="main">
        <div className = "Heading">About Us</div>

        <div className="Text">
          We are two good friends who share a common passion for
          entrepreneurship and always believed that blockchain technology has
          immense potential to change the world for better. Best way we think is
          to innovate conventional asset investments. We always resonated with
          the problem in real-estate investments and wanted people of every age,
          economic class and demographic to be able to invest in it. We have
          been working day and night and are forunate enough to gather a team of
          passionate peoples who believe in Us and our vision.
        </div>

        <div className="Profiles">
          <div className="Profile">
            <img src="/images/formal-pic.jpg" />
            <p>Rounak Dubey</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_us;
