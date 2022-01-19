import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./About-us.css";

function About_us() {
  return (
    <>
      <div className="main">
        <div className="Heading">About Us</div>

        <div className="Text">
          <p>
          We are two good friends who share a common passion for
          entrepreneurship and always believed that blockchain technology has
          immense potential to change the world for better. Best way we think is
          to innovate conventional asset investments. We always resonated with
          the problem in real-estate investments and wanted people of every age,
          economic class and demographic to be able to invest in it. We have
          been working day and night and are forunate enough to gather a team of
          passionate peoples who believe in Us and our vision.
          </p>
          <img src="/images/about-us.png" />
        </div>

        <div className="Profiles">
          <div className="Profile">
            <img src="/images/formal-pic.jpg" />
            <p>Rounak Dubey</p>
            <Link to={{ pathname: "https://in.linkedin.com/in/rounak-dubey-800b38159?trk=public_profile_browsemap" }}
            target="_blank">              
              <i class="fab fa-linkedin" />
            </Link>

          </div>
          <div className="Profile">
            <img src="/images/aadarsh.jpeg" />
            <p>Aadarsh Armil</p>
            <Link to={{ pathname: "https://in.linkedin.com/in/aadarsh-armil-7680b0179?trk=public_profile_browsemap"}}
              target="_blank">
              <i class="fab fa-linkedin" />
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_us;
