import React from "react";

export default function VersatileToken() {
  return (
    <>
      <div className="s6">
        <div className="s6-container">
          <div className="s6-image-wrapper">
            <div>
              <img
                src="assets/img/borrow.png"
                className="s3-box-image"
                style={{
                  width: "65%",
                  margin: "auto",
                }}
              />
            </div>
          </div>
          <div
            data-w-id="649dbab4-e00a-e03a-732f-5ed95dca54ab"
            className="s6-info-container"
          >
            <h2 className="h2 is-small-h2">Wanna Buy an expensive NFT? <br/> We got you covered!</h2>
            <p className="p is-s6-p">
              Browse over 100+ NFT collections and offer deals on your favourite NFTs. ‍<br/>
              Pay minimum 30% of listing value of NFT and buy your desired asset.<br/>
              Repay the full amount with interest to claim your NFT.<br/><br/>

              Now you can buy/invest in NFT even if you lack upfront amount.<br/>
              You don't have to collateralize your preowned assets to invest in good NFT opportunities.
            </p>

            {/* <a href="#" className="filled-button w-button">
              Buy Now
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
