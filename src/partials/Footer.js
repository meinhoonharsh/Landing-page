import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
         
          <div className="social-container">
            <a
              href="https://twitter.com/Gear_Fi?t=H_B05TiU49QHnzCBkdmGsQ&s=09"
              target="_blank"
              className="social-holder w-inline-block"
            >
              <img
                src="images/Icon-Twitter-Gray.svg"
                loading="lazy"
                alt=""
                className="gray-social"
              />
              <img
                src="images/Icon-Twitter-Green.svg"
                loading="lazy"
                alt=""
                className="green-social"
              />
            </a>
            <a
              href="https://discord.gg/8pYU3yDNAH"
              target="_blank"
              className="social-holder w-inline-block"
            >
              <img
                src="images/Icon-Discord-Gray.svg"
                loading="lazy"
                alt=""
                className="gray-social"
              />
              <img
                src="images/Icon-Discord-Green.svg"
                loading="lazy"
                alt=""
                className="green-social"
              />
            </a>
            <a
              href="https://t.me/GearFi"
              target="_blank"
              className="social-holder w-inline-block"
            >
              <img
                src="images/icon-telegram-green.svg"
                loading="lazy"
                alt=""
                className="gray-social"
              />
              <img
                src="images/icon-telegram-green.svg"
                loading="lazy"
                alt=""
                className="green-social"
              />
            </a>
           
          </div>
        </div>
      </div>
    </>
  );
}
