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
            <span className="heading">Real NFTs</span>
            <span>
              Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet,
              consectet Lorem ipsum dolor sit amet, consectet
            </span>
            <div className="inputcontainer">
              <input
                type="text"
                placeholder="Wallet Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button onClick={submitAddress}>Request Real NFT</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
