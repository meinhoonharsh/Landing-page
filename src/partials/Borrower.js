import React from "react";

export default function VersatileToken() {
  return (
    <>
      <div className="s6">
        <div className="s6-container">
          <div
            data-w-id="649dbab4-e00a-e03a-732f-5ed95dca54ab"
            className="s6-info-container"
          >
            <h2 className="h2 is-small-h2">Borrowers</h2>
            <p className="p is-s6-p">
              List your NFT as collateral and get loan offers from our users.
              Once you accept an offer, you receive wETH or DAI liquidity from
              the lender's wallet into yours. Your NFT gets transferred into a
              double-audited escrow smart contract for the loan duration. Repay
              the loan before it expires, and you get your NFT back. If you
              default, the lender can foreclose and receive your NFT. There are
              no auto-liquidations on NFTfi.
            </p>

            <a href="#" className="filled-button w-button">
              Borrow
            </a>
          </div>
          <div className="s6-image-wrapper">
            <div>
              <img
                src="assets/img/borrow.png"
                className="s3-box-image"
                style={{
                  width: "75%",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
