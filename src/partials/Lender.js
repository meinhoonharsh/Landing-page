import React from "react";

export default function VersatileToken() {
  return (
    <>
      <div className="s6">
        <div className="s6-container">
          <div className="s6-image-wrapper">
            <div>
              <img
                src="assets/img/borrow1.png"
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
            <h2 className="h2 is-small-h2">Lenders</h2>
            <p className="p is-s6-p">
              Browse over 150 NFT collections (including CryptoPunks, Bored
              Apes, Art Blocks, Mutant Apes, VeeFriends, Autoglyphs, and most
              other bluechips) and offer loans on the assets you’re happy to
              back. ‍ Best case, you earn a juicy APR. "Worst case", the
              borrower defaults and you walk away with an NFT at a hefty
              discount. Some lenders even specialize in "loan-to-own"
              strategies.
            </p>

            <a href="#" className="filled-button w-button">
              Lend NFT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
