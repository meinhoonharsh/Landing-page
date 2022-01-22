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
          We aim to democratize real estate investments so that anyone from anywhere <br /> can invest in real estate and leverage it in defi world.
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
        <img src="/images/building.svg" />
      </div>
    </div>
  );
}

export default HeroSection;
