import React from "react";
import Footer from "../partials/Footer";
import HowItWorks from "../partials/HowItWorks";
import Landing from "../partials/Landing";
import Navbar from "../partials/Navbar";

import Seller from "../partials/Seller";
import Buyer from "../partials/Buyer";

import FAQs from "../partials/FAQs";
import Roadmap from "../partials/Roadmap";


export default function Home() {
  return (
    <>
      <div className="page-wrap">
        {/* <Navbar /> */}
        <Landing />
        {/* <ProductSection /> */}
        {/* <ProdSection /> */}
        <HowItWorks />
        {/* <Roadmap /> */}
        <Seller />
        <Buyer />
        {/* <WhyUs /> */}
        {/* <FAQs /> */}
        <Footer />
      </div>
    </>
  );
}
