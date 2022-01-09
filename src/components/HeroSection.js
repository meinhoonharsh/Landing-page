import React, { useState } from "react";
import "../App.css";
import "./HeroSection.css";
import ModalVideo from "react-modal-video";
import "./modal-video.scss";
import ModalDialog from "./ModalDialog";

function HeroSection() {
  // declare a new state variable for modal-video open
  const [isOpen, setOpenVideo] = useState(false);

  // declare a new state variable for modal-dialog open
  const [open, setOpenDialog] = useState(false);

  // function to handle modal-dialog open
  const handleOpen = () => {
    setOpenDialog(true);
  };

  // function to handle modal-dialog close
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="hero-container">

      <div className="hero-text">
        {""}
        <h1 className="main-heading">
          {" "}
          Real Estate Ecosystem <br />
          In Decentralized Finance{" "}
        </h1>{" "}
        <p className="sub-heading">
          We choose high yielding Real Estate for tokenization, <br />provide an interface
          for lending, borrowing and swapping tokens.
        </p>{" "}
        <div className="hero-btns">
          <button className="btn" onClick={handleOpen}>
            SIGN UP{" "}
          </button>{" "}
          <ModalDialog open={open} handleClose={handleClose} />
          <React.Fragment>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="zHa-IDl7Na8"
              onClose={() => setOpenVideo(false)}
            />
            <button className="btn" onClick={() => setOpenVideo(true)}>
              {" "}
              HOW IT WORKS!
              <i className="far fa-play-circle" />
            </button>
          </React.Fragment>
        </div>{" "}
      
        
      </div>
      <div className="hero-img">
        <img src="/images/building.svg" style={{width:"300px", height: "300px", float: "right"}}/>
      </div>
    </div>
  );
}

export default HeroSection;
