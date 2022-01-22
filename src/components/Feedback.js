import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Feedback.css";
import database from "./firebase";

import Button from "@material-ui/core/Button";

function Feedback() {
  const [Name, setName] = useState("");

  const [email, setEmail] = useState("");

  const Push = () => {
    database
      .ref("users")
      .push({
        Name: Name,
        Email: email,
      })
      .catch(alert);
  };

  return (
    <div className="Feedback-container">
      <div className="sign-up">
        <form className="sign-up">
          <p>Sign up to stay updated!</p>

          <TextField
            className="Feed-input"
            name="name"
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            className="Feed-input"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button className="Feed-btns" onClick={Push}>
            Sign up
          </Button>
        </form>
      </div>

      <div className="Feedback-container">
        <p className="Feed-text">Please leave your valuable feedback!</p>

        <div className="input-areas">
          <form className="Feed-form">
            <input
              className="Feed-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />

            <input
              className="Feed-input"
              name="msg"
              type="text"
              placeholder="Type your message here!"
              cols="40"
              rows="5"
            />

            <button className="Feed-btns">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Feedback;
