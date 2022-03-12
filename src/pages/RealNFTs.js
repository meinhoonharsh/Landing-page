import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import "../partials/styles/RealNFTs.scss";

export default function RealNFTs() {
  return (
    <>
      <div className="page-wrap">
        <Navbar />

        <div className="realnftcontainer">
          <div>
            <span className="heading">Real NFTs</span>
            <span>
              Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet,
              consectet Lorem ipsum dolor sit amet, consectet
            </span>
            <div className="inputcontainer">
              <input type="text" placeholder="Wallet Address" />
              <button>Request Real NFT</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
