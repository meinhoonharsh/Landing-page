import React, { useState } from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import "../partials/styles/RealNFTs.scss";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uxskemlvoqeojcrhfemq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4c2tlbWx2b3Flb2pjcmhmZW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyODA0MTMsImV4cCI6MTk2Mjg1NjQxM30.h4s3JFQyyUFDF2d_xPQV5BmB0GQr467Zjix_GpHC6Jw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function RealNFTs() {
  const [address, setAddress] = useState("");

  const submitAddress = async () => {
    const { data, error } = await supabase
      .from("Wallet_addresses")
      .insert([{ address }]);

    if (!error) {
      alert("Address Entered Successfully \nSubmitted Address: " + address);
      setAddress("");
    } else {
      alert("Unable to Submit Address, Please Try again Later");
    }
  };
  return (
    <>
      <div className="page-wrap">
        <Navbar />

        <div className="realnftcontainer">
          <div>
            <span className="heading" > #RealNFTs </span>
            <span>
             Do you think we need more NFTs with real world value  <br />
            Take a stand with us to build a community of like-minded people who believe NFTs are more than just memes.
            Let's use web3 as a tool to innovate conventional assets and markets.
            </span>
            <div className="inputcontainer">
              <input
                type="text"
                placeholder="Wallet Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button onClick={submitAddress}>Request Zero NFT</button>
            </div>
          </div>
        </div>

        <div className="zero-nft-container">
          <div className="content">
            <h3 className="gtext">What is Zero NFT?</h3>
            <span>
              {" "}
              Lorem ipsum dolor sit amet, consectet adip dolor sit amet,
              consectet adip{" "}
            </span>
            <span>
              {" "}
              Lorem ipsum dolor sit amet, consectet adip dolor sit amet,
              consectet adip
            </span>
          </div>
          <div className="img-holder">
            <img src="/assets/img/zeronft.png" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
