import React from "react";
import './styles/ProdSection.scss';

export default function ProdSection() {
  return (
    <>
      <div className="prodsection">
          <div className="sidediv left">
              <h3>MarketPlace</h3>
              <span>Choose from a variety of listed NFTs</span>
          </div>
          <div className="centerdiv">
              <h2>upto <span>20%</span> IRR</h2>
              <span>Earn from regular rent and price appreciation</span>
          </div>
          <div className="sidediv right">
            <h3>Regular Returns</h3>
            <span>Earn from regular rent and price appreciation</span>
          </div>
      </div>
    </>
  );
}
