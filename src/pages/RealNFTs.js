import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

export default function RealNFTs() {
  return (
    <>
      <div className="page-wrap">
        <Navbar />

        <div className="realnftcontainer">
          <div>
            <h1>Real NFTs</h1>
            <span> Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet </span>
            <div className="inputcontainer">
                <input type="text" />
                <button>Request Real NFT</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
