import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <h5 style={{ color: "white" }}>
                The{" "}
                <span style={{ color: "#4EC8CA", margin: "0 5px 0 5px" }}>
                  Ledger
                </span>{" "}
                Company
              </h5>
            </Link>
          </div>
          <small class="website-rights"> The Ledger Company © 2020</small>
          <div class="social-icons">
          
            
            <Link
              class="social-icon-link twitter"
              to={{pathname: "https://twitter.com/brickstox?t=Z79f3Cr44JFjkCEgCgJZGw&s=09"}}
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>

            <Link
              class="social-icon-link twitter"
              to={{pathname: "https://in.linkedin.com/company/the-ledger-company0?trk=public_profile_topcard-current-company"}}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>

            <Link
            class="social-icon-link "
            to={{pathname: "https://discord.gg/rDgkHtfX"}}
              target="_blank"
            >
              <i class="fab fa-discord" />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
