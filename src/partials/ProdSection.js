import React from "react";
import './styles/ProdSection.scss';

export default function ProdSection() {
  return (
    <>
      <div className="prodsection">
          <div className="sidediv left">
              <h3>Marketplace</h3>
              <span>Choose from a variety of listed NFTs</span>
          </div>
          <div className="centerdiv">
              <h2>upto <span class="gtext">20%</span> IRR</h2>
              <span>Earn from regular rent and price appreciation</span>
          </div>
          <div className="sidediv right">
            <h3>Liquidate</h3>
            <span>Trade anytime in just few clicks</span>
          </div>
      </div>
    </>
  );
}
